import type {FC} from 'react'
import {css, useTheme} from 'styled-components'
import ActivityCircleIcon from './icons/ActivityCircle'
import AerobicsIcon from './icons/Aerobics'
import AlertIcon from './icons/Alert'
import AlertFilledIcon from './icons/AlertFilled'
import ArrowDownIcon from './icons/ArrowDown'
import ArrowUpIcon from './icons/ArrowUp'
import BellIcon from './icons/Bell'
import BoltIcon from './icons/Bolt'
import BoltCircleIcon from './icons/BoltCircle'
import BoxingIcon from './icons/Boxing'
import CameraPlusIcon from './icons/CameraPlus'
import CheckIcon from './icons/Check'
import CheckCircleIcon from './icons/CheckCircle'
import ChevronDownIcon from './icons/ChevronDown'
import ChevronLeftIcon from './icons/ChevronLeft'
import ChevronLeftCircleIcon from './icons/ChevronLeftCircle'
import ChevronRightIcon from './icons/ChevronRight'
import ChevronRightCircleIcon from './icons/ChevronRightCircle'
import ChevronUpIcon from './icons/ChevronUp'
import CircleExerciseIcon from './icons/CircleExercise'
import ClipboardCountIcon from './icons/ClipboardCount'
import CommentIcon from './icons/Comment'
import ContactIcon from './icons/Contact'
import ContactFilledIcon from './icons/ContactFilled'
import ContactListIcon from './icons/ContactList'
import ContactPlusIcon from './icons/ContactPlus'
import CrossIcon from './icons/Cross'
import CrossCircleIcon from './icons/CrossCircle'
import CyclingIcon from './icons/Cycling'
import DancingIcon from './icons/Dancing'
import DeleteIcon from './icons/Delete'
import DownloadIcon from './icons/Download'
import DragIcon from './icons/Drag'
import DumbbellIcon from './icons/Dumbbell'
import DumbbellCircleIcon from './icons/DumbbellCircle'
import DuplicateIcon from './icons/Duplicate'
import EditIcon from './icons/Edit'
import EllipseMachineIcon from './icons/EllipseMachine'
import EnvelopeIcon from './icons/Envelope'
import ExclamationMarkIcon from './icons/ExclamationMark'
import ExerciseIcon from './icons/Exercise'
import EyeIcon from './icons/Eye'
import FaceFrownIcon from './icons/FaceFrown'
import FaceMehIcon from './icons/FaceMeh'
import FaceSmileIcon from './icons/FaceSmile'
import FemaleIcon from './icons/Female'
import FileIcon from './icons/File'
import FilterIcon from './icons/Filter'
import FlipIcon from './icons/Flip'
import GardeningIcon from './icons/Gardening'
import GoActiveIcon from './icons/GoActive'
import GoDeactivatedIcon from './icons/GoDeactivated'
import GoInviteIcon from './icons/GoInvite'
import GoPendingIcon from './icons/GoPending'
import GolfIcon from './icons/Golf'
import GridIcon from './icons/Grid'
import HistoryIcon from './icons/History'
import HomeIcon from './icons/Home'
import HomeFilledIcon from './icons/HomeFilled'
import HorizontalEllipsisIcon from './icons/HorizontalEllipsis'
import IceSkatingIcon from './icons/IceSkating'
import IndoorSpinningIcon from './icons/IndoorSpinning'
import InfoIcon from './icons/Info'
import InfoCircleIcon from './icons/InfoCircle'
import KayakIcon from './icons/Kayak'
import LibraryIcon from './icons/Library'
import LibraryFilledIcon from './icons/LibraryFilled'
import LinkIcon from './icons/Link'
import LockIcon from './icons/Lock'
import MaleIcon from './icons/Male'
import MenuIcon from './icons/Menu'
import MenuFilledIcon from './icons/MenuFilled'
import MessagesIcon from './icons/Messages'
import MessagesCircleIcon from './icons/MessagesCircle'
import MinusCircleIcon from './icons/MinusCircle'
import NonBinaryIcon from './icons/NonBinary'
import PaperPlaneCircleIcon from './icons/PaperPlaneCircle'
import PhoneCircleIcon from './icons/PhoneCircle'
import PilatesIcon from './icons/Pilates'
import PlaceholderIcon from './icons/Placeholder'
import PlanIcon from './icons/Plan'
import PlusCircleIcon from './icons/PlusCircle'
import PlusStrokeIcon from './icons/PlusStroke'
import PrinterIcon from './icons/Printer'
import ProfileIcon from './icons/Profile'
import ProgramIcon from './icons/Program'
import ProgramCircleIcon from './icons/ProgramCircle'
import ProgressIcon from './icons/Progress'
import QrCodeIcon from './icons/QrCode'
import QuestionMarkIcon from './icons/QuestionMark'
import RacketGameIcon from './icons/RacketGame'
import RelatedIcon from './icons/Related'
import RidingIcon from './icons/Riding'
import RollerSkatingIcon from './icons/RollerSkating'
import RotateIcon from './icons/Rotate'
import RoundedCrossIcon from './icons/RoundedCross'
import RoundedMinusIcon from './icons/RoundedMinus'
import RoundedPlusIcon from './icons/RoundedPlus'
import RowingIcon from './icons/Rowing'
import RowingMachineIcon from './icons/RowingMachine'
import RunningIcon from './icons/Running'
import SearchIcon from './icons/Search'
import SendIcon from './icons/Send'
import SettingsIcon from './icons/Settings'
import ShareIcon from './icons/Share'
import SkiingIcon from './icons/Skiing'
import SkippingRopeIcon from './icons/SkippingRope'
import SkisIcon from './icons/Skis'
import SmileCircleIcon from './icons/SmileCircle'
import SnowboardingIcon from './icons/Snowboarding'
import StarIcon from './icons/Star'
import StarFilledIcon from './icons/StarFilled'
import StepMachineIcon from './icons/StepMachine'
import StrengthTrainingIcon from './icons/StrengthTraining'
import SwimmingIcon from './icons/Swimming'
import TableIcon from './icons/Table'
import TagIcon from './icons/Tag'
import TeamSportIcon from './icons/TeamSport'
import TimeIcon from './icons/Time'
import TimeCircleIcon from './icons/TimeCircle'
import TodayIcon from './icons/Today'
import TrendIcon from './icons/Trend'
import TrendDownIcon from './icons/TrendDown'
import TrendUpIcon from './icons/TrendUp'
import VerticalEllipsisIcon from './icons/VerticalEllipsis'
import VideoIcon from './icons/Video'
import WalkIcon from './icons/Walk'
import WalkingOnStairsIcon from './icons/WalkingOnStairs'
import YogaIcon from './icons/Yoga'
import type {IconComponentProperties, IconProperties, IconType} from './types'
import React from 'react'

