import type {IconProperties} from '../types'

const CameraPlusIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M4.174 5.565V1.391h2.783v4.174h4.173v2.783H6.957v4.173H4.174V8.348H0V5.565h4.174Zm4.174 8.348V9.739h4.174V5.565h9.739l2.546 2.783h4.41A2.79 2.79 0 0 1 32 11.13v16.696a2.79 2.79 0 0 1-2.783 2.782H6.957a2.79 2.79 0 0 1-2.783-2.782V13.913h4.174Zm9.739 12.522a6.959 6.959 0 0 0 6.957-6.957 6.96 6.96 0 0 0-6.957-6.957 6.96 6.96 0 0 0-6.957 6.957 6.96 6.96 0 0 0 6.957 6.957Zm-4.452-6.957a4.447 4.447 0 0 0 4.452 4.452 4.447 4.447 0 0 0 4.452-4.452 4.447 4.447 0 0 0-4.452-4.452 4.447 4.447 0 0 0-4.452 4.452Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default CameraPlusIcon
