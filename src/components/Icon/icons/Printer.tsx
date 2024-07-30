import type {IconProperties} from '../types'

const PrinterIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M6.944 3h15.881L25 5.121V10h3V5.121A3 3 0 0 0 27.121 3L25 .879A2.997 2.997 0 0 0 22.881 0H6.944C5.344 0 4 1.343 4 2.999V10h3zM27.5 12h-23A4.505 4.505 0 0 0 0 16.5v7A1.5 1.5 0 0 0 1.5 25H5v5a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-5h3.5a1.5 1.5 0 0 0 1.5-1.5v-7c0-2.481-2.019-4.5-4.5-4.5zM24 29H8v-6h16zm5-7h-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2H3v-5.5c0-.827.673-1.5 1.5-1.5h23c.827 0 1.5.673 1.5 1.5z'
			fill={color}
		/>
		{children}
	</svg>
)

export default PrinterIcon
