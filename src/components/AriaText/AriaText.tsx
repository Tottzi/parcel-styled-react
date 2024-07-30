import type {ReactNode} from 'react'
import {css} from 'styled-components'

export type AriaTextProperties = {
	children: ReactNode
}

export const AriaText = ({children}: AriaTextProperties) => (
	<span
		css={css`
			width: 1px;
			height: 1px;
			white-space: nowrap;
			padding: 0;
			margin: -1px;
			border: 0;
			position: absolute;
			overflow: hidden;
			clip: rect(0 0 0 0);
			clip: rect(0, 0, 0, 0);
			word-wrap: normal;
		`}
	>
		{children}
	</span>
)
