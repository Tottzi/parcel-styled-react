import {type ChangeEvent, forwardRef, useCallback, useMemo} from 'react'
import {css, useTheme} from 'styled-components'
import {Combobox} from '@headlessui/react'
import {Font, fontStyles} from '../Font'
import {Icon, IconType} from '../Icon'
import type {CssFunction} from '../../styled.d'
import {buttonResetStyles} from '../../theme'

const inputFieldStyles = css`
	width: 100%;
	font-size: 16px;
	line-height: 1.5em;
	resize: none;
	border-radius: 5px;
	color: #000;
	margin: 0;
	border: 0;
	background-color: #fff;
	box-sizing: border-box;
	vertical-align: top;
	outline: none;
`

export type SearchFieldProperties = {
	placeholder?: string
	value: string
	inputCss?: CssFunction
	iconLeft?: IconType
	hasClearButton?: boolean
	suggestions?: string[]
	autoFocus?: boolean
	onChange: (value: string) => void
	onBlur?: () => void
	onFocus?: () => void
}

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProperties>(
	(
		{
			placeholder,
			value = '',
			iconLeft,
			autoFocus,
			hasClearButton = false,
			inputCss,
			suggestions,
			onChange,
			onBlur,
			onFocus,
		},
		reference
	) => {
		const handleFocus = useCallback(() => {
			if (onFocus) {
				onFocus()
			}
		}, [onFocus])

		const handleBlur = useCallback(() => {
			if (onBlur) {
				onBlur()
			}
		}, [onBlur])

		const handleSearchChange = useCallback(
			(event: ChangeEvent<HTMLInputElement>) => {
				onChange(event.currentTarget.value ?? '')
			},
			[onChange]
		)

		const handleSearchClear = useCallback(() => {
			onChange('')
		}, [onChange])

		const filteredSearch = useMemo(
			() =>
				Boolean(value) && suggestions?.length
					? suggestions.filter((suggestion) =>
							suggestion.toLowerCase().includes(value.toLowerCase())
						)
					: [],
			[value, suggestions]
		)

		const showSuggestions = Boolean(value) && filteredSearch.length > 0

		const handleComboboxSelect = useCallback(
			(selected: string) => {
				onChange(selected)
			},
			[onChange]
		)

		const theme = useTheme()

		return (
			<Combobox nullable value={value} onChange={handleComboboxSelect}>
				<Combobox.Label
					css={[
						css`
							display: flex;
							flex-direction: column;
						`,
						inputCss,
					]}
				>
					<span
						css={[
							css`
								display: flex;
								align-items: center;
								background-color: ${theme.searchFieldBackgroundColor};
								border-radius: 25px;
								border: 0.7px solid ${theme.primaryNavy}B2;
								padding: 7px 12px 7px 16px;
								gap: 0.5rem;
							`,
						]}
					>
						{iconLeft ? (
							<Icon
								icon={iconLeft}
								size={20}
								color={value ? '#a0a3aa' : theme.disabledColor}
								css={css`
									path[fill] {
										transition: fill 0.37s;
									}
								`}
							/>
						) : null}
						<Combobox.Input
							ref={reference}
							placeholder={placeholder}
							css={[
								fontStyles,
								inputFieldStyles,
								css`
									flex: 1;
									border: none;
									outline: none;
									background-color: ${theme.searchFieldBackgroundColor};
								`,
							]}
							value={value ?? ''}
							autoFocus={autoFocus}
							onFocus={handleFocus}
							onBlur={handleBlur}
							onChange={handleSearchChange}
						/>
						{hasClearButton ? (
							<button
								type='button'
								css={buttonResetStyles}
								onClick={handleSearchClear}
							>
								<Icon
									icon={IconType.roundedCross}
									size={10}
									color='black'
									css={css`
										display: block;
										background-color: #eaeaea;
										border-radius: 50%;
										padding: 5px;
									`}
								/>
							</button>
						) : null}
					</span>
				</Combobox.Label>
				{showSuggestions ? (
					<Combobox.Options
						css={css`
							background-color: #3a3f55;
							border: 1px solid black;
							border-radius: 6px;
							list-style: none;
							color: #fff;
							padding: 0.5rem 1rem;
						`}
					>
						{filteredSearch.map((suggestion) => (
							<Combobox.Option
								key={suggestion}
								value={suggestion}
								css={css`
									cursor: pointer;
									padding: 0.5rem;
								`}
							>
								{({active}) => (
									<Font
										inputCss={[
											active &&
												css`
													text-decoration: underline;
												`,
										]}
									>
										{suggestion}
									</Font>
								)}
							</Combobox.Option>
						))}
					</Combobox.Options>
				) : null}
			</Combobox>
		)
	}
)
