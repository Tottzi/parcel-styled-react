import type {IconProperties} from '../types'

const HistoryIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M3 6.669V3.5C3 2.669 2.331 2 1.5 2S0 2.669 0 3.5v7c0 .831.669 1.5 1.5 1.5h7c.831 0 1.5-.669 1.5-1.5S9.331 9 8.5 9H5.044C7.356 5.388 11.4 3 16 3c7.181 0 13 5.819 13 13s-5.819 13-13 13c-2.656 0-5.119-.794-7.169-2.156a1.507 1.507 0 0 0-2.081.418 1.5 1.5 0 0 0 .419 2.082A15.9 15.9 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0C10.644 0 5.9 2.631 3 6.669M16 8c-.831 0-1.5.669-1.5 1.5V16c0 .4.156.781.438 1.063l4.5 4.5a1.5 1.5 0 0 0 2.119-2.119l-4.063-4.063V9.5c0-.831-.669-1.5-1.5-1.5z'
			fill={color}
		/>
		{children}
	</svg>
)

export default HistoryIcon
