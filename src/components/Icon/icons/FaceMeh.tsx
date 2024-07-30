import type {IconProperties} from '../types'

const FaceMehIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M29 16a13 13 0 1 1-26 0 13 13 0 0 1 26 0M16 0a16 16 0 1 0 0 32 16 16 0 0 0 0-32m-4.975 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12-2a2 2 0 1 0-4 0 2 2 0 0 0 4 0M11.5 20.5c-.831 0-1.5.669-1.5 1.5s.669 1.5 1.5 1.5h9c.831 0 1.5-.669 1.5-1.5s-.669-1.5-1.5-1.5z'
			fill={color}
		/>
		{children}
	</svg>
)

export default FaceMehIcon
