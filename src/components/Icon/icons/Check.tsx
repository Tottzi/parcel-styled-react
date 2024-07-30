import type {IconProperties} from '../types'

const CheckIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M31.24 8.763a2.557 2.557 0 0 0-3.591-3.64l-14.25 14.04a4.336 4.336 0 0 1-6.085.002l-2.963-2.916a2.557 2.557 0 0 0-3.59 3.641l6.551 6.472a4.336 4.336 0 0 0 6.093 0L31.239 8.764Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default CheckIcon
