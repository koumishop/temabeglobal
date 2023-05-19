import Image from "next/image"
import Link from "next/link"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Open_Sans } from 'next/font/google'
import Head from "next/head"
const openSans = Open_Sans({ subsets: ['latin'] })

export default function Aboutpage() {
    return (
        <>
            <Head><title>Temabe Global | A propos de nous</title></Head>
            <main className={`bg-dark text-white flex flex-col justify-between ${openSans.className}`}>
                <NavBar/>
                <section className="md:px-[5%] md:flex md:items-center" id="aboutUs">
                    <div className="md:w-1/2 md:space-y-10 pl-[8%]">
                        <h1 className="text-primary font-bold text-2xl my-4 md:my-0 md:text-4xl">Qui sommes-nous?</h1>
                        <p className="md:w-[438px] md:text-2xl md:font-medium" id="values">
                        Chez TEMABE GLOBAL, nous croyons en <strong className="font-medium">l'intégrité</strong>, <strong className="font-medium">l'innovation</strong>, <strong className="font-medium">la transparence</strong>, et <strong className="font-medium">le respect</strong>, pour <strong className="font-medium" id="goals">construire l'avenir ensemble</strong>.
                        </p>
                        <Link href="/home#rdv"><button className="w-[295px] h-[56px] border-2 border-primary text-white bg-primary bg-opacity-40 hover:bg-opacity-0 mt-[30px] font-semibold rounded-full">Prendre rendez-vous</button></Link>
                    </div>
                    <div>
                        <Image src="/assets/programming_interface.gif" width={500} height={500} loading="lazy"/>
                    </div>
                </section>
                <Footer/>
            </main>
        </>
    )
}
