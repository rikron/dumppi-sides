import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const TitleLarge = ({ children }: Props) => {
  return <h1 className="text-4xl ">{children}</h1>
}

export default TitleLarge
