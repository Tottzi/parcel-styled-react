import type {IconProperties} from '../types'

const EnvelopeIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M0 8C0 5.79063 1.79063 4 4 4H28C30.2062 4 32 5.79063 32 8V24C32 26.2062 30.2062 28 28 28H4C1.79063 28 0 26.2062 0 24V8ZM3 9.38125L13.7812 18.2313C15.0688 19.2938 16.9312 19.2938 18.2188 18.2313L29 9.38125V7.94375C29 7.45 28.55 6.94375 28 6.94375H4C3.4475 6.94375 3 7.45 3 7.94375V9.38125ZM3 13.2625V24C3 24.55 3.4475 25 4 25H28C28.55 25 29 24.55 29 24V13.2625L20.125 20.55C17.725 22.5187 14.275 22.5187 11.8188 20.55L3 13.2625Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default EnvelopeIcon
