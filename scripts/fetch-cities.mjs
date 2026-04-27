import fs from 'fs';
import path from 'path';

// Fetch cities with > 2000 population from Geo API
async function fetchCities() {
  console.log("Fetching cities from Geo API...");
  // Using the departements to fetch all communes
  const depts = Array.from({length: 95}, (_, i) => (i + 1).toString().padStart(2, '0'));
  // Add corsica
  depts.push('2A', '2B');
  
  let allCities = [];
  
  for (const dept of depts) {
    try {
      const res = await fetch(`https://geo.api.gouv.fr/departements/${dept}/communes?fields=nom,code,codesPostaux,population,codeRegion,codeDepartement&format=json`);
      if (!res.ok) continue;
      const data = await res.json();
      
      const filtered = data.filter(c => c.population > 2000);
      allCities.push(...filtered);
    } catch (e) {
      console.error(`Failed fetching for dept ${dept}`, e);
    }
  }

  console.log(`Found ${allCities.length} cities > 2000 inhabitants.`);

  // Map to our structure
  // Need to get region and dept names. We can hardcode or just use simple mapping.
  // Actually, let's fetch regions and depts
  const regRes = await fetch('https://geo.api.gouv.fr/regions');
  const regions = await regRes.json();
  const regMap = Object.fromEntries(regions.map(r => [r.code, r.nom]));

  const depRes = await fetch('https://geo.api.gouv.fr/departements');
  const departements = await depRes.json();
  const depMap = Object.fromEntries(departements.map(d => [d.code, d.nom]));

  const formattedCities = allCities.map(c => {
    const slug = c.nom.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return {
      name: c.nom,
      slug: slug,
      zip: c.codesPostaux[0] || c.code,
      deptCode: c.codeDepartement,
      deptName: depMap[c.codeDepartement] || c.codeDepartement,
      region: regMap[c.codeRegion] || c.codeRegion,
      pop: c.population,
      lat: 46.5, // Dummy lat/lng for distance calc if we don't fetch it
      lng: 2.5
    };
  });

  // Deduplicate by slug
  const uniqueCities = [];
  const slugs = new Set();
  for (const c of formattedCities) {
    if (!slugs.has(c.slug)) {
      uniqueCities.push(c);
      slugs.add(c.slug);
    }
  }

  console.log(`Writing ${uniqueCities.length} cities to src/data/cities-fr.ts`);
  
  const fileContent = `export interface City {
  name: string;
  slug: string;
  zip: string;
  deptCode: string;
  deptName: string;
  region: string;
  pop: number;
  lat: number;
  lng: number;
}

export const cities: City[] = ${JSON.stringify(uniqueCities, null, 2)};
`;

  fs.writeFileSync(path.resolve('./src/data/cities-fr.ts'), fileContent);
  console.log("Done!");
}

fetchCities();
