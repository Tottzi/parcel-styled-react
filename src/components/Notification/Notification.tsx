import type {ProviderProps} from 'react'
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import {Portal} from '../Portal'
import {useRevealer, useTrueKeyPress} from '../../hooks'
import {NotificationSnackBar} from './NotificationSnackBar'
import {SliderNotification} from './SliderNotification'
import type {NotificationProperties, NotificationType} from './types'
import {NotificationVariant} from './types'
import React from 'react'

const zIndex = 5000

export const Notification = (
	properties: Omit<
		NotificationProperties,
		'animationDuration' | 'isRevealing' | 'isConcealing'
	>
) => {
	const {
		id,
		variant = NotificationVariant.default,
		lifetime = 2500,
		zIndex,
		isClosing,
		onClose,
	} = properties

	const animationDuration = 370
	const elementReference = useRef<HTMLDivElement>(null)
	const [isHovered, setIsHovered] = useState(false)

	const {isRevealing, isRevealed, isConcealing, isConcealed, onConceal} =
		useRevealer({
			animationDuration,
			lifetime,
			canConceal: !isHovered,
		})

	const handleClose = useCallback(async () => {
		if (id) {
			await onConceal()
			onClose(id)
		}
	}, [id, onConceal, onClose])

	useEffect(() => {
		if (isClosing) {
			void handleClose()
		}
	}, [isClosing, handleClose])

	useEffect(() => {
		if (id && isConcealed) {
			onClose(id)
		}
	}, [isConcealed, onClose, id])

	useEffect(() => {
		const listener = (event: PointerEvent) => {
			if (elementReference.current?.contains(event.target as Node)) {
				setIsHovered(true)
			} else {
				setIsHovered(false)
			}
		}

		window.addEventListener('pointermove', listener)

		return () => {
			window.removeEventListener('pointermove', listener)
		}
	}, [])

	if (variant) {
		const notificationProperties = {
			...properties,
			animationDuration,
			isRevealing,
			isRevealed,
			isConcealing,
			onClose: handleClose,
		}

		switch (variant) {
			case NotificationVariant.slider: {
				return (
					<SliderNotification
						ref={elementReference}
						{...notificationProperties}
						zIndex={zIndex}
					/>
				)
			}

			case NotificationVariant.default:
			case NotificationVariant.error:
			case NotificationVariant.success:
			case NotificationVariant.info:
			case NotificationVariant.warning: {
				return (
					<NotificationSnackBar
						ref={elementReference}
						{...notificationProperties}
						zIndex={zIndex}
					/>
				)
			}
		}
	}

	return null
}

type NotificationProviderProperties = {
	createNotification?: (notification: NotificationType) => number
	createNotifications?: (notifications: NotificationType[]) => number[]
}

const NotificationContext = createContext<NotificationProviderProperties>({})
const {Provider, Consumer: NotificationConsumer} = NotificationContext

export {NotificationContext, NotificationConsumer}
export const NotificationProvider = (
	properties: Partial<ProviderProps<NotificationProviderProperties>>
) => {
	const id = useRef<number>(0)
	const [notifications, setNotifications] = useState<NotificationType[]>([])

	const [currentNotification, setCurrentNotification] =
		useState<NotificationType>()

	const addNotification = useCallback((notification: NotificationType) => {
		id.current += 1
		const notificationId = id.current

		setNotifications((previousState) => [
			...previousState,
			{...notification, id: notificationId, isClosing: false},
		])

		return notificationId
	}, [])

	const createNotification = useCallback(
		(notification: NotificationType) => addNotification(notification),
		[addNotification]
	)

	const createNotifications = useCallback(
		(notifications: NotificationType[]) =>
			notifications.map((notification) => addNotification(notification)),
		[addNotification]
	)

	const handleClosing = useCallback((id: number) => {
		setNotifications((previousState) => {
			const notification = previousState.find(
				(notification) => id === notification.id
			)

			if (notification) {
				notification.isClosing = true
			}

			return [...previousState]
		})
	}, [])

	const handleClose = useCallback(
		async (id: number) => {
			const notification = notifications.find(
				(notification) => id === notification.id
			)

			if (notification?.onClose) {
				notification.onClose()
			}

			setNotifications((previousState) =>
				previousState.filter((notification) => id !== notification.id)
			)
		},
		[notifications]
	)

	const notificationsLoop = useCallback(async () => {
		if (notifications.length === 1) {
			setCurrentNotification(notifications[0])
			return
		}

		for (const notification of notifications) {
			// eslint-disable-next-line no-await-in-loop
			await new Promise((resolve) => {
				setTimeout(() => {
					setCurrentNotification(notification)
					void resolve
				}, 500)
			})
		}
	}, [notifications])

	useEffect(() => {
		const [firstNotification] = notifications

		if (!firstNotification) {
			return
		}

		switch (firstNotification.variant) {
			case NotificationVariant.slider: {
				setCurrentNotification(notifications[0])
				break
			}

			default: {
				setCurrentNotification(undefined)
				void notificationsLoop()
				break
			}
		}
	}, [notificationsLoop, notifications])

	const notificationsLength = useMemo(
		() => notifications.length,
		[notifications]
	)

	const keys = useMemo(() => ['enter', 'escape'], [])

	const handleKeyPress = useCallback(
		(event: KeyboardEvent) => {
			if (notificationsLength > 0) {
				event.preventDefault()
				event.stopPropagation()
				event.stopImmediatePropagation()
				handleClosing(notifications[0].id ?? 0)
			}
		},
		[handleClosing, notificationsLength, notifications]
	)

	useTrueKeyPress(keys, handleKeyPress)

	useEffect(() => {
		if (notificationsLength === 0) {
			id.current = 0
		}
	}, [notificationsLength])

	const {children, ...rest} = properties

	return (
		<Provider {...rest} value={{createNotification, createNotifications}}>
			{children}

			<Portal id='notification-portal'>
				{currentNotification?.id
					? notifications.map((notification, index) => (
							<Notification
								key={notification?.id}
								{...currentNotification}
								level={notificationsLength - index - 1}
								zIndex={zIndex + (currentNotification?.id ?? 0)}
								onClose={handleClose}
							/>
						))
					: null}
			</Portal>
		</Provider>
	)
}

const useNotifications = () => useContext(NotificationContext)
export const useCreateNotification = () => {
	const {createNotification} = useNotifications()

	return createNotification ?? (() => undefined)
}

export const useCreateNotifications = () => {
	const {createNotifications} = useNotifications()

	return createNotifications ?? (() => undefined)
}
