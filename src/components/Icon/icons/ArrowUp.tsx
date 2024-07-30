import type {IconProperties} from '../types'

const ArrowUpIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M2.317 13.133 14.717.535A1.789 1.789 0 0 1 16 0c.487 0 .948.192 1.283.532l12.4 12.598a1.683 1.683 0 0 1-.06 2.429 1.809 1.809 0 0 1-2.505-.058L17.77 6.004v24.343c0 .948-.793 1.653-1.705 1.653-.911 0-1.838-.701-1.838-1.653V6.004l-9.344 9.498a1.817 1.817 0 0 1-2.507.057 1.68 1.68 0 0 1-.06-2.426Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default ArrowUpIcon
