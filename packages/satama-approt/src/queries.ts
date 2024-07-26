import { groq } from 'next-sanity'

export const PAGE = groq`
  *[_type == "page" && project=="satama-appro"][0]
`
