import { BannerSection as BannerSectionType } from 'types'

type props = {
  content: BannerSectionType
}
const BannerSection = ({ content }: props) => {
  const mobileUrl = content.bannerUrlMobile
    ? `${content.bannerUrlMobile}?fm=webp`
    : undefined
  const desktopUrl = content.bannerUrlDesktop
    ? `${content.bannerUrlDesktop}?fm=webp`
    : undefined

  return (
    <div>
      <img className="md:hidden" src={mobileUrl ?? desktopUrl} />
      <img className="hidden md:inline" src={desktopUrl ?? mobileUrl} />
    </div>
  )
}

export default BannerSection
