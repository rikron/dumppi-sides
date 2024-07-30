import PortableText from '../PortableText'

const ContactSection = ({ content }: { content: any }) => {
  return (
    <div>
      <h1>Ota Yhteyttä</h1>
      {content.header && <PortableText content={content.header.fi} />}
      <div>
        {content.content.map((contact: any, index: number) => {
          return (
            <div key={index}>
              <p>{contact.role.fi}</p>
              <h2>{contact.fullName}</h2>
              <p>{contact.email}</p>
            </div>
          )
        })}
      </div>
      <div>Contact footer will hold the common email and instagram etc</div>
    </div>
  )
}

export default ContactSection
