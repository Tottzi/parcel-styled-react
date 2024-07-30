import type {IconProperties} from '../types'

const InfoCircleIcon = ({
	color,
	children,
	fill,
	...properties
}: IconProperties) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='32'
		height='32'
		fill='none'
		viewBox='0 0 32 32'
		{...properties}
	>
		<path
			d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
			fill={color}
		/>
		<path
			d='M16 13.134a1.67 1.67 0 0 0-1.671 1.671v8.724a1.671 1.671 0 1 0 3.342 0v-8.724A1.67 1.67 0 0 0 16 13.134Zm-2-5.1c0 1.115.904 2.034 2 2.034s2-.92 2-2.034C18 6.92 17.096 6 16 6s-2 .92-2 2.034Z'
			fill={fill ?? '#FFF'}
		/>
		{children}
	</svg>
)

export default InfoCircleIcon
