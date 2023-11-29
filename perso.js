const cards = [
    {
        src: "Images/ironman.png",
        title: "IronMan",
        description: "Génie milliardaire et playboy, Tony Stark conçoit une armure high-tech pour combattre le crime. Son intelligence et son ego en font un leader charismatique des Avengers.",

        src: "Images/captainamerica.jpg",
        title: "Captain America",
        description: "Un super-soldat né pendant la Seconde Guerre mondiale, Captain America incarne l'honneur et la loyauté. Son bouclier indestructible et sa combativité font de lui un symbole vivant.",

        src: "Images/hulk.jpg",
        title: "Hulk",
        description: "Scientifique exposé à une radiation gamma, Banner se transforme en Hulk lorsqu'il est en colère. Sa force surhumaine est un atout majeur pour les Avengers.",

        src: "Images/thor2.png",
        title: "Thor",
        description: "Dieu nordique du tonnerre, Thor manie le marteau Mjölnir. Son sens du devoir et sa puissance font de lui un protecteur puissant.",

        src: "Images/hawkeye.jpg",
        title: "Hawkeye",
        description: "Archer hors pair, Hawkeye excelle dans la précision. Membre agile des Avengers, il prouve que même sans superpouvoirs, on peut être un héros.",

        src: "Images/black widow.jpg",
        title: "Black Widow",
        description: "Ancienne espionne russe, la Veuve Noire excelle dans les arts martiaux et l'espionnage. Son passé complexe la rend redoutable et intriguante.",

        src: "Images/gardiens.jpg",
        title: "The Guardians",
        description: "Un groupe hétéroclite composé de Star-Lord, Gamora, Drax, Rocket et Groot. Ils se battent pour protéger l'univers contre les menaces intergalactiques tout en apportant une dose d'humour.",

        src: "Images/blackpanther.jpg",
        title: "Black Panther",
        description: "T'Challa, roi du Wakanda, T'Challa assume le rôle du Black Panther. Doté de la technologie avancée du Vibranium, il défend son peuple et le monde.",

        src: "Images/spiderman.jpg",
        title: "Spider-Man",
        description: "Adolescent mordu par une araignée radioactive, Spider-Man allie agilité et sens de l'humour. Jeune, mais puissant, il jongle entre sa vie de lycéen et son devoir de super-héros à New York.",

        src: "Images/AntMan2.jpg",
        title: "Ant-Man",
        description: "Cambrioleur repenti, Scott Lang utilise la technologie de rétrécissement pour devenir Ant-Man. Avec agilité et force accrue, il devient un héros essentiel des Avengers.",

        src: "Images/docteurstrange.jpg",
        title: "Doctor Strange",
        description: "Stephen Strange, ancien neurochirurgien, Strange devient le Sorcier Suprême après un accident. Il manipule les arts mystiques pour protéger la réalité.",

        src: "Images/captainmarvel.jpg",
        title: "Captain Marvel",
        description: "Carol Danvers, pilote de l'US Air Force, Carol obtient des pouvoirs cosmiques. En tant que Captain Marvel, elle défend la Terre contre les menaces extraterrestres.",

        src: "Images/sorciererouge.jpg",
        title: "Sorcière rouge",
        description: "Wanda Maximoff, dotée de pouvoirs psychiques, Wanda est complexe. Sa quête de contrôle entraîne des conséquences chaotiques, la rendant parfois antagoniste.",

        src: "Images/Vision.jpg",
        title: "Vision",
        description: "Androïde puissant créé par Ultron et J.A.R.V.I.S., doté de superpouvoirs, notamment la manipulation de la densité. Membre des Avengers, il incarne la synthèse de technologie et d'humanité.",

        src: "Images/ShangChi.jpg",
        title: "Shang-Chi",
        description: "Maître des arts martiaux, Shang Chi lutte contre les forces du mal. Son expertise en combat en fait un guerrier inégalable.",

        src: "Images/loki.jpg",
        title: "Loki",
        description: "Dieu de la tromperie d'Asgard, Loki est un anti-héros charismatique aux multiples facettes. Sa ruse, son charme et ses motivations complexes en font un personnage captivant et imprévisible.",

        src: "Images/bucky.jpg",
        title: "Bucky",
        description: "Bucky Barnes: Ancien meilleur ami de Steve Rogers, Bucky devient le Soldat de l'Hiver après avoir survécu à des expériences HYDRA. Son histoire complexe mêle amitié, tragédie, et rédemption.",

        src: "Images/cranerouge.jpg",
        title: "Crâne Rouge",
        description: "Johann Schmidt, adversaire de Captain America, le Crâne Rouge incarne la menace nazie. Ses plans machiavéliques et sa cruauté le font rivaliser avec les super-héros.",

        src: "Images/ultron.jpg",
        title: "Ultron",
        description: "Intelligence artificielle créée par Tony Stark, Ultron se rebelle, cherchant à éliminer l'humanité. Son ambition destructrice confronte les Avengers.",

        src: "Images/hela.jpg",
        title: "Hela",
        description: "Déesse de la Mort, Hela est la sœur de Thor. Son ambition destructrice menace Asgard et la galaxie.",

        src: "Images/dormamu.jpg",
        title: "Dormammu",
        description: "Entité interdimensionnelle, Dormammu menace la réalité. Stephen Strange négocie avec lui dans le Royaume Quantique pour sauver le monde.",

        src: "Images/ego.jpg",
        title: "Ego",
        description: "Ego le Living Planet: Entité cosmique, Ego cherche à étendre son essence à travers la galaxie. Il se révèle être le père de Star-Lord.",

        src: "Images/docteuroctopus.jpg",
        title: "docteur Octopus",
        description: "Otto Octavius, scientifique génial équipé de bras mécaniques à la puissance destructrice. Après un accident, il devient l'ennemi de Spider-Man, utilisant sa ruse et sa technologie avancée.",

        src: "Images/lebouffonvert.jpg",
        title: "Le Bouffon Vert",
        description: "Norman Osborn, homme d'affaires instable, Norman Osborn, après une expérience, devient le Bouffon Vert. Doté de forces surhumaines et d'un esprit dérangé, il devient l'ennemi redoutable de Spider-Man.",

        src: "Images/killmonger.jpg",
        title: "Killmonger",
        description: "Erik Stevens, ancien soldat des Forces spéciales, Erik Killmonger revendique le trône du Wakanda pour venger l'injustice. Son intelligence stratégique et sa force font de lui un adversaire redoutable.",

        src: "Images/Yon-Rogg.jpg",
        title: "Yon Rogg",
        description: "Officier Kree arrogant et manipulateur, Yon-Rogg est l'antagoniste de Captain Marvel. Cherchant la domination, il manipule Vers, mais sa quête est entravée par la puissance de Carol Danvers.",

        src: "Images/ebonymaw.jpg",
        title: "Ebony Maw",
        description: "Membre de l'Ordre Noir de Thanos, Ebony Maw est un manipulateur habile. Sa loyauté envers Thanos le rend dangereux pour les Avengers.",

        src: "Images/thanos.jpg",
        title: "Thanos",
        description: "Titan fou, Thanos quête l'omnipotence en rassemblant les Pierres d'Infinité. Sa quête génocidaire en fait l'antagoniste ultime des Avenger",

        src: "Images/mysterio.jpg",
        title: "Mysterio",
        description: "Quentin Beck, illusionniste et ennemi de Spider-Man, Mysterio utilise la tromperie pour ses méfaits. Sa maîtrise des illusions le rend redoutable.",

        src: "Images/xuwenwu.jpg",
        title: "Xu Wenwu",
        description: "Le Mandarin, puissant et mystérieux, Wenwu, alias le Mandarin, dirige les Dix Anneaux. En quête d'immortalité, il représente une menace redoutable, mêlant arts martiaux et magie ancestrale.",

        src: "Images/Namor.jpg",
        title: "Namor",
        description: "Prince atlante, Namor est un héros amphibien et fier. Doté de pouvoirs aquatiques, il protège son royaume sous-marin et intervient parfois en surface pour défendre l'océan.",

        src: "Images/kang-le-conquerant.jpg",
        title: "Kang Le Conquérant",
        description: "Voyageant à travers le temps, Kang est un super-vilain cosmique. Doté d'une intelligence exceptionnelle, il manipule les réalités pour asseoir son pouvoir tyrannique, posant des défis incommensurables.",

    }




]
{/* <article class="card">
<img class="card-img" src="" alt="kang-le-conquerant">
<div class="card-content">
    <h1 class="card-title"></h1>
    <p class="card-p">Voyageant à travers le temps, Kang est un super-vilain cosmique. Doté d'une
        intelligence exceptionnelle, il manipule les réalités pour asseoir son pouvoir tyrannique,
        posant des défis incommensurables.
    </p>
</div>
</article> */}

// cibler la balise div avec la classe cards
// creer la balise article avec la classe card 
// injecter article dans la div cards 
// on va creer un element pour chaque arguments de l'objet et le injecter dans l'article 
// repeter les meme operations pour tout notre tableau 

cards.map(() => {

})