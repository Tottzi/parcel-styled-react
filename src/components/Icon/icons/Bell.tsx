import type {IconProperties} from '../types'

const BellIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		{...properties}
	>
		<path
			d='M15.999 0c-1.107 0-2 .894-2 2v1.2c-4.563.925-8 4.962-8 9.8v1.588c0 2.837-.97 5.593-2.738 7.806l-.931 1.169A1.5 1.5 0 0 0 3.499 26h25a1.5 1.5 0 0 0 1.168-2.439l-.93-1.162a12.54 12.54 0 0 1-2.738-7.812V13c0-4.837-3.438-8.875-8-9.8V2c0-1.106-.894-2-2-2m0 6c3.868 0 7 3.131 7 7v1.588c0 2.993.868 5.912 2.48 8.412H6.518A15.5 15.5 0 0 0 9 14.588V13c0-3.869 3.13-7 7-7m4 22h-8a4 4 0 0 0 1.168 2.831A4 4 0 0 0 16 32a4 4 0 0 0 2.83-1.169A4 4 0 0 0 20 28'
			fill={color}
		/>
		<path
			d='M15.999 6c3.868 0 7 3.131 7 7v1.588c0 2.993.868 5.912 2.48 8.412H6.518A15.5 15.5 0 0 0 9 14.588V13c0-3.869 3.13-7 7-7'
			fill={color}
		/>
		{children}
	</svg>
)

export default BellIcon
