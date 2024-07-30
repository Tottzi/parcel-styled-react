import type {IconProperties} from '../types'

const ArrowDownIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='m2.317 18.867 12.4 12.598A1.79 1.79 0 0 0 16 32c.487 0 .948-.192 1.283-.532l12.4-12.598a1.683 1.683 0 0 0-.06-2.429 1.809 1.809 0 0 0-2.505.058l-9.347 9.497V1.653C17.771.705 16.978 0 16.066 0c-.911 0-1.838.701-1.838 1.653v24.343l-9.344-9.498a1.817 1.817 0 0 0-2.507-.057 1.68 1.68 0 0 0-.06 2.426Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default ArrowDownIcon
