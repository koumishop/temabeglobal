import Image from 'next/image'

const NavBar = ()=>{
    return(
        <nav className='flex justify-between px-[5%] mb-[5%]'>
            <Image
            className="relative"
            src="/temabe_logo.png"
            alt="Temabe Logo"
            width={95}
            height={95}
            priority
            />
            <div className='w-1/2 flex items-center justify-between font-bold text-[15px]'>
                <span className='cursor-pointer'>ACCUEIL</span>
                <span className='cursor-pointer'>A PROPOS</span>
                <span className='cursor-pointer'>SERVICES</span>
                <span className='cursor-pointer'>BLOG</span>
                <span className='cursor-pointer'>CONTACT</span>
            </div>
        </nav>
    )
}

export default NavBar