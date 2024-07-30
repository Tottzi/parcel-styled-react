import type {ForwardedRef} from 'react'
import {Fragment, forwardRef} from 'react'
import {css, useTheme} from 'styled-components'
import {Font} from '../Font'
import {Icon} from '../Icon'
import type {CssFunction} from '../../styled.d'
import type {NotificationProperties} from './types'

const iconStyle = css`
	position: relative;
	top: 1px;

	&:first-child {
		left: -8px;
	}

	&:last-child {
		right: -8px;
	}
`

const stringIconStyle = css`
	font-size: 18px;
	color: #fff;
	line-height: 1em;
	position: relative;

	&:first-child {
		left: -7px;
	}

	&:last-child {
		right: -7px;
	}
`

type SliderNotificationProperties = NotificationProperties & {
	inputCss?: CssFunction
}

const scales = [1, 0.9, 0.7, 0.4, 0.3]
const distances = [20, 34, 56, 72, 80]
const maxNotifications = scales.length

export const SliderNotification = forwardRef(
	(
		{
			level = 0,
			zIndex,
			children,
			title,
			animationDuration,
			iconLeft,
			textLeft,
			iconRight,
			textRight,
			isRevealing,
			isRevealed,
			isConcealing,
			inputCss,
		}: SliderNotificationProperties,
		reference: ForwardedRef<HTMLDivElement>
	) => {
		const theme = useTheme()

		return (
			<div
				css={[
					css`
						width: 100%;
						height: 100%;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						position: fixed;
						display: flex;
						pointer-events: none;
					`,
					typeof zIndex === 'number' &&
						zIndex > 0 &&
						css`
							z-index: ${zIndex};
						`,
				]}
			>
				<div
					css={[
						css`
							margin: auto;
							margin-left: 0;
							margin-bottom: 140px;
							transform-origin: 0 50%;
							backface-visibility: hidden;
							transform-style: preserve-3d;
							transition:
								transform ${animationDuration / 1000}s,
								opacity ${animationDuration / 1000}s;
						`,
						level > 0 &&
							css`
								transform: translateY(
										${distances[Math.min(level, maxNotifications)]}px
									)
									scale(${scales[Math.min(level, maxNotifications)]});
							`,
						level >= 4 &&
							css`
								opacity: 0;
							`,
						inputCss,
					]}
				>
					<div
						ref={reference}
						aria-live='assertive'
						css={[
							css`
								background: ${theme.secondaryColor};
								padding: 15px 25px;
								padding-left: 20px;
								padding-top: 16px;
								pointer-events: all;
								border-radius: 0 24px 24px 0;
								transform: translate3d(-120%, 0, 0);
								transition: transform ${animationDuration / 1000}s;
								box-shadow:
									0 3px 8px rgba(0, 0, 0, 0.3),
									0 6px 10px rgba(0, 0, 0, 0.2),
									0 1px 0 rgba(0, 0, 0, 0.2);
							`,
							isRevealing &&
								css`
									transform: translate3d(0, 0, 0);
								`,
							isRevealed &&
								css`
									transform: translate3d(0, 0, 0);
								`,
							(isConcealing ?? level > 4) &&
								css`
									transform: translate3d(-120%, 0, 0);
								`,
							level > 0 &&
								css`
									&:after {
										content: '';
										background-color: rgba(
											0,
											0,
											0,
											${Math.min(
												1 - scales[Math.min(level, maxNotifications)],
												0.3
											)}
										);
										transition: background-color 0.37s;
										position: absolute;
										top: 0;
										right: 0;
										bottom: 0;
										left: 0;
										border-radius: 0 24px 24px 0;
									}
								`,
						]}
					>
						{children ?? (
							<Fragment>
								{iconLeft ? (
									<Icon
										size={16}
										icon={iconLeft}
										css={iconStyle}
										color={theme.secondaryForegroundColor}
									/>
								) : textLeft ? (
									<Font inputCss={stringIconStyle}>{textLeft}</Font>
								) : null}

								<Font
									semibold
									inputCss={css`
										color: ${theme.secondaryForegroundColor};
										font-size: 20px;
										line-height: 1em;
									`}
								>
									{title}
								</Font>

								{iconRight ? (
									<Icon
										size={16}
										icon={iconRight}
										css={iconStyle}
										color={theme.secondaryForegroundColor}
									/>
								) : textRight ? (
									<Font inputCss={stringIconStyle}>{textRight}</Font>
								) : null}
							</Fragment>
						)}
					</div>
				</div>
			</div>
		)
	}
)
