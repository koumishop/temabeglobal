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
const openSans = Open_Sans({ subsets: ['latin'] })
  
export default function PostDetails({article}) {
    const router = useRouter()

    return(
        <main className={`${openSans.className}`}>
            <NavBar/>
            <section className="flex flex-col items-center space-y-8 mb-[4%]">
              <h1 className="text-2xl text-primary font-bold">
              { article.title}
              </h1>
              <Image src={article.img} alt={article.title} className='border-4 border-primary rounded-lg' width={800} height={400} loading='lazy'/>
              <p className="w-1/2">
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
              <Link href="/blog" className='w-[10%] flex justify-center mx-3 border-2 border-primary rounded-full hover:bg-primary hover:bg-opacity-40'>Retour</Link>
            </section>
            <Footer/>
        </main>
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
        {
            title:"Loi portant code numérique",
            img:"/assets/code_numerique.jpeg",
            article:"Le gouvernement a adopté le projet de loi portant Code du Numérique. Il a été présenté et défendu par le ministre du Numérique Eberande Kolongele lors de la 73e réunion du conseil des ministres tenue vendredi 14 octobre 2022. Déjà amendé par le conseil des ministres, il a indiqué que ce projet du Code Numérique a aussi bénéficié des commentaires et recommandations de certaines organisations internationales évoluant dans ce secteur. Intégrant ces préoccupations, les experts ont résolu de structurer le projet du code numérique en limitant strictement son champ d'application au seul secteur du numérique. Ainsi le texte est passé de 7 à 5 livres de manière à éviter tout conflit sur le champ d'application avec d'autres lois en vigueur notamment la loi sur les télécommunications et technologies de l'information et de la communication, précise Patrick Muyaya porte-parole du gouvernement. Par ailleurs, avec le recours au numérique, la RDC comme tout autre pays est confrontée à des nouveaux enjeux et défis, ceci se rapproche notamment à la protection de la vie privée, à la souveraineté numérique sur les données des citoyens avant la validité juridique de l'outil, de l'écrit et de la preuve électronique dans les échanges, à la protection des consommateurs dans le cadre du commerce électronique contre la propagation des fake news mais aussi aux réponses à réserver aux actes de malveillance sur le système d'information et dont peuvent être victimes des personnes physiques ou morales. La codification permet de regrouper des textes juridiques avec le but d'assurer une harmonisation entre les différents textes en mettant en place un tout cohérent. L'objectif premier est d'unifier les droits et les rendre lisibles et accessibles afin d'en faciliter l'application et l'interprétation, a conclu le ministre du Numérique. Depuis son accession à la magistrature suprême, Félix Tshisekedi à travers son gouvernement met un accent particulier sur le numérique afin de booster plusieurs secteurs de la vie nationale. Dans sa communication lors de la 63e réunion du conseil des ministres, le Chef de l'État Félix Tshisekedi était revenu sur la nécessité de numériser les archives de l’Etat. Il a déploré le violent incendie qui a ravagé une partie de l’immeuble SCPT (ex Onatra) occasionnant d'importants dégâts matériels et entraînant une perte irréversible des centaines des milliers des documents administratifs du domaine public.",
            slug:"loi-code-numerique"
        },
        {
            title:"ChatGPT Vs Bard",
            img:"/assets/gpt_vs_bard.webp",
            article:"Ça y est, après plusieurs mois d’attente, Google Bard est enfin testable par tout le monde. En réalité, il n’est disponible qu’en anglais et en dehors de l’Union européenne, mais nous avons quand même pu tester Google Bard pour comparer ses compétences avec celles de Bing Chat et de ChatGPT à travers différentes questions que nous leur avons posées. Il est à préciser que les usages de chaque outil sont quelque peu différents. Bing Chat est davantage conçu comme un moteur de recherche, qui va privilégier les sources qu’il utilise dans ses réponses, ce que ne font pas ses concurrents. Par ailleurs, Bing Chat et ChatGPT fonctionnent à partir du même modèle de langage, mais pas dans la même version : il s’agit de GPT-4 pour Bing Chat et de GPT-3.5 pour ChatGPT (GPT-4 y est disponible en souscrivant l’abonnement payant).",
            slug:"chatgpt-vs-bard"
        },
        {
            title:"Construire l'avenir numérique de l'Afrique",
            img:"/assets/liquid_intelligent_technologies.png",
            article:"Liquid Intelligent Technologies est un groupe technologique panafricain avec des capacités dans 14 pays, principalement en Afrique subsaharienne. Fondée en 2005, Liquid s’est solidement imposé comme le principal fournisseur panafricain d’infrastructures numériques. Liquid Intelligent Technologies redéfinit les offres réseau, cloud et cybersécurité grâce à des partenariats stratégiques avec des acteurs mondiaux de premier plan, des applications innovantes pour les entreprises, des services cloud intelligents et une sécurité de classe mondiale pour le continent africain. Liquid est aujourd’hui un groupe technologique à guichet unique qui fournit des solutions numériques sur mesure aux entreprises des secteurs public et privé à travers le continent. Le Groupe exploite également des centres de données à la pointe de la technologie à Johannesburg, Cape Town, Nairobi, Harare et Kigali, avec un potentiel combiné de 19 000 mètres carrés d’espace rack et 78 MW de capacité électrique. Grâce à cette offre combinée, Liquid Intelligent Technologies améliore l’expérience des clients sur leur parcours numérique.",
            slug:"liquid-inteligent-technologies"
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
        {
            title:"Loi portant code numérique",
            img:"/assets/code_numerique.jpeg",
            article:"Le gouvernement a adopté le projet de loi portant Code du Numérique. Il a été présenté et défendu par le ministre du Numérique Eberande Kolongele lors de la 73e réunion du conseil des ministres tenue vendredi 14 octobre 2022. Déjà amendé par le conseil des ministres, il a indiqué que ce projet du Code Numérique a aussi bénéficié des commentaires et recommandations de certaines organisations internationales évoluant dans ce secteur. Intégrant ces préoccupations, les experts ont résolu de structurer le projet du code numérique en limitant strictement son champ d'application au seul secteur du numérique. Ainsi le texte est passé de 7 à 5 livres de manière à éviter tout conflit sur le champ d'application avec d'autres lois en vigueur notamment la loi sur les télécommunications et technologies de l'information et de la communication, précise Patrick Muyaya porte-parole du gouvernement. Par ailleurs, avec le recours au numérique, la RDC comme tout autre pays est confrontée à des nouveaux enjeux et défis, ceci se rapproche notamment à la protection de la vie privée, à la souveraineté numérique sur les données des citoyens avant la validité juridique de l'outil, de l'écrit et de la preuve électronique dans les échanges, à la protection des consommateurs dans le cadre du commerce électronique contre la propagation des fake news mais aussi aux réponses à réserver aux actes de malveillance sur le système d'information et dont peuvent être victimes des personnes physiques ou morales. La codification permet de regrouper des textes juridiques avec le but d'assurer une harmonisation entre les différents textes en mettant en place un tout cohérent. L'objectif premier est d'unifier les droits et les rendre lisibles et accessibles afin d'en faciliter l'application et l'interprétation, a conclu le ministre du Numérique. Depuis son accession à la magistrature suprême, Félix Tshisekedi à travers son gouvernement met un accent particulier sur le numérique afin de booster plusieurs secteurs de la vie nationale. Dans sa communication lors de la 63e réunion du conseil des ministres, le Chef de l'État Félix Tshisekedi était revenu sur la nécessité de numériser les archives de l’Etat. Il a déploré le violent incendie qui a ravagé une partie de l’immeuble SCPT (ex Onatra) occasionnant d'importants dégâts matériels et entraînant une perte irréversible des centaines des milliers des documents administratifs du domaine public.",
            slug:"loi-code-numerique"
        },
        {
            title:"ChatGPT Vs Bard",
            img:"/assets/gpt_vs_bard.webp",
            article:"Ça y est, après plusieurs mois d’attente, Google Bard est enfin testable par tout le monde. En réalité, il n’est disponible qu’en anglais et en dehors de l’Union européenne, mais nous avons quand même pu tester Google Bard pour comparer ses compétences avec celles de Bing Chat et de ChatGPT à travers différentes questions que nous leur avons posées. Il est à préciser que les usages de chaque outil sont quelque peu différents. Bing Chat est davantage conçu comme un moteur de recherche, qui va privilégier les sources qu’il utilise dans ses réponses, ce que ne font pas ses concurrents. Par ailleurs, Bing Chat et ChatGPT fonctionnent à partir du même modèle de langage, mais pas dans la même version : il s’agit de GPT-4 pour Bing Chat et de GPT-3.5 pour ChatGPT (GPT-4 y est disponible en souscrivant l’abonnement payant).",
            slug:"chatgpt-vs-bard"
        },
        {
            title:"Construire l'avenir numérique de l'Afrique",
            img:"/assets/liquid_intelligent_technologies.png",
            article:"Liquid Intelligent Technologies est un groupe technologique panafricain avec des capacités dans 14 pays, principalement en Afrique subsaharienne. Fondée en 2005, Liquid s’est solidement imposé comme le principal fournisseur panafricain d’infrastructures numériques. Liquid Intelligent Technologies redéfinit les offres réseau, cloud et cybersécurité grâce à des partenariats stratégiques avec des acteurs mondiaux de premier plan, des applications innovantes pour les entreprises, des services cloud intelligents et une sécurité de classe mondiale pour le continent africain. Liquid est aujourd’hui un groupe technologique à guichet unique qui fournit des solutions numériques sur mesure aux entreprises des secteurs public et privé à travers le continent. Le Groupe exploite également des centres de données à la pointe de la technologie à Johannesburg, Cape Town, Nairobi, Harare et Kigali, avec un potentiel combiné de 19 000 mètres carrés d’espace rack et 78 MW de capacité électrique. Grâce à cette offre combinée, Liquid Intelligent Technologies améliore l’expérience des clients sur leur parcours numérique.",
            slug:"liquid-inteligent-technologies"
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