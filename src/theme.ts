import type {DefaultTheme} from 'styled-components'
import {createGlobalStyle, css} from 'styled-components'
import {type ColorScheme} from './styled.d'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const GlobalStyle = createGlobalStyle`
	.no-scroll {
		overflow: hidden;
	}

	html {
		background-color: ${({theme}) => theme.backgroundColor};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	html, body {
		margin: 0;
		padding: 0;
	}

	html, body, #root {
		width: 100%;
		height: 100%;
	}
`

export const buttonResetStyles = css`
	appearance: none;
	background: transparent;
	border: 0;
	margin: 0;
	padding: 0;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
`

export const listStyleReset = css`
	list-style-type: none;
	padding: 0;
	margin: 0;
`

export const cardStyles = css`
	display: flex;
	width: 100%;
	padding: 16px;
	border-radius: 6px;
	box-sizing: border-box;
	border: 0.7px solid rgba(0, 0, 0, 0.4);
	box-shadow:
		0px 0px 0px 1px rgba(0, 0, 0, 0.03),
		0px 1px 6px 0px rgba(0, 0, 0, 0.1),
		0px 1px 0px 0px rgba(0, 0, 0, 0.08);
`

export const colorScheme: ColorScheme = {
	// Primaries
	primaryOrange: '#F59D21',
	primaryNavy: '#2F3242',
	primaryRose: '#C1124C',
	// Shades -- No names
	white: '#FFFFFF',
	albuskjellGray: '#F7F7F7',
	balderGray: '#EAEAEA',
	codGray: '#BFC0C2',
	draugenGray: '#566071',
	ekofiskGray: '#2C2C36',
	friggGray: '#3C4048',
	gullfaksGray: '#757575',
	heidrunGray: '#D1D1D1',
	// Secondaries & Tertiaries
	secondaryTextGray: '#818181',
	secondaryBlue: '#565B8B',
	tertiaryBlue: '#E7E9F9',
	secondaryLilac: '#C6CCE6',
	tertiaryLilac: '#E4E7F2',
	secondaryMoonstone: '#639FAB',
	tertiaryMoonstone: '#B1CFD5',
	secondaryYellow: '#FFC400',
	tertiaryYellow: '#FFF3CC',
	secondaryCambridgeBlue: '#9DCBBA',
	tertiaryCambridgeBlue: '#CEE5DD',
	// Miscellaneous
	errorRed: '#EA1A1A',
	tertiaryErrorRed: '#FFDBDB',
	successGreen: '#09955B',
	tertiarySuccessGreen: '#DDF7E0',
	// Uncategorized
}

const {
	albuskjellGray,
	primaryOrange,
	primaryNavy,
	white,
	ekofiskGray,
	secondaryBlue,
	tertiaryBlue,
	secondaryYellow,
	tertiaryYellow,
	errorRed,
	tertiaryErrorRed,
	successGreen,
	tertiarySuccessGreen,
	friggGray,
	gullfaksGray,
} = colorScheme

export const defaultTheme: DefaultTheme = {
	...colorScheme,
	backgroundColor: white,
	foregroundColor: ekofiskGray,
	primaryColor: primaryOrange,
	primaryForegroundColor: primaryNavy,
	secondaryColor: primaryNavy,
	secondaryForegroundColor: white,
	secondaryAccentColor: primaryOrange,
	errorColor: errorRed,
	errorBackgroundColor: tertiaryErrorRed,
	errorForegroundColor: ekofiskGray,
	successColor: successGreen,
	successBackgroundColor: tertiarySuccessGreen,
	successForegroundColor: ekofiskGray,
	infoColor: secondaryBlue,
	infoBackgroundColor: tertiaryBlue,
	infoForegroundColor: ekofiskGray,
	warningColor: secondaryYellow,
	warningBackgroundColor: tertiaryYellow,
	warningForegroundColor: ekofiskGray,
	elementColor: white,
	elementForegroundColor: ekofiskGray,
	skeletonColor: '#c3c3c3',
	skeletonForegroundColor: '#b9b9b9',
	tabBackgroundColor: albuskjellGray,
	searchFieldBackgroundColor: white,
	outlineColor: '#00000033',
	focusColor: `${primaryOrange}80`,
	defaultIconColor: ekofiskGray,
	cardBackgroundColor: white,
	goInviteIconFill: primaryNavy,
	inputFieldStroke: `${primaryNavy}B3`,
	disabledColor: gullfaksGray,
}

export const accentTheme = {
	...defaultTheme,
	backgroundColor: primaryNavy,
	foregroundColor: white,
	secondaryForegroundColor: ekofiskGray,
	secondaryAccentColor: primaryNavy,
	errorColor: errorRed,
	skeletonColor: ekofiskGray,
	skeletonForegroundColor: '#24242c',
	tabBackgroundColor: white,
	outlineColor: '#FFFFFF33',
	cardBackgroundColor: friggGray,
	goInviteIconFill: white,
	inputFieldStroke: white,
}
