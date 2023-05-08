import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import Link from 'next/link'
import ParticlesBackground from '@/components/ParticlesBackground'
import CustomedCard from '@/components/CustomedCard'
import { TypeAnimation } from 'react-type-animation'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${openSans.className}`}
    >
      <ParticlesBackground/>
      <div className="relative flex">
        <Image
          className="relative"
          src="/temabe_logo.png"
          alt="Temabe Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <TypeAnimation
        sequence={[
          // Same String at the start will only be typed once, initially
          'Ensemble, construisons l’avenir.',
          500,
        ]}
        speed={10}
        className='text-primary text-4xl font-extrabold'
        //style={{ fontSize: '2em' }}
        repeat={Infinity}
      />
      <Link href='/home'><CustomedCard width="300px" height="45px"><span className='font-bold'>Acceder au site</span></CustomedCard></Link>
    </main>
  )
}
