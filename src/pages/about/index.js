import Image from "next/image"
import Link from "next/link"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({ subsets: ['latin'] })

export default function Aboutpage() {
    return (
        <main className={`flex flex-col justify-between ${openSans.className}`}>
            <NavBar/>
            <section className="px-[5%] flex items-center" id="aboutUs">
                <div className="w-1/2 space-y-10 pl-[8%]">
                    <h1 className="text-primary font-bold text-4xl">Qui sommes-nous?</h1>
                    <p className="w-[438px] text-4xl font-medium" id="values">
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
    )
}
