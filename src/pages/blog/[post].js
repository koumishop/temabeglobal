import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
  } from 'next-share';
import { Open_Sans } from 'next/font/google'
import Head from "next/head";
const openSans = Open_Sans({ subsets: ['latin'] })
  
export default function PostDetails({article}) {
    const router = useRouter()

    return(
        <>
            <Head><title>Temabe Global | { article.title}</title></Head>
            <main className={`bg-dark text-white ${openSans.className}`}>
                <NavBar/>
                <section className="flex flex-col items-center space-y-8 mb-[4%]">
                <h1 className="text-2xl text-primary font-bold">
                { article.title}
                </h1>
                <Image src={article.img} alt={article.title} className='border-4 border-primary rounded-lg' width={800} height={400} loading='lazy'/>
                <p className="w-full px-4 md:px-0 md:w-1/2">
                { article.article}
                </p>
                <div className="flex flex-col items-center space-y-2">
                    <span className="opacity-75 font-semibold">Partagez cet article sur</span>
                    <div className="flex items-center space-x-4">
                        <span className="hover:transform hover:scale-125"><LinkedinShareButton url={`https://temabeglobal.com${router.asPath}`} ><Icon icon="uit:linkedin-alt" width={30} height={30} color="#E4A951"/></LinkedinShareButton></span>
                        <span className="hover:transform hover:scale-125"><TwitterShareButton url={`https://temabeglobal.com${router.asPath}`} ><Icon icon="uit:twitter-alt" width={30} height={30} color="#E4A951"/></TwitterShareButton></span>
                        <span className="hover:transform hover:scale-125"><FacebookShareButton url={`https://temabeglobal.com${router.asPath}`} ><Icon icon="uit:facebook-f" width={30} height={30} color="#E4A951"/></FacebookShareButton></span>                
                    </div>
                </div>
                <Link href="/blog" className='w-1/2 md:w-[10%] flex justify-center mx-3 border-2 border-primary rounded-full hover:bg-primary hover:bg-opacity-40'>Retour</Link>
                </section>
                <Footer/>
            </main>
        </>
    )   
}

export async function getStaticProps({ params }){
    const articles=[
        {
            title:"Africa Tech Invest - Edition 2023",
            img:"/assets/ati_article.jpg",
            article:"#ATI23 Africa Tech Invest, première édition fut un véritable succès ! Deux jours de travaux intenses pour un seul objectif : trouver des solutions aux problématiques technologiques du secteur public. Nous tenons à remercier tous les participants qui ont répondu présents, nos formidables panelistes pour leur intervention de qualité ainsi que nos sponsors qui ont rendu cet événement possible. Aussi, nous saluons le travail exceptionnel réalisé par toute l’équipe ATI ! Un travail collectif de plusieurs mois qui a porté ses fruits. Nous vous donnons rendez-vous très bientôt pour la deuxième édition qui s’annonce d’ores et déjà explosive ! Dans cette attente, @anemone_tech et @temabeglobal continuent de poursuivre leurs efforts communs au service du secteur public pour une transformation digitale effective.",
            slug:"ati-2023"
        },
    ]

    return { 
        props:{ 
            article:  articles.find(post=>post.slug===params.post)
         }
     }
}

export async function getStaticPaths(){
    const routes = [
        {
            title:"Africa Tech Invest - Edition 2023",
            img:"/assets/ati_article.jpg",
            article:"#ATI23 Africa Tech Invest, première édition fut un véritable succès ! Deux jours de travaux intenses pour un seul objectif : trouver des solutions aux problématiques technologiques du secteur public. Nous tenons à remercier tous les participants qui ont répondu présents, nos formidables panelistes pour leur intervention de qualité ainsi que nos sponsors qui ont rendu cet événement possible. Aussi, nous saluons le travail exceptionnel réalisé par toute l’équipe ATI ! Un travail collectif de plusieurs mois qui a porté ses fruits. Nous vous donnons rendez-vous très bientôt pour la deuxième édition qui s’annonce d’ores et déjà explosive ! Dans cette attente, @anemone_tech et @temabeglobal continuent de poursuivre leurs efforts communs au service du secteur public pour une transformation digitale effective.",
            slug:"ati-2023"
        },
    ]
    return { 
        paths: routes.map(route=>{
            return {
                params:{ 
                    post:route.slug
                }
            }
        }),
        fallback: false
    }
}