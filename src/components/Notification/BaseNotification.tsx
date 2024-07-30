import {
	type ForwardedRef,
	Fragment,
	type ReactNode,
	forwardRef,
	useCallback,
	useRef,
} from 'react'
import {type DefaultTheme, css, keyframes, useTheme} from 'styled-components'
import {AriaText} from '../AriaText'
import {Icon, IconType} from '../Icon'
import {useTrueClick} from '../../hooks'
import type {CssFunction} from '../../styled.d'
import {buttonResetStyles} from '../../theme'
import {type NotificationProperties, NotificationVariant} from './types'

const bounce = keyframes`
	0% {
		transform: scale(0);
		opacity: 0;
	}

	50% {
		transform: scale(1.05);
	}

	80% {
		transform: scale(0.975);
	}

	100% {
		transform: scale(1);
		opacity: 1;
	}
`

export const iconStyle = css`
	position: relative;
	top: 1px;

	&:first-child {
		left: -8px;
	}

	&:last-child {
		right: -8px;
	}
`

export const stringIconStyle = css`
	font-size: 18px;
	line-height: 1em;
	position: relative;

	&:first-child {
		left: -7px;
	}

	&:last-child {
		right: -7px;
	}
`

type BaseNotificationProperties = Omit<NotificationProperties, 'onClose'> & {
	inputCss?: CssFunction
	onClose: () => void
}

type Colors = {
	backgroundColor: string
	iconFill?: string
	iconColor: string
	textColor: string
}

type VariantDetailsReturnType = {
	iconLeft: IconType
	colors: Colors
}

export const getVariantDetails = (
	theme: DefaultTheme,
	variant?: NotificationVariant
): VariantDetailsReturnType => {
	switch (variant) {
		case NotificationVariant.success: {
			return {
				iconLeft: IconType.checkCircle,
				colors: {
					backgroundColor: theme.successBackgroundColor,
					iconColor: theme.successColor,
					textColor: theme.successForegroundColor,
				},
			}
		}

		case NotificationVariant.error: {
			return {
				iconLeft: IconType.crossCircle,
				colors: {
					backgroundColor: theme.tertiaryErrorRed,
					iconFill: theme.errorRed,
					iconColor: theme.white,
					textColor: theme.ekofiskGray,
				},
			}
		}

		case NotificationVariant.info: {
			return {
				iconLeft: IconType.infoCircle,
				colors: {
					backgroundColor: theme.infoBackgroundColor,
					iconColor: theme.infoColor,
					textColor: theme.infoForegroundColor,
				},
			}
		}

		case NotificationVariant.warning: {
			return {
				iconLeft: IconType.alertFilled,
				colors: {
					backgroundColor: theme.warningBackgroundColor,
					iconColor: theme.warningColor,
					textColor: theme.warningForegroundColor,
				},
			}
		}

		default: {
			return {
				iconLeft: IconType.crossCircle,
				colors: {
					backgroundColor: '#FFF',
					iconColor: '#000',
					textColor: '#000',
				},
			}
		}
	}
}

export const BaseNotificationContainer = ({
	inputCss,
	variant,
	content,
	isCloseButton,
	onClose,
}: {
	inputCss?: CssFunction
	variant?: NotificationVariant
	content: ReactNode
	isCloseButton?: boolean
	onClose?: () => void
}) => {
	const theme = useTheme()
	const {colors, iconLeft} = getVariantDetails(theme, variant)

	const handleClose = useCallback(() => {
		if (onClose) {
			onClose()
		}
	}, [onClose])

	return (
		<div
			css={[
				css`
					display: grid;
					grid-template-columns: ${isCloseButton
						? '40px 1fr 40px'
						: '40px 1fr'};
				`,
				inputCss,
			]}
		>
			<aside
				css={css`
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 6px 0 0 6px;
					width: 40px;
					background-color: ${colors.backgroundColor};
				`}
			>
				<Icon
					size={20}
					icon={iconLeft}
					color={colors.iconColor}
					fill={colors.iconFill}
				/>
			</aside>
			<article
				css={css`
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					gap: 10px;
					padding: 15px 24px 15px 10px;
				`}
			>
				{content}
			</article>
			{isCloseButton ? (
				<Fragment>
					<button
						type='button'
						css={[
							buttonResetStyles,
							css`
								display: flex;
								height: 100%;
								justify-content: center;
								width: 40px;
								padding-top: 17px;
							`,
						]}
						onClick={handleClose}
					>
						<Icon size={12} icon={IconType.cross} color='#000' />
					</button>
					<AriaText>Close</AriaText>
				</Fragment>
			) : null}
		</div>
	)
}

export const BaseNotification = forwardRef(
	(
		{
			level,
			zIndex,
			animationDuration,
			isRevealing,
			isRevealed,
			isConcealing,
			inputCss,
			children,
			isAction,
			onClose,
		}: BaseNotificationProperties,
		reference: ForwardedRef<HTMLDivElement>
	) => {
		const backgroundReference = useRef<HTMLDivElement>(null)

		const handleBackgroundClick = useCallback(() => {
			if (!isAction) {
				onClose()
			}
		}, [onClose, isAction])

		useTrueClick(backgroundReference, handleBackgroundClick)

		return (
			<div
				ref={backgroundReference}
				css={[
					css`
						background: rgba(0, 0, 0, 0.25);
						backdrop-filter: blur(1px);
						width: 100%;
						height: 100%;
						padding: 20px;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						z-index: ${zIndex};
						opacity: 0;
						box-sizing: border-box;
						transition: opacity ${animationDuration / 1000}s;
						position: fixed;
						display: flex;
						justify-content: center;
					`,
					isRevealing &&
						css`
							opacity: 1;
						`,
					isConcealing &&
						css`
							opacity: 0;
							pointer-events: none;
						`,
					isRevealed &&
						css`
							opacity: 1;
						`,
					level &&
						level > 0 &&
						css`
							opacity: 0;
							pointer-events: none;
						`,
				]}
			>
				<div
					ref={reference}
					aria-live='assertive'
					css={[
						css`
							display: flex;
							align-items: center;
							margin: auto;
							margin-top: 25dvh;
							border-radius: 6px;
							transform: scale(0);
							opacity: 0;
						`,
						Boolean(isAction) &&
							css`
								margin-top: 8dvh;
							`,

						isRevealing &&
							css`
								animation: ${bounce} forwards ${animationDuration / 1000}s;
							`,
						isRevealed &&
							css`
								transform: scale(1);
								opacity: 1;
							`,
						isConcealing &&
							css`
								transform: scale(0);
								transition:
									opacity ${animationDuration / 1000 / 4}s,
									transform ${animationDuration / 1000}s;
								opacity: 0;
							`,
						inputCss,
					]}
				>
					{children}
				</div>
			</div>
		)
	}
)
