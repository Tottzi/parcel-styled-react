import type {IconProperties} from '../types'

const ExclamationMarkIcon = ({
	color,
	fill,
	children,
	...properties
}: IconProperties) => (
	<svg
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M13.017 17.2c0 1.528 1.34 2.766 2.995 2.766 1.654 0 2.995-1.238 2.995-2.765V2.765C19.007 1.238 17.666 0 16.012 0s-2.995 1.238-2.995 2.765zM16 32a3.993 3.993 0 1 0 0-7.986A3.993 3.993 0 0 0 16 32'
			fill={color}
		/>
		{children}
	</svg>
)

export default ExclamationMarkIcon
