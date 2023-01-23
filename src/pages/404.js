import Head from 'next/head'
import Image from 'next/image'
import { Arrows, Logo } from '@/components/Icons'
import Marquee from 'react-fast-marquee'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page">
        <hero-no-padding>
          <div className="column">
            <Marquee speed={28} gradient={false} style={{ opacity: 0.8 }} direction='right'>
              <h2>Page Not Found//Page Not Found//Page Not Found//Page Not Found//</h2>
            </Marquee>
            <Marquee speed={25} gradient={false} style={{ opacity: 0.8 }}>
              <h1>Error 404/Error 404/</h1>
            </Marquee>
            <Marquee speed={5} gradient={false} style={{ opacity: 0.8 }} direction='right' >
              <h2>Page Not Found//Page Not Found//Page Not Found//Page Not Found//</h2>
            </Marquee>
          </div>
        </hero-no-padding>
      </div>
    </>
  )
}
