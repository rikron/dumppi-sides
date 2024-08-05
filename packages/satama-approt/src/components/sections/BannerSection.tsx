import { BannerSection as BannerSectionType } from 'types'
import Image from 'next/image'

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
      <Image
        className="md:hidden"
        src={mobileUrl ?? desktopUrl!}
        height={800}
        width={500}
        alt="Banner"
        style={{ objectFit: 'cover' }}
      />
      <Image
        className="hidden md:inline w-full"
        src={desktopUrl ?? mobileUrl!}
        alt="Banner"
        height={800}
        width={500}
      />
    </div>
  )
}

export default BannerSection
