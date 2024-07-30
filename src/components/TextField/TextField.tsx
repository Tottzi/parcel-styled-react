import type {ChangeEvent, FocusEvent} from 'react'
import {
	Fragment,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import {css, useTheme} from 'styled-components'
import {v4 as uuid} from 'uuid'
import {Font, fontStyles} from '../Font'
import {Icon} from '../Icon'
import {IconType} from '../Icon/types'
import {opacity} from '../../utilities'
import {ListInputField} from './ListInputField'
import {type InputFieldProperties, type TextFieldProperties} from './types'

const InputField = ({
	value,
	error,
	disabled,
	minRows = 1,
	maxRows,
	shrinksOnBlur,
	inputCss,
	listInput,
	onFocus,
	onBlur,
	childrenLeft,
	...rest
}: InputFieldProperties) => {
	const minTextareaReference = useRef<HTMLTextAreaElement>(null)
	const maxTextareaReference = useRef<HTMLTextAreaElement>(null)
	const divReference = useRef<HTMLDivElement>(null)
	const [textareaHeight, setTextareaHeight] = useState(0)
	const [isActive, setIsActive] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)
	const [autoFocus, setAutoFocus] = useState(Boolean(error))
	const animationDuration = 200

	useEffect(() => {
		const minTextareaHeight =
			minTextareaReference.current?.getBoundingClientRect()?.height

		const maxTextareaHeight =
			maxTextareaReference.current?.getBoundingClientRect()?.height

		const divHeight = divReference.current?.getBoundingClientRect()?.height

		if (typeof divHeight === 'number') {
			let updatedHeight = divHeight

			if (typeof minTextareaHeight === 'number') {
				updatedHeight = Math.max(divHeight, minTextareaHeight)

				if (typeof maxTextareaHeight === 'number') {
					updatedHeight = Math.min(
						Math.max(divHeight, minTextareaHeight),
						maxTextareaHeight
					)
				}
			}

			if (shrinksOnBlur) {
				if (isActive) {
					if (typeof maxTextareaHeight === 'number') {
						updatedHeight = Math.min(divHeight, maxTextareaHeight)

						if (typeof minTextareaHeight === 'number') {
							updatedHeight = Math.min(
								Math.max(divHeight, minTextareaHeight),
								maxTextareaHeight
							)
						}
					}
				} else if (typeof minTextareaHeight === 'number') {
					updatedHeight = minTextareaHeight
				}
			}

			setTextareaHeight(updatedHeight)
		}
	}, [isActive, shrinksOnBlur, value, minRows, maxRows])

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsAnimating(false)
		}, 200)

		return () => {
			clearTimeout(timeout)
		}
	}, [isAnimating])

	const handleTextareaBlur = useCallback(
		(event: FocusEvent<HTMLTextAreaElement>) => {
			setIsActive(false)
			setIsAnimating(true)

			if (onBlur) {
				onBlur(event)
			}
		},
		[onBlur]
	)

	const handleTextareaFocus = useCallback(
		(event: FocusEvent<HTMLTextAreaElement>) => {
			setIsActive(true)
			setIsAnimating(true)

			if (onFocus) {
				onFocus(event)
			}
		},
		[onFocus]
	)

	useEffect(() => {
		setAutoFocus(Boolean(error))
	}, [error])

	if (minRows && maxRows && minRows > maxRows) {
		throw new Error('minRows can not be larger than maxRows')
	}

	if (listInput) {
		return (
			<ListInputField
				childrenLeft={childrenLeft}
				value={value}
				inputCss={inputCss}
				error={error}
				onBlur={onBlur}
				onFocus={onFocus}
				{...rest}
			/>
		)
	}

	if (
		(typeof minRows !== 'number' || minRows === 1) &&
		(typeof maxRows !== 'number' || maxRows === 1) &&
		shrinksOnBlur === false
	) {
		return childrenLeft ? (
			<div
				css={[
					inputFieldStyles,
					css`
						display: flex;
						align-items: center;
						padding: 0 0 0 16px;
					`,
				]}
				onFocus={onFocus}
				onBlur={onBlur}
			>
				{childrenLeft}
				<input
					{...rest}
					disabled={disabled}
					css={[
						inputCss,
						css`
							flex: 1;
							border: none;
							box-shadow: none;
							padding: 6px 8px;
							min-width: 50px;
							width: 100%;
						`,
					]}
					value={value}
					autoFocus={autoFocus}
				/>
			</div>
		) : (
			<input
				{...rest}
				css={inputCss}
				value={value}
				disabled={disabled}
				autoFocus={autoFocus}
				onBlur={onBlur}
				onFocus={onFocus}
			/>
		)
	}

	return (
		<Fragment>
			<div
				ref={divReference}
				aria-hidden
				css={[
					css`
						white-space: pre-wrap;
						word-break: break-word;
						visibility: hidden;
						position: absolute;
						top: 0;
						left: 0;
					`,
					inputCss,
				]}
			>
				{value ? `${value} ` : ' '}
			</div>

			<textarea
				ref={minTextareaReference}
				aria-hidden
				readOnly
				disabled={disabled}
				rows={minRows || 1}
				value={value}
				css={[
					css`
						visibility: hidden;
						position: absolute;
						top: 0;
						left: 0;
					`,
					inputCss,
				]}
			/>

			{maxRows && maxRows > 0 ? (
				<textarea
					ref={maxTextareaReference}
					aria-hidden
					readOnly
					disabled={disabled}
					rows={maxRows}
					value={value}
					css={[
						css`
							visibility: hidden;
							position: absolute;
							top: 0;
							left: 0;
						`,
						inputCss,
					]}
				/>
			) : null}

			<textarea
				{...rest}
				value={value}
				disabled={disabled}
				rows={textareaHeight ? undefined : minRows || 1}
				css={[
					css`
						height: ${textareaHeight ? `${textareaHeight}px` : 'auto'};
					`,
					isAnimating &&
						css`
							transition: height ${animationDuration}ms;
						`,
					inputCss,
					css`
						overflow: auto;
					`,
				]}
				autoFocus={autoFocus}
				onBlur={handleTextareaBlur}
				onFocus={handleTextareaFocus}
			/>
		</Fragment>
	)
}

