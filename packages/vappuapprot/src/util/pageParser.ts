import {
  Page,
  Content,
  SectionType,
  TextSection,
  LayoutType,
  TextSectionContent
} from 'types'
import { parseStringStrict } from './primitiveParsers'
import { parseDate, parseDateStrict } from './dateParser'
import { PortableTextBlock } from 'next-sanity'

const parsePage = (object: unknown): Page => {
  if (!object || typeof object !== 'object') {
    throw new Error('Invalid or missing data on page data')
  }

  if (
    !('_id' in object) ||
    !('_type' in object) ||
    !('_createdAt' in object) ||
    !('_updatedAt' in object) ||
    !('bannerUrlMobile' in object) ||
    !('bannerUrlDesktop' in object) ||
    !('project' in object) ||
    !('content' in object)
  ) {
    throw new Error('Invalid or missing data on page data')
  }

  return {
    _id: parseStringStrict(object._id),
    _type: parseStringStrict(object._type),
    _createdAt: parseDateStrict(object._createdAt),
    _updatedAt: parseDateStrict(object._updatedAt),
    eventDate: 'eventDate' in object ? parseDate(object.eventDate) : null,
    ticketSaleStart:
      'ticketSaleStart' in object ? parseDate(object.ticketSaleStart) : null,
    bannerUrlMobile: parseStringStrict(object.bannerUrlMobile),
    bannerUrlDesktop: parseStringStrict(object.bannerUrlDesktop),
    project: parseStringStrict(object.project),
    content: parseContent(object.content)
  }
}

const parseContent = (object: unknown): Content[] => {
  if (!object || !Array.isArray(object)) {
    throw new Error('Invalid or missing data on content data')
  }

  return object.map(item => {
    if (!item || typeof item !== 'object') {
      throw new Error('Invalid or missing data on content data')
    }

    if (!('_type' in item) || !('_key' in item)) {
      throw new Error('Content item is missing _type field')
    }

    switch (item._type) {
      case 'textSection':
        return item // FIXME implement
      case 'bannerSection':
        if (!('bannerUrlMobile' in item) || !('bannerUrlDesktop' in item)) {
          throw new Error('Invalid or missing data on bannerSection content')
        }
        return {
          _type: parseSectionType(item._type),
          _key: parseStringStrict(item._key),
          bannerUrlMobile: parseStringStrict(item.bannerUrlMobile),
          bannerUrlDesktop: parseStringStrict(item.bannerUrlDesktop)
        }
      case SectionType.contactSection:
        return {
          _type: parseSectionType(item._type),
          _key: parseStringStrict(item._key)
        }
      default:
        throw new Error('Unknown content type')
    }
  })
}

const parseSectionType = (object: unknown): SectionType => {
  if (!object || typeof object !== 'object') {
    console.log(typeof object)
    throw new Error('Invalid or missing data on section type')
  }
  if (!object || typeof object !== 'string') {
    throw new Error('Invalid or missing data on section type')
  }
  if (Object.values(SectionType).includes(object)) {
    return object as SectionType
  }
  throw new Error('Unknown section type')
}

/*const parseLayoutType = (object: unknown): LayoutType => {
  if (!object || typeof object !== 'object') {
    throw new Error('Invalid or missing data on layout type')
  }
  if (!object || typeof object !== 'string') {
    throw new Error('Invalid or missing data on layout type')
  }
  if (Object.values(LayoutType).includes(object)) {
    return object as LayoutType
  }
  throw new Error('Unknown layout type')
}

const parseTextSection = (object: object): TextSection => {
  if (!object || typeof object !== 'object') {
    throw new Error('Invalid or missing data on text section')
  }

  if (!('_type' in object) || !('_key' in object) || !('layoutType' in object) || !('content' in object)) {
    throw new Error('Invalid or missing data on text section')
  }

  return {
    _type: parseSectionType(object._type),
    _key: parseStringStrict(object._key),
    layoutType: parseLayoutType(object.layoutType),
    content: object.content as PortableTextBlock[],
    title: parseLocaleTitle(object.title)
  }
}

const parseTextSectionContent = (object: unknown): TextSectionContent => {*/

export { parsePage }
