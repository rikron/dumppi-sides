import Image from 'next/image'
import { TitleMedium, TitleSmall } from './components/text'
import Navbar from './components/navbar'
import sanityClient from 'sanityClient'
import { PAGE } from 'queries'

const EmptyDock404 = async () => {
  const page: any = await sanityClient.fetch(PAGE)

  return (
    <div
      style={{ backgroundColor: page.contrastColor, color: '#ffffff' }}
      className="flex flex-col items-center justify-center text-center h-screen"
    >
      <div className="py-12">
        <TitleMedium>{'404'}</TitleMedium>
        <TitleSmall>
          {'The ship on this dock has left the port and can not be found :('}
        </TitleSmall>
      </div>
      <Image
        className="mx-auto h-1/2 w-auto"
        src="/empty_dock.webp"
        alt="404-not-found"
        width="896"
        height="1152"
      />
      <a
        className="border-2 rounded-2xl p-4 text-4xl mt-12"
        href="https://satama-appro.fi"
      >
        {'Back to the port :)'}
      </a>
    </div>
  )
}

export default EmptyDock404
