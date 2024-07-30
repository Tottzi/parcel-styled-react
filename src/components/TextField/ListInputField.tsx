import {useCallback, useEffect, useRef, useState} from 'react'
import {css} from 'styled-components'
import {type InputFieldProperties} from './types'

export const ListInputField = ({
	value,
	inputCss,
	childrenLeft,
	onFocus,
	onBlur,
	error,
	...rest
}: InputFieldProperties) => {
	const [listFocus, setListFocus] = useState(false)
	const listContainer = useRef<HTMLDivElement>(null)
	const ulReference = useRef<HTMLUListElement>(null)
	const [ulAreaHeight, setUlAreaHeight] = useState<number>()

	const handleOnFocus = useCallback(() => {
		setListFocus(() => true)
	}, [])

	const handleOnBlur = useCallback(() => {
		setListFocus(() => false)
	}, [])

	useEffect(() => {
		const ulListHeight = ulReference.current?.getBoundingClientRect().height

		if (ulListHeight) {
			setUlAreaHeight(() => ulListHeight)
		}
	}, [childrenLeft, value])

	return (
		<section
			ref={listContainer}
			css={[
				css`
					border: 0.7px solid ${({theme}) => theme.white};
					border-radius: 8px;
					height: auto;
					transition:
						transform 200ms ease-out,
						height 200ms,
						border 200ms;
				`,
				ulAreaHeight &&
					css`
						height: ${ulAreaHeight}px;
					`,
				listFocus &&
					css`
						border: 0.7px solid ${({theme}) => theme.primaryOrange};
					`,
				error &&
					css`
						border: 0.7px solid ${({theme}) => theme.errorRed};
					`,
			]}
		>
			<ul
				ref={ulReference}
				css={css`
					margin: 0;
					display: flex;
					gap: 5px;
					flex-wrap: wrap;
					align-items: center;
					padding: 6px 3px 3px;
					list-style-type: none;
				`}
				onFocus={handleOnFocus}
				onBlur={handleOnBlur}
			>
				{childrenLeft}
				<li
					css={css`
						flex-grow: 1;
					`}
				>
					<input
						{...rest}
						css={[
							inputCss,
							css`
								border: none;
								box-shadow: none;
								padding: 6px;
								min-width: 50px;
								width: 100%;
								max-width: calc(100vw - 40px);
							`,
						]}
						size={1}
						value={value}
						onBlur={onBlur}
						onFocus={onFocus}
					/>
					<span
						css={[
							inputCss,
							css`
								visibility: hidden;
								display: block;
								white-space: pre;
								height: 0;
								border: none;
								box-shadow: none;
								padding: 0 6px;
							`,
						]}
					>
						{value}
					</span>
				</li>
			</ul>
		</section>
	)
}
