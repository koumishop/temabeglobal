import { Icon } from "@iconify/react"
import Image from 'next/image'
import Link from "next/link"
import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({ subsets: ['latin'] })

const Footer = ()=>{
    return(
        <footer className={`py-10 flex justify-center ${openSans.className}`}>
            <Link href="/home" className="pt-5">
                <Image
                className="relative"
                src="/temabe_logo.png"
                alt="Temabe Logo"
                width={156}
                height={156}
                priority
                />
            </Link>
            <div className="flex space-x-10">
                <div className="space-y-4" id="contacts">
                    <h3 className="font-bold">Contacts</h3>
                    <div className="hover:transform hover:scale-105 hover:text-primary cursor-pointer">
                        <a href="https://goo.gl/maps/qp4wBriawpJhzdyU7" className="flex items-center space-x-3" target="_blank">
                            <Icon icon="solar:map-point-wave-broken" width={30} height={30} color="#E4A951"/>
                            <span>25 Avenue de l’Equateur - Kinshasa/Gombe</span>
                        </a>
                    </div>
                    <div className="hover:transform hover:scale-105 hover:text-primary cursor-pointer">
                        <a href="mailto:info@temabeglobal.com" className="flex items-center space-x-3">
                            <Icon icon="solar:letter-broken" width={30} height={30} color="#E4A951"/>
                            <span>info@temabeglobal.com</span>
                        </a>    
                    </div>
                    <div className="hover:transform hover:scale-105 hover:text-primary cursor-pointer">
                        <a href="tel:+243 812 148 475" className="flex items-center space-x-3">
                            <Icon icon="solar:phone-rounded-broken" width={30} height={30} color="#E4A951"/>
                            <span>+243 812 148 475</span>
                        </a>    
                    </div>
                    <h3 className="font-bold">Suivez-nous sur</h3>
                    <div className="flex items-center space-x-4">
                        <a href="https://www.linkedin.com/company/temabe-global/" target="_blank" className="hover:transform hover:scale-125"><Icon icon="uit:linkedin-alt" width={30} height={30} color="#E4A951"/></a>
                        <a href="#" target="_blank" className="hover:transform hover:scale-125"><Icon icon="uit:twitter-alt" width={30} height={30} color="#E4A951"/></a>
                        <a href="https://www.instagram.com/temabeglobal/" target="_blank" className="hover:transform hover:scale-125"><Icon icon="ph:instagram-logo-light" width={30} height={30} color="#E4A951"/></a>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="font-bold">A propos de nous</h3>
                    <Link href="/about#aboutUs" className="flex items-center space-x-3 hover:transform hover:scale-105 hover:text-primary cursor-pointer">
                        <Icon icon="solar:city-broken" width={30} height={30} color="#E4A951"/>
                        <span>Qui sommes-nous</span>
                    </Link>
                    <Link href="/about#values" className="flex items-center space-x-3 hover:transform hover:scale-105 hover:text-primary cursor-pointer">
                        <Icon icon="solar:diploma-verified-broken" width={30} height={30} color="#E4A951"/>
                        <span>Nos valeurs</span>
                    </Link>
                    <Link href="/about#goals" className="flex items-center space-x-3 hover:transform hover:scale-105 hover:text-primary cursor-pointer">
                        <Icon icon="solar:target-broken" width={30} height={30} color="#E4A951"/>
                        <span>Nos objectifs</span>
                    </Link>
                    <Link href="/blog" className="flex items-center space-x-3 hover:transform hover:scale-105 hover:text-primary cursor-pointer">
                        <Icon icon="solar:document-add-broken" width={30} height={30} color="#E4A951"/>
                        <span>Blog</span>
                    </Link>                    
                </div>
                <div className="space-y-4">
                    <h3 className="font-bold">Nos services</h3>
                    <Link href="/services#archiveDev" className="flex items-center space-x-3 hover:transform hover:scale-105 hover:text-primary cursor-pointer">
                        <Icon icon="solar:inbox-archive-broken" width={30} height={30} color="#E4A951"/>
                        <span>Archivage numérique</span>
                    </Link>
                    <Link href="/services#securityMine" className="flex items-center space-x-3 hover:transform hover:scale-105 hover:text-primary cursor-pointer">
                        <Icon icon="solar:safe-2-broken" width={30} height={30} color="#E4A951"/>
                        <span>Sécurité des données</span>
                    </Link>
                    <Link href="/services#archiveDev"  className="flex items-center space-x-3 hover:transform hover:scale-105 hover:text-primary cursor-pointer">
                        <Icon icon="solar:monitor-smartphone-broken" width={30} height={30} color="#E4A951"/>
                        <span>Developpement de solutions numériques</span>
                    </Link>
                    <Link href="/services#securityMine"  className="flex items-center space-x-3 hover:transform hover:scale-105 hover:text-primary cursor-pointer">
                        <Icon icon="la:hard-hat" width={30} height={30} color="#E4A951"/>
                        <span>Sous-traitance minière</span>
                    </Link>
                    <Link href='/services' className="flex items-center space-x-3 hover:transform hover:scale-105 hover:text-primary cursor-pointer">
                        <Icon icon="solar:widget-add-broken" width={30} height={30} color="#E4A951"/>
                        <span>Nos autres services</span>
                    </Link>                                        
                </div>
            </div>
        </footer>
    )
}

export default Footer