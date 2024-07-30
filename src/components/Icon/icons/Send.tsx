import type {IconProperties} from '../types'

const SendIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M2.571 29.847q-.918.373-1.745-.163-.825-.537-.826-1.562V19.73L14.692 16 0 12.27V3.878q0-1.025.826-1.562.827-.536 1.745-.163l28.281 12.122Q32 14.788 32 16t-1.148 1.725z'
			fill={color}
		/>

		{children}
	</svg>
)

export default SendIcon
