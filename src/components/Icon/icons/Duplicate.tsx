import type {IconProperties} from '../types'

const DuplicateIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M31.412 4.414 27.584.586A1.995 1.995 0 0 0 26.168 0H15.943a4 4 0 0 0-4 4l.002 16C12 22.212 13.793 24 16 24h12c2.2 0 4-1.8 4-4V5.828c0-.53-.213-1.039-.588-1.414ZM29 20a1 1 0 0 1-1 1H15.943a1 1 0 0 1-1-1V4.008a1 1 0 0 1 1-1h8L24 6a2 2 0 0 0 2 2h2.943v12H29Zm-12 8a1 1 0 0 1-1 1H3.943a1 1 0 0 1-1-1l.055-15.994a1 1 0 0 1 1-1H10V8H3.999a4 4 0 0 0-4 4v16c0 2.206 1.792 4 4 4h12c2.2 0 4-1.8 4-4v-2h-2.943L17 28Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default DuplicateIcon
