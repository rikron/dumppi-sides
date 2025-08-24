import { TitleMedium } from './text'

type Props = {
  title: string
  name: string
  email: string
}

const ContactCard = ({ title, name, email }: Props) => {
  return (
    <div>
      <div className="text-stone-600">
        <label>{title}</label>
      </div>
      <TitleMedium>{name}</TitleMedium>
      <a className="text-blue-700" href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  )
}

export default ContactCard
