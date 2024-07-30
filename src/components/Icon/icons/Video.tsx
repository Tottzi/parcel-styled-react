import type {IconProperties} from '../types'

const VideoIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M30.978 7.46a2.213 2.213 0 0 0-2.127-.149l-5.74 2.633V8.89a3.555 3.555 0 0 0-3.555-3.556h-16A3.555 3.555 0 0 0 0 8.889V23.11a3.555 3.555 0 0 0 3.556 3.555h16a3.555 3.555 0 0 0 3.555-3.555v-1.057l5.739 2.631a2.22 2.22 0 0 0 2.127-.149c.64-.409 1.023-1.109 1.023-1.92V9.333c0-.761-.383-1.456-1.022-1.872ZM20.444 23.11a.89.89 0 0 1-.888.89h-16a.89.89 0 0 1-.89-.89V8.89a.89.89 0 0 1 .89-.89h16a.89.89 0 0 1 .888.89v14.22Zm8.89-1.138-6.223-2.85v-6.245l6.222-2.851v11.946Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default VideoIcon
