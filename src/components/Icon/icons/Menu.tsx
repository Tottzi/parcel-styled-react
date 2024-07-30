import type {IconProperties} from '../types'

const MenuIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M0 5.784C0 4.631 1.021 3.7 2.286 3.7h27.428C30.979 3.7 32 4.631 32 5.784c0 1.152-1.021 2.082-2.286 2.082H2.286C1.021 7.866 0 6.936 0 5.784zM32 26.2c0 1.152-1.021 2.084-2.286 2.084H2.286C1.021 28.284 0 27.352 0 26.2s1.021-2.084 2.286-2.084h27.428c1.265 0 2.286.932 2.286 2.084zM2.286 14.7C1.573 14.7 1 15.273 1 15.986c0 .712.573 1.285 1.286 1.285h27.428c.713 0 1.286-.573 1.286-1.285 0-.713-.573-1.286-1.286-1.286zM0 15.986A2.283 2.283 0 0 1 2.286 13.7h27.428A2.283 2.283 0 0 1 32 15.986a2.283 2.283 0 0 1-2.286 2.285H2.286A2.283 2.283 0 0 1 0 15.986z'
			fill={color}
		/>
		{children}
	</svg>
)

export default MenuIcon