import type {IconProperties} from '../types'

const ClipboardCountIcon = ({
	color,
	children,
	...properties
}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M11.985 29.195H2.312c-.616 0-1.156-.224-1.618-.672C.23 28.075 0 27.552 0 26.955V5.227c0-.598.2-1.12.597-1.568.399-.448.739-.672 1.022-.672h7.784A3.59 3.59 0 0 1 10.733.84 3.828 3.828 0 0 1 13.18 0c.925 0 1.74.28 2.447.84a3.59 3.59 0 0 1 1.33 2.147h7.784c.617 0 1.156.224 1.619.672.462.448.693.97.693 1.568v7.578h-2.312V5.227h-4.085v4.853H6.397V5.227H2.312v21.728h9.673v2.24Zm1.889-24.118c.436 0 .802-.143 1.098-.429.295-.286.443-.64.443-1.064 0-.423-.148-.778-.443-1.064a1.517 1.517 0 0 0-1.098-.43 1.52 1.52 0 0 0-1.099.43c-.295.286-.443.64-.443 1.064 0 .423.148.778.443 1.064.296.286.662.43 1.098.43Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default ClipboardCountIcon
