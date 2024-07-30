import type {IconProperties} from '../types'

const DeleteIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='m13.3333 24.8062c0 .55-.45 1-1 1s-1-.45-1-1v-13c0-.55.45-1 1-1s1 .45 1 1zm7.1979 0c0 .55-.4499 1-1 1-.55 0-1-.45-1-1v-13c0-.55.45-1 1-1 .5501 0 1 .45 1 1zm1.3126-23.24745 2.2937 3.44125h4.3625c.8313 0 1.5.67187 1.5 1.5 0 .83125-.6687 1.5-1.5 1.5h-.5v19c0 2.7625-2.2375 5-5 5h-14c-2.76125 0-5-2.2375-5-5v-19h-.5c-.82812 0-1.5-.66875-1.5-1.5 0-.82813.67188-1.5 1.5-1.5h4.36375l2.29245-3.44125c.65-.973938 1.7438-1.55875 2.9126-1.55875h5.8624c1.1688 0 2.2626.584875 2.9126 1.55875zm-10.375 3.44125h9.0624l-1.1874-1.7775c-.0938-.13875-.2501-.2225-.4126-.2225h-5.8624c-.1625 0-.3751.08375-.4126.2225zm-4.4688 22c0 1.1062.89562 2 2 2h14c1.1063 0 2-.8938 2-2v-19h-18z'
			fill={color}
		/>

		{children}
	</svg>
)

export default DeleteIcon
