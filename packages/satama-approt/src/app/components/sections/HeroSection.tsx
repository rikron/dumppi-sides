import { TitleLarge } from '../text'
import IconHero from '../IconHero'

const HeroSection = ({ content }: { content: any }) => {
  return (
    <div className="p-4 text-center w-full flex flex-col items-center">
      <div className="py-12">
        <TitleLarge>{content.title.fi}</TitleLarge>
      </div>
      {content.header && <p>{content.header.fi}</p>}
      <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap md:items-start w-full xl:w-3/4">
        {content.content.map((hero: any, index: number) => {
          return (
            <div key={index} className="w-full md:w-1/2 p-6">
              <IconHero
                iconName={hero.icon}
                title={hero.title.fi}
                description={hero.content.fi}
              />
            </div>
          )
        })}
      </div>
      {content.footer && <p>{content.footer.fi}</p>}
    </div>
  )
}

export default HeroSection