export const iconComponents: {
	[Key in keyof typeof IconType]: FC<IconProperties>
} = {
	activityCircle: ActivityCircleIcon,
	aerobics: AerobicsIcon,
	alert: AlertIcon,
	alertFilled: AlertFilledIcon,
	arrowDown: ArrowDownIcon,
	arrowUp: ArrowUpIcon,
	bell: BellIcon,
	bolt: BoltIcon,
	boltCircle: BoltCircleIcon,
	boxing: BoxingIcon,
	cameraPlus: CameraPlusIcon,
	check: CheckIcon,
	checkCircle: CheckCircleIcon,
	chevronDown: ChevronDownIcon,
	chevronLeft: ChevronLeftIcon,
	chevronLeftCircle: ChevronLeftCircleIcon,
	chevronRight: ChevronRightIcon,
	chevronRightCircle: ChevronRightCircleIcon,
	chevronUp: ChevronUpIcon,
	circleExercise: CircleExerciseIcon,
	clipboardCount: ClipboardCountIcon,
	comment: CommentIcon,
	contact: ContactIcon,
	contactFilled: ContactFilledIcon,
	contactList: ContactListIcon,
	contactPlus: ContactPlusIcon,
	cross: CrossIcon,
	crossCircle: CrossCircleIcon,
	cycling: CyclingIcon,
	dancing: DancingIcon,
	delete: DeleteIcon,
	drag: DragIcon,
	download: DownloadIcon,
	duplicate: DuplicateIcon,
	dumbbell: DumbbellIcon,
	dumbbellCircle: DumbbellCircleIcon,
	edit: EditIcon,
	ellipseMachine: EllipseMachineIcon,
	envelope: EnvelopeIcon,
	exclamationMark: ExclamationMarkIcon,
	exercise: ExerciseIcon,
	eye: EyeIcon,
	faceFrown: FaceFrownIcon,
	faceMeh: FaceMehIcon,
	faceSmile: FaceSmileIcon,
	female: FemaleIcon,
	file: FileIcon,
	filter: FilterIcon,
	flip: FlipIcon,
	gardening: GardeningIcon,
	goActive: GoActiveIcon,
	goDeactivated: GoDeactivatedIcon,
	goInvite: GoInviteIcon,
	goPending: GoPendingIcon,
	golf: GolfIcon,
	grid: GridIcon,
	history: HistoryIcon,
	home: HomeIcon,
	homeFilled: HomeFilledIcon,
	horizontalEllipsis: HorizontalEllipsisIcon,
	iceSkating: IceSkatingIcon,
	indoorSpinning: IndoorSpinningIcon,
	info: InfoIcon,
	infoCircle: InfoCircleIcon,
	kayak: KayakIcon,
	library: LibraryIcon,
	libraryFilled: LibraryFilledIcon,
	link: LinkIcon,
	lock: LockIcon,
	male: MaleIcon,
	menu: MenuIcon,
	menuFilled: MenuFilledIcon,
	messages: MessagesIcon,
	messagesCircle: MessagesCircleIcon,
	minusCircle: MinusCircleIcon,
	nonbinary: NonBinaryIcon,
	paperPlaneCircle: PaperPlaneCircleIcon,
	phoneCircle: PhoneCircleIcon,
	pilates: PilatesIcon,
	plan: PlanIcon,
	placeholder: PlaceholderIcon,
	plusCircle: PlusCircleIcon,
	plusStroke: PlusStrokeIcon,
	printer: PrinterIcon,
	profile: ProfileIcon,
	program: ProgramIcon,
	programCircle: ProgramCircleIcon,
	progress: ProgressIcon,
	qrCode: QrCodeIcon,
	questionMark: QuestionMarkIcon,
	racketGame: RacketGameIcon,
	related: RelatedIcon,
	riding: RidingIcon,
	rotate: RotateIcon,
	rollerSkating: RollerSkatingIcon,
	roundedCross: RoundedCrossIcon,
	roundedMinus: RoundedMinusIcon,
	roundedPlus: RoundedPlusIcon,
	rowing: RowingIcon,
	rowingMachine: RowingMachineIcon,
	running: RunningIcon,
	search: SearchIcon,
	send: SendIcon,
	settings: SettingsIcon,
	share: ShareIcon,
	stepMachine: StepMachineIcon,
	today: TodayIcon,
	trend: TrendIcon,
	trendDown: TrendDownIcon,
	trendUp: TrendUpIcon,
	skiing: SkiingIcon,
	skis: SkisIcon,
	skippingRope: SkippingRopeIcon,
	smileCircle: SmileCircleIcon,
	snowboarding: SnowboardingIcon,
	star: StarIcon,
	starFilled: StarFilledIcon,
	strengthTraining: StrengthTrainingIcon,
	swimming: SwimmingIcon,
	table: TableIcon,
	tag: TagIcon,
	teamSport: TeamSportIcon,
	time: TimeIcon,
	timeCircle: TimeCircleIcon,
	verticalEllipsis: VerticalEllipsisIcon,
	video: VideoIcon,
	walk: WalkIcon,
	walkingOnStairs: WalkingOnStairsIcon,
	yoga: YogaIcon,
}

const IconWrapper = ({
	icon,
	color,
	title,
	size,
	children,
	...rest
}: IconComponentProperties) => {
	const theme = useTheme()
	const IconComponent = iconComponents[icon]

	if (!IconComponent) {
		return null
	}

	const properties = {...rest}

	if (size) {
		properties.width = size
		properties.height = size
	}

	return (
		<IconComponent
			aria-hidden
			{...properties}
			color={color ?? theme.defaultIconColor}
		>
			{title ? <title>{title}</title> : null}
			{children}
		</IconComponent>
	)
}

export const Icon = (properties: Omit<IconComponentProperties, 'css'>) => (
	<IconWrapper
		{...properties}
		css={[
			css`
				transform: translateZ(0);
			`,
			properties.inputCss,
		]}
	/>
)
