import type {IconProperties} from '../types'

const RoundedPlusIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='m9.99924 19.0004c1.65686 0 2.99996 1.3431 2.99996 3v6.9996c0 1.6569 1.3432 3 3 3 1.6569 0 3-1.3431 3-3v-6.9996c0-1.6569 1.3432-3 3-3h7.0008c1.6569 0 3-1.3432 3-3 0-1.6569-1.3431-3-3-3h-7.0008c-1.6568 0-3-1.3432-3-3v-7.0004c0-1.65685-1.3431-3.00000007-3-3-1.6568.00000007-3 1.34315-3 3v7.0004c0 1.6568-1.3431 3-2.99996 3h-6.99924c-1.65685 0-3 1.3431-3 3 0 1.6568 1.34315 3 3 3z'
			fill={color}
		/>

		{children}
	</svg>
)

export default RoundedPlusIcon
