import PortableText from '../PortableText'
import { TitleLarge } from '../text'

type props = {
  content: any
}

const TextSection = ({ content }: props) => {
  return (
    <div className="p-4 text-center w-full flex flex-col items-center">
      <div className="py-12 md:w-3/4 xl:w-1/2  w-full">
        <TitleLarge>{content.title.fi}</TitleLarge>
      </div>
      <div
        className={`
          flex ${
            content.layoutType == 'column'
              ? 'flex-col'
              : 'flex-col lg:flex-row md:items-start'
          }
          md:w-3/4 xl:w-1/2  w-full justify-center items-center text-left pb-12
        `}
      >
        {content.content.map((block: any, index: number) => {
          return (
            <div key={index} className="flex-1">
              <div className="px-6">
                <PortableText content={block.content.fi} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TextSection
