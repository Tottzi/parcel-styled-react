import type {IconProperties} from '../types'

const TableIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		width={32}
		height={32}
		viewBox='0 0 32 32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M12 5v5.5h17V6c0-.55-.45-1-1-1H12ZM9 5H4c-.55 0-1 .45-1 1v4.5h6V5Zm-6 8.5v5h6v-5H3Zm0 8V26c0 .55.45 1 1 1h5v-5.5H3Zm9 5.5h16c.55 0 1-.45 1-1v-4.5H12V27Zm17-8.5v-5H12v5h17ZM0 6c0-2.206 1.794-4 4-4h24c2.206 0 4 1.794 4 4v20c0 2.206-1.794 4-4 4H4c-2.206 0-4-1.794-4-4V6Z'
			fill={color}
		/>
		{children}
	</svg>
)
export default TableIcon
