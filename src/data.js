import { SiOpenaigym } from 'react-icons/si';

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
                icon: <SiOpenaigym />,
                title: "Software Services",
                info: "Offering full-time services to meet software needs through comprehensive development, testing, and analytics techniques. Greenfield is highly equipped to handle complex tasks, whether in-house or at client locations, with a team of skilled professionals. We provide proven end-to-end solutions and deliver continuous development support to ensure client requirements are met and maintained effectively.",
                path: "/programs/111"
            },
            {
                id: 2,
                icon: <SiOpenaigym />,
                title: "WebSite Designing",
                info: "Web development involves the creation of websites for the Internet (World Wide Web) or a private network (intranet). It can range from building simple static pages of plain text to more complex web-based applications, such as web apps, e-commerce platforms, and social networking services.",
                path: "/programs/222"
            },
            {
                id: 3,
                icon: <SiOpenaigym />,
                title: "Mobile Apps Developments",
                info: "We provide comprehensive Application Development services, including object-oriented, web, client-server, and mobile applications, as well as legacy application modernization and extensions. Our expertise helps you address evolving technology challenges and supports the entire application development lifecycle—from defining requirements and documenting specifications to development, testing, and integrating software across various platforms.",
                path: "/programs/333"
            },
            {
                id: 4,
                icon: <SiOpenaigym />,
                title: "QA and Testing Services",
                info: "We assist organizations in minimizing risks and maintaining product integrity by offering a comprehensive suite of quality assurance and testing services.",
                path: "/programs/444"
            }
        ],
        values: [
            {
                id: 1,
                icon: <SiOpenaigym />,
                title: "360 degree approach",
                desc: "From ideation to delivery and continuous support, we manage the entire lifecycle of enterprise application design, integration, and management through our IS360 framework."
            },
            {
                id: 2,
                icon: <SiOpenaigym />,
                title: "Client centric",
                desc: "Greenfield's boutique format allows us to maintain a highly customized approach, build a long-term partnership, and remain focused on specific tasks at hand."
            },
            {
                id: 3,
                icon: <SiOpenaigym />,
                title: "Domain expertise",
                desc: "We possess exceptional domain expertise and in-depth knowledge of niche technologies: from solution architecture to firefighting projects."
            },
            {
                id: 4,
                icon: <SiOpenaigym />,
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
                name: "Milange Systems",
                quote: "Working with greenfield electorics has been a game-changer for our business. Their deep understanding of our industry, combined with their technical expertise, allowed them to deliver a custom software solution that perfectly aligns with our needs. From the initial consultation to the final product, they were professional, responsive, and committed to our success. The results speak for themselves, and we couldn’t be happier with the partnership.",
                job: "Director",
                avatar: require("./images/avatar1.jpg")
            },
            {
                id: 2,
                name: "SmartBuild Auto",
                quote: "Greenfield's team exceeded our expectations at every stage of our project. Their 360-degree approach ensured that no detail was overlooked, and their commitment to quality was evident in every deliverable. They worked closely with us, adapting to our changing needs and providing innovative solutions that have transformed how we operate. Their team is highly skilled and a pleasure to work with. We highly recommend them for any business looking to take their technology to the next level.",
                job: "Managing Director",
                avatar: require("./images/avatar2.jpg")
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
                icon: <SiOpenaigym />,
                title: "Softwarediensten",
                info: "Het aanbieden van fulltime diensten om aan de softwarebehoeften te voldoen door middel van uitgebreide ontwikkelings-, test- en analysetechnieken. Greenfield is uitstekend uitgerust om complexe taken uit te voeren, zowel intern als op klantlocaties, met een team van bekwame professionals. Wij bieden bewezen end-to-end oplossingen en leveren continue ontwikkelingsondersteuning om ervoor te zorgen dat aan de eisen van de klant wordt voldaan en dat deze effectief worden onderhouden.",
                path: "/programs/111"
            },
            {
                id: 2,
                icon: <SiOpenaigym />,
                title: "Website ontwerpen",
                info: "Webontwikkeling omvat het maken van websites voor internet (World Wide Web) of een particulier netwerk (intranet). Het kan variëren van het bouwen van eenvoudige statische pagina's met platte tekst tot complexere webgebaseerde applicaties, zoals webapps, e-commerceplatforms en sociale netwerkdiensten.",
                path: "/programs/222"
            },
            {
                id: 3,
                icon: <SiOpenaigym />,
                title: "Ontwikkelingen in mobiele apps",
                info: "We bieden uitgebreide diensten voor applicatieontwikkeling, waaronder objectgeoriënteerde, web-, client-server- en mobiele applicaties, evenals modernisering en uitbreidingen van oudere applicaties. Onze expertise helpt u bij het aanpakken van evoluerende technologische uitdagingen en ondersteunt de gehele levenscyclus van applicatieontwikkeling: van het definiëren van vereisten en het documenteren van specificaties tot het ontwikkelen, testen en integreren van software op verschillende platforms.",
                path: "/programs/333"
            },
            {
                id: 4,
                icon: <SiOpenaigym />,
                title: "QA- en testdiensten",
                info: "Wij helpen organisaties bij het minimaliseren van risico's en het handhaven van de productintegriteit door een uitgebreid pakket kwaliteitsborgings- en testdiensten aan te bieden.",
                path: "/programs/444"
            }
        ],
        values: [
            {
                id: 1,
                icon: <SiOpenaigym />,
                title: "Waarde Een",
                desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
            },
            {
                id: 2,
                icon: <SiOpenaigym />,
                title: "Waarde Twee",
                desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
            },
            {
                id: 3,
                icon: <SiOpenaigym />,
                title: "Waarde Drie",
                desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
            },
            {
                id: 4,
                icon: <SiOpenaigym />,
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
                name: "Diana Ayi",
                quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                job: "Student",
                avatar: require("./images/avatar1.jpg")
            },
            {
                id: 2,
                name: "Daniel Vinyo",
                quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae.",
                job: "Software Engineer",
                avatar: require("./images/avatar2.jpg")
            },
            {
                id: 3,
                name: "Edem Quist",
                quote: "Atque vitae dignissimos iure pariatur quod numquam corrupti.",
                job: "Universitair Docent",
                avatar: require("./images/avatar3.jpg")
            },
            {
                id: 4,
                name: "Grace Lavoe",
                quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                job: "Papegaai",
                avatar: require("./images/avatar4.jpg")
            },
            {
                id: 5,
                name: "Nana Yaa Dankwa",
                quote: "Atque vitae dignissimos iure pariatur quod numquam corrupti.",
                job: "Apotheker",
                avatar: require("./images/avatar5.jpg")
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
