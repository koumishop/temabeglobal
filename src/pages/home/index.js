import NavBar from "@/components/NavBar"
import Image from "next/image"
import style from "../../styles/all_bg.module.css"
import { Icon } from "@iconify/react"
import Footer from "@/components/Footer"
import CustomedCard from "@/components/CustomedCard"
import CustomedModal from "@/components/Modal"
import { useState } from 'react'
import Link from "next/link"
import { useForm, ValidationError } from '@formspree/react';
import { Open_Sans } from 'next/font/google'
import Head from "next/head"
const openSans = Open_Sans({ subsets: ['latin'] })

export default function Homepage() {
    const [openArchivage, setOpenArchivage] = useState(false)
    const [openSecurity, setOpenSecurity] = useState(false)
    const [openPortfolio, setOpenPortfolio] = useState(false)
    const [openMine, setOpenMine] = useState(false)
    const [state, handleSubmit] = useForm("mrgvjnog");
    
    if (state.succeeded) {
        document.getElementById("meetForm").reset();
    }
    const manageArchive = ()=> setOpenArchivage(!openArchivage)
    const manageSecurity = ()=> setOpenSecurity(!openSecurity)
    const managePortfolio = ()=> setOpenPortfolio(!openPortfolio)  
    const manageMine = ()=> setOpenMine(!openMine)  


    return(
        <>
            <Head><title>Temabe Global | Accueil</title></Head>
            <main className={`bg-dark text-white overflow-x-hidden ${openSans.className}`}>
                <NavBar/>
                <section className="px-[5%] mt-[10%] md:mt-0 md:py-[1%] flex flex-col md:flex-row justify-center items-center">
                    <div className="flex flex-col items-center">
                        <h1 className="md:w-[600px] md:h-[300px] text-primary text-[32px] md:text-[64px] font-bold text-center">Ensemble, construisons l’avenir.</h1>
                        <a href="#rdv"><button className="w-[295px] h-[56px] border-2 border-primary text-white bg-primary bg-opacity-40 hover:bg-opacity-0 mt-[30px] font-semibold rounded-full">Prendre rendez-vous</button></a>
                    </div>
                    <div className="mt-[5%]">
                        <Image src="/assets/design_team.gif" width={500} height={500} loading="lazy"/>
                    </div>
                </section>
                <section className="flex border mt-16 md:mt-32 bg-white">
                    <div className="w-1/2 h-[375px] md:h-[544px] bg-violet bg-opacity-30 py-[5%] px-2 md:px-0 flex items-center justify-center">
                        <Image src="/assets/ati_logo.png" width={593} height={322}/>
                    </div>
                    <div className={`w-1/2 h-[375px] md:h-[544px] pl-[1%] pt-[2%] bg-[length:590px_538px] bg-no-repeat bg-right ${style.atiBg}`}>
                        <div className="md:w-3/6 mb-[4%] flex flex-col items-center">
                            <h2 className="text-dark text-[16px] mt-6 md:text-[32px] md:mt-0 font-semibold">Evenement annuel</h2>
                            <div className="w-[132px] h-0 border-2 border-dark mt-[1.5%]"></div>
                        </div>
                        <span className="text-pink font-light md:font-bold text-xs md:text-lg md:pl-[5%]">La technologie au cœur de votre développement</span>
                        <p className="md:w-[470px] md:pl-[5%] md:text-[32px] font-bold text-dark">
                            La solution aux problématiques technologiques du secteur public
                        </p>
                        <a href="https://www.africatechinvest.com/" target="_blank"><button className="w-[150px] md:w-[210px] md:h-[56px] ml-[10%] md:ml-[5%] border-2 border-pink text-pink md:text-lg hover:bg-pink hover:bg-opacity-40 hover:text-white mt-[10px] font-semibold rounded-full">En savoir plus</button></a>
                        <div className="md:w-1/4 text-pink flex flex-col items-center justify-center md:ml-[8%] md:mt-[1.5%]">
                            <span className="mt-4 md:mt-0 text-opacity-40 text-dark font-bold">Suivez-nous sur</span>
                            <div className="w-3/4 md:w-full flex items-center justify-between mt-[1%]">
                                <a href="https://www.linkedin.com/company/africa-tech-invest-rdc/" target="_blank" className="hover:transform hover:scale-125"><Icon icon="uit:linkedin-alt" width={36} height={36}/></a>
                                <a href="https://www.instagram.com/africatechinvest/" target="_blank" className="hover:transform hover:scale-125"><Icon icon="ph:instagram-logo-light" width={36} height={36} /></a>
                                <a href="https://www.youtube.com/@AfricaTechInvestRDC-tu5kj" target="_blank" className="hover:transform hover:scale-125"><Icon icon="ph:youtube-logo-light" width={36} height={36} /></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="md:h-[800px] md:flex md:flex-col relative">
                    <div className="md:w-3/6 pb-[4%] mt-[5%] mb-[4%] flex flex-col items-center">
                        <h2 className="text-white text-[32px] font-semibold ml-4 md:ml-0">Nos services</h2>
                        <div className="w-[132px] h-0 border-2 border-white mt-[1.5%]"></div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="md:w-[78%] md:py-5 md:flex md:space-x-2">
                            <CustomedCard width="305px" height="180px" onClick={manageArchive}>
                                <Icon icon="solar:inbox-archive-bold-duotone" width={80} height={80} color="#E4A951"/>
                                <span className='font-normal'>Archivage numérique</span>
                            </CustomedCard>
                            <CustomedCard width="305px" height="180px" onClick={managePortfolio}>
                                <Icon icon="solar:monitor-smartphone-bold-duotone" width={80} height={80} color="#E4A951"/>
                                <span className='font-normal text-center'>Developpement de site web & applications mobiles</span>
                            </CustomedCard>
                            <CustomedCard width="305px" height="180px" onClick={manageSecurity}>
                                <Icon icon="solar:safe-2-bold-duotone" width={80} height={80} color="#E4A951"/>
                                <span className='font-normal'>Sécurité des données</span>
                            </CustomedCard>
                        </div>
                        <div className="md:w-[78%] md:pb-5 md:flex md:space-x-2">
                            <CustomedCard width="305px" height="180px">
                                <Icon icon="bxs:hard-hat" width={80} height={80} color="#E4A951"/>
                                <span className='font-normal'>Sous-traitance minière</span>
                            </CustomedCard>
                            <Link href="/services">
                                <CustomedCard width="305px" height="180px">
                                    <Icon icon="solar:widget-add-bold-duotone" width={80} height={80} color="#E4A951"/>
                                    <span className='font-normal'>Nos autres services</span>
                                </CustomedCard>
                            </Link>
                        </div>
                    </div>
                    <CustomedModal isOpen={openArchivage}>
                        <h3 className="text-dark font-bold md:font-normal md:flex md:items-center md:text-4xl md:space-x-3 mb-4">
                            <Icon icon="solar:inbox-archive-bold-duotone" width={50} height={50} color="#E4A951"/>
                            <span>Archivage numérique</span>
                        </h3>
                        <div className="mt-2 text-dark mb-4">
                            <p className="text-sm text-gray-500">
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
                <section id="rdv" className={`md:h-[643px] pt-[5%] md:flex md:flex-col md:items-center ${style.rdvBg}`}>
                    <div className="md:w-3/6 mb-[4%] flex flex-col items-center">
                        <h2 className="text-white text-[32px] font-semibold">Travailler avec nous</h2>
                        <div className="w-[132px] h-0 border-2 border-white mt-[1.5%]"></div>
                    </div>
                    <div className="md:flex md:items-start md:space-x-28">
                        <Image src="/assets/schedule.svg" width={500} height={337}/>
                        <form onSubmit={handleSubmit} id="meetForm" className="flex flex-col items-center py-6 md:py-0">
                            <h3 className="pb-2 font-light">Remplissez ce formulaire pour prendre rendez-vous</h3>
                            <div className="w-full space-y-4">
                                <span className="border-2 border-primary bg-white py-2 px-8 rounded-full flex space-x-3">
                                    <Icon icon="solar:suitcase-lines-bold" width={24} height={24} color="#E4A951"/>
                                    <input type="text" id="identity" name="identity" required placeholder="nom complet ou raison sociale" className="w-[85%] focus:outline-none text-secondary" />
                                    <ValidationError 
                                        prefix="Identité" 
                                        field="identity"
                                        errors={state.errors}
                                    />
                                </span>
                                <span className="border-2 border-primary bg-white py-2 px-8 rounded-full flex space-x-3">
                                    <Icon icon="solar:mention-square-bold" width={24} height={24} color="#E4A951"/>
                                    <input type="email" id="email" name="email"  required placeholder="exemple@mail.com" className="w-[85%] focus:outline-none text-secondary" />
                                    <ValidationError 
                                        prefix="E-mail" 
                                        field="email"
                                        errors={state.errors}
                                    />
                                </span>
                                <span className="border-2 border-primary bg-white py-2 px-8 rounded-full flex space-x-3">
                                    <Icon icon="solar:calendar-minimalistic-bold" width={24} height={24} color="#E4A951"/>
                                    <input type="date" id="meet" name="meet"  required placeholder="jj/mm/aaaa" className="w-[85%] focus:outline-none text-secondary" />
                                    <ValidationError 
                                        prefix="RDV" 
                                        field="meet"
                                        errors={state.errors}
                                    />
                                </span>
                                <span className="border-2 border-primary bg-white py-2 px-8 rounded-full flex space-x-3">
                                    <Icon icon="solar:chat-square-call-bold" width={24} height={24} color="#E4A951"/>
                                    <input type="text" id="message" name="message"  required placeholder="sujet du rendez-vous" className="w-[85%] focus:outline-none text-secondary" />
                                    <ValidationError 
                                        prefix="Message" 
                                        field="message"
                                        errors={state.errors}
                                    />
                                </span>
                            </div>
                        <button type="submit" disabled={state.submitting} className="w-[125px] h-[38px] border-2 border-primary text-white bg-primary bg-opacity-40 hover:bg-opacity-0 mt-[30px] font-semibold rounded-full">Envoyer</button>

                        </form>
                    </div>
                    
                </section>
                <Footer/>
            </main>
        </>
    )
}