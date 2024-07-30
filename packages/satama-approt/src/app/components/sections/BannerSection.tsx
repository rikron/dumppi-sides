import { BannerSection as BannerSectionType } from 'types'

type props = {
  content: BannerSectionType
}
const BannerSection = ({ content }: props) => {
  return (
    <div>
      <img
        className="md:hidden"
        src={content.bannerUrlMobile ?? content.bannerUrlDesktop}
      />
      <img
        className="hidden md:inline"
        src={content.bannerUrlDesktop ?? content.bannerUrlMobile}
      />
    </div>
  )
}

export default BannerSection
