import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import CustomedCard from "@/components/CustomedCard"
import CustomedModal from "@/components/Modal"
import { Icon } from "@iconify/react"
import { Open_Sans } from 'next/font/google'
import Head from 'next/head'
const openSans = Open_Sans({ subsets: ['latin'] })

export default function Servicepage() {
    const [openArchivage, setOpenArchivage] = useState(false)
    const [openSecurity, setOpenSecurity] = useState(false)
    const [openPortfolio, setOpenPortfolio] = useState(false)
    const [openMine, setOpenMine] = useState(false)    

    const manageArchive = ()=> setOpenArchivage(!openArchivage)
    const manageSecurity = ()=> setOpenSecurity(!openSecurity)
    const managePortfolio = ()=> setOpenPortfolio(!openPortfolio)  
    const manageMine = ()=> setOpenMine(!openMine)

    return (
        <>
            <Head><title>Temabe Global | Nos services</title></Head>
            <main className={`bg-dark text-white flex flex-col justify-between ${openSans.className}`}>
                <NavBar/>
                <section className="px-[5%] md:mb-[10%] md:flex md:items-center relative">
                    <div className="md:w-1/2 md:space-y-10 pl-[8%]">
                        <h1 className="text-primary font-bold text-2xl my-4 md:my-0 md:text-4xl">Nos services</h1>
                        <p className="md:w-[438px] md:text-2xl md:font-medium" id="values">
                        TEMABE GLOBAL est une entreprise de services qui accompagne ses clients dans leur <strong className='font-medium'>transformation digitale</strong>, mais aussi dans la <strong className='font-medium'>sous-traitance minière</strong>.
                        </p>
                        <Link href="/home#rdv"><button className="w-[295px] h-[56px] border-2 border-primary text-white bg-primary bg-opacity-40 hover:bg-opacity-0 mt-[30px] font-semibold rounded-full">Prendre rendez-vous</button></Link>
                    </div>
                    <div className='py-[8%] md:space-y-4' id='archiveDev'>
                        <div className='flex flex-col items-center md:flex-row md:space-x-4'>
                            <CustomedCard width="310px" height="185px" onClick={manageArchive}>
                                <Icon icon="solar:inbox-archive-bold-duotone" width={80} height={80} color="#E4A951"/>
                                <span className='font-normal'>Archivage numérique</span>
                            </CustomedCard>
                            <CustomedCard width="310px" height="185px" onClick={managePortfolio}>
                                <Icon icon="solar:monitor-smartphone-bold-duotone" width={80} height={80} color="#E4A951"/>
                                <span className='font-normal text-center'>Developpement de site web & applications mobiles</span>
                            </CustomedCard>
                        </div>
                        <div className='flex flex-col items-center md:flex-row md:space-x-4' id='securityMine'>
                            <CustomedCard width="310px" height="185px" onClick={manageSecurity}>
                                <Icon icon="solar:safe-2-bold-duotone" width={80} height={80} color="#E4A951"/>
                                <span className='font-normal'>Sécurité des données</span>
                            </CustomedCard>
                            <CustomedCard width="310px" height="185px">
                                <Icon icon="bxs:hard-hat" width={80} height={80} color="#E4A951"/>
                                <span className='font-normal'>Sous-traitance minière</span>
                            </CustomedCard>                                                            
                        </div> 
                    </div>
                    <CustomedModal isOpen={openArchivage}>
                        <h3 className="text-dark font-bold md:font-normal md:flex md:items-center md:text-4xl md:space-x-3 mb-4">
                            <Icon icon="solar:inbox-archive-bold-duotone" width={50} height={50} color="#E4A951"/>
                            <span>Archivage numérique</span>
                        </h3>
                        <div className="mt-2 text-dark mb-4">
                            <p className='text-sm text-gray-500'>
                            TEMABE GLOBAL est spécaliste de l'archivage et la conservation de vos documents de manière confidentielle et sécurisée. Nous vous accompagnons dans le processus d'archivage de vos documents physiques vers leur numérisation, afin de préserver votre histoire.
                            </p>
                        </div>

                        <div className="mt-4 text-dark">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={manageArchive}
                            >
                            Fermer
                            </button>
                        </div>
                    </CustomedModal>
                    <CustomedModal isOpen={openPortfolio}>
                        <h3 className="text-dark font-bold md:font-normal md:flex md:items-center md:text-3xl md:space-x-3 mb-4">
                            <Icon icon="solar:monitor-smartphone-bold-duotone" width={50} height={50} color="#E4A951"/>
                            <span>Developpement de site web & applications mobiles</span>
                        </h3>
                        <div className="mt-2 mb-4 text-xl text-dark space-y-4 md:space-y-0 md:flex md:justify-between md:flex-wrap">
                            <div className="md:w-[32%] h-[200px] z-10 object-contain relative hover:transform hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-primary">
                                <a href="https://koumishop.com" target="_blank"><Image src="/assets/koumishop.png" className="absolute" loading="lazy" fill/></a>
                            </div>
                            <div className="md:w-[32%] h-[200px] z-10 object-contain relative hover:transform hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-primary">
                                <a href="https://koumi-merchant.netlify.app/" target="_blank"><Image src="/assets/koumi_merchant.png" className="absolute" loading="lazy" fill/></a>
                            </div>                        
                            <div className="md:w-[32%] h-[200px] z-10 object-contain relative hover:transform hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-primary">
                                <a href="https://match-making-app.netlify.app/" target="_blank"><Image src="/assets/match_making.png" className="absolute" loading="lazy" fill/></a>   
                            </div>
                            <div className="md:w-[32%] h-[200px] mt-4 z-10 object-contain relative hover:transform hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-primary">
                                <a href="#"><Image src="/assets/temabe_global.png" className="absolute" loading="lazy" fill/></a>
                            </div>                                                
                        </div>

                        <div className="mt-4 text-dark">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={managePortfolio}
                            >
                            Fermer
                            </button>
                        </div>
                    </CustomedModal>
                    <CustomedModal isOpen={openSecurity}>
                        <h3 className="text-dark font-bold md:font-normal md:flex md:items-center md:text-4xl md:space-x-3 mb-4">
                            <Icon icon="solar:safe-2-bold-duotone" width={50} height={50} color="#E4A951"/>
                            <span>Sécurité des données</span>
                        </h3>
                        <div className="mt-2 text-dark">
                            <p className="text-sm text-gray-500">
                            Dans un monde qui se digitalise davantage, l'information devient une arme. TEMABE GLOBAL vous accompagne dans la sécurisation de vos données de manière fiable et durable à travers l'audit de vos systémes d'information et la sensibilisation à la cybersécurité.
                            </p>
                        </div>

                        <div className="mt-4 text-dark">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={manageSecurity}
                            >
                            Fermer
                            </button>
                        </div>
                    </CustomedModal>
                    <CustomedModal isOpen={openMine}>
                        <h3 className="text-dark flex items-center text-4xl space-x-3">
                            <Icon icon="bxs:hard-hat" width={50} height={50} color="#E4A951"/>
                            <span>Sous-traitance minière</span>
                        </h3>
                        <div className="mt-2 text-dark">
                            <p className="text-sm text-gray-500">
                            Dans un monde qui se digitalise davantage, l'information devient une arme. TEMABE GLOBAL vous accompagne dans la sécurisation de vos données de manière fiable et durable à travers l'audit de vos systémes d'information et la sensibilisation à la cybersécurité.
                            </p>
                        </div>

                        <div className="mt-4 text-dark">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={manageMine}
                            >
                            Fermer
                            </button>
                        </div>
                    </CustomedModal>                
                </section>
                <Footer/>
            </main>
        </>
    )
}
