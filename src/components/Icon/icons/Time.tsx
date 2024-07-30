import type {IconProperties} from '../types'

const TimeIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M28.75 16.8c0 6.767-5.484 12.25-12.25 12.25S4.25 23.567 4.25 16.8c0-2.55.78-4.919 2.113-6.88a1.15 1.15 0 0 1 1.9 1.291c-1.084 1.594-1.76 3.517-1.76 5.59 0 5.497 4.499 9.952 9.954 9.952 5.541 0 9.996-4.455 9.996-9.953 0-5.11-3.847-9.318-8.805-9.887v2.614c0 .636-.512 1.148-1.191 1.148-.593 0-1.149-.512-1.149-1.148V5.699c0-.634.556-1.149 1.149-1.149 6.81 0 12.293 5.484 12.293 12.25Zm-11.48-.813c.489.45.489 1.177 0 1.584-.406.488-1.134.488-1.583 0l-3.829-3.828c-.445-.407-.445-1.135 0-1.584.45-.445 1.178-.445 1.584 0l3.828 3.828Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default TimeIcon