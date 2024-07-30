import type {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	MouseEvent,
	ReactElement,
	ReactNode,
} from 'react'
import {useCallback} from 'react'
import type {DefaultTheme} from 'styled-components'
import {css, useTheme} from 'styled-components'
import {Font, fontStyles} from '../Font'
import type {IconSize, IconType} from '../Icon'
import {Icon} from '../Icon'
import type {CssFunction, StyleVariants} from '../../styled.d'
import {buttonResetStyles} from '../../theme'
import React from 'react'

type ReactButton = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

export enum ButtonSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
	xlarge = 'xlarge',
}

export const defaultButtonSize = ButtonSize.small

export enum ButtonVariant {
	primary = 'primary',
	secondary = 'secondary',
	tertiary = 'tertiary',
	stripped = 'stripped',
}

export const defaultButtonVariant = ButtonVariant.primary

export type ButtonProperties = ReactButton & {
	inputCss?: CssFunction
	inputIconCss?: CssFunction
	inputFontCss?: CssFunction
	size?: ButtonSize
	variant?: ButtonVariant
	label?: ReactNode | string
	children?: ReactNode
	childrenLeft?: ReactNode
	childrenRight?: ReactNode
	iconSize?: IconSize | number
	iconLeft?: IconType
	iconRight?: IconType
	iconColor?: string
}

const iconVariantColor = (variant: ButtonVariant, theme: DefaultTheme) => {
	switch (variant) {
		case ButtonVariant.primary: {
			return theme.primaryColor
		}

		case ButtonVariant.secondary: {
			return theme.secondaryColor
		}

		case ButtonVariant.tertiary: {
			return theme.primaryForegroundColor
		}

		case ButtonVariant.stripped: {
			return theme.foregroundColor
		}
	}
}

const calculateIconSize = (size: ButtonSize) => {
	switch (size) {
		case ButtonSize.small: {
			return 7
		}

		case ButtonSize.medium: {
			return 9
		}

		case ButtonSize.large: {
			return 11
		}

		case ButtonSize.xlarge: {
			return 20
		}
	}
}

const iconContainerVariantStyles: StyleVariants<ButtonVariant> = {
	[ButtonVariant.primary]: css`
		background-color: ${({theme}) => theme.primaryForegroundColor};
	`,
	[ButtonVariant.secondary]: css`
		background-color: ${({theme}) => theme.secondaryAccentColor};
	`,
	[ButtonVariant.tertiary]: css`
		background-color: ${({theme}) => theme.primaryColor};
	`,
	[ButtonVariant.stripped]: css`
		background-color: transparent;
	`,
}

const iconContainerSizeStyles: StyleVariants<ButtonSize> = {
	[ButtonSize.small]: css`
		--size: 15px;
		--offset: -8px;
	`,
	[ButtonSize.medium]: css`
		--size: 19px;
		--offset: -8px;
	`,
	[ButtonSize.large]: css`
		--size: 21px;
		--offset: -14px;
		--margin: -4px;
	`,
	[ButtonSize.xlarge]: css`
		--size: 30px;
		--offset: -15px;
		--margin: -6px;
	`,
}

export const IconContainer = ({
	variant = defaultButtonVariant,
	size = defaultButtonSize,
	children,
	inputCss,
}: {
	variant?: ButtonVariant
	size?: ButtonSize
	children: ReactElement
	inputCss?: CssFunction
}) => (
	<span
		css={[
			css`
				background-color: #000;
				width: var(--size, 18px);
				height: var(--size, 18px);
				border-radius: var(--size, 18px);
				margin: auto;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;

				&:first-child {
					left: var(--offset, -6px);
					margin-right: var(--margin, 0px);
				}

				&:last-child {
					right: var(--offset, -6px);
					margin-left: var(--margin, 0px);
				}

				&:first-child:last-child {
					margin: 0;
					left: 0;
					right: 0;
				}
			`,
			iconContainerVariantStyles[variant],
			iconContainerSizeStyles[size],
			inputCss,
		]}
	>
		{children}
	</span>
)

const sizeStyles: StyleVariants<ButtonSize> = {
	[ButtonSize.small]: css`
		height: 25px;
		font-size: 12px;
		padding: 0 14px;
	`,
	[ButtonSize.medium]: css`
		height: 30px;
		font-size: 16px;
		padding: 0 14px;
	`,
	[ButtonSize.large]: css`
		height: 40px;
		font-size: 18px;
		padding: 0 25px;
	`,
	[ButtonSize.xlarge]: css`
		height: 46px;
		font-size: 20px;
		padding: 0 25px;
	`,
}

