import type {ReactNode} from 'react'
import type {IconType} from '../Icon'

export enum NotificationVariant {
	default = 'default',
	slider = 'slider',
	error = 'error',
	success = 'success',
	warning = 'warning',
	info = 'info',
}

export type NotificationType = {
	/** Notification ID. Cannot be set manually, but is given automatically */
	id?: number
	children?: ReactNode
	title?: string
	message?: string
	iconLeft?: IconType
	textLeft?: string
	iconRight?: IconType
	isCloseButton?: boolean
	textRight?: string
	variant?: NotificationVariant
	/** In milliseconds, how long the notification stays visible */
	lifetime?: number
	isClosing?: boolean
	isAction?: boolean
	onClose?: () => void
}

export type NotificationProperties = Omit<NotificationType, 'onClose'> & {
	level?: number
	zIndex?: number
	animationDuration: number
	isRevealing?: boolean
	isRevealed?: boolean
	isConcealing?: boolean
	isCloseButton?: boolean
	onClose: (id: number) => void
}
