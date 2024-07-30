import type {IconProperties} from '../types'

const AlertFilledIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M16 2c.887 0 1.706.469 2.156 1.238l13.5 23c.456.775.456 1.73.012 2.506A2.505 2.505 0 0 1 29.5 30h-27a2.505 2.505 0 0 1-2.17-1.256 2.51 2.51 0 0 1 .013-2.506l13.5-23A2.495 2.495 0 0 1 16 2zm0 8c-.832 0-1.5.669-1.5 1.5v7c0 .831.668 1.5 1.5 1.5.83 0 1.5-.669 1.5-1.5v-7c0-.831-.67-1.5-1.5-1.5zm2 14c0-1.106-.894-2-2-2-1.107 0-2 .894-2 2s.893 2 2 2c1.106 0 2-.894 2-2z'
			fill={color ?? '#2C2C36'}
		/>
		{children}
	</svg>
)

export default AlertFilledIcon
