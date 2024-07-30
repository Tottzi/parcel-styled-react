import type {IconProperties} from '../types'

const PaperPlaneCircleIcon = ({
	color,
	children,
	fill,
	...properties
}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
			fill={color}
		/>
		<path
			d='M7.23 15.819c-.712.406-.646 1.49.113 1.805l4.422 1.844v3.255a1.029 1.029 0 0 0 1.821.659l1.954-2.342 3.904 1.626a1.017 1.017 0 0 0 1.384-.778l2.016-13.11a1.006 1.006 0 0 0-.425-.983 1.012 1.012 0 0 0-1.072-.044L7.23 15.82Zm1.642.803 10.761-6.148-6.92 7.733.038.032-3.88-1.617Zm10.56 4.402-5.25-2.19 6.746-7.54-1.496 9.73Z'
			fill={fill ?? '#fff'}
		/>
		{children}
	</svg>
)

export default PaperPlaneCircleIcon