const iconButtonSizeStyles: StyleVariants<ButtonSize> = {
	[ButtonSize.small]: css`
		padding: 0 5px;
	`,
	[ButtonSize.medium]: css`
		padding: 0 6px;
	`,
	[ButtonSize.large]: css`
		padding: 0 10px;
	`,
	[ButtonSize.xlarge]: css`
		padding: 0 8px;
	`,
}

const variantStyles: StyleVariants<ButtonVariant> = {
	[ButtonVariant.primary]: css`
		background-color: ${({theme}) => theme.primaryColor};
		box-shadow: 0 0 ${({theme}) => theme.primaryColor};
		color: ${({theme}) => theme.ekofiskGray};

		@media (hover: hover) {
			&:hover {
				box-shadow: 0 0 0 2px ${({theme}) => theme.primaryColor};
			}
		}
	`,
	[ButtonVariant.secondary]: css`
		background-color: ${({theme}) => theme.secondaryColor};
		box-shadow: 0 0 ${({theme}) => theme.primaryColor};
		color: #fff;

		@media (hover: hover) {
			&:hover {
				box-shadow: 0 0 0 2px ${({theme}) => theme.primaryColor};
			}
		}
	`,
	[ButtonVariant.tertiary]: css`
		background-color: transparent;
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
		color: ${({theme}) => theme.foregroundColor};

		@media (hover: hover) {
			&:hover {
				box-shadow: 0 0 0 2px ${({theme}) => theme.primaryColor};
			}
		}
	`,
	[ButtonVariant.stripped]: css`
		background-color: transparent;
		border-color: transparent;
		color: ${({theme}) => theme.foregroundColor};
	`,
}

const ButtonLabel = ({
	inputFontCss,
	label,
	children,
}: {
	inputFontCss?: CssFunction
	label?: ReactNode | string
	children?: ReactNode
}) => (
	<span
		css={css`
			margin: auto;
			display: inline-block;
			vertical-align: top;
			flex: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		`}
	>
		<Font
			semibold
			inputCss={[
				fontStyles,
				css`
					font-weight: 600;
					line-height: 1em;
					color: inherit;
				`,
				inputFontCss,
			]}
		>
			{label ?? children ?? null}
		</Font>
	</span>
)

export const Button = ({
	inputCss,
	inputIconCss,
	inputFontCss,
	type = 'button',
	size = defaultButtonSize,
	variant = defaultButtonVariant,
	label,
	childrenLeft,
	childrenRight,
	iconLeft,
	iconRight,
	iconColor,
	iconSize,
	onClick,
	children,
	...rest
}: ButtonProperties) => {
	const theme = useTheme()

	const handleClick = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			if (onClick) {
				onClick(event)
			}
		},
		[onClick]
	)

	const isIconButton =
		!label &&
		!children &&
		((iconLeft && !iconRight) ?? (iconRight && !iconLeft))

	return (
		<button
			{...rest}
			// eslint-disable-next-line react/button-has-type
			type={type}
			css={[
				buttonResetStyles,
				css`
					line-height: 1em;
					border: 1px solid transparent;
					border-radius: 52px;
					transition:
						background-color 0.37s,
						box-shadow 0.37s;

					@media (hover: hover) {
						&:hover {
							transition-duration: 0.1s, 0.1s;
						}
					}

					&:disabled {
						opacity: 0.5;
					}
				`,
				sizeStyles[size],
				isIconButton && iconButtonSizeStyles[size],
				variantStyles[variant],
				inputCss,
			]}
			onClick={onClick ? handleClick : undefined}
		>
			<div
				css={css`
					display: flex;
				`}
			>
				{childrenLeft ??
					(iconLeft ? (
						<IconContainer
							variant={variant}
							size={size}
							inputCss={inputIconCss}
						>
							<Icon
								icon={iconLeft}
								color={iconColor ?? iconVariantColor(variant, theme)}
								size={iconSize ?? calculateIconSize(size)}
							/>
						</IconContainer>
					) : null)}

				{label ?? children ? (
					<ButtonLabel inputFontCss={inputFontCss} label={label}>
						{children}
					</ButtonLabel>
				) : null}

				{childrenRight ??
					(iconRight ? (
						<IconContainer
							variant={variant}
							size={size}
							inputCss={inputIconCss}
						>
							<Icon
								icon={iconRight}
								color={iconColor ?? iconVariantColor(variant, theme)}
								size={iconSize ?? calculateIconSize(size)}
							/>
						</IconContainer>
					) : null)}
			</div>
		</button>
	)
}
