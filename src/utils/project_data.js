export const projects =
  [
    {
        id: 'atracktix-ihm',
        year: 2024,
        title: 'Atracktix',
        shortDescription: "Projet web oriente interface pour travailler l'integration, le JavaScript et l'experience utilisateur.",
        details: {
            description :
                "Le projet consistait a creer un site web de A a Z avec les outils HTML CSS et JS de facon a faire un site fonctionelle et responsive pour une entreprise fictive de train su la base d'une api web.",
            learning:
                "Il m'a aide a mieux comprendre la structuration d'un projet front, la navigation entre pages et la mise en place d'interactions simples.",
            works:
                "Une API web nous donnais les differentes informations sur les trains, les horaires, les destinations et les prix. Nous devions ensuite construire une interface pour afficher ces informations de maniere claire et intuitive pour les utilisateurs. Le projet nous a permis de travailler sur la structuration d'un projet web, la navigation entre les pages et la mise en place d'interactions simples pour rendre le site plus dynamique et engageant.",

        },
        stack: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        githubUrl: '',
        liveUrl: '',
        status: 'Projet d\'etudes',
    },
    {
        id: 'CTVR',
        year: 2025,
        title: 'CTVR',
        shortDescription: "Projet web de gestion des accidents pour la CTVR une entreprise fictive de bus.",
        details: {
            description :
                "Site web permetant de gerer les accidents dans une entreprise de bus fictive avec une gestion des devis et des tiers ainsi que la gestion des differents utilisateurs .",
            learning:
                "Il m'a aide a mieux comprendre la structuration d'un projet complet et l'importance d'une bonne comunication au sein de l'equipe de developpement, la comunication entre le front et le backend et la comunication entre la base de donnees et l'interface utilisateur.",
            works:
                "Le projet consistait a developper une application web pour gerer les accidents d'une entreprise fictive de bus. Il fallait construire les pages de l'interface, organiser les donnees, connecter le front au back-end et exploiter une base de donnees pour afficher, ajouter et suivre les informations utiles.",

        },
        stack: ['PHP', 'CSS', 'JavaScript', 'Node.js', 'SQL'],
        githubUrl: '',
        liveUrl: '',
        status: 'Projet d\'etudes',
    },
    {
        id: 'stage-reservation-repas-cantine',
        year: 2025,
        title: 'Reservation Repas Cantine',
        shortDescription: "Application metier pour gerer des reservations, des presences et des habitudes alimentaires.",
        details: {
            description :
                "Projet complet organisé en controllers, models, views et SQL. Il m'a confronte a une logique metier plus concrete et a une vraie organisation applicative.",
            learning:
                "J'y ai gagne en rigueur sur le back-end, la gestion des donnees, la structure MVC et la conception d'un outil utile pour un besoin reel en aprofondissant mes competence en PHP et SQL.",
            works:
                "L'application permettait de gerer les reservations de repas, les presences et les habitudes alimentaires des enfants. Le travail portait sur la mise en place d'une structure MVC, la gestion des donnees en base SQL et la creation d'une interface adaptee a un usage concret pour la cantine d'un centre social.",

        },
        stack: ['PHP', 'SQL', 'JavaScript', 'CSS'],
        githubUrl: 'https://github.com/CSdR38/Stage-Reservation-Repas-Cantine',
        liveUrl: '',
        status: 'Projet de stage',
    },
    {
        id: 'Aramis',
        year: 2025,
        title: 'Aramis',
        shortDescription: "Projet web de gestion des commandes et visualisation de palettes pour un entrepot.",
        details: {
            description :
                "Une application web pour la gestion des commandes et la visualisation de palettes avec ThreeJS ainsi que la gestion des utilisateur et un suivis de la constrction de la palette pour savoir ou place quels colis.",
            learning:
                "Ce projet m'a permis de mieux comprendre la gestion d'un projet plus complexe, m'a fait decouvrir ThreeJS, et exercer mes competences en developpement web.",
            works:
                "Le projet consistait a creer une application de suivi des commandes et de construction de palettes. Nous devions gerer les utilisateurs, afficher les commandes, visualiser les palettes en 3D avec ThreeJS ainsi que de definir et suivre le placement des colis pour faciliter l'organisation dans l'entrepot.",

        },
        stack: ['JavaScript', 'ThreeJS', 'React', 'SQL', 'Node.js', 'Vite', 'HTML', 'CSS'],
        githubUrl: '',
        liveUrl: '',
        status: 'Projet d\'etudes',
    },
    // {
    //     id: 'portfolio',
    //     year: 2026,
    //     title: 'Portfolio personnel',
    //     shortDescription: 'Une vitrine plus claire de mon parcours, de mes projets et de mon evolution.',
    //     details: {
    //         description :
    //             "Je veux que ce portfolio montre non seulement mes meilleurs projets, mais aussi la progression qui m'a construit comme developpeur.",
    //         learning:
    //             "Ce projet me pousse a mieux presenter mon travail, structurer du contenu et soigner l'experience utilisateur.",
    //         works:
    //             "Le projet consiste a construire une vitrine personnelle pour presenter mon parcours, mes projets et mes competences de facon claire.",
    //
    //     },
    //     stack: ['React', 'Vite', 'CSS'],
    //     githubUrl: 'https://github.com/Mimisicu-git',
    //     liveUrl: '',
    //     status: 'Projet vitrine',
    // },
    {
        id: 'moodvie',
        year: 2026,
        title: 'Moodvie',
        shortDescription: 'Un site de recommandations de films personnalisees selon l\'humeur de l\'utilisateur.',
        details: {
            description :
                "Moodvie utilise une API externe meteo pour recuperer les informations sur le temps et adapter les recommandations en fonction d'une humeur associee de films en consequence.",
            learning:
                "Le projet m'a permis de m'exercer sur l'utilisation et l'integration dAPI externes, ainsi que la creation d'API en rust pour le backend et la gestion de la communication entre le front et le back-end notement avec la technologie MQTT.",
            works:
                "Le projets a été decouper en 3 parties : 1. Une API MoodEngine qui part d'une latitude et longitude l'envoie a l'API d'OpenMeteo en HTTP et recupere une temperature un code meteo un taux d'humidité et la vitesse du vent pour definir une humeur (un mood). 2. Une API MovieRecommander qui récupere l'humeur donnée par l'API MoodEngine et grace a une liste d'association vas transformer l'humeur en genre de film ensuite l'API comunique avec l'API de TMDB pour recuperer une liste de 20 film a recomander. 3. Et d'un front qui contient une carte interactive qui permet de choisir le lieux ou prendre la meteo et ainsi l'envoyer a l'API MoodEngine puis recuperer les information de l'API MovieEngine et afficher de facon ergonomique la liste des films.",

        },
        stack: ['Rust', 'MQTT', 'React'],
        githubUrl: 'https://github.com/Mimisicu-git/moodvie',
        liveUrl: '',
        status: 'Projet d\'etudes',
    },
];
