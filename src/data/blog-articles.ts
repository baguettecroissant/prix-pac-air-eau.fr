/**
 * Blog articles data — 5 pillar articles for SEO
 * Each article targets a high-volume informational keyword
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
  content: string; // HTML content
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "prix-pompe-a-chaleur-air-eau",
    title: "Prix d'une Pompe à Chaleur Air/Eau en 2026 : Guide Complet",
    metaTitle: "Prix Pompe à Chaleur Air/Eau 2026 — Tarifs, Aides & Devis",
    metaDescription: "Quel est le prix d'une pompe à chaleur air/eau en 2026 ? De 8 000€ à 18 000€ TTC selon la puissance. Guide complet : tarifs par marque, aides MaPrimeRénov', CEE et reste à charge réel.",
    excerpt: "De 8 000€ à 18 000€ TTC pose comprise en 2026. Découvrez les prix détaillés par puissance, marque et type d'installation, et calculez votre reste à charge après aides.",
    date: "2026-01-15",
    readTime: "12 min",
    category: "Prix",
    emoji: "💰",
    content: `
<p>Le prix d'une <strong>pompe à chaleur air/eau</strong> varie entre <strong>8 000€ et 18 000€ TTC</strong> pose comprise en 2026. Cette fourchette large s'explique par les différences de puissance (8 à 16 kW), de marque (Atlantic, Daikin, Mitsubishi, Bosch), et de complexité d'installation. Mais grâce aux aides de l'État, le <strong>reste à charge réel peut descendre sous les 5 000€</strong>.</p>

<h2>Prix d'une PAC air/eau par puissance en 2026</h2>
<p>Le premier critère qui détermine le prix est la <strong>puissance nécessaire</strong>, elle-même liée à la surface de votre logement et à son isolation :</p>

<table>
<thead><tr><th>Puissance</th><th>Surface indicative</th><th>Prix TTC posé</th><th>Cas d'usage</th></tr></thead>
<tbody>
<tr><td><strong>6-8 kW</strong></td><td>60-90 m²</td><td>7 000 – 10 000€</td><td>Appartement ou petite maison bien isolée</td></tr>
<tr><td><strong>8-10 kW</strong></td><td>90-120 m²</td><td>8 000 – 12 000€</td><td>Maison standard, chauffage seul</td></tr>
<tr><td><strong>10-14 kW</strong></td><td>120-160 m²</td><td>10 000 – 15 000€</td><td>Maison familiale, chauffage + ECS</td></tr>
<tr><td><strong>14-16 kW</strong></td><td>160-200 m²</td><td>12 000 – 18 000€</td><td>Grande maison ou isolation faible</td></tr>
</tbody>
</table>

<p>💡 <strong>Règle d'or</strong> : ne jamais surdimensionner votre PAC. Une PAC trop puissante coûte plus cher à l'achat ET consomme plus par des cycles courts répétés (phénomène de « cycling »). Le bilan thermique préalable est indispensable.</p>

<h2>Prix par marque : comparatif 2026</h2>
<p>Les prix varient significativement selon la marque choisie. Voici un comparatif des 6 marques les plus installées en France :</p>

<table>
<thead><tr><th>Marque</th><th>Modèle phare</th><th>Prix 10-14 kW posé</th><th>Points forts</th></tr></thead>
<tbody>
<tr><td>🇫🇷 <strong>Atlantic</strong></td><td>Alfea Excellia AI</td><td>10 500 – 14 000€</td><td>Fabrication française, SAV réactif, pilotage IA</td></tr>
<tr><td>🇯🇵 <strong>Daikin</strong></td><td>Altherma 3 H</td><td>11 000 – 15 000€</td><td>Leader mondial, fiabilité, fonctionne jusqu'à -25°C</td></tr>
<tr><td>🇯🇵 <strong>Mitsubishi</strong></td><td>Ecodan Zubadan</td><td>10 500 – 14 500€</td><td>Technologie Zubadan (grand froid), ultra-silencieux</td></tr>
<tr><td>🇩🇪 <strong>Bosch</strong></td><td>Compress 7000i AW</td><td>9 000 – 12 500€</td><td>Excellent rapport qualité/prix, interface simple</td></tr>
<tr><td>🇩🇪 <strong>Viessmann</strong></td><td>Vitocal 200-A</td><td>10 000 – 13 500€</td><td>Robustesse allemande, réseau SAV dense</td></tr>
<tr><td>🇫🇷 <strong>De Dietrich</strong></td><td>Alezio V220</td><td>9 500 – 13 000€</td><td>Fabricant français historique, fiable</td></tr>
</tbody>
</table>

<h2>Coûts annexes à prévoir</h2>
<p>Le prix de la PAC seule ne suffit pas. Prévoyez ces postes supplémentaires :</p>
<ul>
<li><strong>Ballon tampon (200-300L)</strong> : 800 – 1 500€ — recommandé pour optimiser les cycles</li>
<li><strong>Ballon ECS thermodynamique</strong> : 1 200 – 2 500€ — si production d'eau chaude intégrée</li>
<li><strong>Dépose de l'ancienne chaudière</strong> : 500 – 1 500€ — incluse dans la plupart des devis</li>
<li><strong>Modification du circuit hydraulique</strong> : 500 – 3 000€ — si passage en plancher chauffant</li>
<li><strong>Dalle béton pour unité extérieure</strong> : 200 – 600€</li>
<li><strong>Contrat de maintenance annuel</strong> : 150 – 300€/an — obligatoire depuis 2020</li>
</ul>

<h2>Reste à charge après aides en 2026</h2>
<p>Les aides cumulables permettent de réduire drastiquement le coût :</p>

<table>
<thead><tr><th>Profil de revenus</th><th>MaPrimeRénov'</th><th>CEE</th><th>TVA 5,5%</th><th>Reste à charge (PAC à 13 000€)</th></tr></thead>
<tbody>
<tr><td><strong>Très modestes</strong></td><td>11 000€</td><td>4 000€</td><td>~950€</td><td><strong>≈ 0 – 2 000€</strong> 🟢</td></tr>
<tr><td><strong>Modestes</strong></td><td>8 000€</td><td>4 000€</td><td>~950€</td><td><strong>≈ 1 000 – 4 000€</strong></td></tr>
<tr><td><strong>Intermédiaires</strong></td><td>4 000€</td><td>2 500€</td><td>~950€</td><td><strong>≈ 5 500 – 8 000€</strong></td></tr>
<tr><td><strong>Aisés</strong></td><td>0€</td><td>2 500€</td><td>~950€</td><td><strong>≈ 9 500 – 12 000€</strong></td></tr>
</tbody>
</table>

<p>➕ <strong>L'Éco-PTZ</strong> permet de financer le reste à charge avec un prêt à taux 0% jusqu'à 50 000€ sur 20 ans. Résultat : <strong>aucun frais d'avance</strong> pour de nombreux foyers.</p>

<h2>Comment obtenir le meilleur prix ?</h2>
<ol>
<li><strong>Comparez 3 devis minimum</strong> — les écarts de prix peuvent atteindre 30% pour la même prestation</li>
<li><strong>Vérifiez la certification RGE</strong> — obligatoire pour bénéficier de toutes les aides</li>
<li><strong>Privilégiez les installateurs locaux</strong> — déplacement moins cher, SAV plus rapide</li>
<li><strong>Négociez le contrat de maintenance</strong> — souvent offert la 1ère année si vous insistez</li>
<li><strong>Évitez les offres « à 1€ »</strong> — elles n'existent plus depuis 2022 et masquent souvent du matériel bas de gamme</li>
</ol>
`
  },
  {
    slug: "aides-maprimenov-pac-2026",
    title: "Aides MaPrimeRénov' PAC Air/Eau 2026 : Montants, Conditions & Cumul",
    metaTitle: "Aides MaPrimeRénov' PAC Air/Eau 2026 — Montants & Conditions",
    metaDescription: "Toutes les aides pour installer une PAC air/eau en 2026 : MaPrimeRénov' (jusqu'à 11 000€), CEE, TVA 5,5%, Éco-PTZ. Conditions, plafonds et cumul expliqués simplement.",
    excerpt: "MaPrimeRénov', CEE, TVA 5,5%, Éco-PTZ... Jusqu'à 16 000€ d'aides cumulées pour votre pompe à chaleur air/eau. Guide complet des conditions et montants 2026.",
    date: "2026-01-20",
    readTime: "10 min",
    category: "Aides",
    emoji: "🏛️",
    content: `
<p>L'installation d'une <strong>pompe à chaleur air/eau</strong> en 2026 bénéficie de <strong>jusqu'à 16 000€ d'aides cumulées</strong>. Entre MaPrimeRénov', les Certificats d'Économies d'Énergie (CEE), la TVA réduite et l'Éco-PTZ, le reste à charge peut descendre sous les 2 000€ pour les foyers les plus modestes. Voici le guide complet.</p>

<h2>MaPrimeRénov' 2026 : jusqu'à 11 000€</h2>
<p>MaPrimeRénov' est l'aide principale de l'État pour la rénovation énergétique. Pour une PAC air/eau, les montants 2026 sont :</p>

<table>
<thead><tr><th>Profil de revenus</th><th>Montant MaPrimeRénov'</th><th>Plafond de revenus (Île-de-France)</th><th>Plafond (Province)</th></tr></thead>
<tbody>
<tr><td>🔵 <strong>Très modestes</strong></td><td><strong>11 000€</strong></td><td>23 541€ (1 pers.)</td><td>17 009€ (1 pers.)</td></tr>
<tr><td>🟡 <strong>Modestes</strong></td><td><strong>8 000€</strong></td><td>28 657€ (1 pers.)</td><td>21 805€ (1 pers.)</td></tr>
<tr><td>🟣 <strong>Intermédiaires</strong></td><td><strong>4 000€</strong></td><td>40 018€ (1 pers.)</td><td>30 549€ (1 pers.)</td></tr>
<tr><td>🔴 <strong>Aisés</strong></td><td><strong>0€</strong></td><td>> 40 018€</td><td>> 30 549€</td></tr>
</tbody>
</table>

<h3>Conditions d'éligibilité</h3>
<ul>
<li>Logement construit depuis <strong>plus de 15 ans</strong> (ou 2 ans si remplacement de chaudière fioul)</li>
<li>Résidence principale occupée au moins <strong>8 mois par an</strong></li>
<li>Travaux réalisés par un artisan <strong>certifié RGE</strong></li>
<li>PAC air/eau de <strong>COP ≥ 3,4</strong> (tous les modèles récents le sont)</li>
<li>Demande déposée <strong>AVANT la signature du devis</strong> — crucial !</li>
</ul>

<h2>Prime CEE (Certificats d'Économies d'Énergie) : 2 500 à 5 000€</h2>
<p>La prime CEE est financée par les fournisseurs d'énergie (EDF, Engie, Total...) et est <strong>cumulable avec MaPrimeRénov'</strong>.</p>

<table>
<thead><tr><th>Zone climatique</th><th>Revenus modestes</th><th>Revenus standards</th></tr></thead>
<tbody>
<tr><td>H1 (Nord, Est, Montagne)</td><td><strong>4 000 – 5 000€</strong></td><td>2 500 – 3 500€</td></tr>
<tr><td>H2 (Centre, Ouest)</td><td><strong>3 000 – 4 000€</strong></td><td>2 000 – 3 000€</td></tr>
<tr><td>H3 (Méditerranée)</td><td><strong>2 500 – 3 500€</strong></td><td>1 500 – 2 500€</td></tr>
</tbody>
</table>

<p>⚠️ <strong>Attention</strong> : ne signez JAMAIS votre devis avant d'avoir reçu l'offre CEE. Sinon, vous perdez la prime.</p>

<h2>TVA réduite à 5,5%</h2>
<p>La TVA sur le matériel ET la main d'œuvre est réduite à 5,5% (au lieu de 20%) si :</p>
<ul>
<li>Le logement a <strong>plus de 2 ans</strong></li>
<li>Les travaux sont réalisés par un <strong>professionnel</strong></li>
<li>Il s'agit de votre <strong>résidence principale ou secondaire</strong></li>
</ul>
<p>Pour une PAC à 13 000€ HT, l'économie est de <strong>~1 900€</strong> (5,5% vs 20%).</p>

<h2>Éco-PTZ : jusqu'à 50 000€ à taux 0%</h2>
<p>L'Éco-Prêt à Taux Zéro permet de financer le reste à charge <strong>sans intérêts</strong> :</p>
<ul>
<li><strong>Montant</strong> : jusqu'à 50 000€ pour un bouquet de travaux</li>
<li><strong>Durée</strong> : jusqu'à 20 ans</li>
<li><strong>Conditions</strong> : aucune condition de revenus</li>
<li><strong>Disponible</strong> dans toutes les banques partenaires</li>
</ul>

<h2>Aides locales complémentaires</h2>
<p>De nombreuses collectivités proposent des aides supplémentaires :</p>
<ul>
<li><strong>Région Île-de-France</strong> : aide Éco-Énergie jusqu'à 4 000€</li>
<li><strong>Métropole de Lyon</strong> : programme Écoréno'v jusqu'à 5 000€</li>
<li><strong>Ville de Paris</strong> : aide de l'Agence Parisienne du Climat</li>
<li><strong>Région Bretagne</strong> : AQTA jusqu'à 3 000€</li>
</ul>
<p>Consultez l'ADIL de votre département pour connaître les aides locales disponibles.</p>

<h2>Ordre optimal pour maximiser les aides</h2>
<ol>
<li><strong>Demandez vos devis</strong> (3 minimum) — ne signez rien !</li>
<li><strong>Déposez votre demande MaPrimeRénov'</strong> sur maprimerenov.gouv.fr</li>
<li><strong>Obtenez votre offre CEE</strong> auprès d'un obligé (souvent via l'installateur)</li>
<li><strong>Signez le devis</strong> et lancez les travaux</li>
<li><strong>Payez l'artisan</strong> (le reste à charge après déduction des aides)</li>
<li><strong>Recevez les primes</strong> (virées sous 4 à 8 semaines)</li>
</ol>
`
  },
  {
    slug: "pac-air-eau-vs-air-air",
    title: "PAC Air/Eau vs Air/Air : Quelle Pompe à Chaleur Choisir en 2026 ?",
    metaTitle: "PAC Air/Eau vs Air/Air — Comparatif Complet 2026",
    metaDescription: "Pompe à chaleur air/eau ou air/air ? Comparatif détaillé : prix, performances, aides, confort. Découvrez quelle PAC choisir selon votre logement et votre budget 2026.",
    excerpt: "Air/eau ou air/air ? Deux technologies, deux philosophies. Comparatif détaillé pour choisir la pompe à chaleur adaptée à votre logement.",
    date: "2026-02-05",
    readTime: "8 min",
    category: "Comparatif",
    emoji: "⚖️",
    content: `
<p>La question revient dans 80% des consultations : <strong>PAC air/eau ou air/air ?</strong> Si les deux captent les calories de l'air extérieur, elles les restituent différemment — et cette différence change tout : prix, confort, aides, et valeur ajoutée pour votre logement.</p>

<h2>La différence fondamentale</h2>
<ul>
<li><strong>PAC Air/Eau</strong> : chauffe un <strong>circuit d'eau</strong> → alimente radiateurs, plancher chauffant et ECS (eau chaude sanitaire)</li>
<li><strong>PAC Air/Air</strong> : chauffe (ou refroidit) l'<strong>air ambiant</strong> → diffuse via des splits muraux (climatisation réversible)</li>
</ul>

<h2>Comparatif détaillé</h2>
<table>
<thead><tr><th>Critère</th><th>PAC Air/Eau</th><th>PAC Air/Air</th></tr></thead>
<tbody>
<tr><td><strong>Prix TTC posé</strong></td><td>8 000 – 18 000€</td><td>3 000 – 8 000€</td></tr>
<tr><td><strong>MaPrimeRénov'</strong></td><td>Jusqu'à <strong>11 000€</strong></td><td><strong>0€</strong> (non éligible)</td></tr>
<tr><td><strong>CEE</strong></td><td>2 500 – 5 000€</td><td>300 – 900€</td></tr>
<tr><td><strong>Reste à charge</strong></td><td>2 000 – 8 000€</td><td>2 500 – 7 000€</td></tr>
<tr><td><strong>Eau chaude (ECS)</strong></td><td>✅ Oui</td><td>❌ Non</td></tr>
<tr><td><strong>Chauffage au sol</strong></td><td>✅ Compatible</td><td>❌ Impossible</td></tr>
<tr><td><strong>Radiateurs existants</strong></td><td>✅ Compatible (HT)</td><td>❌ Impossible</td></tr>
<tr><td><strong>Climatisation</strong></td><td>⚠️ Option réversible</td><td>✅ Natif</td></tr>
<tr><td><strong>COP moyen</strong></td><td>3,5 – 4,5</td><td>3,0 – 4,0</td></tr>
<tr><td><strong>Bruit intérieur</strong></td><td>Silencieux (circuit eau)</td><td>Ventilateur audible</td></tr>
<tr><td><strong>Confort thermique</strong></td><td>⭐⭐⭐⭐⭐ (homogène)</td><td>⭐⭐⭐ (zones froides)</td></tr>
<tr><td><strong>Durée de vie</strong></td><td>15 – 20 ans</td><td>10 – 15 ans</td></tr>
<tr><td><strong>Valorisation immobilière</strong></td><td>✅ Forte (+DPE)</td><td>⚠️ Faible</td></tr>
</tbody>
</table>

<h2>Quand choisir la PAC Air/Eau ?</h2>
<ul>
<li>Vous avez déjà des <strong>radiateurs ou un plancher chauffant</strong></li>
<li>Vous voulez remplacer une <strong>chaudière gaz ou fioul</strong></li>
<li>Vous voulez produire votre <strong>eau chaude sanitaire</strong></li>
<li>Vous cherchez un <strong>confort homogène</strong> dans toutes les pièces</li>
<li>Vous voulez maximiser les <strong>aides de l'État</strong></li>
<li>Vous voulez <strong>valoriser votre bien immobilier</strong> (DPE amélioré)</li>
</ul>

<h2>Quand choisir la PAC Air/Air ?</h2>
<ul>
<li>Vous n'avez <strong>pas de circuit d'eau</strong> (chauffage tout électrique)</li>
<li>Votre priorité est la <strong>climatisation en été</strong></li>
<li>Votre budget est <strong>limité à 5 000€</strong></li>
<li>Vous êtes en <strong>location</strong> ou logement provisoire</li>
<li>Vous chauffez une <strong>seule pièce</strong> (studio, chambre)</li>
</ul>

<h2>Notre verdict</h2>
<p>Pour 90% des maisons individuelles en France, la <strong>PAC air/eau est le meilleur choix</strong>. Malgré un coût d'achat plus élevé, les aides MaPrimeRénov' (non disponibles pour l'air/air) réduisent le reste à charge au même niveau. Et le confort, la durée de vie et la valorisation immobilière sont nettement supérieurs.</p>
<p>La PAC air/air reste pertinente pour les appartements sans chauffage central, les petits budgets sans accès aux aides, ou quand la climatisation est la priorité absolue.</p>
`
  },
  {
    slug: "meilleure-marque-pac-air-eau",
    title: "Quelle est la Meilleure Marque de PAC Air/Eau en 2026 ?",
    metaTitle: "Meilleure Marque PAC Air/Eau 2026 — Top 6 Comparées",
    metaDescription: "Atlantic, Daikin, Mitsubishi, Bosch, Viessmann, De Dietrich : quelle est la meilleure marque de PAC air/eau en 2026 ? Comparatif prix, fiabilité, SAV et rapport qualité/prix.",
    excerpt: "Atlantic, Daikin, Mitsubishi ou Bosch ? Comparatif objectif des 6 meilleures marques de pompe à chaleur air/eau en 2026 : prix, fiabilité, SAV, innovation.",
    date: "2026-02-15",
    readTime: "9 min",
    category: "Guide",
    emoji: "🏆",
    content: `
<p>Choisir la bonne marque de <strong>pompe à chaleur air/eau</strong> est aussi important que le dimensionnement. Une marque fiable, c'est 15-20 ans de tranquillité. Une marque low-cost, c'est des pannes, du SAV et des regrets. Voici notre classement objectif 2026.</p>

<h2>Top 6 des marques de PAC air/eau en France</h2>

<h3>🥇 1. Daikin — Le leader mondial incontesté</h3>
<p><strong>Modèle phare</strong> : Altherma 3 H (monobloc ou bi-bloc)</p>
<ul>
<li>✅ Fiabilité exceptionnelle — leader mondial depuis 1924</li>
<li>✅ Fonctionne jusqu'à -25°C — le meilleur en grand froid</li>
<li>✅ Technologie inverter de référence</li>
<li>✅ Application mobile Daikin Onecta pour le pilotage à distance</li>
<li>⚠️ Prix premium : 11 000 – 15 000€ TTC posé</li>
<li>⚠️ SAV parfois lent en période de forte demande</li>
</ul>
<p><strong>Idéal pour</strong> : les zones froides (H1), les grandes maisons, ceux qui veulent le meilleur sans compromis.</p>

<h3>🥈 2. Atlantic — Le champion français</h3>
<p><strong>Modèle phare</strong> : Alfea Excellia AI</p>
<ul>
<li>✅ Fabrication française (La Roche-sur-Yon) — SAV réactif</li>
<li>✅ Pilotage intelligent par IA (auto-apprentissage de vos habitudes)</li>
<li>✅ Excellent rapport qualité/prix français</li>
<li>✅ Réseau d'installateurs agréés très dense</li>
<li>⚠️ Moins performant que Daikin en dessous de -15°C</li>
</ul>
<p><strong>Idéal pour</strong> : ceux qui veulent un produit français, un bon SAV et le pilotage IA.</p>

<h3>🥉 3. Mitsubishi Electric — L'innovation grand froid</h3>
<p><strong>Modèle phare</strong> : Ecodan Zubadan</p>
<ul>
<li>✅ Technologie Zubadan exclusive — 100% de puissance à -15°C</li>
<li>✅ Ultra-silencieux (< 45 dB unité extérieure)</li>
<li>✅ Garantie compresseur 7 ans (la plus longue du marché)</li>
<li>⚠️ Interface de pilotage moins intuitive que Daikin</li>
<li>⚠️ Prix élevé en gamme Zubadan</li>
</ul>
<p><strong>Idéal pour</strong> : les zones de montagne, les voisinages sensibles au bruit.</p>

<h3>4. Bosch — Le meilleur rapport qualité/prix</h3>
<p><strong>Modèle phare</strong> : Compress 7000i AW</p>
<ul>
<li>✅ Prix très compétitif : 9 000 – 12 500€ posé</li>
<li>✅ Qualité de fabrication allemande</li>
<li>✅ Intégration domotique (compatible Google Home, Alexa)</li>
<li>⚠️ Marque moins connue en PAC que Daikin ou Atlantic</li>
</ul>
<p><strong>Idéal pour</strong> : les budgets maîtrisés sans sacrifier la qualité.</p>

<h3>5. Viessmann — La robustesse allemande</h3>
<p><strong>Modèle phare</strong> : Vitocal 200-A / 222-A</p>
<ul>
<li>✅ Construction robuste — réputation de longévité</li>
<li>✅ Réseau SAV dense en France</li>
<li>✅ Bon COP en conditions réelles</li>
<li>⚠️ Design de l'unité extérieure perfectible</li>
</ul>
<p><strong>Idéal pour</strong> : ceux qui privilégient la durabilité sur 20+ ans.</p>

<h3>6. De Dietrich — L'héritage français</h3>
<p><strong>Modèle phare</strong> : Alezio V220</p>
<ul>
<li>✅ Fabricant français historique depuis 1684</li>
<li>✅ Silencieux et compact</li>
<li>✅ Bon rapport qualité/prix</li>
<li>⚠️ Innovation moins rapide que Daikin ou Atlantic</li>
</ul>

<h2>Les marques à éviter</h2>
<p>Méfiez-vous des marques inconnues vendues en porte-à-porte ou par des « commerciaux énergie ». Les signes d'alerte :</p>
<ul>
<li>❌ Marque introuvable sur les sites spécialisés</li>
<li>❌ Pas de réseau SAV en France</li>
<li>❌ Prix anormalement bas (< 6 000€ posé)</li>
<li>❌ Garantie compresseur < 5 ans</li>
<li>❌ Vendeur qui insiste pour signer « aujourd'hui »</li>
</ul>

<h2>Notre conseil final</h2>
<p>Les 3 premières marques (Daikin, Atlantic, Mitsubishi) représentent <strong>75% des installations en France</strong> pour une bonne raison : elles sont fiables, performantes et bien servicées. Choisissez parmi ces trois et vous ne vous tromperez pas.</p>
`
  },
  {
    slug: "entretien-pompe-a-chaleur",
    title: "Entretien Pompe à Chaleur : Prix, Fréquence & Obligations 2026",
    metaTitle: "Entretien Pompe à Chaleur 2026 — Prix, Fréquence & Obligations",
    metaDescription: "L'entretien d'une PAC est obligatoire tous les 2 ans depuis 2020. Prix : 150 à 300€/an. Découvrez ce que comprend la maintenance, les obligations légales et nos conseils.",
    excerpt: "L'entretien d'une pompe à chaleur est obligatoire depuis 2020. Coût : 150 à 300€/an. Voici tout ce que vous devez savoir sur la maintenance de votre PAC.",
    date: "2026-03-01",
    readTime: "7 min",
    category: "Maintenance",
    emoji: "🔧",
    content: `
<p>Depuis le <strong>décret du 28 juillet 2020</strong>, l'entretien d'une pompe à chaleur contenant plus de 2 kg de fluide frigorigène est <strong>obligatoire tous les 2 ans</strong>. En pratique, la plupart des installateurs recommandent un <strong>contrat de maintenance annuel</strong> pour garantir performances et longévité. Voici tout ce qu'il faut savoir.</p>

<h2>Ce que comprend l'entretien d'une PAC air/eau</h2>
<h3>Visite annuelle standard (150 – 200€)</h3>
<ul>
<li>Contrôle de la pression du circuit hydraulique</li>
<li>Vérification du fluide frigorigène (pression, niveau, étanchéité)</li>
<li>Nettoyage de l'évaporateur de l'unité extérieure</li>
<li>Contrôle des raccordements électriques</li>
<li>Vérification du fonctionnement du dégivrage automatique</li>
<li>Mesure du COP réel et comparaison avec le COP nominal</li>
<li>Contrôle du bon fonctionnement du thermostat</li>
<li>Remise d'une attestation d'entretien</li>
</ul>

<h3>Visite complète tous les 2 ans (200 – 300€)</h3>
<p>En plus de la visite standard :</p>
<ul>
<li>Contrôle d'étanchéité du circuit frigorifique (obligatoire > 2 kg de fluide)</li>
<li>Mesure des performances énergétiques complètes</li>
<li>Vérification de la conformité aux normes en vigueur</li>
<li>Bilan de l'état général et recommandations</li>
</ul>

<h2>Prix d'un contrat de maintenance en 2026</h2>
<table>
<thead><tr><th>Type de contrat</th><th>Prix annuel</th><th>Inclus</th></tr></thead>
<tbody>
<tr><td><strong>Contrat basique</strong></td><td>150 – 200€/an</td><td>1 visite annuelle + attestation</td></tr>
<tr><td><strong>Contrat confort</strong></td><td>200 – 250€/an</td><td>1 visite + dépannage prioritaire</td></tr>
<tr><td><strong>Contrat premium</strong></td><td>250 – 350€/an</td><td>1 visite + dépannage 24h/24 + pièces incluses</td></tr>
</tbody>
</table>
<p>💡 <strong>Astuce</strong> : négociez l'inclusion de la 1ère année de maintenance dans le devis d'installation. De nombreux installateurs acceptent.</p>

<h2>Ce que vous pouvez faire vous-même</h2>
<p>Certains gestes d'entretien ne nécessitent pas de technicien :</p>
<ul>
<li><strong>Tous les mois</strong> : vérifier que l'unité extérieure n'est pas obstruée (feuilles, neige, débris)</li>
<li><strong>Au printemps</strong> : nettoyer les ailettes de l'unité extérieure au jet d'eau douce (pas de karcher !)</li>
<li><strong>En automne</strong> : dégager le périmètre de l'unité extérieure (50 cm autour)</li>
<li><strong>En hiver</strong> : ne JAMAIS couvrir l'unité extérieure (elle doit respirer)</li>
<li><strong>Toute l'année</strong> : surveiller le manomètre de pression du circuit (si accessible)</li>
</ul>

<h2>Signes qu'un dépannage est nécessaire</h2>
<ul>
<li>🔴 La PAC ne démarre plus ou se met en erreur fréquemment</li>
<li>🔴 La facture d'électricité augmente anormalement (+20%)</li>
<li>🔴 L'eau des radiateurs n'est plus assez chaude</li>
<li>🔴 L'unité extérieure fait un bruit inhabituel (claquements, sifflements)</li>
<li>🔴 Du givre persistant sur l'unité extérieure (même hors cycle de dégivrage)</li>
<li>🔴 Fuite d'eau visible au niveau de l'unité intérieure</li>
</ul>

<h2>Impact de l'entretien sur la durée de vie</h2>
<table>
<thead><tr><th>Entretien</th><th>Durée de vie moyenne</th><th>COP moyen maintenu</th></tr></thead>
<tbody>
<tr><td>✅ Entretien annuel régulier</td><td><strong>18 – 22 ans</strong></td><td>95% du COP nominal</td></tr>
<tr><td>⚠️ Entretien tous les 2-3 ans</td><td>12 – 16 ans</td><td>85% du COP nominal</td></tr>
<tr><td>❌ Aucun entretien</td><td>8 – 12 ans</td><td>70% du COP nominal</td></tr>
</tbody>
</table>
<p>Un entretien régulier prolonge la vie de votre PAC de <strong>6 à 10 ans</strong> et maintient des performances optimales. Sur 20 ans, les 3 000 à 5 000€ investis en maintenance se remboursent 5 à 10 fois en économies de chauffage.</p>
`
  },
];
