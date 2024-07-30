import type {IconProperties} from '../types'

const BoltIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M23.836 2.787A2 2 0 0 0 20.68.493l-15.996 14a2 2 0 0 0-.556 2.207A2.02 2.02 0 0 0 6.002 18h6.967L8.164 29.212a2 2 0 0 0 3.156 2.294l15.996-14a2 2 0 0 0 .556-2.206 2 2 0 0 0-1.874-1.294H19.03z'
			fill={color}
		/>
		{children}
	</svg>
)

export default BoltIcon
