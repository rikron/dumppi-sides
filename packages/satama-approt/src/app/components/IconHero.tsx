import { ReactElement } from 'react'
import { FiMapPin, FiCreditCard, FiClock, FiBookOpen } from 'react-icons/fi'
import { TitleMedium } from './text'
import PortableText from './PortableText'

type iconNames = 'pin' | 'card' | 'book' | 'clock'

type Props = {
  iconName: string
  title: string
  description: any
}

const IconHero = ({ iconName, title, description }: Props) => {
  const iconSize = 70
  const icons = {
    pin: <FiMapPin size={iconSize} />,
    card: <FiCreditCard size={iconSize} />,
    book: <FiBookOpen size={iconSize} />,
    clock: <FiClock size={iconSize} />
  }
  const iconNameTyped = iconName as iconNames
  const icon: ReactElement = icons[iconNameTyped]
  return (
    <div className="p-4 text-center w-full flex flex-col items-center">
      <div className="pb-6">{icon}</div>
      <TitleMedium>{title}</TitleMedium>
      <div>
        <PortableText content={description} />
      </div>
    </div>
  )
}

export default IconHero
