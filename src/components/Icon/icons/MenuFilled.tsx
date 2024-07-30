import type {IconProperties} from '../types'

const MenuFilledIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M0 5.758C0 4.625 1.021 3.71 2.286 3.71h27.428C30.98 3.71 32 4.625 32 5.758s-1.021 2.049-2.286 2.049H2.286C1.02 7.807 0 6.89 0 5.758ZM0 16c0-1.133 1.021-2.048 2.286-2.048h27.428C30.98 13.952 32 14.867 32 16s-1.021 2.048-2.286 2.048H2.286C1.02 18.048 0 17.133 0 16Zm32 10.242c0 1.133-1.021 2.048-2.286 2.048H2.286C1.02 28.29 0 27.375 0 26.242s1.021-2.049 2.286-2.049h27.428c1.265 0 2.286.916 2.286 2.049Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default MenuFilledIcon
