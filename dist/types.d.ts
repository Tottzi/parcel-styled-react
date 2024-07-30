import React, { HTMLAttributes, ComponentPropsWithoutRef, FC, ButtonHTMLAttributes, DetailedHTMLProps, ReactElement, ReactNode, ProviderProps, ChangeEvent, HTMLProps } from "react";
import { Styled, DefaultTheme } from "styled-components";
import { CssFunction } from "../../styled.d";
import { ColorScheme } from "./styled.d";
export type FontLevels = 1 | 2 | 3;
export enum FontType {
    heading = "heading",
    paragraph = "paragraph",
    quote = "quote",
    mono = "mono",
    default = "default"
}
export type FontProperties = HTMLAttributes<HTMLSpanElement> & {
    as?: keyof Styled;
    type?: FontType;
    level?: FontLevels;
    semibold?: boolean;
    bold?: boolean;
    italic?: boolean;
    inputCss?: CssFunction;
};
export const fontStyles: import("styled-components").RuleSet<object>;
export const Font: ({ as, type, level, semibold, bold, italic, inputCss, ...rest }: FontProperties) => React.JSX.Element;
export const Article: (properties: HTMLAttributes<HTMLElement>) => React.JSX.Element;
export const Heading: (properties: Omit<FontProperties, "type">) => React.JSX.Element;
export const Paragraph: (properties: Omit<FontProperties, "type">) => React.JSX.Element;
export const Quote: (properties: Omit<FontProperties, "type">) => React.JSX.Element;
export const Mono: (properties: Omit<FontProperties, "type">) => React.JSX.Element;
export enum IconType {
    activityCircle = "activityCircle",
    aerobics = "aerobics",
    alert = "alert",
    alertFilled = "alertFilled",
    arrowDown = "arrowDown",
    arrowUp = "arrowUp",
    bell = "bell",
    bolt = "bolt",
    boltCircle = "boltCircle",
    boxing = "boxing",
    cameraPlus = "cameraPlus",
    check = "check",
    checkCircle = "checkCircle",
    chevronDown = "chevronDown",
    chevronLeft = "chevronLeft",
    chevronLeftCircle = "chevronLeftCircle",
    chevronRight = "chevronRight",
    chevronRightCircle = "chevronRightCircle",
    chevronUp = "chevronUp",
    circleExercise = "circleExercise",
    clipboardCount = "clipboardCount",
    comment = "comment",
    contact = "contact",
    contactFilled = "contactFilled",
    contactList = "contactList",
    contactPlus = "contactPlus",
    cross = "cross",
    crossCircle = "crossCircle",
    cycling = "cycling",
    dancing = "dancing",
    delete = "delete",
    drag = "drag",
    download = "download",
    dumbbell = "dumbbell",
    dumbbellCircle = "dumbbellCircle",
    duplicate = "duplicate",
    edit = "edit",
    ellipseMachine = "ellipseMachine",
    envelope = "envelope",
    exclamationMark = "exclamationMark",
    exercise = "exercise",
    eye = "eye",
    faceFrown = "faceFrown",
    faceMeh = "faceMeh",
    faceSmile = "faceSmile",
    female = "female",
    file = "file",
    filter = "filter",
    flip = "flip",
    gardening = "gardening",
    goActive = "goActive",
    goDeactivated = "goDeactivated",
    goInvite = "goInvite",
    goPending = "goPending",
    golf = "golf",
    grid = "grid",
    history = "history",
    home = "home",
    homeFilled = "homeFilled",
    horizontalEllipsis = "horizontalEllipsis",
    iceSkating = "iceSkating",
    indoorSpinning = "indoorSpinning",
    info = "info",
    infoCircle = "infoCircle",
    kayak = "kayak",
    library = "library",
    libraryFilled = "libraryFilled",
    link = "link",
    lock = "lock",
    male = "male",
    menu = "menu",
    menuFilled = "menuFilled",
    messages = "messages",
    messagesCircle = "messagesCircle",
    minusCircle = "minusCircle",
    nonbinary = "nonbinary",
    paperPlaneCircle = "paperPlaneCircle",
    phoneCircle = "phoneCircle",
    pilates = "pilates",
    plan = "plan",
    placeholder = "placeholder",
    plusCircle = "plusCircle",
    plusStroke = "plusStroke",
    printer = "printer",
    profile = "profile",
    program = "program",
    programCircle = "programCircle",
    progress = "progress",
    qrCode = "qrCode",
    questionMark = "questionMark",
    racketGame = "racketGame",
    related = "related",
    riding = "riding",
    rotate = "rotate",
    rollerSkating = "rollerSkating",
    roundedCross = "roundedCross",
    roundedMinus = "roundedMinus",
    roundedPlus = "roundedPlus",
    rowing = "rowing",
    rowingMachine = "rowingMachine",
    running = "running",
    search = "search",
    send = "send",
    settings = "settings",
    share = "share",
    stepMachine = "stepMachine",
    today = "today",
    trend = "trend",
    trendDown = "trendDown",
    trendUp = "trendUp",
    skiing = "skiing",
    skis = "skis",
    skippingRope = "skippingRope",
    smileCircle = "smileCircle",
    snowboarding = "snowboarding",
    star = "star",
    starFilled = "starFilled",
    strengthTraining = "strengthTraining",
    swimming = "swimming",
    table = "table",
    tag = "tag",
    teamSport = "teamSport",
    time = "time",
    timeCircle = "timeCircle",
    verticalEllipsis = "verticalEllipsis",
    video = "video",
    walk = "walk",
    walkingOnStairs = "walkingOnStairs",
    yoga = "yoga"
}
export enum IconSize {
    small = 7,
    medium = 9,
    large = 11,
    xlarge = 16,
    xxlarge = 20
}
export type IconProperties = ComponentPropsWithoutRef<'svg'>;
export type IconComponentProperties = IconProperties & {
    title?: string;
    size?: number;
    icon: IconType;
    inputCss?: CssFunction;
};
export const iconComponents: {
    [Key in keyof typeof IconType]: FC<IconProperties>;
};
export const Icon: (properties: Omit<IconComponentProperties, "css">) => React.JSX.Element;
export const GlobalStyle: import("react").NamedExoticComponent<import("styled-components").ExecutionProps & object>;
export const buttonResetStyles: import("styled-components").RuleSet<object>;
export const listStyleReset: import("styled-components").RuleSet<object>;
export const cardStyles: import("styled-components").RuleSet<object>;
export const colorScheme: ColorScheme;
export const defaultTheme: DefaultTheme;
export const accentTheme: {
    backgroundColor: string;
    foregroundColor: string;
    secondaryForegroundColor: string;
    secondaryAccentColor: string;
    errorColor: string;
    skeletonColor: string;
    skeletonForegroundColor: string;
    tabBackgroundColor: string;
    outlineColor: string;
    cardBackgroundColor: string;
    goInviteIconFill: string;
    inputFieldStroke: string;
    primaryColor: string;
    primaryForegroundColor: string;
    secondaryColor: string;
    errorBackgroundColor: string;
    errorForegroundColor: string;
    successColor: string;
    successBackgroundColor: string;
    successForegroundColor: string;
    infoColor: string;
    infoBackgroundColor: string;
    infoForegroundColor: string;
    warningColor: string;
    warningBackgroundColor: string;
    warningForegroundColor: string;
    elementColor: string;
    elementForegroundColor: string;
    searchFieldBackgroundColor: string;
    focusColor: string;
    defaultIconColor: string;
    disabledColor: string;
    primaryOrange: string;
    primaryNavy: string;
    primaryRose: string;
    white: string;
    albuskjellGray: string;
    balderGray: string;
    codGray: string;
    ekofiskGray: string;
    draugenGray: string;
    friggGray: string;
    gullfaksGray: string;
    heidrunGray: string;
    secondaryTextGray: string;
    secondaryBlue: string;
    tertiaryBlue: string;
    secondaryLilac: string;
    tertiaryLilac: string;
    secondaryMoonstone: string;
    tertiaryMoonstone: string;
    secondaryYellow: string;
    tertiaryYellow: string;
    secondaryCambridgeBlue: string;
    tertiaryCambridgeBlue: string;
    errorRed: string;
    tertiaryErrorRed: string;
    successGreen: string;
    tertiarySuccessGreen: string;
};
type ReactButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export enum ButtonSize {
    small = "small",
    medium = "medium",
    large = "large",
    xlarge = "xlarge"
}
export const defaultButtonSize = ButtonSize.small;
export enum ButtonVariant {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    stripped = "stripped"
}
export const defaultButtonVariant = ButtonVariant.primary;
export type ButtonProperties = ReactButton & {
    inputCss?: CssFunction;
    inputIconCss?: CssFunction;
    inputFontCss?: CssFunction;
    size?: ButtonSize;
    variant?: ButtonVariant;
    label?: ReactNode | string;
    children?: ReactNode;
    childrenLeft?: ReactNode;
    childrenRight?: ReactNode;
    iconSize?: IconSize | number;
    iconLeft?: IconType;
    iconRight?: IconType;
    iconColor?: string;
};
export const IconContainer: ({ variant, size, children, inputCss, }: {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactElement;
    inputCss?: CssFunction;
}) => React.JSX.Element;
export const Button: ({ inputCss, inputIconCss, inputFontCss, type, size, variant, label, childrenLeft, childrenRight, iconLeft, iconRight, iconColor, iconSize, onClick, children, ...rest }: ButtonProperties) => React.JSX.Element;
export enum ModalVariant {
    error = "error",
    success = "success",
    warning = "warning",
    info = "info"
}
export type ModalType = {
    /** Modal ID. Cannot be set manually, but is given automatically */
    id?: number;
    title?: string;
    titleIcon?: IconType;
    message?: string;
    variant: ModalVariant;
    cancelLabel?: string;
    confirmLabel?: string;
    isCancelling?: boolean;
    isConfirming?: boolean;
    isClosing?: boolean;
    /** Enables or disables the cancel button */
    hasCancel?: boolean;
    /** Disables closing without pressing an action */
    forceDecision?: boolean;
    /** Modal contents below the title and message, above the buttons */
    Contents?: () => JSX.Element;
    onOpen?: () => void;
    onCancel?: () => void;
    onConfirm?: (value?: string) => void;
    onClose?: () => void;
};
export type ModalProperties = Omit<ModalType, 'onOpen' | 'onCancel' | 'onConfirm' | 'onClose'> & {
    animationDuration: number;
    isRevealing?: boolean;
    isRevealed?: boolean;
    isConcealing?: boolean;
    isClosing?: boolean;
    onOpen: (id: number) => void;
    onCancel: (id: number) => void;
    onConfirm: (id: number, data?: string) => void;
    onClose: (id: number) => void;
};
export type ModalVariantProperties = Omit<ModalProperties, 'onOpen' | 'onCancel' | 'onConfirm' | 'onClose'> & {
    onOpen: () => void;
    onCancel: () => void;
    onConfirm: (value?: string) => void;
    onClose: () => void;
};
type ModalResult = 'confirmed' | 'cancelled' | 'closed' | 'undefined';
type ModalProviderProperties = {
    createModal?: (modal: ModalType) => Promise<ModalResult>;
};
export const ModalContext: import("react").Context<ModalProviderProperties>;
export const ModalConsumer: import("react").Consumer<ModalProviderProperties>;
export const ModalProvider: (properties: Partial<ProviderProps<ModalProviderProperties>>) => import("react").JSX.Element;
export const useModals: () => ModalProviderProperties;
export const useCreateModal: () => (modal: ModalType) => Promise<ModalResult>;
export enum NotificationVariant {
    default = "default",
    slider = "slider",
    error = "error",
    success = "success",
    warning = "warning",
    info = "info"
}
export type NotificationType = {
    /** Notification ID. Cannot be set manually, but is given automatically */
    id?: number;
    children?: ReactNode;
    title?: string;
    message?: string;
    iconLeft?: IconType;
    textLeft?: string;
    iconRight?: IconType;
    isCloseButton?: boolean;
    textRight?: string;
    variant?: NotificationVariant;
    /** In milliseconds, how long the notification stays visible */
    lifetime?: number;
    isClosing?: boolean;
    isAction?: boolean;
    onClose?: () => void;
};
export type NotificationProperties = Omit<NotificationType, 'onClose'> & {
    level?: number;
    zIndex?: number;
    animationDuration: number;
    isRevealing?: boolean;
    isRevealed?: boolean;
    isConcealing?: boolean;
    isCloseButton?: boolean;
    onClose: (id: number) => void;
};
export const Notification: (properties: Omit<NotificationProperties, "animationDuration" | "isRevealing" | "isConcealing">) => React.JSX.Element | null;
type NotificationProviderProperties = {
    createNotification?: (notification: NotificationType) => number;
    createNotifications?: (notifications: NotificationType[]) => number[];
};
export const NotificationContext: React.Context<NotificationProviderProperties>;
export const NotificationConsumer: React.Consumer<NotificationProviderProperties>;
export const NotificationProvider: (properties: Partial<ProviderProps<NotificationProviderProperties>>) => React.JSX.Element;
export const useCreateNotification: () => ((notification: NotificationType) => number) | (() => undefined);
export const useCreateNotifications: () => ((notifications: NotificationType[]) => number[]) | (() => undefined);
type TextFieldProperties = {
    label: string;
    type?: string;
    floatingLabel?: boolean;
    listInput?: boolean;
    value: string;
    error?: Error;
    disabled?: boolean;
    maxLength?: number;
    minRows?: number;
    maxRows?: number;
    shrinksOnBlur?: boolean;
    inputCss?: CssFunction;
    inputFieldCss?: CssFunction;
    isRequired?: boolean;
    isLocked?: boolean;
    childrenLeft?: ReactNode;
    placeholder?: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};
