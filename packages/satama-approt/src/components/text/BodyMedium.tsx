import { ReactNode } from 'react'
type Props = {
  children: ReactNode
}

const BodyMedium = ({ children }: Props) => {
  return <p className="text-md font-normal">{children}</p>
}

export default BodyMedium
