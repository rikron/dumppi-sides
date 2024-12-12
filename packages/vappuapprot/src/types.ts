import { PortableTextBlock } from 'next-sanity'

interface SanityAttributes {
  _id: string
  _type: string
  _createdAt: Date
  _updatedAt: Date
}

interface LocaleTitle {
  fi: string
  en: string
}

export enum SectionType {
  bannerSection = 'bannerSection',
  contactSection = 'contactSection',
  textSection = 'textSection'
}

export enum LayoutType {
  column = 'column',
  grid = 'grid'
}

interface Section {
  _type: SectionType
  _key: string
}
export interface BannerSection extends Section {
  bannerUrlMobile: string
  bannerUrlDesktop: string
}

export interface TextSectionContent {
  fi: PortableTextBlock
  en: PortableTextBlock
}

export interface TextSection extends Section {
  layoutType: LayoutType
  content: TextSectionContent[]
  title: LocaleTitle
}

interface ContactSection extends Section {}

export type Content = BannerSection | ContactSection | TextSection

export interface Page extends SanityAttributes {
  bannerUrlMobile: string
  bannerUrlDesktop: string
  ticketSaleStart: Date | null
  eventDate: Date | null
  project: string
  content: Content[]
}
