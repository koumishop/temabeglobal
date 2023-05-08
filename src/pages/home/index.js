import NavBar from "@/components/NavBar"
import Image from "next/image"
import style from "../../styles/all_bg.module.css"
import { Icon } from "@iconify/react"
import ParticlesBackground from "@/components/ParticlesBackground"
import CustomedCard from "@/components/CustomedCard"
import { useCallback } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { loadFull } from "tsparticles";
import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({ subsets: ['latin'] })

export default function Homepage() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    const [openArchivage, setOpenArchivage] = useState(false)
    const [openSecurity, setOpenSecurity] = useState(false)

    const manageArchive = ()=> setOpenArchivage(!openArchivage)
    const manageSecurity = ()=> setOpenSecurity(!openSecurity)

    return(
        <main className={`${openSans.className}`}>
            <NavBar/>
            <section className="px-[5%] py-[1%] flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <h1 className="w-[600px] h-[300px] text-primary text-[64px] font-bold text-center">Ensemble, construisons l’avenir.</h1>
                    <button className="w-[295px] h-[56px] border-2 border-primary text-white bg-primary bg-opacity-40 hover:bg-opacity-0 mt-[30px] font-semibold rounded-full">Prendre rendez-vous</button>
                </div>
                <div className="">
                    <Image src="/assets/design_team.gif" width={500} height={500}/>
                </div>
            </section>
            <section className="flex border mt-32 bg-white">
                <div className="w-1/2 h-[544px] bg-violet bg-opacity-30 py-[5%] flex items-center justify-center">
                    <Image src="/assets/ati_logo.png" width={593} height={322}/>
                </div>
                <div className={`w-1/2 h-[544px] pl-[1%] pt-[2%] bg-[length:590px_538px] bg-no-repeat bg-right ${style.atiBg}`}>
                    <div className="w-3/6 mb-[4%] flex flex-col items-center">
                        <h2 className="text-dark text-[32px] font-semibold">Evenement annuel</h2>
                        <div className="w-[132px] h-0 border-2 border-dark mt-[1.5%]"></div>
                    </div>
                    <span className="text-pink font-bold text-lg pl-[5%]">La technologie au cœur de votre développement</span>
                    <p className="w-[470px] pl-[5%] text-[32px] font-bold text-dark">
                        La solution aux problématiques technologiques du secteur public
                    </p>
                    <a href="https://www.africatechinvest.com/" target="_blank"><button className="w-[210px] h-[56px] ml-[5%] border-2 border-pink text-pink text-lg hover:bg-pink hover:bg-opacity-40 hover:text-white mt-[10px] font-semibold rounded-full">En savoir plus</button></a>
                    <div className="w-1/4 text-pink flex flex-col items-center justify-center ml-[8%] mt-[1.5%]">
                        <span className="text-opacity-40 text-dark font-bold">Suivez-nous sur</span>
                        <div className="w-full flex items-center justify-between mt-[1%]">
                            <a href="https://www.linkedin.com/company/africa-tech-invest-rdc/" target="_blank" className="hover:transform hover:scale-125"><Icon icon="uit:linkedin-alt" width={36} height={36}/></a>
                            <a href="https://www.instagram.com/africatechinvest/" target="_blank" className="hover:transform hover:scale-125"><Icon icon="ph:instagram-logo-light" width={36} height={36} /></a>
                            <a href="https://www.youtube.com/@AfricaTechInvestRDC-tu5kj" target="_blank" className="hover:transform hover:scale-125"><Icon icon="ph:youtube-logo-light" width={36} height={36} /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-3/6 mb-[4%] flex flex-col items-center">
                    <h2 className="text-white text-[32px] font-semibold">Nos services</h2>
                    <div className="w-[132px] h-0 border-2 border-white mt-[1.5%]"></div>
                </div>
                <div className="border flex flex-col items-center justify-center">
                    <div className="w-[68%] py-5 flex justify-around flex-wrap border border-primary">
                        <CustomedCard width="310px" height="185px" onClick={manageArchive}>
                            <Icon icon="solar:inbox-archive-bold-duotone" width={80} height={80} color="#E4A951"/>
                            <span className='font-normal'>Archivage numérique</span>
                        </CustomedCard>
                        <CustomedCard width="310px" height="185px">
                            <Icon icon="solar:monitor-smartphone-bold-duotone" width={80} height={80} color="#E4A951"/>
                            <span className='font-normal text-center'>Developpement de site web & applications mobiles</span>
                        </CustomedCard>
                        <CustomedCard width="310px" height="185px" onClick={manageSecurity}>
                            <Icon icon="solar:safe-2-bold-duotone" width={80} height={80} color="#E4A951"/>
                            <span className='font-normal'>Sécurité des données</span>
                        </CustomedCard>
                    </div>
                    <div className="w-[68%] pb-5 px-2 flex space-x-4 flex-wrap border border-primary">
                        <CustomedCard width="310px" height="185px">
                            <Icon icon="bxs:hard-hat" width={80} height={80} color="#E4A951"/>
                            <span className='font-normal'>Sous-traitance minière</span>
                        </CustomedCard>
                        <CustomedCard width="310px" height="185px">
                            <Icon icon="solar:widget-add-bold-duotone" width={80} height={80} color="#E4A951"/>
                            <span className='font-normal'>Nos autres services</span>
                        </CustomedCard>
                    </div>
                </div>
                <Transition appear show={openArchivage} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={manageArchive}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25 filter grayscale blur-md contrast-200" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium flex items-center leading-6 text-gray-900"
                            >
                                <Icon icon="solar:inbox-archive-bold-duotone" width={80} height={80} color="#E4A951"/>
                                Archivage numérique
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                TEMABE GLOBAL est spécaliste de l'archivage et la conservation de vos documents de manière confidentielle et sécurisée. Nous vous accompagnons dans le processus d'archivage de vos documents physiques vers leur numérisation, afin de préserver votre histoire.
                                </p>
                            </div>

                            <div className="mt-4">
                                <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={manageArchive}
                                >
                                Fermer
                                </button>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </Dialog>
                </Transition>
                <Transition appear show={openSecurity} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={manageSecurity}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25 filter grayscale blur-md contrast-200" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium flex items-center leading-6 text-gray-900"
                            >
                                <Icon icon="solar:safe-2-bold-duotone" width={80} height={80} color="#E4A951"/>
                                Sécurité des données
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                Dans un monde qui se digitalise davantage, l'information devient une arme. TEMABE GLOBAL vous accompagne dans la sécurisation de vos données de manière fiable et durable à travers l'audit de vos systémes d'information et la sensibilisation à la cybersécurité.
                                </p>
                            </div>

                            <div className="mt-4">
                                <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={manageSecurity}
                                >
                                Fermer
                                </button>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </Dialog>
                </Transition>                
            </section>
        </main>
    )
}