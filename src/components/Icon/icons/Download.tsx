import type {IconProperties} from '../types'

const DownloadIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M9.137 12 16 18.875 22.863 12H19.5c-.831 0-1.5-.669-1.5-1.5V3h-4v7.5c0 .831-.669 1.5-1.5 1.5H9.137ZM16 22a2.706 2.706 0 0 1-1.912-.794L6.85 13.95A2.9 2.9 0 0 1 8.9 9H11V3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6h2.1a2.9 2.9 0 0 1 2.05 4.95l-7.237 7.256A2.706 2.706 0 0 1 16 22Zm-11-.5v5A2.5 2.5 0 0 0 7.5 29h17a2.5 2.5 0 0 0 2.5-2.5v-5c0-.831.669-1.5 1.5-1.5s1.5.669 1.5 1.5v5a5.5 5.5 0 0 1-5.5 5.5h-17A5.5 5.5 0 0 1 2 26.5v-5c0-.831.669-1.5 1.5-1.5s1.5.669 1.5 1.5Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default DownloadIcon
