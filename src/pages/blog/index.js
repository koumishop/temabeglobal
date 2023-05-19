import Link from "next/link"
import Image from "next/image"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Card from "@/components/Card"
import { Open_Sans } from 'next/font/google'
import Head from "next/head"
const openSans = Open_Sans({ subsets: ['latin'] })

export default function Blogpage({ posts }) {

    return (
        <>
            <Head><title>Temabe Global | Notre blog</title></Head>
            <main className={`bg-dark text-white flex flex-col justify-between ${openSans.className}`}>
                <NavBar/>
                <section className='px-[10%]'>
                    <h1 className="text-primary font-bold text-2xl my-4 md:my-0 md:text-4xl ml-[10%]">Blog</h1>
                    <div className='space-y-5 md:space-y-0 md:flex md:justify-start my-10 md:flex-wrap'>
                    {
                        posts.map(
                            post =>                    
                        <Card key={post.slug} width="md:w-1/4">
                            <div className='h-[200px] object-cover rounded-t-lg relative'>
                                <Image src={ post.img } alt={ post.title } className='border rounded-t-lg absolute' fill loading='lazy'/>
                            </div>
                            <div className='max-h-[260px] h-[240px] space-y-2 relative'>
                                <h2 className='px-3 font-bold text-primary'>{ post.title }</h2>
                                <p className='h-[120px] px-3 text-ellipsis overflow-hidden'>
                                { post.article }
                                </p>
                                <Link href={`/blog/${post.slug}`}><button className='w-1/2 mt-2 mx-3 border-2 border-primary rounded-full hover:bg-primary hover:bg-opacity-40'>Lire l'article</button></Link>
                            </div>

                        </Card> 
                            )
                    }
                    </div>
                </section>
                <Footer/>
            </main>
        </>
    )
}
export async function getStaticProps(){
    const posts=[
        {
            title:"Africa Tech Invest - Edition 2023",
            img:"/assets/ati_article.jpg",
            article:"#ATI23 Africa Tech Invest, première édition fut un véritable succès ! Deux jours de travaux intenses pour un seul objectif : trouver des solutions aux problématiques technologiques du secteur public. Nous tenons à remercier tous les participants qui ont répondu présents, nos formidables panelistes pour leur intervention de qualité ainsi que nos sponsors qui ont rendu cet événement possible. Aussi, nous saluons le travail exceptionnel réalisé par toute l’équipe ATI ! Un travail collectif de plusieurs mois qui a porté ses fruits. Nous vous donnons rendez-vous très bientôt pour la deuxième édition qui s’annonce d’ores et déjà explosive ! Dans cette attente, @anemone_tech et @temabeglobal continuent de poursuivre leurs efforts communs au service du secteur public pour une transformation digitale effective.",
            slug:"ati-2023"
        },
    ]
    return { 
        props:{ 
            posts
         }
     }
}