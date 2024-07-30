import type {Meta, StoryObj} from '@storybook/react'
import {Icon} from './Icon'
import {IconType} from './types'

const meta: Meta<typeof Icon> = {
	component: Icon,
	argTypes: {
		icon: {
			defaultValue: IconType.cameraPlus,
		},
		size: {
			defaultValue: 24,
			description: 'The size of the icon',
		},
		color: {
			description: 'The color of the icon',
			control: {type: 'color'},
		},
		fill: {
			description: 'The fill of the icon',
			control: {type: 'color'},
		},
		title: {
			description: 'The icon label',
		},
	},
	args: {
		icon: IconType.cameraPlus,
		size: 24,
	},
}

export default meta

type Story = StoryObj<typeof Icon>

export const ActivityCircle: Story = {
	args: {icon: IconType.activityCircle},
}

export const Aerobics: Story = {
	args: {icon: IconType.aerobics},
}

export const Alert: Story = {
	args: {icon: IconType.alert},
}

export const AlertFilled: Story = {
	args: {icon: IconType.alertFilled},
}

export const ArrowDown: Story = {
	args: {icon: IconType.arrowDown},
}

export const ArrowUp: Story = {
	args: {icon: IconType.arrowUp},
}

export const Bell: Story = {
	args: {icon: IconType.bell},
}

export const Bolt: Story = {
	args: {icon: IconType.bolt},
}

export const BoltCircle: Story = {
	args: {icon: IconType.boltCircle},
}

export const Boxing: Story = {
	args: {icon: IconType.boxing},
}

export const CameraPlus: Story = {
	args: {icon: IconType.cameraPlus},
}

export const Check: Story = {
	args: {icon: IconType.check},
}

export const CheckCircle: Story = {
	args: {icon: IconType.checkCircle},
}

export const ChevronDown: Story = {
	args: {icon: IconType.chevronDown},
}

export const ChevronLeft: Story = {
	args: {icon: IconType.chevronLeft},
}

export const ChevronLeftCircle: Story = {
	args: {icon: IconType.chevronLeftCircle},
}

export const ChevronRight: Story = {
	args: {icon: IconType.chevronRight},
}

export const ChevronRightCircle: Story = {
	args: {icon: IconType.chevronRightCircle},
}

export const ChevronUp: Story = {
	args: {icon: IconType.chevronUp},
}

export const CircleExercise: Story = {
	args: {icon: IconType.circleExercise},
}

export const ClipboardCount: Story = {
	args: {icon: IconType.clipboardCount},
}

export const Comment: Story = {
	args: {icon: IconType.comment},
}

export const Contact: Story = {
	args: {icon: IconType.contact},
}

export const ContactFilled: Story = {
	args: {icon: IconType.contactFilled},
}

export const ContactList: Story = {
	args: {icon: IconType.contactList},
}

export const ContactPlus: Story = {
	args: {icon: IconType.contactPlus},
}

export const Cross: Story = {
	args: {icon: IconType.cross},
}

export const CrossCircle: Story = {
	args: {icon: IconType.crossCircle},
}

export const Cycling: Story = {
	args: {icon: IconType.cycling},
}

export const Dancing: Story = {
	args: {icon: IconType.dancing},
}

export const Delete: Story = {
	args: {icon: IconType.delete},
}

export const Drag: Story = {
	args: {icon: IconType.drag},
}

export const Download: Story = {
	args: {icon: IconType.download},
}

export const Duplicate: Story = {
	args: {icon: IconType.duplicate},
}

export const Dumbbell: Story = {
	args: {icon: IconType.dumbbell},
}

export const DumbbellCircle: Story = {
	args: {icon: IconType.dumbbellCircle},
}

export const Edit: Story = {
	args: {icon: IconType.edit},
}

export const EllipseMachine: Story = {
	args: {icon: IconType.ellipseMachine},
}

export const Envelope: Story = {
	args: {icon: IconType.envelope},
}

export const ExclamationMark: Story = {
	args: {icon: IconType.exclamationMark},
}

export const Exercise: Story = {
	args: {icon: IconType.exercise},
}

export const Eye: Story = {
	args: {icon: IconType.eye},
}

export const FaceFrown: Story = {
	args: {icon: IconType.faceFrown},
}

export const FaceMeh: Story = {
	args: {icon: IconType.faceMeh},
}

export const FaceSmile: Story = {
	args: {icon: IconType.faceSmile},
}

export const Female: Story = {
	args: {icon: IconType.female},
}

export const File: Story = {
	args: {icon: IconType.file},
}

export const Filter: Story = {
	args: {icon: IconType.filter},
}

export const Flip: Story = {
	args: {icon: IconType.flip},
}

export const Gardening: Story = {
	args: {icon: IconType.gardening},
}

export const GoActive: Story = {
	args: {icon: IconType.goActive},
}

export const GoDeactivated: Story = {
	args: {icon: IconType.goDeactivated},
}

export const GoInvite: Story = {
	args: {icon: IconType.goInvite},
}

export const GoPending: Story = {
	args: {icon: IconType.goPending},
}

export const Golf: Story = {
	args: {icon: IconType.golf},
}

export const Grid: Story = {
	args: {icon: IconType.grid},
}

export const History: Story = {
	args: {icon: IconType.history},
}

export const Home: Story = {
	args: {icon: IconType.home},
}

export const HomeFilled: Story = {
	args: {icon: IconType.homeFilled},
}

