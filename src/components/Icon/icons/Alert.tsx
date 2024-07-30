import type {IconProperties} from '../types'

const AlertIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M31.643 26.063 18.322 3.313A2.65 2.65 0 0 0 16.012 2c-.9 0-1.8.438-2.368 1.313L.33 26.063C-.638 27.805.64 30 2.692 30h26.643c2.046 0 3.326-2.188 2.308-3.938ZM4.177 27a.5.5 0 0 1-.432-.752l11.78-20.21a.5.5 0 0 1 .863-.002l11.883 20.21a.5.5 0 0 1-.431.754H4.177Zm11.834-5.931a1.965 1.965 0 1 0 .002 3.929 1.965 1.965 0 0 0-.002-3.93ZM14.512 12v6a1.5 1.5 0 1 0 2.998 0v-6a1.5 1.5 0 1 0-2.998 0Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default AlertIcon
