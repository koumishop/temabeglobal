import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Homepage() {
    return(
        <main>
            <NavBar/>
            <section className="px-[5%] py-[2%] flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <h1 className="w-[600px] h-[300px] text-primary text-[64px] font-bold text-center">Ensemble, construisons l’avenir.</h1>
                    <button className="w-[295px] h-[56px] border-2 border-primary text-white bg-primary bg-opacity-40 hover:bg-opacity-0 mt-[30px] font-semibold rounded-full">Prendre rendez-vous</button>
                </div>
                <div className="">
                    <Image src="/assets/design_team.gif" width={500} height={500}/>
                </div>
            </section>
        </main>
    )
}