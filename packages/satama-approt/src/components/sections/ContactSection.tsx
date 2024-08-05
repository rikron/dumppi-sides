import { FiInstagram, FiMail } from 'react-icons/fi'
import PortableText from '../PortableText'
import ContactCard from '../ContactCard'
import { TitleLarge, TitleMedium, BodyMedium } from '../text'

type Props = {
  content: any
  commonEmail?: string
  instagram?: string
}

const ContactSection = ({ content, commonEmail, instagram }: Props) => {
  const hasHeader =
    content.header !== undefined && content.header.fi[0].children[0].text !== ''
  return (
    <div className="p-4 text-center w-full flex flex-col items-center">
      <div className="py-12">
        <TitleLarge>Ota Yhteyttä</TitleLarge>
      </div>
      {hasHeader && (
        <div className="py-6">
          <PortableText content={content.header.fi} />
        </div>
      )}
      <div
        className="
        flex flex-col lg:flex-row flex-wrap justify-center w-full lg:w-3/4 2xl:w-1/2 mx-auto
        pb-6
      "
      >
        {content.content.map((contact: any, index: number) => {
          const rightPadding =
            index % 2 === 0 && index !== 0 ? 'pr-0 pb-12 lg:pb-0 lg:pr-12' : ''
          return (
            <div key={index} className={rightPadding}>
              <ContactCard
                title={contact.role.fi}
                name={contact.fullName}
                email={contact.email}
              />
            </div>
          )
        })}
      </div>
      <div className="pb-6 pt-4 border-t-2">
        <div className="pb-4">
          <TitleMedium>Satama-Approt</TitleMedium>
        </div>
        <BodyMedium>
          Ota yhteyttä meihin joko sähköpostilla tai instagramissa!
        </BodyMedium>
        {commonEmail && (
          <div className="pt-6 w-full">
            <a
              className="cursor-pointer flex flex-row justify-center items-center pl-4 text-3xl text-blue-700 border-2 rounded-2xl p-2 border-blue-700 w-3/4 mx-auto"
              target="blank"
              href={`mailto://${commonEmail}`}
            >
              <FiMail className="cursor-pointer" size={40} />
              <label className="px-4 cursor-pointer">Sähköposti</label>
            </a>
          </div>
        )}
        {instagram && (
          <div className="pt-6 w-full">
            <a
              className="cursor-pointer flex flex-row justify-center items-center pl-4 text-3xl text-blue-700 border-2 rounded-2xl p-2 border-blue-700 w-3/4 mx-auto"
              target="blank"
              href={`https://instagram.com/${instagram}`}
            >
              <FiInstagram className="cursor-pointer" size={40} />
              <label className="px-4 cursor-pointer">Instagram</label>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactSection
