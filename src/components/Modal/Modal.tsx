import FocusTrap from 'focus-trap-react'
import type {ForwardedRef, ProviderProps} from 'react'
import {
	createContext,
	forwardRef,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import {css} from 'styled-components'
import {Portal} from '../Portal'
import {useRevealer, useTrueKeyPress} from '../../hooks'
import {DefaultModal} from './DefaultModal'
import {type ModalProperties, type ModalType, ModalVariant} from './types'

const zIndex = 4000
const animationDuration = 370

const Modal = forwardRef(
	(
		properties: Omit<
			ModalProperties,
			'animationDuration' | 'isRevealing' | 'isConcealing'
		>,
		reference: ForwardedRef<HTMLDivElement>
	) => {
		const {
			id,
			variant,
			isCancelling,
			isConfirming,
			isClosing,
			forceDecision,
			onOpen,
			onCancel,
			onConfirm,
			onClose,
		} = properties

		const {isRevealing, isRevealed, isConcealing, onConceal} = useRevealer({
			animationDuration,
		})

		const handleOpen = useCallback(() => {
			if (id && onOpen) {
				onOpen(id)
			}
		}, [id, onOpen])

		const handleCancel = useCallback(async () => {
			if (id) {
				await onConceal()
				onCancel(id)
			}
		}, [id, onCancel, onConceal])

		const handleConfirm = useCallback(
			async (data?: string) => {
				if (id) {
					await onConceal()
					onConfirm(id, data)
				}
			},
			[id, onConfirm, onConceal]
		)

		const handleClose = useCallback(async () => {
			if (id && !forceDecision) {
				await onConceal()
				onClose(id)
			}
		}, [id, onClose, forceDecision, onConceal])

		useEffect(() => {
			if (isConfirming && !isCancelling && !isClosing) {
				void handleConfirm()
			}
		}, [isConfirming, isCancelling, isClosing, handleConfirm])

		useEffect(() => {
			if (isCancelling && !isConfirming && !isClosing) {
				void handleCancel()
			}
		}, [isCancelling, isConfirming, isClosing, handleCancel])

		useEffect(() => {
			if (isClosing && !isConfirming && !isCancelling) {
				void handleClose()
			}
		}, [isClosing, isConfirming, isCancelling, handleClose])

		let modal

		if (variant) {
			const modalProperties = {
				...properties,
				animationDuration,
				isRevealing,
				isRevealed,
				isConcealing,
				onOpen: handleOpen,
				onCancel: handleCancel,
				onConfirm: handleConfirm,
				onClose: handleClose,
			}

			switch (variant) {
				case ModalVariant.error:
				case ModalVariant.success:
				case ModalVariant.warning:
				case ModalVariant.info: {
					modal = <DefaultModal {...modalProperties} />
					break
				}
			}
		}

		if (modal) {
			return (
				<div
					ref={reference}
					css={css`
						position: relative;
						z-index: ${zIndex};
					`}
				>
					{modal}
				</div>
			)
		}

		return null
	}
)

type ModalResult = 'confirmed' | 'cancelled' | 'closed' | 'undefined'
type ModalProviderProperties = {
	createModal?: (modal: ModalType) => Promise<ModalResult>
}

const ModalContext = createContext<ModalProviderProperties>({})
const {Provider, Consumer: ModalConsumer} = ModalContext

export {ModalContext, ModalConsumer}
export const ModalProvider = (
	properties: Partial<ProviderProps<ModalProviderProperties>>
) => {
	const id = useRef(0)
	const [modals, setModals] = useState<ModalType[]>([])

	const addModal = useCallback((modal: ModalType) => {
		setModals((previousState) => {
			id.current += 1
			const modalId = id.current

			return [...previousState, {id: modalId, ...modal}]
		})
	}, [])

	const createModal = useCallback(
		async (modal: ModalType): Promise<ModalResult> =>
			new Promise((resolve, reject) => {
				addModal({
					...modal,
					onCancel() {
						if (modal.onCancel) {
							modal.onCancel()
						}

						reject(new Error('cancelled'))
					},
					onConfirm(data?: string) {
						if (modal.onConfirm) {
							modal.onConfirm(data)
						}

						resolve('confirmed')
					},
					onClose() {
						if (modal.onClose) {
							modal.onClose()
						}

						reject(new Error('closed'))
					},
				})
			}),
		[addModal]
	)

	const handleOpen = useCallback(
		async (id: number) => {
			const modal = modals.find((modal) => id === modal.id)

			if (modal?.onOpen) {
				modal.onOpen()
			}
		},
		[modals]
	)

	const handleConfirm = useCallback(
		async (id: number, data?: string) => {
			const modal = modals.find((modal) => id === modal.id)

			if (modal?.onConfirm) {
				modal.onConfirm(data)
			}

			setModals((previousState) =>
				previousState.filter((modal) => id !== modal.id)
			)
		},
		[modals]
	)

	const handleCancel = useCallback(
		async (id: number) => {
			const modal = modals.find((modal) => id === modal.id)

			if (modal?.onCancel) {
				modal.onCancel()
			}

			setModals((previousState) =>
				previousState.filter((modal) => id !== modal.id)
			)
		},
		[modals]
	)

	const handleClosing = useCallback((id: number) => {
		setModals((previousState) => {
			const modal = previousState.find((modal) => id === modal.id)

			if (modal) {
				modal.isClosing = true
			}

			return [...previousState]
		})
	}, [])

	const handleClose = useCallback(
		async (id: number) => {
			const modal = modals.find((modal) => id === modal.id)

			if (modal?.onClose) {
				modal.onClose()
			}

			setModals((previousState) =>
				previousState.filter((modal) => id !== modal.id)
			)
		},
		[modals]
	)

	const [currentModal] = modals
	const modalsLength = useMemo(() => modals.length, [modals])
	const keys = useMemo(() => ['escape'], [])

	const handleKeyPress = useCallback(
		(event: KeyboardEvent) => {
			if (currentModal && !currentModal?.forceDecision && currentModal.id) {
				event.preventDefault()
				event.stopPropagation()
				event.stopImmediatePropagation()
				handleClosing(currentModal.id)
			}
		},
		[currentModal, handleClosing]
	)

	useTrueKeyPress(keys, handleKeyPress)
	const {children, ...rest} = properties

	useEffect(() => {
		if (modalsLength === 0) {
			id.current = 0
		}
	}, [modalsLength])

	return (
		<Provider {...rest} value={{createModal}}>
			{children}

			{currentModal ? (
				<Portal id='modal-portal' zIndex={zIndex}>
					<FocusTrap>
						<Modal
							key={currentModal.id}
							{...currentModal}
							onOpen={handleOpen}
							onCancel={handleCancel}
							onConfirm={handleConfirm}
							onClose={handleClose}
						/>
					</FocusTrap>
				</Portal>
			) : null}
		</Provider>
	)
}

export const useModals = () => useContext(ModalContext)
export const useCreateModal = () => {
	const {createModal} = useModals()

	return createModal ?? (async () => 'undefined')
}
