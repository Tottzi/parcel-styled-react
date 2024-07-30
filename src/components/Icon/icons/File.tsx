import {type IconProperties} from '../types'

const FileIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		{...properties}
	>
		<path
			d='M26 28V12h-7a3 3 0 0 1-3-3V2H8c-1.106 0-2 .894-2 2v24c0 1.106.894 2 2 2h16c1.106 0 2-.894 2-2Zm-.031-18a.955.955 0 0 0-.263-.463l-7.244-7.243A.983.983 0 0 0 18 2.03V9c0 .55.45 1 1 1h6.969ZM4 4c0-2.206 1.794-4 4-4h9.756a3 3 0 0 1 2.119.881l7.244 7.238A3 3 0 0 1 28 10.238V28c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4V4Z'
			fill={color}
		/>
		{children}
	</svg>
)
export default FileIcon
