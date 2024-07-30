import {type CSSProp} from 'styled-components'

declare module 'react' {
	export interface Attributes {
		css?: CSSProp
	}
}

export type CssFunction = CSSProp

export type StyleVariants<Type extends string | number | symbol> = Partial<
	Record<Type, CssFunction>
>

export type ColorScheme = {
	// Primaries
	primaryOrange: string
	primaryNavy: string
	primaryRose: string
	// Shades -- No names
	white: string
	albuskjellGray: string
	balderGray: string
	codGray: string
	ekofiskGray: string
	draugenGray: string
	friggGray: string
	gullfaksGray: string
	heidrunGray: string
	// Secondaries & Tertiaries
	secondaryTextGray: string
	secondaryBlue: string
	tertiaryBlue: string
	secondaryLilac: string
	tertiaryLilac: string
	secondaryMoonstone: string
	tertiaryMoonstone: string
	secondaryYellow: string
	tertiaryYellow: string
	secondaryCambridgeBlue: string
	tertiaryCambridgeBlue: string
	// Miscellaneous
	errorRed: string
	tertiaryErrorRed: string
	successGreen: string
	tertiarySuccessGreen: string
}

declare module 'styled-components' {
	export interface DefaultTheme extends ColorScheme {
		backgroundColor: string
		foregroundColor: string
		primaryColor: string
		primaryForegroundColor: string
		secondaryColor: string
		secondaryForegroundColor: string
		secondaryAccentColor: string
		errorColor: string
		errorBackgroundColor: string
		errorForegroundColor: string
		successColor: string
		successBackgroundColor: string
		successForegroundColor: string
		infoColor: string
		infoBackgroundColor: string
		infoForegroundColor: string
		warningColor: string
		warningBackgroundColor: string
		warningForegroundColor: string
		elementColor: string
		elementForegroundColor: string
		skeletonColor: string
		skeletonForegroundColor: string
		tabBackgroundColor: string
		searchFieldBackgroundColor: string
		outlineColor: string
		focusColor: string
		defaultIconColor: string
		cardBackgroundColor: string
		goInviteIconFill: string
		inputFieldStroke: string
		disabledColor: string
	}
}
