import type {IconProperties} from '../types'

const RoundedMinusIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='m0 16c0-1.6569 1.34315-3 3-3h26c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3h-26c-1.65685 0-3-1.3431-3-3z'
			fill={color}
		/>

		{children}
	</svg>
)

export default RoundedMinusIcon
