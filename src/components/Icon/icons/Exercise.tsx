import type {IconProperties} from '../types'

const ExerciseIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<g fill={color}>
			<path d='M25.286 31.987a1.887 1.887 0 0 0 1.757-2.524L23.198 18.73a.008.008 0 0 0-.01-.004.008.008 0 0 1-.009-.005l-2.525-6.74c-.216-.576.14-1.204.707-1.442a6.012 6.012 0 0 0 3.667-5.547V1.648A1.644 1.644 0 0 0 23.393 0c-.902 0-1.635.74-1.635 1.648v3.339a2.713 2.713 0 0 1-2.22 2.68 1.53 1.53 0 0 0-.444.15l-8.738 3.329-.53.2a1 1 0 0 0-.454.346l-4.09 5.594c-.403.551-.384 1.352.12 1.808.052.043.104.085.16.123l4.827 3.183c.275.179.584.268.888.268a1.652 1.652 0 0 0 .925-3.012l-.044-.03c-.217-.162-2.108-1.567-2.886-2.15-.214-.16-.225-.357-.034-.545l.627-.619a1 1 0 0 1 1.64.361l1.874 5.01a1 1 0 0 1 .024.631l-2.08 7.126c-.374.97.108 2.062 1.07 2.434s2.047-.108 2.416-1.078l2.954-6.652a1 1 0 0 1 1.773-.106l3.939 6.619c.032.055.06.113.084.172.298.715.99 1.158 1.727 1.158z' />
			<path d='M12.932 9.519a4.124 4.124 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25z' />
		</g>

		{children}
	</svg>
)

export default ExerciseIcon