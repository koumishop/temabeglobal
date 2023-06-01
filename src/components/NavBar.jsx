import Image from 'next/image'
import Link from 'next/link'
import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({ subsets: ['latin'] })

const NavBar = ()=>{
    return(
        <nav className={`flex flex-col items-center md:h-[100px] md:flex-row md:justify-between md:px-[5%] md:mb-[5%] ${openSans.className}`}>
            <Link href="/home" className="w-1/4 relative">
                <Image
                src="/temabe_logo.png"
                alt="Temabe Logo"
                width={95}
                height={95}
                priority
                className=''
                />
            </Link>
            <div className='w-full md:w-1/2 md:space-x-5 flex items-center justify-between font-bold md:text-[15px]'>
                <Link href="/home"><span className='cursor-pointer hover:text-primary'>ACCUEIL</span></Link>
                <Link href="/about"><span className='cursor-pointer hover:text-primary'>A PROPOS</span></Link>
                <Link href="/services"><span className='cursor-pointer hover:text-primary'>SERVICES</span></Link>
                <Link href="/blog"><span className='cursor-pointer hover:text-primary'>BLOG</span></Link>
                <span className='cursor-pointer hover:text-primary'><a href='/home#contacts'>CONTACT</a></span>
            </div>
        </nav>
    )
}

export default NavBar