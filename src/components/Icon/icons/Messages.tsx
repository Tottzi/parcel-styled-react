import {type IconProperties} from '../types'

const MessagesIcon = ({
	color,
	children,
	fill,
	...properties
}: IconProperties) => (
	<svg
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M21.383 7.11v9.646a3.199 3.199 0 0 1-3.2 3.195l-6.4.005-5.445 3.08a.598.598 0 0 1-.955-.48v-2.6h-1.6a3.205 3.205 0 0 1-3.2-3.2V7.11c0-1.718 1.437-3.155 3.2-3.155h14.4c1.765 0 3.2 1.437 3.2 3.155Zm-13.6 12.35 3.37-1.905h7.03c.434 0 .8-.36.8-.8v-9.6c0-.437-.366-.8-.8-.8h-14.4c-.438 0-.8.363-.8.8v9.6c0 .44.362.8.8.8h4v1.905Zm5.6 3.695v-1.6h2.4v1.6c0 .435.36.8.8.8h5.43l3.37 1.905v-1.904h4a.81.81 0 0 0 .8-.8v-9.6a.81.81 0 0 0-.8-.8h-6.4v-2.4h6.4c1.765 0 3.2 1.434 3.2 3.155v9.645c0 1.765-1.435 3.2-3.2 3.2h-1.6v2.6a.598.598 0 0 1-.956.48l-5.445-3.08-4.8-.006c-1.76 0-3.2-1.43-3.2-3.195Z'
			fill={color}
		/>
		{children}
	</svg>
)
export default MessagesIcon
