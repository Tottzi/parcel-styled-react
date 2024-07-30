import {useCallback, useMemo} from 'react'
import {css, keyframes, useTheme} from 'styled-components'
import {AriaText} from '../AriaText'
import {Heading, Paragraph} from '../Font'
import {Icon, IconType} from '../Icon'
import {buttonResetStyles} from '../../theme'
import {ModalVariant, type ModalVariantProperties} from './types'

const bounce = keyframes`
	0% {
		transform: scale(0);
		opacity: 0;
	}

	50% {
		transform: scale(1.04);
	}

	80% {
		transform: scale(0.985);
	}

	100% {
		transform: scale(1);
		opacity: 1;
	}
`

export const DefaultModal = ({
	title,
	message,
	variant,
	Contents,
	animationDuration,
	isRevealing,
	isRevealed,
	isConcealing,
	cancelLabel = 'Cancel',
	confirmLabel = 'Confirm',
	hasCancel = true,
	onCancel,
	onConfirm,
	onClose,
}: ModalVariantProperties) => {
	const theme = useTheme()

	const {icon, sideBarColor, buttonTextColor, iconColor, iconFill} =
		useGetVariantDetails(variant)

	const handleOnConfirm = useCallback(() => {
		onConfirm?.()
	}, [onConfirm])

	return (
		<div
			css={[
				css`
					background: rgba(0, 0, 0, 0.4);
					backdrop-filter: blur(1px);
					width: 100%;
					height: 100%;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					opacity: 0;
					transition: opacity ${animationDuration / 1000}s;
					position: fixed;
					display: flex;
					padding: 20px;
					box-sizing: border-box;
					overflow: auto;
					overscroll-behavior: contain;
				`,
				isRevealing &&
					css`
						opacity: 1;
					`,
				isConcealing &&
					css`
						opacity: 0;
					`,
				isRevealed &&
					css`
						opacity: 1;
					`,
			]}
		>
			<div
				css={css`
					width: 100%;
					margin: auto;
					text-align: center;
				`}
			>
				<div
					css={[
						css`
							min-width: 280px;
							background: ${({theme}) => theme.backgroundColor};
							max-width: 600px;
							box-sizing: border-box;
							margin: auto;
							text-align: left;
							border-radius: 6px;
							transform: scale(0);
							opacity: 0;
							display: inline-block;
							vertical-align: top;
							box-shadow:
								0 0 0 1px rgba(0, 0, 0, 0.075),
								0 0 18px rgba(0, 0, 0, 0.25);
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
									opacity ${animationDuration / 1000 / 6}s,
									transform ${animationDuration / 1000}s;
								opacity: 0;
							`,
					]}
				>
					<div
						css={css`
							display: grid;
							grid-template-columns: 40px 1fr 40px;
						`}
					>
						<aside
							css={css`
								display: flex;
								align-items: center;
								justify-content: center;
								border-radius: 6px 0 0 6px;
								width: 40px;
								background-color: ${sideBarColor};
							`}
						>
							<Icon size={20} icon={icon} color={iconColor} fill={iconFill} />
						</aside>
						<section
							css={css`
								display: flex;
								flex-direction: column;
								gap: 10px;
								padding: 15px 24px 15px 10px;
							`}
						>
							<section
								css={css`
									display: flex;
									flex-direction: column;
								`}
							>
								<Heading level={3}>{title}</Heading>
								<Paragraph level={2}>{message}</Paragraph>
							</section>
							<footer
								css={css`
									display: flex;
									flex-direction: row;
									gap: 20px;
								`}
							>
								<button
									type='button'
									css={[buttonResetStyles]}
									onClick={handleOnConfirm}
								>
									<Paragraph
										semibold
										level={2}
										inputCss={css`
											text-decoration: underline;
											line-height: 1em;
											color: ${buttonTextColor};
										`}
									>
										{confirmLabel ?? 'Ok'}
									</Paragraph>
								</button>
								{hasCancel ? (
									<button
										type='button'
										css={[buttonResetStyles]}
										onClick={onCancel}
									>
										<Paragraph
											semibold
											level={2}
											inputCss={css`
												text-decoration: underline;
												line-height: 1em;
												color: ${theme.secondaryTextGray};
											`}
										>
											{cancelLabel}
										</Paragraph>
									</button>
								) : null}
							</footer>
						</section>

						<aside
							css={css`
								display: flex;
								height: 100%;
								justify-content: center;
								align-items: flex-start;
								width: 40px;
								padding-top: 17px;
							`}
						>
							<button type='button' css={[buttonResetStyles]} onClick={onClose}>
								<Icon size={12} icon={IconType.cross} color='#000' />
							</button>
							<AriaText>Close</AriaText>
						</aside>

						{Contents ? <Contents /> : null}
					</div>
				</div>
			</div>
		</div>
	)
}

type VariantDetailsReturnType = {
	icon: IconType
	sideBarColor: string
	iconFill?: string
	iconColor: string
	buttonTextColor: string
}

export const useGetVariantDetails = (
	variant: ModalVariant
): VariantDetailsReturnType => {
	const theme = useTheme()

	return useMemo(() => {
		switch (variant) {
			case ModalVariant.success: {
				return {
					icon: IconType.checkCircle,
					sideBarColor: theme.successBackgroundColor,
					iconColor: theme.successColor,
					buttonTextColor: theme.successColor,
				}
			}

			case ModalVariant.error: {
				return {
					icon: IconType.crossCircle,
					sideBarColor: theme.tertiaryErrorRed,
					iconFill: theme.errorRed,
					iconColor: theme.white,
					buttonTextColor: theme.errorRed,
				}
			}

			case ModalVariant.info: {
				return {
					icon: IconType.infoCircle,
					sideBarColor: theme.infoBackgroundColor,
					iconColor: theme.infoColor,
					buttonTextColor: theme.infoColor,
				}
			}

			case ModalVariant.warning: {
				return {
					icon: IconType.alertFilled,
					sideBarColor: theme.warningBackgroundColor,
					iconColor: theme.warningColor,
					buttonTextColor: theme.warningColor,
				}
			}
		}
	}, [
		variant,
		theme.successBackgroundColor,
		theme.successColor,
		theme.tertiaryErrorRed,
		theme.errorRed,
		theme.white,
		theme.infoBackgroundColor,
		theme.infoColor,
		theme.warningBackgroundColor,
		theme.warningColor,
	])
}
