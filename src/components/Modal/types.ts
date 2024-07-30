import {type IconType} from '../Icon'

export enum ModalVariant {
	error = 'error',
	success = 'success',
	warning = 'warning',
	info = 'info',
}

export type ModalType = {
	/** Modal ID. Cannot be set manually, but is given automatically */
	id?: number
	title?: string
	titleIcon?: IconType
	message?: string
	variant: ModalVariant
	cancelLabel?: string
	confirmLabel?: string
	isCancelling?: boolean
	isConfirming?: boolean
	isClosing?: boolean
	/** Enables or disables the cancel button */
	hasCancel?: boolean
	/** Disables closing without pressing an action */
	forceDecision?: boolean
	/** Modal contents below the title and message, above the buttons */
	/* eslint-disable-next-line @typescript-eslint/naming-convention */
	Contents?: () => JSX.Element
	onOpen?: () => void
	onCancel?: () => void
	onConfirm?: (value?: string) => void
	onClose?: () => void
}

export type ModalProperties = Omit<
	ModalType,
	'onOpen' | 'onCancel' | 'onConfirm' | 'onClose'
> & {
	animationDuration: number
	isRevealing?: boolean
	isRevealed?: boolean
	isConcealing?: boolean
	isClosing?: boolean
	onOpen: (id: number) => void
	onCancel: (id: number) => void
	onConfirm: (id: number, data?: string) => void
	onClose: (id: number) => void
}

export type ModalVariantProperties = Omit<
	ModalProperties,
	'onOpen' | 'onCancel' | 'onConfirm' | 'onClose'
> & {
	onOpen: () => void
	onCancel: () => void
	onConfirm: (value?: string) => void
	onClose: () => void
}
