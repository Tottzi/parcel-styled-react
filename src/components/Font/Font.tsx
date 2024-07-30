import type {HTMLAttributes} from 'react'
import type {Styled} from 'styled-components'
import {css, useTheme} from 'styled-components'
import styled from 'styled-components'
import type {CssFunction, StyleVariants} from '../../styled.d'
import {opacity} from '../../utilities'
import React from 'react'

export type FontLevels = 1 | 2 | 3

export enum FontType {
	heading = 'heading',
	paragraph = 'paragraph',
	quote = 'quote',
	mono = 'mono',
	default = 'default',
}

const typeStyles: StyleVariants<FontType> = {
	[FontType.heading]: css`
		font-weight: 600;
		line-height: 1.1em;
	`,
	[FontType.quote]: css`
		position: relative;
		padding: 0.5em;
		padding-left: 1.5em;

		&:before {
			content: '';
			background: ${({theme}) => opacity(theme.foregroundColor, 0.25)};
			width: 4px;
			height: 100%;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			border-radius: 3px;
		}
	`,
	[FontType.mono]: css`
		font-family: monospace;
	`,
}

/* eslint-disable @typescript-eslint/naming-convention */

const levelStyles: Partial<Record<FontLevels, StyleVariants<FontType>>> = {
	1: {
		[FontType.heading]: css`
			font-size: 30px;
		`,
		[FontType.paragraph]: css`
			font-size: 18px;
		`,
		[FontType.quote]: css`
			font-size: 20px;
		`,
		[FontType.mono]: css`
			font-size: 15px;
		`,
	},
	2: {
		[FontType.heading]: css`
			font-size: 20px;
		`,
		[FontType.paragraph]: css`
			font-size: 16px;
		`,
		[FontType.quote]: css`
			font-size: 18px;
		`,
		[FontType.mono]: css`
			font-size: 13px;
		`,
	},
	3: {
		[FontType.heading]: css`
			font-size: 16px;
		`,
		[FontType.paragraph]: css`
			font-size: 13px;
		`,
		[FontType.quote]: css`
			font-size: 15px;
		`,
		[FontType.mono]: css`
			font-size: 12px;
		`,
	},
}

/* eslint-enable */

export type FontProperties = HTMLAttributes<HTMLSpanElement> & {
	as?: keyof Styled
	type?: FontType
	level?: FontLevels
	semibold?: boolean
	bold?: boolean
	italic?: boolean
	inputCss?: CssFunction
}

export const fontStyles = css`
	font-family: sans-serif;
	font-weight: 400;
	font-style: normal;
	line-height: 1.5em;
	overflow: hidden;
	text-overflow: ellipsis;
`

const Component = styled.span``

export const Font = ({
	as,
	type = FontType.default,
	level = 1,
	semibold = false,
	bold = false,
	italic = false,
	inputCss,
	...rest
}: FontProperties) => {
	const theme = useTheme()
	let tag: keyof Styled

	switch (type) {
		case FontType.heading: {
			switch (level) {
				case 3: {
					tag = 'h1'
					break
				}

				case 2: {
					tag = 'h2'
					break
				}

				default: {
					tag = 'h1'
				}
			}

			break
		}

		case FontType.quote: {
			tag = 'blockquote'
			break
		}

		case FontType.paragraph: {
			tag = 'p'
			break
		}

		default: {
			if (semibold ?? bold) {
				tag = 'strong'
			} else if (italic) {
				tag = 'em'
			} else {
				tag = 'span'
			}
		}
	}

	return (
		<Component
			as={as ?? tag}
			data-level={level}
			css={[
				css`
					color: ${theme.foregroundColor};
					margin: 0;
					padding: 0;

					a {
						color: ${theme.foregroundColor};
						text-decoration: underline;
					}

					@media (hover: hover) {
						a:hover {
							color: ${opacity(theme.foregroundColor, 0.8)};
							text-decoration: none;
						}
					}
				`,
				fontStyles,
				typeStyles[type],
				levelStyles[level]?.[type],
				semibold &&
					css`
						font-weight: 600;
					`,
				bold &&
					css`
						font-weight: 800;
					`,
				italic &&
					css`
						font-style: italic;
					`,
				inputCss,
			]}
			{...rest}
		/>
	)
}

export const Article = (properties: HTMLAttributes<HTMLElement>) => (
	<article
		{...properties}
		css={css`
			font-family: sans-serif;
			h1 + p {
				margin-top: 1em;
			}

			p + h1 {
				margin-top: 1.5em;
			}

			h2 + p {
				margin-top: 0.8em;
			}

			p + h2 {
				margin-top: 1.2em;
			}

			p + p {
				margin-top: 1em;
			}

			p[data-level='1'] + p[data-level='2'] {
				margin-top: 1.5em;
			}

			p[data-level='2'] + p[data-level='3'] {
				margin-top: 2em;
			}

			p + blockquote {
				margin-top: 1em;
			}

			blockquote + p {
				margin-top: 1em;
			}
		`}
	/>
)

export const Heading = (properties: Omit<FontProperties, 'type'>) => (
	<Font {...properties} type={FontType.heading} />
)

export const Paragraph = (properties: Omit<FontProperties, 'type'>) => (
	<Font {...properties} type={FontType.paragraph} />
)

export const Quote = (properties: Omit<FontProperties, 'type'>) => (
	<Font {...properties} type={FontType.quote} />
)

export const Mono = (properties: Omit<FontProperties, 'type'>) => (
	<Font {...properties} type={FontType.mono} />
)
