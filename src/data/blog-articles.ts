/**
 * Blog articles data — 8 pillar articles for SEO
 * Each article targets a high-volume informational keyword for Poêle à bois
 */

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  emoji: string;
  image: string;
  content: string; // HTML content
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "prix-poele-bois-2026",
    title: "Prix détaillé d'un poêle à bois en 2026 : Budget complet",
    metaTitle: "Prix Poêle à bois 2026 — Tarifs, Aides & Devis",
    metaDescription: "Quel est le prix d'un poêle à bois en 2026 ? De 2 500€ à 8 000€ TTC posé. Guide complet : tarifs, création de conduit, aides MaPrimeRénov'.",
    excerpt: "De 2 500€ à 8 000€ TTC pose comprise en 2026. Découvrez les prix détaillés pour l'installation d'un poêle à bois, le tubage du conduit, et calculez votre reste à charge.",
    date: "2026-01-15",
    readTime: "10 min",
    category: "Prix",
    emoji: "💰",
    image: "/images/blog/guide-1.jpg",
    content: `
<p>Le prix d'un <strong>poêle à bois</strong> varie entre <strong>2 500€ et 8 000€ TTC</strong> pose comprise en 2026. Cette fourchette large s'explique par les différences de gamme, la nécessité ou non de créer un conduit de fumée (fumésterie) et le choix du professionnel. Mais grâce aux aides de l'État, cet investissement est très vite rentabilisé.</p>

<h2>Prix d'un poêle à bois selon la gamme (Posé)</h2>
<p>Le premier critère qui détermine le prix est la <strong>gamme du poêle</strong> :</p>

<table>
<thead><tr><th>Gamme</th><th>Caractéristiques</th><th>Prix TTC posé (avec tubage existant)</th></tr></thead>
<tbody>
<tr><td><strong>Standard</strong></td><td>Acier, design simple, rendement classique</td><td>2 500 – 3 500€</td></tr>
<tr><td><strong>Intermédiaire</strong></td><td>Fonte, design moderne, haut rendement (>80%)</td><td>3 500 – 5 000€</td></tr>
<tr><td><strong>Premium</strong></td><td>Sur-mesure, accumulation de chaleur, céramique</td><td>5 000 – 8 000€</td></tr>
</tbody>
</table>

<p>💡 <strong>Règle d'or</strong> : le poêle doit correspondre à votre besoin réel (chauffage d'appoint vs principal) et à l'isolation de votre maison. Inutile de payer 8 000€ pour un poêle de masse si vous vivez dans une maison RT2012 de 80m².</p>

<h2>La création ou le tubage du conduit : le coût caché</h2>
<p>Un poêle à bois ne fonctionne pas seul : il nécessite un <strong>conduit d'évacuation des fumées aux normes (NF DTU 24.1)</strong>. C'est souvent ce poste qui fait gonfler le devis :</p>
<ul>
<li><strong>Vous n'avez pas de conduit (Création)</strong> : L'installateur devra créer un conduit extérieur ou intérieur isolé (type Poujoulat). Prévoyez <strong>1 500€ à 3 000€</strong> supplémentaires.</li>
<li><strong>Vous avez un vieux conduit maçonné (Tubage)</strong> : Il faut le tuber avec une gaine en inox pour des raisons de sécurité. Comptez <strong>500€ à 1 000€</strong>.</li>
<li><strong>Vous avez déjà un conduit tubé aux normes</strong> : Le coût d'installation sera minime (raccordement simple).</li>
</ul>

<h2>Comment réduire la facture ?</h2>
<ol>
<li><strong>Les Aides de l'État</strong> : MaPrimeRénov' peut prendre en charge jusqu'à 2 500€ sur la pose de votre poêle. S'ajoutent à cela la Prime Énergie (CEE) et la TVA réduite à 5,5%.</li>
<li><strong>Comparez 3 devis</strong> : Les tarifs de pose varient fortement d'un artisan à l'autre. Utilisez notre comparateur pour faire jouer la concurrence.</li>
</ol>
`
  },
  {
    slug: "criteres-choisir-installateur-poele",
    title: "Comment bien choisir son installateur de poêle à bois ?",
    metaTitle: "Critères Choix Installateur Poêle à bois RGE",
    metaDescription: "Ne confiez pas la pose de votre poêle à n'importe qui ! Certification RGE QualiBois, assurances, visite technique : les critères pour choisir votre artisan.",
    excerpt: "Certification RGE QualiBois, assurances, visite technique préalable... Découvrez tous nos conseils pour choisir le bon professionnel pour l'installation de votre poêle à bois.",
    date: "2026-02-05",
    readTime: "8 min",
    category: "Guide",
    emoji: "🔍",
    image: "/images/blog/guide-2.jpg",
    content: `
<p>L'installation d'un <strong>poêle à bois</strong> ne s'improvise pas. Au-delà du choix esthétique de l'appareil, c'est la <strong>qualité de l'installation</strong> qui garantit votre sécurité (risques d'incendie, d'intoxication au monoxyde de carbone) et le rendement de votre chauffage. Voici comment bien choisir votre artisan.</p>

<h2>1. La certification RGE QualiBois : Non négociable</h2>
<p>Le premier critère est absolu : votre installateur <strong>doit être certifié RGE (Reconnu Garant de l'Environnement) QualiBois</strong>. Pourquoi ?</p>
<ul>
<li><strong>Sécurité garantie</strong> : Il maîtrise les normes complexes de fumisterie (DTU 24.1).</li>
<li><strong>Aides financières</strong> : Si votre artisan n'est pas RGE, vous n'aurez droit ni à MaPrimeRénov', ni aux CEE, ni à l'Éco-PTZ.</li>
<li><strong>TVA à 5,5%</strong> : Seul un artisan RGE peut l'appliquer sur le matériel et la pose.</li>
</ul>

<h2>2. Les assurances obligatoires</h2>
<p>Demandez systématiquement à voir l'attestation d'<strong>assurance décennale</strong> de l'artisan, et vérifiez que la mention « installation de chauffage au bois » ou « fumisterie » y figure. En cas de sinistre lié au conduit dans les 10 ans suivant la pose, c'est cette assurance qui vous protégera.</p>

<h2>3. La visite technique préalable (Obligatoire)</h2>
<p>Un professionnel sérieux <strong>ne vous fera jamais un devis définitif sur simple coup de téléphone</strong> ou sur photo. Il doit se déplacer pour une visite technique afin de :</p>
<ul>
<li>Vérifier l'état du conduit existant (passage caméra si besoin).</li>
<li>Évaluer l'isolation de votre maison et son volume pour calculer la puissance nécessaire (en kW).</li>
<li>Vérifier les arrivées d'air frais.</li>
<li>Étudier la faisabilité du dépassement du faîtage (le conduit doit dépasser de 40 cm le point le plus haut du toit).</li>
</ul>

<h2>4. Le SAV et l'entretien (Ramonage)</h2>
<p>L'artisan idéal est celui qui propose un contrat d'entretien régulier (ramonage). Le ramonage est obligatoire 1 à 2 fois par an (selon votre région et votre assurance). Un installateur qui entretient les poêles qu'il pose est un gage de suivi et de sérieux sur le long terme.</p>
`
  },
  {
    slug: "comparer-devis-poele-bois",
    title: "Comment comparer les devis de poêle à bois efficacement ?",
    metaTitle: "Comparer Devis Poêle à bois — Astuces & Pièges à éviter",
    metaDescription: "Vous avez reçu plusieurs devis pour votre poêle à bois ? Découvrez comment les décrypter, comparer les vraies prestations et éviter les arnaques.",
    excerpt: "Face à 3 devis de poêles à bois, il est parfois difficile de s'y retrouver. Apprenez à décrypter les lignes de votre devis pour faire le meilleur choix.",
    date: "2026-02-18",
    readTime: "7 min",
    category: "Conseil",
    emoji: "⚖️",
    image: "/images/blog/guide-3.jpg",
    content: `
<p>Vous avez fait appel à notre service et vous avez maintenant <strong>3 devis entre les mains</strong> pour l'installation de votre poêle à bois. Seulement voilà : les prix varient parfois du simple au double ! Comment expliquer ces écarts et surtout, comment comparer de manière juste ?</p>

<h2>Ce qui doit figurer obligatoirement sur votre devis</h2>
<p>Un devis conforme pour un poêle à bois doit comporter de nombreuses mentions obligatoires :</p>
<ul>
<li>Le numéro SIRET et la mention RGE QualiBois de l'artisan.</li>
<li>La marque, le modèle précis et la puissance (en kW) du poêle.</li>
<li>Le <strong>rendement du poêle</strong> (il doit être supérieur à 75% pour obtenir les aides, label Flamme Verte 7 étoiles idéalement).</li>
<li>Le détail de la fumisterie : diamètre, longueur et type de tubage (simple paroi, double paroi isolé, marque type Poujoulat).</li>
<li>Le coût exact de la main-d'œuvre.</li>
<li>La date ou le délai de réalisation des travaux.</li>
</ul>

<h2>Les points de vigilance pour comparer</h2>
<h3>Le piège de la "pose seule" sans tubage</h3>
<p>Vérifiez toujours si le tubage est inclus. Un devis A à 3 500€ qui ne comprend qu'un raccordement simple sera au final plus cher qu'un devis B à 4 500€ qui inclut la réfection complète du conduit aux normes.</p>

<h3>La plaque de sol et les accessoires</h3>
<p>Si votre sol est combustible (parquet, lino), une <strong>plaque de protection au sol</strong> est obligatoire (verre trempé, acier, ardoise). Certains devis l'incluent d'office (100 à 250€), d'autres vous la feront payer en supplément le jour de la pose.</p>

<h3>L'arrivée d'air frais</h3>
<p>Un poêle récent (étanche) nécessite une arrivée d'air extérieur directe (carottage dans le mur). Vérifiez que ce percement est prévu dans le devis pour éviter les surprises.</p>

<h2>Ne regardez pas que le prix final !</h2>
<p>L'accompagnement compte énormément. L'artisan A propose-t-il de gérer les dossiers de subventions pour vous (déduction directe) ? Le SAV est-il inclus ? Le ramonage de la première année est-il offert ? Autant de détails qui peuvent faire pencher la balance vers un devis légèrement plus cher mais plus sécurisant.</p>
`
  },
  {
    slug: "aides-subventions-poele-bois-2026",
    title: "Aides financières pour poêle à bois en 2026 : Le Guide",
    metaTitle: "Aides Poêle à bois 2026 — MaPrimeRénov', CEE, TVA",
    metaDescription: "Installation d'un poêle à bois : profitez des aides de l'État en 2026. Montants MaPrimeRénov', conditions de la Prime Énergie et TVA à 5,5%.",
    excerpt: "Faites baisser la facture de votre poêle à bois ! Découvrez toutes les subventions disponibles en 2026 (MaPrimeRénov', CEE, TVA réduite) et leurs conditions.",
    date: "2026-03-01",
    readTime: "9 min",
    category: "Aides",
    emoji: "🏛️",
    image: "/images/blog/guide-4.jpg",
    content: `
<p>S'équiper d'un système de chauffage au bois est fortement encouragé par les pouvoirs publics en 2026, car c'est une énergie renouvelable et décarbonée. Pour faire baisser le coût de votre installation, voici les <strong>4 aides majeures</strong> que vous pouvez cumuler.</p>

<h2>1. MaPrimeRénov' (Jusqu'à 2 500€)</h2>
<p>MaPrimeRénov' reste l'aide principale. Elle est calculée en fonction de vos revenus (RFR) :</p>
<ul>
<li><strong>Revenus très modestes (Bleu)</strong> : 2 500€ de prime.</li>
<li><strong>Revenus modestes (Jaune)</strong> : 2 000€ de prime.</li>
<li><strong>Revenus intermédiaires (Violet)</strong> : 1 000€ de prime.</li>
<li><strong>Revenus aisés (Rose)</strong> : Non éligible pour un poêle à bois.</li>
</ul>
<p><em>Règle d'or : La demande doit impérativement être validée sur le site officiel de l'ANAH avant la signature de votre devis !</em></p>

<h2>2. La Prime Énergie (CEE)</h2>
<p>Les Certificats d'Économies d'Énergie sont versés par les fournisseurs d'énergie (EDF, Total, grandes surfaces). Pour l'installation d'un poêle à bois (bûches ou granulés) très performant (Flamme Verte 7*), la prime peut varier de <strong>100€ à 800€</strong> selon vos revenus.</p>

<h2>3. La TVA réduite à 5,5%</h2>
<p>Au lieu des 20% habituels, la TVA s'applique au taux très réduit de 5,5% directement sur votre devis. Cela concerne à la fois <strong>la main d'œuvre ET le matériel</strong> (poêle, tubage, accessoires). Condition : votre logement doit être achevé depuis plus de 2 ans et l'installation réalisée par un pro.</p>

<h2>4. L'Éco-Prêt à Taux Zéro (Éco-PTZ)</h2>
<p>Si vous n'avez pas la trésorerie pour le reste à charge, vous pouvez emprunter <strong>jusqu'à 15 000€ sans aucun intérêt</strong> sur 20 ans pour l'installation isolée d'un chauffage au bois. Le dossier se monte avec votre banque, en présentant le devis de l'artisan RGE.</p>

<h2>Exemple de financement concret</h2>
<p>Pour un couple aux revenus très modestes achetant un poêle à bois (coût total : 4 500€ TTC posé) :</p>
<ul>
<li>Prix : 4 500€</li>
<li>MaPrimeRénov' : - 2 500€</li>
<li>Prime CEE : - 600€</li>
<li><strong>Reste à charge réel : 1 400€</strong> (finançable à 0% !).</li>
</ul>
`
  },
  {
    slug: "erreurs-eviter-installation-poele-bois",
    title: "Top 5 des erreurs à éviter pour l'achat de votre poêle à bois",
    metaTitle: "Erreurs Achat Poêle à bois — Ce qu'il ne faut pas faire",
    metaDescription: "Surdimensionnement, mauvais emplacement, tubage non-conforme... Découvrez les 5 erreurs fréquentes lors de l'installation d'un poêle à bois.",
    excerpt: "Un poêle mal choisi ou mal placé peut vite devenir un cauchemar (froid, salissures, surconsommation). Voici les 5 erreurs majeures à éviter absolument.",
    date: "2026-03-12",
    readTime: "6 min",
    category: "Conseil",
    emoji: "⚠️",
    image: "/images/blog/guide-5.jpg",
    content: `
<p>Vous êtes décidé, vous voulez un poêle à bois ! Mais avant de craquer pour le design incroyable de ce poêle vu en magasin, prenez garde aux <strong>5 erreurs classiques</strong> qui ruinent l'expérience du chauffage au bois.</p>

<h2>Erreur n°1 : Surdimensionner le poêle</h2>
<p>C'est l'erreur la plus commune ! On se dit "qui peut le plus, peut le moins". <strong>Faux !</strong> Un poêle trop puissant pour votre pièce va vous obliger à le faire fonctionner "au ralenti" (tirage fermé) pour ne pas avoir 30°C dans le salon. <br>
<em>Conséquences</em> : Mauvaise combustion, vitre noire en 2 jours, conduit qui s'encrasse dangereusement (bistre), et rendement ridicule.</p>

<h2>Erreur n°2 : Négliger la qualité du bois</h2>
<p>Acheter un poêle haut de gamme à 5 000€ pour y brûler du bois humide est un non-sens absolu. Le bois de chauffage DOIT avoir un taux d'humidité inférieur à 20% (environ 2 ans de séchage). Un bois humide divise le pouvoir calorifique par deux et pollue énormément.</p>

<h2>Erreur n°3 : Le mauvais emplacement dans la maison</h2>
<p>Un poêle chauffe principalement par <strong>rayonnement</strong> (pour la fonte) et par <strong>convection</strong> (pour l'acier). S'il est coincé dans une cheminée fermée ou à une extrémité d'un long couloir, la chaleur ne se diffusera pas. Placez-le idéalement au centre du rez-de-chaussée de votre maison.</p>

<h2>Erreur n°4 : Oublier l'arrivée d'air frais</h2>
<p>Le feu a besoin d'oxygène pour brûler (environ 10 m³ d'air pour 1 kg de bois !). Dans les maisons modernes très étanches (VMC, fenêtres double vitrage), le poêle peut manquer d'air : il va mal brûler ou refouler de la fumée dans le salon. Il faut impérativement une arrivée d'air connectée directement de l'extérieur vers le poêle.</p>

<h2>Erreur n°5 : Poser soi-même sans respecter les normes</h2>
<p>Les tutoriels sur internet incitent au "Do It Yourself". Mais la fumisterie répond à des règles de sécurité incendie strictes (écarts au feu, type de tubage, dépassement du toit de 40cm). Sans attestation de conformité, en cas d'incendie, votre assurance refusera toute indemnisation.</p>
`
  },
  {
    slug: "entretien-duree-vie-poele-bois",
    title: "Entretien et durée de vie d'un poêle à bois",
    metaTitle: "Entretien & Ramonage Poêle à bois — Guide Pratique",
    metaDescription: "Comment entretenir son poêle à bois pour qu'il dure 20 ans ? Nettoyage de la vitre, vidange des cendres, ramonage obligatoire : le guide complet.",
    excerpt: "Un poêle à bois bien entretenu peut durer plus de 20 ans ! Ramonage obligatoire, nettoyage quotidien, bonnes pratiques : voici notre guide d'entretien.",
    date: "2026-03-25",
    readTime: "6 min",
    category: "Maintenance",
    emoji: "🧹",
    image: "/images/blog/guide-6.jpg",
    content: `
<p>Un bon poêle à bois (surtout en fonte) est un équipement extrêmement durable. Sans électronique complexe, une panne totale est rare. Cependant, <strong>un entretien régulier est indispensable</strong> pour des raisons de sécurité, de rendement, et pour garder une belle flambée.</p>

<h2>Le ramonage : Obligatoire et vital !</h2>
<p>C'est la règle numéro un. Le ramonage du conduit d'évacuation des fumées doit être effectué par un professionnel qualifié (qui vous remettra un <strong>certificat de ramonage</strong>). <br>
<strong>Fréquence</strong> : Le Règlement Sanitaire Départemental impose généralement <strong>deux ramonages par an</strong>, dont un pendant la période de chauffe. Ce certificat est exigé par votre assurance en cas de sinistre.</p>

<h2>L'entretien quotidien / hebdomadaire (Par vous-même)</h2>
<ul>
<li><strong>Vider le cendrier</strong> : Ne le laissez pas déborder ! Les cendres peuvent boucher l'arrivée d'air primaire et empêcher le poêle de bien tirer. Laissez tout de même un petit lit de cendre (1 cm) dans la chambre de combustion, cela protège la sole foyère et aide au démarrage du feu.</li>
<li><strong>Nettoyer la vitre</strong> : Plus le bois est sec et l'allumage bien fait (top-down), moins la vitre s'encrasse. Pour la nettoyer de façon écologique : un papier journal humide trempé dans la cendre froide ! C'est abrasif juste ce qu'il faut et gratuit.</li>
</ul>

<h2>L'entretien annuel complet</h2>
<p>En plus du ramonage, vérifiez (ou faites vérifier par votre pro) à la fin de la saison de chauffe :</p>
<ul>
<li><strong>Les joints d'étanchéité</strong> : Le joint de la porte (en fibre de verre tressée) s'use avec la chaleur. S'il n'est plus étanche, le poêle tire trop, consomme trop de bois et devient incontrôlable. Il se change facilement tous les 2 à 4 ans.</li>
<li><strong>Les plaques intérieures (Déflecteurs, vermiculite)</strong> : Elles protègent l'enveloppe extérieure du poêle de la chaleur extrême. Si une brique réfractaire ou une plaque en vermiculite est fendue, il faut la remplacer avant la prochaine saison d'hiver.</li>
</ul>

<h2>La durée de vie estimée</h2>
<p>Un poêle de qualité standard (acier simple) dure en moyenne <strong>10 à 15 ans</strong>. <br>
Un poêle de haute qualité (fonte massive, accumulation) très bien entretenu peut allègrement dépasser les <strong>20 ou 25 ans</strong> !</p>
`
  },
  {
    slug: "normes-reglementation-poele-bois-2026",
    title: "Réglementation et normes en vigueur pour les poêles à bois",
    metaTitle: "Réglementation & Norme NF DTU 24.1 Poêle à bois",
    metaDescription: "DTU 24.1, label Flamme Verte, interdictions locales... Tout comprendre sur les normes légales et la réglementation 2026 pour l'installation d'un poêle.",
    excerpt: "Écarts au feu, dépassement de faîtage, label Flamme Verte... La législation concernant le chauffage au bois est stricte. Décryptage des normes 2026.",
    date: "2026-04-05",
    readTime: "7 min",
    category: "Réglementation",
    emoji: "📜",
    image: "/images/blog/guide-7.jpg",
    content: `
<p>L'installation d'un poêle à bois est soumise à une législation rigoureuse. C'est normal : on manipule du feu dans une habitation ! Voici les normes principales que votre installation devra respecter en 2026.</p>

<h2>La "Bible" de l'installateur : la norme NF DTU 24.1</h2>
<p>Le Document Technique Unifié 24.1 régit l'installation des conduits de fumée. Voici ses obligations phares :</p>

<h3>1. Le dépassement du faîtage</h3>
<p>La sortie du conduit (la cheminée sur le toit) doit <strong>dépasser d'au moins 40 centimètres</strong> le faîtage du toit (le point le plus haut), ainsi que toute partie de construction distante de moins de 8 mètres. Cela garantit un bon tirage naturel sans perturbation par les vents.</p>

<h3>2. La distance de sécurité (Écarts au feu)</h3>
<p>Le conduit de fumée (même isolé) et le poêle lui-même doivent respecter des distances minimales par rapport aux matériaux combustibles (bois, placo standard, isolation non classée M0). <br>
Pour un conduit double paroi isolé classique, la distance de sécurité est généralement de <strong>8 centimètres</strong>. Pour le poêle, la distance dépend des recommandations du fabricant (souvent entre 20 et 50 cm à l'arrière).</p>

<h2>Le Label Flamme Verte</h2>
<p>Le label « Flamme Verte » est devenu la norme d'exigence environnementale en France. En 2026, la catégorie <strong>7 étoiles</strong> (la plus stricte) garantit :</p>
<ul>
<li>Un rendement énergétique supérieur à 75%.</li>
<li>Des émissions de monoxyde de carbone (CO) inférieures à 0,12%.</li>
<li>Des émissions de particules fines très faibles (moins de 40 mg/Nm³).</li>
</ul>
<p><em>Attention : L'obtention de MaPrimeRénov' est généralement conditionnée à l'installation d'un appareil classé 7 étoiles (ou équivalent européen Ecodesign 2022).</em></p>

<h2>Les réglementations locales et interdictions</h2>
<p>Renseignez-vous auprès de votre mairie (PLU) ou de la préfecture ! Dans certaines zones très polluées (notamment en Île-de-France ou dans la Vallée de l'Arve), l'utilisation des <strong>foyers ouverts</strong> est strictement interdite. Par ailleurs, dans le neuf (maisons RE2020), un poêle à bois ne peut être considéré comme chauffage principal que s'il est pourvu d'un système de régulation automatique.</p>
`
  },
  {
    slug: "tendances-design-poeles-bois-2026",
    title: "Les tendances 2026 pour le design et l'usage des poêles à bois",
    metaTitle: "Tendances 2026 Poêles à Bois — Design & Innovations",
    metaDescription: "Poêles suspendus, hybrides, formats panoramiques... Découvrez les grandes nouveautés et tendances design 2026 pour le chauffage au bois.",
    excerpt: "Le poêle à bois de nos grands-parents a bien changé. Formats panoramiques, modèles suspendus, fonctionnement hybride... Tour d'horizon des tendances 2026.",
    date: "2026-04-18",
    readTime: "5 min",
    category: "Tendances",
    emoji: "✨",
    image: "/images/blog/guide-8.jpg",
    content: `
<p>En 2026, le poêle à bois n'est plus seulement une source de chaleur, c'est devenu l'élément architectural central des pièces de vie. Les fabricants rivalisent d'ingéniosité pour proposer des modèles toujours plus beaux et plus performants. Quelles sont les grandes tendances ?</p>

<h2>1. L'explosion du format Panoramique (16:9)</h2>
<p>On oublie la petite lucarne carrée ! La tendance est au grand spectacle. Les foyers s'élargissent horizontalement, offrant une <strong>vision panoramique du feu</strong>, très proche de l'esthétique d'un insert de cheminée contemporain, mais avec la facilité d'installation d'un poêle. Le format 16:9 est le best-seller absolu dans les salons modernes.</p>

<h2>2. Les poêles suspendus : L'ultra-design</h2>
<p>Fixés au plafond et non posés au sol, les poêles suspendus (dont certains sont pivotants à 360°) apportent une légèreté incroyable à l'espace. Ils donnent l'impression de flotter au milieu du salon et dégagent l'emprise au sol. C'est l'atout charme par excellence, bien que techniquement plus complexes (et plus chers) à installer.</p>

<h2>3. L'hybridation (Bois Bûche / Granulés)</h2>
<p>Pourquoi choisir quand on peut avoir les deux ? Les <strong>poêles mixtes</strong> ou hybrides connaissent une forte croissance. Ils permettent :</p>
<ul>
<li>De brûler du granulé la journée quand vous n'êtes pas là (programmation, chaleur continue).</li>
<li>De passer en mode bois bûche le soir et le week-end pour le plaisir de la belle flamme et le rayonnement silencieux.</li>
</ul>

<h2>4. Les matériaux bruts et texturés</h2>
<p>Exit le noir mat basique. On observe un retour aux matériaux à forte inertie thermique mais travaillés avec esthétisme :</p>
<ul>
<li><strong>La pierre ollaire ou stéatite</strong> : grises et nervurées, ces pierres accumulent la chaleur pendant le feu et la restituent pendant des heures.</li>
<li><strong>L'acier corten</strong> : pour un aspect rouillé industriel très recherché dans les lofts.</li>
<li><strong>La faïence ou céramique colorée</strong> : un clin d'œil vintage modernisé avec des lignes épurées et des couleurs naturelles (Sable, Vert d'eau, Terracotta).</li>
</ul>
`
  }
];
