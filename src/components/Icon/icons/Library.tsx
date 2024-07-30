import type {IconProperties} from '../types'

const LibraryIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<g fill={color}>
			<path d='M5.5 2C4.669 2 4 2.672 4 3.5v24.998c0 .832.669 1.5 1.5 1.5s1.5-.668 1.5-1.5V3.5A1.5 1.5 0 0 0 5.5 2zm15.781 9.096a1.5 1.5 0 0 0-.906 1.919l4.713 15.99a1.5 1.5 0 1 0 2.823-1.013L23.2 12a1.501 1.501 0 0 0-1.92-.903z' />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M14.228 5.967a1.475 1.475 0 1 0-2.893.58l4.728 22.267c.16.8.936 1.317 1.736 1.157.8-.16 1.317-.936 1.157-1.736zm3.748 22.468L13.248 6.163a.475.475 0 1 0-.934.183l4.73 22.271c.051.26.3.425.559.373a.474.474 0 0 0 .373-.555z'
			/>
		</g>
		{children}
	</svg>
)

export default LibraryIcon
