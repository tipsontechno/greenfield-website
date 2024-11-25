import { SiOpenaigym } from 'react-icons/si';
import { FaHtml5 } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { FaBrain } from "react-icons/fa";
import { SiGooglecampaignmanager360 } from "react-icons/si";
import { FaUsersRays } from "react-icons/fa6";
import { MdDomain } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { ServerCog } from 'lucide-react';

export const translations = {
    EN: {
        navLinks: [
            { name: "Home", path: '/Home' },
            { name: "Services", path: '/Services' },
            { name: "Values", path: '/Values' },
            { name: "Testimonials", path: '/Testimonials' },
            { name: "Contact", path: '/Contact' },
        ],
        services: [
            {
                id: 1,
                icon: <ServerCog />,
                title: "Software Services",
                info: "Offering full-time services to meet software needs through comprehensive development, testing, and analytics techniques. Greenfield is highly equipped to handle complex tasks, whether in-house or at client locations, with a team of skilled professionals. We provide proven end-to-end solutions and deliver continuous development support to ensure client requirements are met and maintained effectively.",
                path: "/programs/SDC"

            },
            {
                id: 2,
                icon: <FaHtml5 />,
                title: "Web Designing",
                info: "Web development involves the creation of websites for the Internet (World Wide Web) or a private network (intranet). It can range from building simple static pages of plain text to more complex web-based applications, such as web apps, e-commerce platforms, and social networking services.",
                path: "/programs/Softwareservices"

            },
            {
                id: 3,
                icon: <CiMobile3 />,
                title: "Mobile Apps Developments",
                info: "We provide comprehensive Application Development services, including object-oriented, web, client-server, and mobile applications, as well as legacy application modernization and extensions. Our expertise helps you address evolving technology challenges and supports the entire application development lifecycle—from defining requirements and documenting specifications to development, testing, and integrating software across various platforms.",
                path: "/programs/Mobileapps"
            },
            {
                id: 4,
                icon: <FaBrain />,
                title: "IOT Solutions & Embedded Services",
                info: "IoT Solutions & Embedded Services focus on integrating smart devices with embedded systems, enabling seamless connectivity, data processing, and autonomous decision-making for optimized performance and automation.",
                path: "/programs/EmbededSolutions"
            }
        ],
        values: [
            {
                id: 1,
                icon: <SiGooglecampaignmanager360 />,
                title: "360 degree approach",
                desc: "From ideation to delivery and continuous support, we manage the entire lifecycle of enterprise application design, integration, and management through our IS360 framework."
            },
            {
                id: 2,
                icon: <FaUsersRays />,
                title: "Client centric",
                desc: "Greenfield's boutique format allows us to maintain a highly customized approach, build a long-term partnership, and remain focused on specific tasks at hand."
            },
            {
                id: 3,
                icon: <MdDomain />,
                title: "Domain expertise",
                desc: "We possess exceptional domain expertise and in-depth knowledge of niche technologies: from solution architecture to firefighting projects."
            },
            {
                id: 4,
                icon: <AiOutlineStock />,
                title: "Time to Market",
                desc: "High level expertise and a number of solutions accelerators enable fast product rollout, quick customizations, and smooth delivery. As a result, you get reduced development costs with speedier market entry."
            }
        ],
        faqs: [
            {
                id: 1,
                question: "How often should I exercise?",
                answer: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!"
            },
            {
                id: 2,
                question: "What time of day is best to work out?",
                answer: "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
            },
            {
                id: 3,
                question: "How long should my workouts be?",
                answer: "In publishing and graphic design, Lorem ipsum is a placeholder text."
            },
            {
                id: 4,
                question: "Do I need to warm up before my workouts?",
                answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non."
            }
        ],
        testimonials: [
            {
                id: 1,
                name: "Melange Systems",
                quote: "Working with greenfield electoric has been a game-changer for our business. Their deep understanding of our industry, combined with their technical expertise, allowed them to deliver a custom software solution that perfectly aligns with our needs. From the initial consultation to the final product, they were professional, responsive, and committed to our success. The results speak for themselves, and we couldn’t be happier with the partnership.",
                job: "Director",
                avatar: require("./images/melange.png")
            },
            {
                id: 2,
                name: "SmartBuild Auto",
                quote: "Greenfield's team exceeded our expectations at every stage of our project. Their 360-degree approach ensured that no detail was overlooked, and their commitment to quality was evident in every deliverable. They worked closely with us, adapting to our changing needs and providing innovative solutions that have transformed how we operate. Their team is highly skilled and a pleasure to work with. We highly recommend them for any business looking to take their technology to the next level.",
                job: "Managing Director",
                avatar: require("./images/sblogo.png")
            },

        ],
        plans: [
            {
                id: 1,
                name: "Silver Package",
                desc: "This package is perfect for beginners who need constant help.",
                price: 29.99,
                features: [
                    { feature: "First Feature", available: true },
                    { feature: "Second Feature", available: true },
                    { feature: "Third Feature", available: true },
                    { feature: "Fourth Feature", available: true },
                    { feature: "Fifth Feature", available: false },
                    { feature: "Sixth Feature", available: false }
                ]
            },
            {
                id: 2,
                name: "Gold Package",
                desc: "This is the perfect package for busy people.",
                price: 49.99,
                features: [
                    { feature: "First Feature", available: true },
                    { feature: "Second Feature", available: true },
                    { feature: "Third Feature", available: true },
                    { feature: "Fourth Feature", available: true },
                    { feature: "Fifth Feature", available: true },
                    { feature: "Sixth Feature", available: false }
                ]
            },
            {
                id: 3,
                name: "Platinum Package",
                desc: "This package is perfect for busy people who need home service.",
                price: 89.99,
                features: [
                    { feature: "First Feature", available: true },
                    { feature: "Second Feature", available: true },
                    { feature: "Third Feature", available: true },
                    { feature: "Fourth Feature", available: true },
                    { feature: "Fifth Feature", available: true },
                    { feature: "Sixth Feature", available: true }
                ]
            }
        ],
        trainers: [
            {
                id: 1,
                image: require("./images/trainer1.jpg"),
                name: "John Doe",
                job: "Aerobic Trainer",
                socials: [
                    "https://instagram.com/",
                    "https://twitter.com/",
                    "https://facebook.com/"
                ]
            },
            {
                id: 2,
                image: require("./images/trainer2.jpg"),
                name: "Daniel Vinyo",
                job: "Speed Trainer",
                socials: [
                    "https://instagram.com/",
                    "https://twitter.com/",
                    "https://facebook.com/"
                ]
            }
        ]
    },
    NL: {

        navLinks: [
            { name: "Thuis", path: '/Thuis' },
            {
                name: "Diensten", path: '/Diensten'
            },
            { name: "Waarden", path: "/Values" },
            { name: "Getuigenissen", path: "/Testimonials" },
            { name: "Contact", path: "/Contact" },
        ],
        services: [
            {
                id: 1,
                icon: <ServerCog />,
                title: "Softwarediensten",
                info: "Het aanbieden van fulltime diensten om aan de softwarebehoeften te voldoen door middel van uitgebreide ontwikkelings-, test- en analysetechnieken. Greenfield is uitstekend uitgerust om complexe taken uit te voeren, zowel intern als op klantlocaties, met een team van bekwame professionals. Wij bieden bewezen end-to-end oplossingen en leveren continue ontwikkelingsondersteuning om ervoor te zorgen dat aan de eisen van de klant wordt voldaan en dat deze effectief worden onderhouden.",
                path: "/programs/SDC"
            },
            {
                id: 2,
                icon: <FaHtml5 />,
                title: "Website ontwerpen",
                info: "Webontwikkeling omvat het maken van websites voor internet (World Wide Web) of een particulier netwerk (intranet). Het kan variëren van het bouwen van eenvoudige statische pagina's met platte tekst tot complexere webgebaseerde applicaties, zoals webapps, e-commerceplatforms en sociale netwerkdiensten.",
                path: "/programs/Softwareservices"

            },
            {
                id: 3,
                icon: <CiMobile3 />,
                title: "Ontwikkelingen in mobiele apps",
                info: "We bieden uitgebreide diensten voor applicatieontwikkeling, waaronder objectgeoriënteerde, web-, client-server- en mobiele applicaties, evenals modernisering en uitbreidingen van oudere applicaties. Onze expertise helpt u bij het aanpakken van evoluerende technologische uitdagingen en ondersteunt de gehele levenscyclus van applicatieontwikkeling: van het definiëren van vereisten en het documenteren van specificaties tot het ontwikkelen, testen en integreren van software op verschillende platforms.",
                path: "/programs/Mobileapps"
            },
            {
                id: 4,
                icon: <FaBrain />,
                title: "IoT-oplossingen en ingebedde services",
                info: "IoT Solutions & Embedded Services richten zich op het integreren van slimme apparaten met ingebedde systemen, waardoor naadloze connectiviteit, gegevensverwerking en autonome besluitvorming mogelijk worden voor geoptimaliseerde prestaties en automatisering.",
                path: "/programs/EmbededSolutions"
            }
        ],
        values: [
            {
                id: 1,
                icon: <SiGooglecampaignmanager360 />,
                title: "Waarde Een",
                desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
            },
            {
                id: 2,
                icon: <FaUsersRays />,
                title: "Waarde Twee",
                desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
            },
            {
                id: 3,
                icon: <MdDomain />,
                title: "Waarde Drie",
                desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
            },
            {
                id: 4,
                icon: <AiOutlineStock />,
                title: "Waarde Vier",
                desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
            }
        ],
        faqs: [
            {
                id: 1,
                question: "Hoe vaak moet ik trainen?",
                answer: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!"
            },
            {
                id: 2,
                question: "Op welk moment van de dag kan ik het beste trainen?",
                answer: "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
            },
            {
                id: 3,
                question: "Hoe lang moeten mijn trainingen duren?",
                answer: "In publishing and graphic design, Lorem ipsum is a placeholder text."
            },
            {
                id: 4,
                question: "Moet ik opwarmen voor mijn trainingen?",
                answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non."
            }
        ],
        testimonials: [
            {
                id: 1,
                name: "Melange Systems",
                quote: "Werken met Greenfield Electronic is een echte doorbraak geweest voor ons bedrijf. Hun diepgaande kennis van onze industrie, gecombineerd met hun technische expertise, stelde hen in staat om een op maat gemaakte softwareoplossing te leveren die perfect aansluit bij onze behoeften. Van het eerste consult tot het eindproduct waren ze professioneel, responsief en toegewijd aan ons succes. De resultaten spreken voor zich, en we zijn ontzettend blij met deze samenwerking.",
                job: "Directeur",
                avatar: require("./images/melange.png")
            },
            {
                id: 2,
                name: "SmartBuild Auto",
                quote: "Het team van Greenfield overtrof onze verwachtingen in elke fase van ons project. Hun 360-gradenaanpak zorgde ervoor dat geen enkel detail over het hoofd werd gezien, en hun toewijding aan kwaliteit was merkbaar in elk onderdeel van het werk. Ze werkten nauw met ons samen, pasten zich aan onze veranderende behoeften aan en boden innovatieve oplossingen die onze werkwijze hebben getransformeerd. Hun team is zeer bekwaam en prettig om mee samen te werken. We raden hen ten zeerste aan voor elk bedrijf dat zijn technologie naar een hoger niveau wil tillen.",
                job: "Algemeen Directeur",
                avatar: require("./images/sblogo.png")
            }
            
           
        ],
        plans: [
            {
                id: 1,
                name: "Zilver Pakket",
                desc: "Dit pakket is perfect voor beginners die constante hulp nodig hebben.",
                price: 29.99,
                features: [
                    { feature: "Eerste Kenmerk", available: true },
                    { feature: "Tweede Kenmerk", available: true },
                    { feature: "Derde Kenmerk", available: true },
                    { feature: "Vierde Kenmerk", available: true },
                    { feature: "Vijfde Kenmerk", available: false },
                    { feature: "Zesde Kenmerk", available: false }
                ]
            },
            {
                id: 2,
                name: "Goud Pakket",
                desc: "Dit is het perfecte pakket voor drukke mensen.",
                price: 49.99,
                features: [
                    { feature: "Eerste Kenmerk", available: true },
                    { feature: "Tweede Kenmerk", available: true },
                    { feature: "Derde Kenmerk", available: true },
                    { feature: "Vierde Kenmerk", available: true },
                    { feature: "Vijfde Kenmerk", available: true },
                    { feature: "Zesde Kenmerk", available: false }
                ]
            },
            {
                id: 3,
                name: "Platina Pakket",
                desc: "Dit pakket is perfect voor drukke mensen die thuisservice nodig hebben.",
                price: 89.99,
                features: [
                    { feature: "Eerste Kenmerk", available: true },
                    { feature: "Tweede Kenmerk", available: true },
                    { feature: "Derde Kenmerk", available: true },
                    { feature: "Vierde Kenmerk", available: true },
                    { feature: "Vijfde Kenmerk", available: true },
                    { feature: "Zesde Kenmerk", available: true }
                ]
            }
        ],
        trainers: [
            {
                id: 1,
                image: require("./images/trainer1.jpg"),
                name: "John Doe",
                job: "Aerobic Trainer",
                socials: [
                    "https://instagram.com/",
                    "https://twitter.com/",
                    "https://facebook.com/"
                ]
            },
            {
                id: 2,
                image: require("./images/trainer2.jpg"),
                name: "Daniel Vinyo",
                job: "Snelheidstrainer",
                socials: [
                    "https://instagram.com/",
                    "https://twitter.com/",
                    "https://facebook.com/"
                ]
            }
        ]
    }
};
