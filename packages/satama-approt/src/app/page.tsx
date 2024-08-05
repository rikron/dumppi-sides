import sanityClient from 'sanityClient'
import 'dotenv/config'
import Image from 'next/image'
import { PAGE } from 'queries'
import { Metadata } from 'next'
import fetchOptions from 'util/fetchOptions'
import Navbar from '../components/navbar'
import {
  BannerSection,
  ContactSection,
  TextSection,
  HeroSection
} from '../components/sections'
import Footer from '../components/Footer'
import { BannerSection as BannerSectionType } from 'types'
import { ReactElement } from 'react'

const metaYear = new Date().getFullYear()
export const metadata: Metadata = {
  title: `Satama-Approt ${metaYear}`,
  description:
    'Satama-approt on vuosituhannen approt, jotka järjestetään Jyväskylän satamassa.'
}

const Page = async () => {
  // UUGABUUGA Sanity devs don't know how to make a proper api client so this is what we have
  // HACK Use src/sanityClient.ts instead when Sanity devs learn how to code.
  const response: any = await fetch(
    `https://ubo8m1s0.api.sanity.io/v2021-03-25/data/query/dumppi-sides`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_READ_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query:
          "*[_type == 'page' && project=='satama-appro' && _id=='satamaApproPage'][0] {...,'bannerUrlMobile': bannerMobile.asset -> url,'bannerUrlDesktop': banner.asset -> url,'content': content[]{...,_type=='bannerSection' => {'bannerUrlMobile': bannerMobile.asset -> url,'bannerUrlDesktop': bannerDesktop.asset -> url,},_type=='contactSection' => {...,'content': content[] ->}}}",
        params: {}
      })
    }
  )
  if (!response.ok) {
    throw new Error('Failed to fetch page data')
  }
  const responseBody = await response.json()
  const page = responseBody.result
  const year = page.eventDate
    ? new Date(page.eventDate).getFullYear()
    : undefined

  // TODO Urls for desktop and mobile
  return (
    <div className="h-full">
      <Navbar
        sections={page.content.filter((section: any) => section.navTitle)}
      />
      <div className="h-full overflow-hidden">
        <Image
          className="md:hidden h-screen w-full"
          src={`${page.bannerUrlMobile}?fm=webp`}
          alt="Banner"
          width={500}
          height={800}
          style={{ objectFit: 'cover' }}
        />
        <Image
          className="md:inline hidden overflow-hidden w-full"
          src={`${page.bannerUrlDesktop}?fm=webp`}
          alt="Banner"
          width={500}
          height={800}
        />
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
      <Footer year={year} color={page.contrastColor} />
    </div>
  )
}

export default Page