type HtmlTextInputProperties = HTMLProps<HTMLInputElement> & HTMLProps<HTMLTextAreaElement>;
type InputFieldProperties = Omit<HtmlTextInputProperties, 'value' | 'onChange' | 'onKeyDown'> & Omit<TextFieldProperties, 'label' | 'floatingLabel' | 'onChange'> & {
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    $inputfieldid?: string;
};
export const ListInputField: ({ value, inputCss, childrenLeft, onFocus, onBlur, error, ...rest }: InputFieldProperties) => import("react").JSX.Element;
export const inputFieldStyles: import("styled-components").RuleSet<object>;
export const TextField: ({ label, value, error, maxLength, minRows, maxRows, floatingLabel, shrinksOnBlur, inputCss, inputFieldCss, isRequired, childrenLeft, listInput, placeholder, disabled, type, isLocked, onChange, onFocus, onBlur, onKeyDown, }: TextFieldProperties) => import("react").JSX.Element;
export type SearchFieldProperties = {
    placeholder?: string;
    value: string;
    inputCss?: CssFunction;
    iconLeft?: IconType;
    hasClearButton?: boolean;
    suggestions?: string[];
    autoFocus?: boolean;
    onChange: (value: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
};
export const SearchField: import("react").ForwardRefExoticComponent<SearchFieldProperties & import("react").RefAttributes<HTMLInputElement>>;
export * from './styled.d';

//# sourceMappingURL=types.d.ts.map
