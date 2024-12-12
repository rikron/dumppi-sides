import { PortableText as NativePortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { TitleMedium, TitleSmall, BodyMedium } from './text'

interface PortableTextProps {
  content: PortableTextBlock[]
  components?: any
}

type ComponentChildren = { children: React.ReactNode }

const baseStyle = 'break-words hyphens-auto text-pretty'
const defaultComponents = {
  marks: {
    link: ({ value, children }: { value: any; children: any }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined
      return (
        <a
          className="text-sky-400 font-bold"
          href={value?.href}
          target={target}
        >
          {children}
        </a>
      )
    }
  },
  block: {
    h1: ({ children }: ComponentChildren) => (
      <div className="text-center pb-6">
        <TitleMedium>{children}</TitleMedium>
      </div>
    ),
    h2: ({ children }: ComponentChildren) => (
      <div className="pb-2">
        <TitleSmall>{children}</TitleSmall>
      </div>
    ),
    normal: ({ children }: ComponentChildren) => (
      <div className="pb-4">
        <BodyMedium> {children}</BodyMedium>
      </div>
    ),
    default: ({ children }: ComponentChildren) => (
      <p className={baseStyle}>{children}</p>
    )
  },
  list: {
    bullet: ({ children }: ComponentChildren) => (
      //<div className="w-max mx-auto lg:mx-0 lg:w-full">
      <ul className="px-6 py-6">{children}</ul>
      //</div>
    )
  },
  listItem: ({ children }: ComponentChildren) => (
    <li className="list-disc">{children}</li>
  )
}

const PortableText = ({ content, components }: PortableTextProps) => {
  return (
    <NativePortableText
      value={content}
      components={components ?? defaultComponents}
    />
  )
}

export default PortableText
