import type {IconProperties} from '../types'

const YogaIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M23.53 9.855a2.144 2.144 0 0 0 .41-3.009 2.155 2.155 0 0 0-3.015-.407 2.14 2.14 0 0 0-.407 3.01 2.15 2.15 0 0 0 3.012.406M2.8 23.332c2.216-.175 6.441-.858 9.515-1.614 3.073-.758 10.527-4.781 10.527-4.781s5.902 8.476 7.165 6.562c.852-1.292-7.73-11.545-8.218-12.226-.49-.68-1.121-.483-2.306 1.194s-5.424 7.212-16.708 8.78c-2.62.54-1.912 2.34.025 2.086zm28.59 1.641H.611c-.338 0-.611.177-.611.514 0 .336.274.513.611.513h30.778c.337 0 .611-.177.611-.513 0-.337-.274-.514-.611-.514'
			fill={color}
		/>
		{children}
	</svg>
)

export default YogaIcon
