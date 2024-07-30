import {type ForwardedRef, Fragment, forwardRef} from 'react'
import {css, useTheme} from 'styled-components'
import {Heading, Paragraph} from '../Font'
import {
	BaseNotification,
	BaseNotificationContainer,
	getVariantDetails,
} from './BaseNotification'
import {type NotificationProperties} from './types'

type NotificationSnackBarProperties = Omit<
	NotificationProperties,
	'onClose'
> & {
	onClose: () => void
}

export const NotificationSnackBar = forwardRef(
	(
		{
			title,
			message,
			onClose,
			isCloseButton,
			variant,
			...rest
		}: NotificationSnackBarProperties,
		reference: ForwardedRef<HTMLDivElement>
	) => {
		const theme = useTheme()
		const {colors} = getVariantDetails(theme, variant)

		return (
			<BaseNotification
				{...rest}
				ref={reference}
				message={message}
				inputCss={css`
					background: #fff;
				`}
				onClose={onClose}
			>
				<BaseNotificationContainer
					isCloseButton={isCloseButton}
					variant={variant}
					content={
						<Fragment>
							<Heading
								semibold
								level={3}
								inputCss={css`
									line-height: 1em;
									color: ${colors.textColor};
								`}
							>
								{title}
							</Heading>
							{message ? (
								<Paragraph
									level={2}
									inputCss={css`
										line-height: 1.5em;
										color: ${colors.textColor};
									`}
								>
									{message}
								</Paragraph>
							) : null}
						</Fragment>
					}
					onClose={onClose}
				/>
			</BaseNotification>
		)
	}
)
