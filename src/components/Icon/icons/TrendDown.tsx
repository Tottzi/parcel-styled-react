import type {IconProperties} from '../types'

const TrendDownIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='m23.596 24.36 2.355-2.354-7.979-7.979-5.379 5.38a1.63 1.63 0 0 1-2.305 0L.478 9.58a1.63 1.63 0 0 1 0-2.305 1.63 1.63 0 0 1 2.306 0l8.648 8.665 5.38-5.379a1.63 1.63 0 0 1 2.305 0l9.139 9.123 2.354-2.354c.507-.507 1.39-.147 1.39.572v7.014a.81.81 0 0 1-.817.818h-7.014c-.72.016-1.08-.867-.573-1.374'
			fill={color}
		/>
		{children}
	</svg>
)

export default TrendDownIcon
