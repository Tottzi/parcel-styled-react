import type {IconProperties} from '../types'

const HomeFilledIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M31.992 15.972c0 1-.834 1.784-1.778 1.784h-1.778l.039 8.905c0 .15-.012.3-.028.45v.896a2.222 2.222 0 0 1-2.223 2.223h-.889c-.06 0-.122 0-.183-.006a3.301 3.301 0 0 1-.233.006H21.78a2.222 2.222 0 0 1-2.223-2.223v-4.892c0-.984-.794-1.779-1.778-1.779h-3.556c-.983 0-1.778.795-1.778 1.779v4.892a2.222 2.222 0 0 1-2.222 2.223H7.117c-.083 0-.166-.006-.25-.011a2.393 2.393 0 0 1-.2.011h-.889a2.222 2.222 0 0 1-2.222-2.223V21.78c0-.05 0-.106.005-.156v-3.869H1.778c-1 0-1.778-.778-1.778-1.784 0-.5.167-.945.556-1.334L14.8 2.215c.39-.39.834-.445 1.223-.445.389 0 .833.111 1.166.39l14.19 12.478c.445.39.667.834.612 1.334Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default HomeFilledIcon