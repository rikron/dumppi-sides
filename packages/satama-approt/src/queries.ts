import { groq } from 'next-sanity'

export const PAGE = groq`
  *[_type == "page" && project=="satama-appro" && _id=="satamaApproPage"][0] {
  ...,
  "bannerUrlMobile": bannerMobile.asset -> url,
  "bannerUrlDesktop": banner.asset -> url,
  "content": content[]{
    ...,
    _type=='bannerSection' => {
      "bannerUrlMobile": bannerMobile.asset -> url,
      "bannerUrlDesktop": bannerDesktop.asset -> url,
    },
    _type=='contactSection' => {
      ...,
    "content": content[] ->
    }
  }
}
`
