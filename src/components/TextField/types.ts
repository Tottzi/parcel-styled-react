import {type ChangeEvent, type HTMLProps, type ReactNode} from 'react'
import {type CssFunction} from '../../styled.d'

export type TextFieldProperties = {
	label: string
	type?: string
	floatingLabel?: boolean
	listInput?: boolean
	value: string
	error?: Error
	disabled?: boolean
	maxLength?: number
	minRows?: number
	maxRows?: number
	shrinksOnBlur?: boolean
	inputCss?: CssFunction
	inputFieldCss?: CssFunction
	isRequired?: boolean
	isLocked?: boolean
	childrenLeft?: ReactNode
	placeholder?: string
	onChange: (value: string) => void
	onBlur?: () => void
	onFocus?: () => void
	onKeyDown?: (
		event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void
}

type HtmlTextInputProperties = HTMLProps<HTMLInputElement> &
	HTMLProps<HTMLTextAreaElement>

export type InputFieldProperties = Omit<
	HtmlTextInputProperties,
	'value' | 'onChange' | 'onKeyDown'
> &
	Omit<TextFieldProperties, 'label' | 'floatingLabel' | 'onChange'> & {
		onChange: (
			event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
		) => void
		onKeyDown: (
			event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
		) => void
		$inputfieldid?: string
	}
