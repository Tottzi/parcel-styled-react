import {Fragment} from 'react'
import {css} from 'styled-components'
import {AriaText} from '../AriaText'
import {buttonResetStyles} from '../theme'
import {Icon} from './Icon'
import {type IconComponentProperties} from './types'

export const IconButton = ({
	size,
	inputCss,
	disabled,
	ariaText,
	...rest
}: IconComponentProperties & {disabled?: boolean; ariaText?: string}) => (
	<Fragment>
		<button
			disabled={disabled}
			type='button'
			css={[
				buttonResetStyles,
				css`
					width: ${size}px;
					height: ${size}px;
				`,
				inputCss,
			]}
		>
			<Icon size={size} {...rest} />
		</button>
		<AriaText>{ariaText}</AriaText>
	</Fragment>
)
