import type {IconProperties} from '../types'

const BoltCircleIcon = ({
	color,
	fill,
	children,
	...properties
}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
			fill={fill}
		/>
		<path
			d='M19.918 9.394a1 1 0 0 0-1.578-1.147l-7.998 7a1.001 1.001 0 0 0 .66 1.753h3.483l-2.403 5.606a1 1 0 0 0 1.578 1.147l7.998-7a1 1 0 0 0 .278-1.103 1 1 0 0 0-.937-.647h-3.484z'
			fill={color}
		/>
		{children}
	</svg>
)

export default BoltCircleIcon
