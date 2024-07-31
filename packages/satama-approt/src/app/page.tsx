import sanityClient from 'sanityClient'
import { PAGE } from 'queries'
import { Metadata, ResolvingMetadata } from 'next'
import { parsePage } from 'util/pageParser'
import fetchOptions from 'util/fetchOptions'
import Navbar from './components/navbar'
import {
  BannerSection,
  ContactSection,
  TextSection,
  HeroSection
} from './components/sections'
import { BannerSection as BannerSectionType } from 'types'
import { ReactElement } from 'react'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const page: any = await sanityClient.fetch(PAGE, undefined, fetchOptions)
  const year = page.eventDate ? new Date(page.eventDate).getFullYear() : ''
  return {
    title: `Satama-appro ${year}`,
    description:
      'Satama-approt on vuosituhannen approt, jotka järjestetään Jyväskylän satamassa.'
  }
}

const Home = async () => {
  const page: any = await sanityClient.fetch(PAGE)
  // TODO Urls for desktop and mobile
  return (
    <div className="h-full">
      <Navbar
        sections={page.content.filter((section: any) => section.navTitle)}
      />
      <div className="h-full">
        <img
          className="md:hidden h-screen w-full object-cover"
          src={`${page.bannerUrlMobile}?fm=webp`}
        />
        <img className="md:inline hidden" src={`${page.bannerUrlDesktop}`} />
      </div>
      {page.content.map((content: any, index: number) => {
        const isOdd = index % 2 === 1
        const dynamicColor = isOdd ? '#ffffff' : page.contrastColor
        const dynamicTextColor = isOdd ? '#111111' : '#ffffff'
        const wrapDiv = (child: ReactElement, id: string) => (
          <div
            style={{ backgroundColor: dynamicColor, color: dynamicTextColor }}
            key={index}
            id={id}
          >
            {child}
          </div>
        )
        switch (content._type) {
          case 'textSection':
            return wrapDiv(<TextSection content={content} />, content._key)
          case 'bannerSection':
            return wrapDiv(
              <BannerSection content={content as BannerSectionType} />,
              content._key
            )
          case 'heroSection':
            return wrapDiv(<HeroSection content={content} />, content._key)
          case 'contactSection':
            return wrapDiv(
              <ContactSection
                content={content}
                instagram={page.instagram}
                commonEmail={page.mainEmail}
              />,
              content._key
            )
        }
      })}
      <div>footer</div>
    </div>
  )
}

export default Home
