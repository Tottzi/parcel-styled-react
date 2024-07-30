import type {IconProperties} from '../types'

const InfoIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='32'
		height='32'
		fill='none'
		viewBox='0 0 32 32'
		{...properties}
	>
		<path
			fill={color}
			d='M13.214 11.89V32h5.57V11.89h-5.57Zm-.548-8.5c0 1.858 1.507 3.39 3.333 3.39 1.827 0 3.334-1.532 3.334-3.39 0-1.857-1.507-3.39-3.334-3.39-1.826 0-3.333 1.533-3.333 3.39Z'
		/>
		{children}
	</svg>
)

export default InfoIcon
