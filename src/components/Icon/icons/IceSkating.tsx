import type {IconProperties} from '../types'

const IceSkatingIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M20.94 4.95a2.5 2.5 0 0 0 1.971-2.939A2.506 2.506 0 0 0 19.965.05a2.5 2.5 0 0 0-1.97 2.938 2.505 2.505 0 0 0 2.946 1.964m9 1.678a1.07 1.07 0 0 0-1.358-.666 1.05 1.05 0 0 0-.417.267q-.003-.001-.003-.004c-.781.864-2.05 2.273-2.959 2.233-.558-.165-3.745-2.656-8.321-3.577-6.003-1.209-8.97 5.86-8.97 5.86a1.072 1.072 0 0 0 2.013.576c.48-.762 2.009-4.551 5.853-4.135 1.103.248-2.989 13.288-4.63 14.45-1.64 1.162-3.324 1.28-5.48 1.479-.504.01-.94.132-1.274.322l-.108-1.66A.644.644 0 0 0 3 21.856l.315 4.8c.071 1.08.607 2.138 1.648 2.138q.05.001.103-.005a.64.64 0 0 0 .599-.681.64.64 0 0 0-.683-.598c-.038.003-.075-.022-.112-.066l-.305-1.399-.033-.5q.276.14.655.25c1.53.435 6.08-.414 7.538-1.758 1.455-1.344 1.853-2.56 2.527-3.482.623-.848 2.717-3.666 4.654.012.823 2.196.828 3.68-.982 8.228a.9.9 0 0 0-.017.795l-2.059-.832a.645.645 0 0 0-.839.353.64.64 0 0 0 .354.834l4.47 1.81c.046.018.474.187.971.233q.131.012.251.012c.992 0 1.354-.61 1.467-.888a.643.643 0 0 0-1.191-.483c-.014.036-.053.059-.107.073l-1.141-.274q.112-.071.21-.177c.27-.188 3.256-6.483 1.725-10.236-1.455-3.565-3.076-4.133-3.156-4.155.077-.31 1.357-6.565 2.237-6.041 4.136 3.484 6.453-.73 7.557-2.066h-.002c.3-.277.429-.715.288-1.126z'
			fill={color}
		/>
		{children}
	</svg>
)

export default IceSkatingIcon
