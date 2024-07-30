import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const TitleMedium = ({ children }: Props) => {
  return <h1 className="text-3xl">{children}</h1>
}

export default TitleMedium
