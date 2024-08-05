import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const TitleSmall = ({ children }: Props) => {
  return <h1 className="text-xl">{children}</h1>
}

export default TitleSmall