const fontSizeNumber = 18
const lineHeightNumber = 1.5
const animationDuration = '200ms'
const paddingTop = '6px'
const paddingLeft = '12px'
const padding = `${paddingTop} ${paddingLeft}`

export const inputFieldStyles = css`
	appearance: none;
	background: ${({theme}) => theme.elementColor};
	width: 100%;
	font-size: ${fontSizeNumber}px;
	line-height: ${lineHeightNumber}em;
	resize: none;
	border-radius: 8px;
	color: ${({theme}) => theme.elementForegroundColor};
	margin: 0;
	padding: ${padding};
	border: 0;
	box-shadow: 0 0 0 0.7px rgba(47, 50, 66, 0.7);
	background-color: ${({theme}) => theme.backgroundColor};
	box-sizing: border-box;
	vertical-align: top;
	outline: none;
	overflow: hidden;
	scroll-padding-block: ${paddingTop};
	:disabled {
		background-color: ${({theme}) => theme.backgroundColor};
		color: ${({theme}) => theme.disabledColor};
	}
`

export const TextField = ({
	label,
	value,
	error,
	maxLength,
	minRows = 1,
	maxRows,
	floatingLabel = false,
	shrinksOnBlur = false,
	inputCss,
	inputFieldCss,
	isRequired,
	childrenLeft,
	listInput,
	placeholder,
	disabled = false,
	type,
	isLocked,
	onChange,
	onFocus,
	onBlur,
	onKeyDown,
}: TextFieldProperties) => {
	const theme = useTheme()
	const [isFocused, setIsFocused] = useState(false)
	const [currentError, setCurrentError] = useState(error)
	const inputfieldid = useMemo(() => uuid(), [])

	const isWarning = useMemo(
		() => currentError?.name === 'warning',
		[currentError]
	)

	const shouldShowError = useMemo(
		() => currentError && (!isWarning || (isWarning && isFocused)),
		[currentError, isWarning, isFocused]
	)

	const currentLength = useMemo(() => value.length, [value])

	const isFloating =
		floatingLabel && (isFocused || value !== '' || childrenLeft)

	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			onChange(event.currentTarget.value)
		},
		[onChange]
	)

	const handleFocus = useCallback(() => {
		if (onFocus) {
			onFocus()
		}

		setIsFocused(true)
	}, [onFocus])

	const handleBlur = useCallback(() => {
		if (onBlur) {
			onBlur()
		}

		setIsFocused(false)
	}, [onBlur])

	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			if (onKeyDown) {
				onKeyDown(event)
			}
		},
		[onKeyDown]
	)

	useEffect(() => {
		setCurrentError(error)
	}, [error])

	useEffect(() => {
		if (typeof maxLength === 'number' && maxLength > 0 && !error) {
			if (currentLength > maxLength) {
				setCurrentError(new Error(`${currentLength}/${maxLength} characters`))
			} else if (currentLength > maxLength * 0.75) {
				const warning = new Error(`${currentLength}/${maxLength} characters`)
				warning.name = 'warning'
				setCurrentError(warning)
			} else {
				setCurrentError(undefined)
			}
		}
	}, [error, currentLength, maxLength])

	// TODO when label height is larger than one line, the height animation won't work properly

	return (
		<label
			htmlFor={inputfieldid}
			css={[
				css`
					position: relative;
					display: block;
				`,
				inputCss,
			]}
		>
			{floatingLabel ? (
				<div
					css={[
						css`
							pointer-events: none;
							height: 0;
							transition: height ${animationDuration} ease-out;
							will-change: height;
						`,
					]}
				/>
			) : null}

			<Font
				inputCss={[
					css`
						color: ${theme.foregroundColor};
						font-size: ${fontSizeNumber}px;
						display: block;
						overflow: visible;
					`,
					floatingLabel
						? css`
								position: absolute;
								top: ${listInput ? '4px' : 0};
								left: 0;
								padding: ${padding};
								pointer-events: none;
								transition:
									transform ${animationDuration} ease-out,
									color ${animationDuration},
									font-size ${animationDuration};
								transform-origin: 0 0;
							`
						: css`
								position: relative;
								top: -2px;
							`,
					(Boolean(isFloating) || Boolean(type === 'date')) &&
						css`
							pointer-events: all;
							color: ${theme.foregroundColor};
							transform: ${listInput
								? 'translateY(-14px)'
								: disabled
									? 'translateY(-11px)'
									: 'translateY(-12px)'};
							font-size: 14px;
							padding: 0 4px 0 4px;
							margin: 0 0 0 8px;
							background-color: ${theme.backgroundColor};
							box-shadow: 0 8px 0 ${theme.backgroundColor};
							height: 11px;
							border-radius: 3px;
						`,
					disabled &&
						css`
							border-radius: 0;
							color: ${theme.disabledColor};
						`,
				]}
			>
				<span
					css={css`
						display: flex;
						place-items: center;
					`}
				>
					{label}
					{isLocked ? (
						<div
							css={css`
								margin-left: 4px;
							`}
						>
							<Icon
								icon={IconType.lock}
								size={10}
								color={theme.disabledColor}
							/>
						</div>
					) : null}
					{isRequired ? (
						<span
							css={css`
								color: ${theme.errorColor};
							`}
						>
							*
						</span>
					) : null}
				</span>
			</Font>
			<InputField
				type={type}
				value={value}
				placeholder={
					(!floatingLabel || isFocused) && placeholder ? placeholder : ' '
				}
				error={shouldShowError ? currentError : undefined}
				disabled={disabled}
				minRows={minRows}
				maxRows={maxRows}
				shrinksOnBlur={shrinksOnBlur}
				inputCss={[
					isLocked &&
						css`
							all: unset;
						`,
					fontStyles,
					inputFieldStyles,
					inputFieldCss,
					isFocused &&
						css`
							border-color: ${theme.focusColor};
							box-shadow: 0 0 0 1px ${theme.focusColor};
						`,
					Boolean(shouldShowError) &&
						css`
							box-shadow: 0 0 0 2px
								${isWarning
									? opacity(theme.elementForegroundColor, 0.4)
									: theme.errorColor};
						`,
					isLocked &&
						css`
							background: ${theme.albuskjellGray};
							color: ${theme.ekofiskGray}80;
						`,
				]}
				childrenLeft={childrenLeft}
				listInput={listInput}
				$inputfieldid={inputfieldid}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>

			{shouldShowError && currentError ? (
				<div
					css={css`
						text-align: right;
						margin-top: 3px;
						padding-bottom: 4px;
					`}
				>
					<Icon
						icon={IconType.alert}
						color={
							isWarning ? opacity(theme.foregroundColor, 0.8) : theme.errorColor
						}
						size={15}
						css={css`
							position: relative;
							top: 2px;
							margin-right: 6px;
						`}
					/>

					<Font
						inputCss={css`
							font-size: 15px;
							color: ${isWarning
								? opacity(theme.foregroundColor, 0.8)
								: theme.errorColor};
						`}
					>
						{currentError.message}
					</Font>
				</div>
			) : null}
		</label>
	)
}
