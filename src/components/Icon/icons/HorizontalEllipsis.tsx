import type {IconProperties} from '../types'

const HorizontalEllipsisIcon = ({
	color,
	children,
	...properties
}: IconProperties) => (
	<svg
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M7 16c0 .966-.342 1.791-1.025 2.475A3.372 3.372 0 0 1 3.5 19.499a3.372 3.372 0 0 1-2.475-1.024A3.372 3.372 0 0 1 0 16c0-.967.342-1.791 1.025-2.475A3.372 3.372 0 0 1 3.5 12.5c.967 0 1.792.342 2.475 1.025A3.372 3.372 0 0 1 7 16Zm12.5 0c0 .966-.342 1.791-1.025 2.475A3.372 3.372 0 0 1 16 19.499a3.372 3.372 0 0 1-2.475-1.024A3.372 3.372 0 0 1 12.5 16c0-.967.342-1.791 1.025-2.475A3.372 3.372 0 0 1 16 12.5c.967 0 1.792.342 2.475 1.025A3.372 3.372 0 0 1 19.5 16ZM32 16c0 .966-.342 1.791-1.025 2.475a3.372 3.372 0 0 1-2.475 1.024 3.372 3.372 0 0 1-2.475-1.024A3.372 3.372 0 0 1 25 16c0-.967.342-1.791 1.025-2.475A3.372 3.372 0 0 1 28.5 12.5c.967 0 1.792.342 2.475 1.025A3.372 3.372 0 0 1 32 16Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default HorizontalEllipsisIcon