export const HorizontalEllipsis: Story = {
	args: {icon: IconType.horizontalEllipsis},
}

export const IceSkating: Story = {
	args: {icon: IconType.iceSkating},
}

export const IndoorSpinning: Story = {
	args: {icon: IconType.indoorSpinning},
}

export const Info: Story = {
	args: {icon: IconType.info},
}

export const InfoCircle: Story = {
	args: {icon: IconType.infoCircle},
}

export const Kayak: Story = {
	args: {icon: IconType.kayak},
}

export const Library: Story = {
	args: {icon: IconType.library},
}

export const LibraryFilled: Story = {
	args: {icon: IconType.libraryFilled},
}

export const Link: Story = {
	args: {icon: IconType.link},
}

export const Lock: Story = {
	args: {icon: IconType.lock},
}

export const Male: Story = {
	args: {icon: IconType.male},
}

export const Menu: Story = {
	args: {icon: IconType.menu},
}

export const MenuFilled: Story = {
	args: {icon: IconType.menuFilled},
}

export const Messages: Story = {
	args: {icon: IconType.messages},
}

export const MessagesCircle: Story = {
	args: {icon: IconType.messagesCircle},
}

export const MinusCircle: Story = {
	args: {icon: IconType.minusCircle},
}

export const NonBinary: Story = {
	args: {icon: IconType.nonbinary},
}

export const PaperPlaneCircle: Story = {
	args: {icon: IconType.paperPlaneCircle},
}

export const PhoneCircle: Story = {
	args: {icon: IconType.phoneCircle},
}

export const Pilates: Story = {
	args: {icon: IconType.pilates},
}

export const Placeholder: Story = {
	args: {icon: IconType.placeholder},
}

export const Plan: Story = {
	args: {icon: IconType.plan},
}

export const PlusCircle: Story = {
	args: {icon: IconType.plusCircle},
}

export const PlusStroke: Story = {
	args: {icon: IconType.plusStroke},
}

export const Printer: Story = {
	args: {icon: IconType.printer},
}

export const Profile: Story = {
	args: {icon: IconType.profile},
}

export const Program: Story = {
	args: {icon: IconType.program},
}

export const ProgramCircle: Story = {
	args: {icon: IconType.programCircle},
}

export const Progress: Story = {
	args: {icon: IconType.progress},
}

export const QrCode: Story = {
	args: {icon: IconType.qrCode},
}

export const QuestionMark: Story = {
	args: {icon: IconType.questionMark},
}

export const RacketGame: Story = {
	args: {icon: IconType.racketGame},
}

export const Related: Story = {
	args: {icon: IconType.related},
}

export const Riding: Story = {
	args: {icon: IconType.riding},
}

export const Rotate: Story = {
	args: {icon: IconType.rotate},
}

export const RollerSkating: Story = {
	args: {icon: IconType.rollerSkating},
}

export const RoundedCross: Story = {
	args: {icon: IconType.roundedCross},
}

export const RoundedMinus: Story = {
	args: {icon: IconType.roundedMinus},
}

export const RoundedPlus: Story = {
	args: {icon: IconType.roundedPlus},
}

export const Rowing: Story = {
	args: {icon: IconType.rowing},
}

export const RowingMachine: Story = {
	args: {icon: IconType.rowingMachine},
}

export const Running: Story = {
	args: {icon: IconType.running},
}

export const Search: Story = {
	args: {icon: IconType.search},
}

export const Send: Story = {
	args: {icon: IconType.send},
}

export const Settings: Story = {
	args: {icon: IconType.settings},
}

export const Share: Story = {
	args: {icon: IconType.share},
}

export const StepMachine: Story = {
	args: {icon: IconType.stepMachine},
}

export const Today: Story = {
	args: {icon: IconType.today},
}

export const Trend: Story = {
	args: {icon: IconType.trend},
}

export const TrendDown: Story = {
	args: {icon: IconType.trendDown},
}

export const TrendUp: Story = {
	args: {icon: IconType.trendUp},
}

export const Skiing: Story = {
	args: {icon: IconType.skiing},
}

export const Skis: Story = {
	args: {icon: IconType.skis},
}

export const SkippingRope: Story = {
	args: {icon: IconType.skippingRope},
}

export const SmileCircle: Story = {
	args: {icon: IconType.smileCircle},
}

export const Snowboarding: Story = {
	args: {icon: IconType.snowboarding},
}

export const Star: Story = {
	args: {icon: IconType.star},
}

export const StarFilled: Story = {
	args: {icon: IconType.starFilled},
}

export const StrengthTraining: Story = {
	args: {icon: IconType.strengthTraining},
}

export const Swimming: Story = {
	args: {icon: IconType.swimming},
}

export const Table: Story = {
	args: {icon: IconType.table},
}

export const Tag: Story = {
	args: {icon: IconType.tag},
}

export const TeamSport: Story = {
	args: {icon: IconType.teamSport},
}

export const Time: Story = {
	args: {icon: IconType.time},
}

export const TimeCircle: Story = {
	args: {icon: IconType.timeCircle},
}

export const VerticalEllipsis: Story = {
	args: {icon: IconType.verticalEllipsis},
}

export const Video: Story = {
	args: {icon: IconType.video},
}

export const Walk: Story = {
	args: {icon: IconType.walk},
}

export const WalkingOnStairs: Story = {
	args: {icon: IconType.walkingOnStairs},
}

export const Yoga: Story = {
	args: {icon: IconType.yoga},
}
