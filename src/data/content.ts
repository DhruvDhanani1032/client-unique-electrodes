import productCopperPipeBatch from '/src/assets/product_copper_pipe_batch.webp';
import productCopperPipe48mm from '/src/assets/product_copper_pipe_48mm.webp';
import productCopperPipePure from '/src/assets/product_copper_pipe_pure.webp';
import productCopperRod from '/src/assets/product_copper_rod.webp';
import productGiPipeSingle from '/src/assets/product_gi_pipe_single.webp';
import productGiPipePallet from '/src/assets/product_gi_pipe_pallet.webp';
import productGiRod from '/src/assets/product_gi_rod.webp';
import productMultispikeArrester from '/src/assets/product_multispike_arrester.webp';
import productEseArrester from '/src/assets/product_ese_arrester.webp';
import productLaAccessories from '/src/assets/product_la_accessories.webp';
import productEarthCompound from '/src/assets/product_earth_compound.webp';
import productSolarKit from '/src/assets/product_solar_kit.webp';

export const company = {
  name: 'Unique Electrodes',
  legalName: 'Unique Enterprise',
  tagline: 'Grounded in Quality. Built for Safety.',
  established: 'July 2021',
  type: 'Manufacturer & Trader',
  msme: 'Registered Enterprise',
  isoNo: '9001:2015 Certified',
  gst: 'GST Registered (State: Gujarat)',
  website: 'www.uniqueelectrodes.com',
  contacts: ['+91 9512231350', '+91 9537025302'],
  emails: ['uniqueelectrode2025@gmail.com', 'uniqueelectrodes@gmail.com'],
  address: {
    line1: 'Plot No. B-116, Shed No. 1, Road No. 8,',
    line2: 'Udhyog Nagar, Udhana,',
    city: 'Surat',
    state: 'Gujarat',
    pincode: '394210',
    country: 'India',
    full: 'Plot No. B-116, Shed No. 1, Road No. 8, Udhyog Nagar, Udhana, Surat, Gujarat — 394210',
  },
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4!2d72.858!3d21.165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6b4bd8e3c3%3A0x123!2sUdhna+Udhyog+Nagar%2C+Surat!5e0!3m2!1sen!2sin!4v1620000000000',
  stats: [
    { value: 1000, suffix: '+', label: 'Projects Delivered' },
    { value: 20, suffix: '+', label: 'Years Product Lifespan' },
    { value: 13, suffix: '+', label: 'Product Lines' },
    { value: 100, suffix: '%', label: 'Tested Quality' },
    { value: 10000, suffix: '+', label: 'Production Capacity (Units/Month)' },
  ],
};

// ── Product Navigation Hierarchy (Mega Menu & Categories) ───────
export const productNavigation = [
  {
    title: 'Pipe Type Chemical Earthing',
    category: 'Pipe Type Chemical Earthing',
    subcategories: [
      {
        name: 'Strip In Pipe Chemical Earthing',
        items: [
          { name: 'Galvanised Strip In Pipe', id: 'galvanised-strip-in-pipe' },
          { name: 'Hot Dip Galvanised Strip In Pipe', id: 'hot-dip-galvanised-strip-in-pipe' },
          { name: 'Copper Bonded Strip In Pipe', id: 'copper-bonded-strip-in-pipe' },
        ],
      },
      {
        name: 'Rod In Pipe Chemical Earthing',
        items: [
          { name: 'Copper Bonded Rod In Pipe', id: 'copper-bonded-rod-in-pipe' },
        ],
      },
    ],
  },
  {
    title: 'Solid Rod Type Earthing',
    category: 'Solid Rod Type Earthing',
    items: [
      { name: 'Copper Bonded Solid Rod', id: 'copper-bonded-solid-rod' },
      { name: 'Hot Dip Galvanised Solid Rod', id: 'hot-dip-galvanised-solid-rod' },
      { name: '4 Meter Copper Bonded Rod', id: '4-meter-copper-bonded-rod' },
      { name: 'Pure Copper Solid Rod', id: 'pure-copper-solid-rod' },
    ],
  },
  {
    title: 'Lightning Protection Systems',
    category: 'Lightning Protection Systems',
    items: [
      { name: 'ESE Lightning Arrestor', id: 'ese-lightning-arrestor' },
      { name: 'Conventional Lightning Arrestor', id: 'conventional-lightning-arrestor' },
      { name: 'Lightning Protection Accessories', id: 'lightning-protection-accessories' },
    ],
  },
  {
    title: 'Specialty Products',
    category: 'Specialty Products',
    items: [
      { name: 'Solar Earthing Kit', id: 'solar-earthing-kit' },
      { name: 'Ground Improving Compound', id: 'ground-improving-compound' },
    ],
  },
];

export interface ProductVariant {
  model: string;
  pipeDia?: string;
  innerConductor?: string;
  length: string;
  coating?: string;
  crossSection?: string;
  compound?: string;
  specsSummary?: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  category: string;
  subCategory?: string;
  tagline: string;
  description: string;
  image: string;
  keySpec: string;
  features: string[];
  variants: ProductVariant[];
  specifications: { param: string; value: string }[];
  testReports: { lab: string; date: string; reportNo: string; result: string; detail: string }[];
  applications: string[];
}

// ── Products Data (13 Products strictly as per specification) ──
export const products: Product[] = [
  // ── Pipe Type Chemical Earthing ──────────────────────────────
  {
    id: 'galvanised-strip-in-pipe',
    name: 'Galvanised Strip In Pipe Earthing Electrode',
    shortName: 'Galvanised Strip In Pipe',
    category: 'Pipe Type Chemical Earthing',
    subCategory: 'Strip In Pipe Chemical Earthing',
    tagline: 'Economical and reliable earthing for residential, commercial and light industrial installations.',
    description:
      'Our Galvanised Strip-in-Pipe Earthing Electrode is manufactured using a heavy-gauge mild steel pipe with an internal continuous galvanized flat strip conductor running from top to bottom. The annular space is tightly filled with high-conductivity crystalline mineral compound to provide low ground impedance, high corrosion resistance, and rapid fault current dissipation. Delivers 20+ years of maintenance-free performance.',
    image: productGiPipeSingle,
    keySpec: '48mm & 76mm OD | 40x6mm / 50x10mm Inner Strip | 20+ Years Life',
    features: [
      'Maintenance-free chemical earthing operation',
      'Continuous strip-in-pipe design for extended service life',
      'Protective galvanized zinc coating for dependable corrosion resistance',
      'High fault current dissipation capacity',
      'Conductive crystalline compound fill ensures low pit impedance',
      'ISI 1239 / IS 3043 quality standard compliance',
      'Stainless steel hardware included (2 Nos. SS Nut Bolts)',
      '20+ years expected service life in standard soil conditions',
      'Made in India at our Surat manufacturing facility',
    ],
    variants: [
      {
        model: '48MM X 2 Meter',
        pipeDia: '48 mm',
        innerConductor: '40 mm × 6 mm flat strip',
        length: '2.0 Meter',
        coating: 'Galvanized',
        crossSection: '482.55 mm²',
        compound: '25 Kg compound included',
        specsSummary: 'Wall 3.2mm, Lug 40x6x100mm, 2 SS Nut-Bolts',
      },
      {
        model: '48MM X 3 Meter',
        pipeDia: '48 mm',
        innerConductor: '40 mm × 6 mm flat strip',
        length: '3.0 Meter',
        coating: 'Galvanized',
        crossSection: '482.55 mm²',
        compound: '50 Kg compound included',
        specsSummary: 'Wall 3.2mm, Lug 40x6x100mm, 2 SS Nut-Bolts',
      },
      {
        model: '76MM X 2 Meter',
        pipeDia: '76 mm',
        innerConductor: '50 mm × 10 mm flat strip',
        length: '2.0 Meter',
        coating: 'Galvanized',
        crossSection: '860 mm²',
        compound: '25 Kg compound included',
        specsSummary: 'Wall 3.6mm, Lug 50x10x100mm, 2 SS Nut-Bolts',
      },
      {
        model: '76MM X 3 Meter',
        pipeDia: '76 mm',
        innerConductor: '50 mm × 10 mm flat strip',
        length: '3.0 Meter',
        coating: 'Galvanized',
        crossSection: '860 mm²',
        compound: '50 Kg compound included',
        specsSummary: 'Wall 3.6mm, Lug 50x10x100mm, 2 SS Nut-Bolts',
      },
    ],
    specifications: [
      { param: 'Outer Pipe Diameter', value: '48 mm, 76 mm' },
      { param: 'Inner Flat Strip', value: '40 mm × 6 mm (48mm pipe) / 50 mm × 10 mm (76mm pipe)' },
      { param: 'Standard Lengths', value: '2.0 Meter, 3.0 Meter' },
      { param: 'Pipe Wall Thickness', value: '3.2 mm (48mm OD) / 3.6 mm (76mm OD)' },
      { param: 'Cross Sectional Area', value: '482.55 mm² (48mm) / 860 mm² (76mm)' },
      { param: 'Terminal Lug', value: '40×6×100 mm / 50×10×100 mm with dual SS nut bolts' },
      { param: 'Coating Standard', value: 'Galvanized to IS:2629 / IS:4759 standards' },
      { param: 'Internal Backfill', value: 'High-grade crystalline conductive compound included' },
      { param: 'Expected Service Life', value: '20+ Years' },
      { param: 'Standards Compliance', value: 'IS:3043, BS EN 62305, ISI 1239' },
    ],
    testReports: [],
    applications: ['Residential Complexes', 'Commercial Buildings', 'Distribution Transformers', 'Light Industrial Facilities', 'Rural Electrification'],
  },
  {
    id: 'hot-dip-galvanised-strip-in-pipe',
    name: 'Hot Dip Galvanised Strip In Pipe Earthing Electrode',
    shortName: 'HDG Strip In Pipe',
    category: 'Pipe Type Chemical Earthing',
    subCategory: 'Strip In Pipe Chemical Earthing',
    tagline: 'Heavy-duty 80–100+ micron zinc protection for corrosive soils and industrial switchyards.',
    description:
      'Engineered with heavy-gauge low carbon mild steel pipe hot-dip galvanized to an exceptional coating thickness of 80–100+ microns per IS:2629 and IS:4759. The dense zinc metallurgical barrier prevents rust even in acidic, saline, and coastal soils. An internal full-length conductor strip surrounded by conductive compound provides an uninterrupted fault current path for 20+ years.',
    image: productGiPipePallet,
    keySpec: '80–100+ Micron HDG Coating | 48mm & 76mm OD | 20+ Years Life',
    features: [
      'Hot dip galvanized 80-100+ micron zinc coating for superior corrosion resistance',
      'Continuous strip-in-pipe design for enhanced structural rigidity and current flow',
      'Designed for aggressive, coastal, and chemical industrial environments',
      'High fault current dissipation capacity',
      'Crystalline compound fill provides anti-corrosive protection and low pit resistance',
      'ISI 1239 marked quality assurance',
      'Stainless steel hardware included (2 Nos. SS Nut Bolts)',
      '20+ years maintenance-free operational life',
      'Made in India',
    ],
    variants: [
      {
        model: '48MM X 2 Meter',
        pipeDia: '48 mm',
        innerConductor: '40 mm × 6 mm flat strip',
        length: '2.0 Meter',
        coating: 'Hot Dip Galvanized (80-100 microns)',
        crossSection: '482.55 mm²',
        compound: '25 Kg compound included',
        specsSummary: 'Wall 3.2mm, Lug 40x6x100mm, 2 SS Nut-Bolts',
      },
      {
        model: '48MM X 3 Meter',
        pipeDia: '48 mm',
        innerConductor: '40 mm × 6 mm flat strip',
        length: '3.0 Meter',
        coating: 'Hot Dip Galvanized (80-100 microns)',
        crossSection: '482.55 mm²',
        compound: '50 Kg compound included',
        specsSummary: 'Wall 3.2mm, Lug 40x6x100mm, 2 SS Nut-Bolts',
      },
      {
        model: '76MM X 2 Meter',
        pipeDia: '76 mm',
        innerConductor: '50 mm × 10 mm flat strip',
        length: '2.0 Meter',
        coating: 'Hot Dip Galvanized (80-100 microns)',
        crossSection: '860 mm²',
        compound: '25 Kg compound included',
        specsSummary: 'Wall 3.6mm, Lug 50x10x100mm, 2 SS Nut-Bolts',
      },
      {
        model: '76MM X 3 Meter',
        pipeDia: '76 mm',
        innerConductor: '50 mm × 10 mm flat strip',
        length: '3.0 Meter',
        coating: 'Hot Dip Galvanized (80-100 microns)',
        crossSection: '860 mm²',
        compound: '50 Kg compound included',
        specsSummary: 'Wall 3.6mm, Lug 50x10x100mm, 2 SS Nut-Bolts',
      },
    ],
    specifications: [
      { param: 'Outer Pipe Diameter', value: '48 mm, 76 mm' },
      { param: 'Inner Conductor Strip', value: '40 mm × 6 mm (48mm OD) / 50 mm × 10 mm (76mm OD)' },
      { param: 'Standard Lengths', value: '2.0 Meter, 3.0 Meter' },
      { param: 'Zinc Coating Standard', value: 'Hot Dip Galvanized to IS:2629 / IS:4759' },
      { param: 'Zinc Coating Thickness', value: '80 - 100+ Microns' },
      { param: 'Pipe Wall Thickness', value: '3.2 mm (48mm OD) / 3.6 mm (76mm OD)' },
      { param: 'Cross Sectional Area', value: '482.55 mm² (48mm) / 860 mm² (76mm)' },
      { param: 'Terminal Plate', value: 'Pre-drilled heavy duty hot-dip galvanized terminal plate with SS bolts' },
      { param: 'Expected Service Life', value: '20+ Years' },
      { param: 'Standards Compliance', value: 'IS:3043, BS EN 62305, ISI 1239' },
    ],
    testReports: [],
    applications: ['Substations & Switchyards', 'Industrial Manufacturing Plants', 'Coastal Installations', 'Chemical & Fertilizer Plants', 'Refineries'],
  },
  {
    id: 'copper-bonded-strip-in-pipe',
    name: 'Copper Bonded Strip In Pipe Earthing Electrode',
    shortName: 'Copper Bonded Strip In Pipe',
    category: 'Pipe Type Chemical Earthing',
    subCategory: 'Strip In Pipe Chemical Earthing',
    tagline: '99.9% pure electrolytic copper bonding with inner conductor strip for supreme conductivity.',
    description:
      'Our Copper Bonded Strip-in-Pipe Electrode combines the structural rigidity of heavy-wall steel pipe with a molecularly bonded outer copper layer and a copper-bonded internal primary conductor strip. Delivers maximum fault current dissipation, zero risk of peel-off, and supreme corrosion resistance in all soil types. Designed to last 25+ years maintenance-free.',
    image: productCopperPipeBatch,
    keySpec: '250+ Micron Copper Layer | 99.9% Pure Copper | 25+ Years Life',
    features: [
      '99.9% pure electrolytic copper molecularly bonded to outer pipe and inner strip',
      '250+ micron uniform copper layer thickness',
      'Strip-in-pipe design for enhanced current flow and structural longevity',
      'Excellent electrical and thermal conductivity',
      'Superior corrosion resistance across acidic, alkaline, and saline soils',
      'Zero risk of peeling, cracking, or flaking',
      'BS7430 & UL467 compliant engineering',
      'Stainless steel hardware included (2 Nos. SS Nut Bolts)',
      '25+ years maintenance-free service life',
      'Made in India',
    ],
    variants: [
      {
        model: '48MM X 2 Meter',
        pipeDia: '48 mm',
        innerConductor: '40 mm × 6 mm copper-bonded strip',
        length: '2.0 Meter',
        coating: '250+ Micron 99.9% Pure Copper',
        crossSection: '482.55 mm²',
        compound: '25 Kg compound included',
        specsSummary: 'Wall 3.2mm, Lug 40x6x100mm, 2 SS Nut-Bolts',
      },
      {
        model: '48MM X 3 Meter',
        pipeDia: '48 mm',
        innerConductor: '40 mm × 6 mm copper-bonded strip',
        length: '3.0 Meter',
        coating: '250+ Micron 99.9% Pure Copper',
        crossSection: '482.55 mm²',
        compound: '50 Kg compound included',
        specsSummary: 'Wall 3.2mm, Lug 40x6x100mm, 2 SS Nut-Bolts',
      },
      {
        model: '76MM X 2 Meter',
        pipeDia: '76 mm',
        innerConductor: '50 mm × 10 mm copper-bonded strip',
        length: '2.0 Meter',
        coating: '250+ Micron 99.9% Pure Copper',
        crossSection: '860 mm²',
        compound: '25 Kg compound included',
        specsSummary: 'Wall 3.6mm, Lug 50x10x100mm, 2 SS Nut-Bolts',
      },
      {
        model: '76MM X 3 Meter',
        pipeDia: '76 mm',
        innerConductor: '50 mm × 10 mm copper-bonded strip',
        length: '3.0 Meter',
        coating: '250+ Micron 99.9% Pure Copper',
        crossSection: '860 mm²',
        compound: '50 Kg compound included',
        specsSummary: 'Wall 3.6mm, Lug 50x10x100mm, 2 SS Nut-Bolts',
      },
    ],
    specifications: [
      { param: 'Outer Pipe Diameter', value: '48 mm, 76 mm' },
      { param: 'Inner Conductor Strip', value: 'Copper Bonded High Conductivity Strip (40x6mm / 50x10mm)' },
      { param: 'Standard Lengths', value: '2.0 Meter, 3.0 Meter' },
      { param: 'Copper Coating Thickness', value: '250+ Microns (Molecularly bonded electroplating)' },
      { param: 'Copper Purity', value: '99.9% Pure Electrolytic Copper' },
      { param: 'Cross Sectional Area', value: '482.55 mm² (48mm) / 860 mm² (76mm)' },
      { param: 'Terminal Lug', value: '40×6×100 mm / 50×10×100 mm with dual SS nut bolts' },
      { param: 'Internal Backfill', value: 'High-conductivity crystalline mineral compound included' },
      { param: 'Expected Service Life', value: '25+ Years' },
      { param: 'Standards Compliance', value: 'IS:3043, BS EN 62305, IEC 62561-7' },
    ],
    testReports: [],
    applications: ['Thermal & Hydro Power Plants', 'EHV Substations', 'Data Centers & Server Hubs', 'Telecommunication Towers', 'Hospitals & Critical Infrastructure'],
  },
  {
    id: 'copper-bonded-rod-in-pipe',
    name: 'Copper Bonded Rod In Pipe Earthing Electrode',
    shortName: 'Copper Bonded Rod In Pipe',
    category: 'Pipe Type Chemical Earthing',
    subCategory: 'Rod In Pipe Chemical Earthing',
    tagline: 'Solid copper bonded central rod inside pipe for high fault current dissipation (up to 31.10 kArms).',
    description:
      'The Copper Bonded Rod-in-Pipe Chemical Electrode features a solid copper-bonded MS rod (25mm or 38mm solid diameter) positioned centrally inside a heavy-duty outer pipe, encapsulated by high-conductivity conductive compound. Designed specifically for deep installations and extra high fault current dissipation (up to 31.10 kArms for 1s, 71.54 kApeak) with unmatched longevity.',
    image: productCopperPipe48mm,
    keySpec: 'Solid Inner Rod (25mm / 38mm) | Up to 31.10 kArms | 4860 mm² Area',
    features: [
      'Rod-in-pipe design for extreme mechanical & electrical performance',
      'Solid central copper bonded rod (25mm / 38mm solid diameter)',
      'High cross-sectional area (up to 4860 mm² for 76mm/38mm model)',
      '99.9% pure electrolytic copper molecular bonding',
      'Superior fault current dissipation capacity (up to 31.10 kArms for 1 second)',
      'Peak current capacity up to 71.54 kApeak',
      '25+ years maintenance-free service life',
      'IS 3043 compliant',
      'Stainless steel hardware included',
      'Made in India',
    ],
    variants: [
      {
        model: '48MM Pipe X 25MM Rod X 2 Meter',
        pipeDia: '48 mm',
        innerConductor: '25 mm solid copper bonded rod',
        length: '2.0 Meter',
        coating: '250+ Micron 99.9% Pure Copper',
        crossSection: '482.55 mm²',
        compound: '25 Kg compound included',
        specsSummary: 'Wall 3.2mm, Top Strip 40x6mm, 2 SS Nut-Bolts',
      },
      {
        model: '48MM Pipe X 25MM Rod X 3 Meter',
        pipeDia: '48 mm',
        innerConductor: '25 mm solid copper bonded rod',
        length: '3.0 Meter',
        coating: '250+ Micron 99.9% Pure Copper',
        crossSection: '482.55 mm²',
        compound: '50 Kg compound included',
        specsSummary: 'Wall 3.2mm, Top Strip 40x6mm, 2 SS Nut-Bolts',
      },
      {
        model: '76MM Pipe X 38MM Rod X 2 Meter',
        pipeDia: '76 mm',
        innerConductor: '38 mm solid copper bonded rod',
        length: '2.0 Meter',
        coating: '250+ Micron 99.9% Pure Copper',
        crossSection: '4860 mm²',
        compound: '25 Kg compound included',
        specsSummary: 'Wall 3.6mm, Top Strip 50x10mm, 2 SS Nut-Bolts',
      },
      {
        model: '76MM Pipe X 38MM Rod X 3 Meter',
        pipeDia: '76 mm',
        innerConductor: '38 mm solid copper bonded rod',
        length: '3.0 Meter',
        coating: '250+ Micron 99.9% Pure Copper',
        crossSection: '4860 mm²',
        compound: '50 Kg compound included',
        specsSummary: 'Wall 3.6mm, Top Strip 50x10mm, 2 SS Nut-Bolts',
      },
    ],
    specifications: [
      { param: 'Outer Pipe Diameter', value: '48 mm, 76 mm' },
      { param: 'Solid Inner Rod Diameter', value: '25 mm (for 48mm pipe) / 38 mm (for 76mm pipe)' },
      { param: 'Standard Lengths', value: '2.0 Meter, 3.0 Meter' },
      { param: 'Internal Conductor', value: 'Solid Low Carbon Steel Rod with 250+ Micron Copper Bonding' },
      { param: 'Withstand Current Rating', value: 'Up to 31.10 kArms for 1 second' },
      { param: 'Peak Current Capacity', value: '71.54 kApeak' },
      { param: 'Cross Sectional Area', value: '482.55 mm² (48mm) / Up to 4860 mm² (76mm)' },
      { param: 'Expected Service Life', value: '25+ Years' },
      { param: 'Standards Compliance', value: 'IS:3043, BS EN 62305, IEEE Std 80' },
    ],
    testReports: [],
    applications: ['High Voltage Substations', 'Transmission Tower Footing', 'Solar Parks & Wind Farms', 'Heavy Industrial Machinery', 'Metro Rail & Railway Traction'],
  },

  // ── Solid Rod Type Earthing ──────────────────────────────────
  {
    id: 'copper-bonded-solid-rod',
    name: 'Copper Bonded Solid Earthing Rod',
    shortName: 'Copper Bonded Solid Rod',
    category: 'Solid Rod Type Earthing',
    tagline: 'Molecularly bonded 254 micron electrolytic copper over high-tensile steel core (UL467 compliant).',
    description:
      'Manufactured via a continuous electroplating process that molecularly bonds 254 microns of 99.9% pure electrolytic copper to a low-carbon high-tensile steel core (IS 2062 E250 A). Complies with UL467 and international grounding standards. Will not peel, crack, or tear during deep driving into rocky and compacted soil.',
    image: productCopperRod,
    keySpec: '254 Micron Pure Copper | 14.2mm to 38mm Dia | UL467 & IS:3043',
    features: [
      'UL467 certified for international grounding standard compliance',
      '254 micron thick uniform copper coating',
      '99.9% pure electrolytic grade copper layer',
      'IS 2062 E250 A grade high-tensile low carbon steel core',
      'Molecularly bonded for superior adhesion — will not crack or peel',
      'High current carrying capacity with low electrical impedance',
      '30+ years expected service life',
      'Available with threaded ends (for couplers) or pointed unthreaded spike',
      'Suitable for export and utility infrastructure projects',
      'Made in India',
    ],
    variants: [
      {
        model: '14.2MM X 3 Meter',
        length: '3.0 Meter (3000 mm)',
        coating: '254 Microns Pure Copper',
        specsSummary: 'UL Listed, IS 2062 E250 A Core, Threaded / Pointed',
      },
      {
        model: '17.2MM X 3 Meter',
        length: '3.0 Meter (3000 mm)',
        coating: '254 Microns Pure Copper',
        specsSummary: 'UL Listed Ground Rod, High Current Withstand',
      },
      {
        model: '25MM X 3 Meter',
        length: '3.0 Meter (customizable)',
        coating: '50 / 100 / 250 Microns customizable',
        crossSection: '490 mm²',
        specsSummary: 'Heavy Substation & Industrial Earthing Grid',
      },
      {
        model: '32MM X 3 Meter',
        length: '3.0 Meter (customizable)',
        coating: '50 / 100 / 250 Microns customizable',
        crossSection: '803 mm²',
        specsSummary: 'High-Capacity Power Plants & Critical Infrastructure',
      },
      {
        model: '38MM X 3 Meter',
        length: '3.0 Meter (customizable)',
        coating: '50 / 100 / 250 Microns customizable',
        crossSection: '1130 mm²',
        specsSummary: 'Maximum Current Handling for EHV Installations',
      },
    ],
    specifications: [
      { param: 'Core Material', value: 'High Tensile Low Carbon Steel (IS 2062 E250 A / AISI 1018)' },
      { param: 'Copper Coating', value: '254 Microns (Molecularly Bonded Electroplating)' },
      { param: 'Copper Purity', value: '99.9% Pure Electrolytic Grade Copper' },
      { param: 'Available Diameters', value: '14.2 mm, 17.2 mm, 20 mm, 25 mm, 32 mm, 38 mm' },
      { param: 'Standard Lengths', value: '1.5 m, 2.0 m, 3.0 m (Extendable via Couplers)' },
      { param: 'Tensile Strength', value: '500 - 650 N/mm²' },
      { param: 'Ends Profile', value: 'Threaded ends with driving spike or Plain pointed tip' },
      { param: 'Expected Service Life', value: '30+ Years' },
      { param: 'Standards Compliance', value: 'IS:3043, IS 2309, IEEE Std 80' },
    ],
    testReports: [],
    applications: ['Power Plants & Switchyards', 'Substations', 'Telecom Monopoles & Towers', 'Solar PV Plants', 'Industrial Earthing Grid', 'Commercial High Rises'],
  },
  {
    id: 'hot-dip-galvanised-solid-rod',
    name: 'Hot Dip Galvanised Solid Earthing Rod',
    shortName: 'HDG Solid Rod',
    category: 'Solid Rod Type Earthing',
    tagline: 'High tensile solid steel rod with 80–100+ micron hot-dip galvanized coating.',
    description:
      'Solid steel earthing rod hot-dip galvanized according to IS:2629 and IS:4759. Provides rigid mechanical driving strength and excellent resistance to corrosion in soils where galvanized earthing grids are specified by design. Extendable using heavy-duty galvanized couplers.',
    image: productGiRod,
    keySpec: '80–100+ Micron Zinc Coating | High Tensile Steel | IS:2629',
    features: [
      'Hot dip galvanized 80-100+ micron protective zinc coating',
      'High-grade carbon steel core (IS 2062)',
      'High mechanical driving strength for deep ground penetration',
      'Extendable with galvanized threaded or compression couplers',
      'Cost-effective grounding for industrial grids and railway traction',
      'IS 3043, IS 2629, IS 4759 compliant',
      '20+ years service life in normal soils',
      'Made in India',
    ],
    variants: [
      {
        model: '16MM X 2M / 3M',
        length: '2.0 Meter, 3.0 Meter',
        coating: '80-100 Microns HDG',
        specsSummary: 'General Earthing & Transformer Neutral Grounding',
      },
      {
        model: '20MM X 2M / 3M',
        length: '2.0 Meter, 3.0 Meter',
        coating: '80-100 Microns HDG',
        specsSummary: 'High Mechanical Driving Rigidity for Rocky Ground',
      },
      {
        model: '25MM X 2M / 3M',
        length: '2.0 Meter, 3.0 Meter',
        coating: '80-100 Microns HDG',
        crossSection: '490 mm²',
        specsSummary: 'Industrial Plants & Substation Yard Grids',
      },
      {
        model: '32MM X 2M / 3M',
        length: '2.0 Meter, 3.0 Meter',
        coating: '80-100 Microns HDG',
        crossSection: '803 mm²',
        specsSummary: 'Heavy Distribution & Traction Substations',
      },
    ],
    specifications: [
      { param: 'Core Material', value: 'High Grade Carbon Steel (IS:2062)' },
      { param: 'Coating Process', value: 'Hot Dip Galvanized (IS:2629 / IS:4759)' },
      { param: 'Zinc Coating Thickness', value: '80 - 100+ Microns' },
      { param: 'Available Diameters', value: '16 mm, 20 mm, 25 mm, 32 mm' },
      { param: 'Standard Lengths', value: '2.0 Meter, 3.0 Meter' },
      { param: 'Coupling Method', value: 'Extendable with galvanized threaded/compression couplers' },
      { param: 'Expected Service Life', value: '20+ Years' },
      { param: 'Standards Compliance', value: 'IS:3043, IS:2629, IS:4759, BS EN 62305' },
    ],
    testReports: [],
    applications: ['Switchyards & Substations', 'Railway Traction & Electrification', 'Industrial Sheds', 'Transformer Grounding', 'General Earthing Systems'],
  },
  {
    id: '4-meter-copper-bonded-rod',
    name: '4 Meter Copper Bonded Earthing Rod',
    shortName: '4M Copper Bonded Rod',
    category: 'Solid Rod Type Earthing',
    tagline: 'Continuous single-length 4-meter solid rod for deep soil penetration without couplers.',
    description:
      'Specially manufactured 4-meter single-length copper-bonded solid rod designed for deep soil penetration. Reaches permanently moist low-resistivity soil strata without requiring intermediate couplers, minimizing contact resistance, eliminating mechanical joint failures, and cutting installation time in half.',
    image: productCopperRod,
    keySpec: '4.0 Meter Single Length | 250+ Micron Copper | No Couplers Needed',
    features: [
      '4.0 Meter continuous single-piece solid rod',
      'Reaches deep low-resistivity moisture strata directly',
      'Eliminates coupler joint resistance in deep boreholes',
      '250+ microns molecularly bonded 99.9% pure copper layer',
      'High-tensile low carbon steel core for heavy machine driving',
      'Chamfered driving head with pointed spike',
      '30+ years expected service life',
      'BS7430 & IS:3043 compliant engineering',
      'Made in India',
    ],
    variants: [
      {
        model: '17.2MM X 4 Meter',
        length: '4.0 Meter (Single piece)',
        coating: '254 Microns Pure Copper',
        specsSummary: 'Deep Borehole Grounding, Telecom Monopoles',
      },
      {
        model: '20MM X 4 Meter',
        length: '4.0 Meter (Single piece)',
        coating: '254 Microns Pure Copper',
        specsSummary: 'High Tensile Core for Hard Rocky Soils',
      },
      {
        model: '25MM X 4 Meter',
        length: '4.0 Meter (Single piece)',
        coating: '250+ Microns Pure Copper',
        crossSection: '490 mm²',
        specsSummary: 'Substations & Solar Utility Plants',
      },
      {
        model: '32MM X 4 Meter',
        length: '4.0 Meter (Single piece)',
        coating: '250+ Microns Pure Copper',
        crossSection: '803 mm²',
        specsSummary: 'Wind Turbines & Mission-Critical Data Hubs',
      },
    ],
    specifications: [
      { param: 'Overall Length', value: '4.0 Meter (Single piece continuous rod)' },
      { param: 'Available Diameters', value: '17.2 mm, 20 mm, 25 mm, 32 mm' },
      { param: 'Copper Coating', value: '250+ Microns Molecularly Bonded Copper' },
      { param: 'Core Material', value: 'High Tensile Low Carbon Steel' },
      { param: 'End Profiles', value: 'Chamfered driving head with pointed driving tip' },
      { param: 'Coupling Option', value: 'Threaded ends available for optional extension' },
      { param: 'Expected Service Life', value: '30+ Years' },
      { param: 'Standards Compliance', value: 'IS:3043, IEEE Std 80, IEC 62561-7' },
    ],
    testReports: [],
    applications: ['Deep Borehole Grounding', 'Rocky & High-Resistivity Soil', 'Telecom Monopoles', 'Wind Turbines', 'High-Voltage Substations'],
  },
  {
    id: 'pure-copper-solid-rod',
    name: 'Pure Copper Solid Earthing Rod',
    shortName: 'Pure Copper Solid Rod',
    category: 'Solid Rod Type Earthing',
    tagline: '100% solid electrolytic copper for maximum conductivity and critical facilities.',
    description:
      'Manufactured from 99.9% solid electrolytic tough pitch (ETP) grade copper. Offers the highest possible electrical and thermal conductivity (100% IACS), zero risk of coating wear, and superior chemical resistance in highly corrosive, acidic, or saline environments. The premier choice for defense, aerospace, and oil refineries.',
    image: productCopperPipePure,
    keySpec: '99.9% Pure Electrolytic Copper | 100% IACS Conductivity | 40+ Years Life',
    features: [
      '100% solid electrolytic tough pitch (ETP) copper (IS:191 / )',
      '99.9% pure copper throughout — zero risk of coating wear or exposure',
      '100% IACS international electrical conductivity',
      'Supreme corrosion resistance in acidic, saline, and chemical soils',
      'Superior thermal and impulse current carrying capacity',
      'Maintenance-free operation for decades',
      '40+ years expected service life',
      'IS 3043, IEEE 80 compliant',
      'Made in India',
    ],
    variants: [
      {
        model: '16MM X 2M / 3M',
        length: '2.0 Meter, 3.0 Meter',
        coating: '100% Solid Copper',
        specsSummary: 'Precision Instruments & Clean Grounding',
      },
      {
        model: '20MM X 2M / 3M',
        length: '2.0 Meter, 3.0 Meter',
        coating: '100% Solid Copper',
        specsSummary: 'Hospital MRI Rooms & Critical Labs',
      },
      {
        model: '25MM X 2M / 3M',
        length: '2.0 Meter, 3.0 Meter',
        coating: '100% Solid Copper',
        crossSection: '490 mm²',
        specsSummary: 'Offshore Marine Platforms & Petrochemicals',
      },
      {
        model: '32MM X 2M / 3M',
        length: '2.0 Meter, 3.0 Meter',
        coating: '100% Solid Copper',
        crossSection: '803 mm²',
        specsSummary: 'Defense & Aerospace Command Facilities',
      },
    ],
    specifications: [
      { param: 'Material', value: '100% Solid Electrolytic Tough Pitch (ETP) Copper (IS:191 / )' },
      { param: 'Copper Purity', value: '99.9% Pure Copper' },
      { param: 'Electrical Conductivity', value: '100% IACS (International Annealed Copper Standard)' },
      { param: 'Available Diameters', value: '16 mm, 20 mm, 25 mm, 32 mm' },
      { param: 'Available Lengths', value: '1.5 m, 2.0 m, 3.0 m' },
      { param: 'Corrosion Resistance', value: 'Exceptional in acidic, saline, and chemical soils' },
      { param: 'Expected Service Life', value: '40+ Years' },
      { param: 'Standards Compliance', value: 'IS:3043, IEEE Std 80' },
    ],
    testReports: [],
    applications: ['Defense & Aerospace Installations', 'Refineries & Petrochemicals', 'Mission-Critical Data Centers', 'Hospitals & MRI Rooms', 'Offshore Marine Substations'],
  },

  // ── Lightning Protection Systems ─────────────────────────────
  {
    id: 'ese-lightning-arrestor',
    name: 'ESE (Early Streamer Emission) Lightning Arrestor',
    shortName: 'ESE Lightning Arrestor',
    category: 'Lightning Protection Systems',
    tagline: 'Advanced active streamer emission for large-radius direct strike interception (up to 107m).',
    description:
      'The Early Streamer Emission (ESE) Lightning Arrestor generates upward-propagating leader streamers before ordinary ground spikes, creating an extensive protective ionization zone. Powered by the ambient atmospheric electrostatic field during thunder conditions, it requires no external batteries or solar power. Protects large industrial plants, high-rises, solar farms, and campuses.',
    image: productEseArrester,
    keySpec: 'Active ESE Ionization | Up to 107m Protection Radius | 100 kA Withstand',
    features: [
      'Early Streamer Emission (ESE) active ionization technology',
      'Self-powered directly from ambient atmospheric electrostatic field (no batteries)',
      'Compliant with IS 3043, IS 2309, and IEC 62305 standards',
      'Extensive protection radius up to 107+ meters (Level IV at 5m height)',
      '100 kA lightning impulse withstand capacity (10/350 µs waveform)',
      'Body manufactured from high-grade stainless steel & corrosion-resistant alloys',
      'Compact, lightweight aerodynamic design with zero moving parts',
      '20+ years maintenance-free operational life',
      'Made in India',
    ],
    variants: [
      {
        model: 'ESE 30 µs Gain Model',
        length: 'Air Terminal Unit',
        specsSummary: 'Trigger Gain ΔT = 30 µs, Protection Radius up to 71m (Level IV)',
      },
      {
        model: 'ESE 45 µs Gain Model',
        length: 'Air Terminal Unit',
        specsSummary: 'Trigger Gain ΔT = 45 µs, Protection Radius up to 89m (Level IV)',
      },
      {
        model: 'ESE 60 µs Gain Model',
        length: 'Air Terminal Unit',
        specsSummary: 'Trigger Gain ΔT = 60 µs, Protection Radius up to 107m (Level IV)',
      },
    ],
    specifications: [
      { param: 'Operating Principle', value: 'Early Streamer Emission (ESE) Active Technology' },
      { param: 'Standard Compliance', value: 'IS 3043, IS 2309, IEC 62305' },
      { param: 'Body Material', value: 'High-grade 304/316 Stainless Steel & Brass components' },
      { param: 'Triggering Time Gain (ΔT)', value: '30 µs, 45 µs, 60 µs' },
      { param: 'Protection Radius', value: 'Up to 107+ meters (Level IV at 5m elevation height)' },
      { param: 'Current Withstand Capacity', value: '100 kA (10/350 µs lightning waveform)' },
      { param: 'Energy Source', value: 'Self-powered from atmospheric electrostatic field' },
      { param: 'Maintenance', value: 'Zero moving parts, non-electronic, maintenance-free' },
      { param: 'Expected Service Life', value: '20+ Years' },
    ],
    testReports: [],
    applications: ['High-Rise Commercial Towers', 'Industrial Plants & Warehouses', 'Chemical Refineries', 'Universities & Campuses', 'Airports & Logistics Parks'],
  },
  {
    id: 'conventional-lightning-arrestor',
    name: 'Conventional Multi-Spike Lightning Arrestor',
    shortName: 'Conventional Lightning Arrestor',
    category: 'Lightning Protection Systems',
    tagline: 'Multi-pointed copper-bonded and stainless steel spike air terminal system.',
    description:
      'Heavy-duty multi-spike air terminal system designed to intercept direct lightning strikes and safely conduct high-energy impulses to the earthing ground grid. Available in copper-bonded and pure stainless steel configurations with threaded mounting bases, perfectly suited for rooftops, industrial sheds, and telecom towers.',
    image: productMultispikeArrester,
    keySpec: 'Multi-Spike Air Terminal | Copper Bonded / Stainless Steel | 120 kph Wind Rating',
    features: [
      'Conventional multi-spike air terminal design (5-spike / 3-spike configurations)',
      'Manufactured in 99.9% copper-bonded steel or 304/316 stainless steel',
      '120 kph survival wind speed rating',
      'No radio frequency, beacon, or antenna interference',
      'Exceptional electrical impulse dissipation into grounding grid',
      'Integrated threaded base for rigid connection to elevation masts',
      'IS 2309, IEC 62305, IEEE 998 compliant',
      '20+ years maintenance-free operation',
      'Made in India',
    ],
    variants: [
      {
        model: 'Copper Bonded Multi-Spike (1.5M / 2.0M)',
        length: '1.5 Meter, 2.0 Meter',
        coating: '99.9% Pure Copper Bonded',
        specsSummary: '20mm Central Spike, Threaded Brass/GI Base',
      },
      {
        model: 'Stainless Steel Multi-Spike (1.5M / 2.0M)',
        length: '1.5 Meter, 2.0 Meter',
        coating: '304 / 316 Stainless Steel',
        specsSummary: 'Corrosion-Resistant for Coastal & Industrial Zones',
      },
      {
        model: 'Pure Copper Multi-Spike (1.5M / 2.0M)',
        length: '1.5 Meter, 2.0 Meter',
        coating: '100% Solid ETP Copper',
        specsSummary: 'Maximum Conductivity for Severe Lightning Zones',
      },
    ],
    specifications: [
      { param: 'Type', value: 'Multi-Spike Air Terminal (5 Spike / 3 Spike)' },
      { param: 'Available Materials', value: 'Copper Bonded Mild Steel / 304 Stainless Steel / Pure Copper' },
      { param: 'Spike Dimensions', value: '14 mm - 20 mm central spike with satellite spikes' },
      { param: 'Total Heights Available', value: '1.0 m, 1.5 m, 2.0 m' },
      { param: 'Mounting Base', value: 'Threaded Brass / GI Base for Mast Mounting' },
      { param: 'Wind Resistance', value: '120 kph survival wind speed' },
      { param: 'Standards Compliance', value: 'IS:2309, IEC 62305, IEEE 998' },
      { param: 'Expected Service Life', value: '20+ Years' },
    ],
    testReports: [],
    applications: ['Residential Apartments', 'Telecom Towers', 'Industrial Sheds', 'Rooftop Solar Installations', 'Commercial Buildings'],
  },
  {
    id: 'lightning-protection-accessories',
    name: 'Lightning Protection Accessories & Masts',
    shortName: 'Lightning Protection Accessories',
    category: 'Lightning Protection Systems',
    tagline: 'Complete mounting masts, strike counters, test clamps, and down-conductors.',
    description:
      'A comprehensive range of accessories to complete your lightning protection system — including 3-meter elevation masts, digital lightning strike counters, test link clamps, saddles, and heavy-duty grounding down-conductor clips.',
    image: productLaAccessories,
    keySpec: '3M Elevation Mast | Strike Counters | Test Clamps & Fasteners',
    features: [
      '3-Meter heavy-duty GI / aluminum elevation mast with guy wire kit',
      '150 kph survival wind speed rating for mast and mounting assemblies',
      'Digital / electromechanical 7-digit lightning event strike counter',
      'Bi-metallic and brass disconnectable test links for earth pit testing',
      'Down-conductor clamps: DC tape clamps, square tape clamps, rod-to-tape clamps',
      'Heavy-duty flat and ridge mounting base brackets included',
      'Complete compliance with IEC 62561 series standards',
      'Made in India',
    ],
    variants: [
      {
        model: '3-Meter Elevation Mast & Pole',
        length: '3.0 Meter (50mm Dia)',
        coating: 'Hot Dip Galvanized / Aluminum',
        specsSummary: 'Includes Heavy-Duty Mounting Baseplate & Hardware Kit',
      },
      {
        model: 'Digital Lightning Strike Counter',
        length: 'Compact Enclosure',
        specsSummary: '7-Digit Display, Inductive Sensor, Weatherproof IP65',
      },
      {
        model: 'Test Link Disconnect Box',
        length: 'Standard Box',
        specsSummary: 'Bi-metallic / Brass Joint for Periodic Pit Testing',
      },
      {
        model: 'Down-Conductor Clamps & Fasteners',
        length: 'Various Sizes',
        specsSummary: 'DC Tape Clamps, Square Clamps, Rod-to-Tape Clamps',
      },
    ],
    specifications: [
      { param: 'Elevation Mast', value: '3 Meter (50mm Dia) Heavy Duty GI / Aluminum Mast with Guy Wire Kits' },
      { param: 'Wind Resistance', value: '150 kph survival wind speed' },
      { param: 'Strike Counter', value: 'Digital / Electromechanical 7-digit lightning event counter' },
      { param: 'Down Conductor Clamps', value: 'DC Tape Clamps, Square Tape Clamps, Rod-to-Tape Clamps' },
      { param: 'Test Links', value: 'Bi-metallic and brass disconnectable test joints' },
      { param: 'Base Mounting Plates', value: 'Heavy-duty flat and ridge mounting base brackets' },
      { param: 'Standards Compliance', value: 'IEC 62561 Series (Parts 1, 2, 4, 6)' },
      { param: 'Expected Service Life', value: '20+ Years' },
    ],
    testReports: [],
    applications: ['Complete Lightning Protection Systems', 'Industrial Complexes', 'Commercial High Rises', 'Telecom & Broadcasting Sites'],
  },

  // ── Specialty Products ───────────────────────────────────────
  {
    id: 'solar-earthing-kit',
    name: 'Solar Earthing Kit - Complete Package',
    shortName: 'Solar Earthing Kit',
    category: 'Specialty Products',
    tagline: 'Tailored all-in-one earthing package for rooftop and utility-scale solar PV installations.',
    description:
      'Our complete Solar Earthing Kit is engineered specifically to meet the grounding standards of solar PV systems. Includes specialized copper-bonded earthing electrodes, 50 Kg premium ground improving compound, copper-plated lugs, and all necessary hardware sized for inverter, structure, and DC/AC distribution grounding.',
    image: productSolarKit,
    keySpec: 'Complete Package | Electrode + 50Kg Compound + Hardware | 25+ Years Life',
    features: [
      'Complete all-in-one solar grounding package — all components included',
      'High-conductivity copper bonded electrode (99.9% pure copper)',
      '50 Kg premium ground improving compound included in package',
      'Heavy-duty brass / copper-plated terminal clamps & SS fasteners',
      'Specifically tailored for rooftop and ground-mounted solar PV systems',
      'Protects solar inverters, module mounting structures (MMS), and AC/DC boxes',
      'Complies with IEC 62548, IS 3043, and MNRE solar earthing guidelines',
      '25+ years maintenance-free service life',
      'Made in India',
    ],
    variants: [
      {
        model: 'Rooftop Solar Earthing Kit (1 to 10 kW)',
        length: '2.0 Meter Electrode',
        compound: '25 Kg compound included',
        specsSummary: '17.2mm Rod + Clamps + Fasteners for Inverter & Structure',
      },
      {
        model: 'Commercial Rooftop Solar Kit (10 to 50 kW)',
        length: '3.0 Meter Electrode',
        compound: '50 Kg compound included',
        specsSummary: '25mm Rod + Heavy Duty Clamps + Surge Protection Grounding',
      },
      {
        model: 'Utility Solar Farm Earthing Kit (> 50 kW)',
        length: '3.0 Meter Pipe / Rod',
        compound: '50 Kg compound included',
        specsSummary: '76mm Pipe / Solid Rod + Dual Terminal Lugs for High Faults',
      },
    ],
    specifications: [
      { param: 'Package Contents', value: 'Earthing Electrode + Ground Improving Compound (25/50 Kg) + Clamps & SS Hardware' },
      { param: 'Recommended Electrode', value: '17.2 mm / 25 mm × 3m Solid Rod or 48mm / 76mm Pipe Electrode' },
      { param: 'Compound Included', value: '50 Kg Premium ground improving compound (0.84 Ω-cm)' },
      { param: 'Terminal & Hardware', value: 'Brass / Copper-coated terminal connector and SS fasteners' },
      { param: 'Design Compliance', value: 'IEC 62548 (Solar PV Arrays), IS:3043, MNRE Guidelines' },
      { param: 'Installation Types', value: 'Inverter grounding, Module mounting structure (MMS), AC/DC combiner box' },
      { param: 'Expected Service Life', value: '25+ Years' },
    ],
    testReports: [],
    applications: ['Residential Rooftop Solar', 'Commercial & Industrial Rooftop Solar', 'Ground-Mounted Solar Farms', 'Solar Water Pumping Systems'],
  },
  {
    id: 'ground-improving-compound',
    name: 'Ground Improving Compound (Soil Energizer)',
    shortName: 'Ground Improving Compound',
    category: 'Specialty Products',
    tagline: 'Ultra-low 0.84 Ω-cm electrical resistivity. Non-leaching and maintenance-free.',
    description:
      'Our Ground Improving Compound (Soil Energizer / Backfill Compound) is a superior, non-corrosive mineral compound designed to dramatically lower soil resistivity around earthing electrodes. Lab-tested with a verified electrical resistivity of just 0.84 Ohm-cm, 96.88% fine particle retention, and 81.82% swelling index to eliminate air voids and permanently retain moisture.',
    image: productEarthCompound,
    keySpec: '0.84 Ω-cm Resistivity | 25Kg & 50Kg Bags | IEC 62561-7 Verified',
    features: [
      'Ultra-low 0.84 Ohm-cm electrical resistivity (IEC 62561-7:2018 verified)',
      'Significantly reduces soil resistivity and earth pit impedance',
      '96.88% fine particle retention for maximum moisture absorption (IS 2720 Part 4)',
      '81.82% volumetric free swell index eliminates voids around the electrode',
      'Non-corrosive, non-leaching, and environmentally non-toxic formulation',
      'Maintenance-free: permanently retains hygroscopic moisture without recurring watering',
      'Compatible with all soil types: rocky, sandy, gravel, and high-resistivity terrain',
      'Available in 25 Kg and 50 Kg heavy-duty HDPE moisture-barrier bags',
      'IS 3043 & IEC 62561-7 compliant',
      'Made in India',
    ],
    variants: [
      {
        model: '25 Kg Moisture-Proof Bag',
        length: '25 Kg Bag',
        compound: '25 Kg HDPE bag',
        specsSummary: 'Ideal for Standard Solid Rod Pits & Rooftop Solar Grounding',
      },
      {
        model: '50 Kg Heavy-Duty Bag',
        length: '50 Kg Bag',
        compound: '50 Kg HDPE bag',
        specsSummary: 'Ideal for 76mm Chemical Pipe Electrodes, Substations & Boreholes',
      },
    ],
    specifications: [
      { param: 'Electrical Resistivity', value: '0.84 Ohm-cm (IEC 62561-7:2018 verified)' },
      { param: 'Packaging', value: '25 Kg & 50 Kg heavy-duty HDPE moisture-barrier bags' },
      { param: 'Composition', value: 'Thermally stable mineral blend, non-bentonite active compounds' },
      { param: 'Silt + Clay Fraction', value: '96.88% fine particle retention (IS 2720 Part 4:1985)' },
      { param: 'Swelling Index', value: '81.82% volumetric free swell index for tight soil contact' },
      { param: 'Environmental Safety', value: 'Non-toxic, environmentally safe, will not leach into water table' },
      { param: 'Maintenance', value: 'Zero watering required once set, maintenance-free for decades' },
      { param: 'Standards Compliance', value: 'IEC 62561-7, IS 2720, IS:3043' },
    ],
    testReports: [
      { lab: 'Bhumi Research Center LLP, Surat', date: 'February 2026', reportNo: '', result: 'PASSED', detail: 'Resistivity 0.84 Ω-cm' },
    ],
    applications: ['All Chemical Earthing Systems', 'High-Resistivity Rocky & Sandy Soils', 'Substations & Switchyards', 'Data Centers & Critical Sites', 'Solar & Wind Energy Projects'],
  },
];

// ── Industries ────────────────────────────────────────────────
export const industries = [
  {
    id: 'power',
    icon: 'FaBolt',
    title: 'Power Sector',
    description: 'Substations, power plants and transmission lines require reliable earthing for both safety and equipment protection.',
    products: ['Copper Bonded Solid Rod', 'Copper Bonded Rod In Pipe', 'Ground Improving Compound'],
    color: '#F59E0B',
  },
  {
    id: 'telecom',
    icon: 'FaSatelliteDish',
    title: 'Telecom & BTS',
    description: 'Telecom towers and BTS sites demand low earth resistance to protect sensitive equipment and personnel.',
    products: ['Copper Bonded Solid Rod', 'Ground Improving Compound', 'ESE Lightning Arrestor'],
    color: '#3B82F6',
  },
  {
    id: 'solar',
    icon: 'FaSolarPanel',
    title: 'Solar Energy',
    description: 'Solar installations require proper earthing to protect panels, inverters and wiring from fault currents.',
    products: ['Solar Earthing Kit', 'Copper Bonded Solid Rod'],
    color: '#EF4444',
  },
  {
    id: 'industrial',
    icon: 'FaIndustry',
    title: 'Industrial Plants',
    description: 'Manufacturing facilities and industrial plants need robust earthing systems for equipment and worker safety.',
    products: ['Hot Dip Galvanised Strip In Pipe', 'Copper Bonded Rod In Pipe', 'Ground Improving Compound'],
    color: '#8B5CF6',
  },
  {
    id: 'healthcare',
    icon: 'FaHospital',
    title: 'Healthcare',
    description: 'Hospitals and healthcare facilities require premium earthing to protect critical medical equipment.',
    products: ['Pure Copper Solid Rod', 'Copper Bonded Solid Rod', 'Ground Improving Compound'],
    color: '#10B981',
  },
  {
    id: 'datacenters',
    icon: 'FaServer',
    title: 'Data Centers',
    description: 'Server farms and IT infrastructure need highly reliable earthing to prevent data loss and equipment damage.',
    products: ['Copper Bonded Solid Rod', 'Ground Improving Compound', 'ESE Lightning Arrestor'],
    color: '#06B6D4',
  },
  {
    id: 'oilgas',
    icon: 'FaOilWell',
    title: 'Oil & Gas',
    description: 'Refineries and pipelines require heavy-duty earthing for both safety and explosion protection.',
    products: ['Hot Dip Galvanised Solid Rod', 'Pure Copper Solid Rod', 'Ground Improving Compound'],
    color: '#F97316',
  },
  {
    id: 'construction',
    icon: 'FaBuilding',
    title: 'Construction',
    description: 'Roads, bridges, buildings and railways all require proper earthing during and after construction.',
    products: ['Galvanised Strip In Pipe', 'Conventional Lightning Arrestor', 'Ground Improving Compound'],
    color: '#6B7280',
  },
];

// ── Certifications ────────────────────────────────────────────
export const certifications = [
  // {
  //   id: 'iso',
  //   title: 'ISO 9001:2015',
  //   icon: '🏆',
  //   issuedBy: 'TSN Certification Ltd (EUAS Accredited)',
  //   scope: 'Manufacturers & Traders of Earth Electrode, Earthing Chemical & Accessories',
  //   color: '#C8791A',
  //   category: 'Quality Management',
  // },
  {
    id: 'udyam',
    title: 'UDYAM MSME',
    icon: '🇮🇳',
    issuedBy: 'Government of India, Ministry of MSME',
    scope: 'Manufacturing Enterprise — NIC Codes 27320 & 46529',
    color: '#16A34A',
    category: 'Government Registration',
  },
  {
    id: 'gst',
    title: 'GST Registered',
    icon: '🏛️',
    issuedBy: 'Government of India — GST Compliance',
    scope: 'Fully GST-compliant operations ensuring transparent invoicing and legal compliance',
    color: '#2563EB',
    category: 'Commercial Compliance',
  },

  {
    id: 'bhumi',
    title: 'Bhumi Research Report',
    icon: '🧪',
    issuedBy: 'Bhumi Research Center LLP, Surat',
    scope: 'Earth Enhancement Compound — Electrical Resistivity 0.84 Ohm-cm',
    date: 'February 2026',
    color: '#059669',
    category: 'Lab Report',
  },
];

// ── Why Choose Us ─────────────────────────────────────────────
export const whyChooseUs = [
  {
    icon: 'FaFlask',
    title: 'Rigorous Quality Testing',
    description: 'Every product is manufactured with strict quality controls and verified specifications for proven durability and safety.',
    color: '#2563EB',
  },
  // {
  //   icon: 'FaAward',
  //   title: 'ISO 9001:2015 Certified',
  //   description: 'Our quality management system is ISO 9001:2015 certified, ensuring consistent quality across every batch manufactured.',
  //   color: '#C8791A',
  // },
  {
    icon: 'FaBolt',
    title: 'Ultra-Low 0.84 Ω-cm',
    description: 'Our Earth Enhancement Compound has a lab-verified resistivity of just 0.84 Ohm-cm — ensuring dramatically lower ground resistance.',
    color: '#F59E0B',
  },
  {
    icon: 'FaCubes',
    title: 'Complete System Provider',
    description: 'From chemical pipe electrodes and solid rods to lightning protection systems and solar kits — we supply every component of your earthing grid.',
    color: '#10B981',
  },
  {
    icon: 'FaClipboardCheck',
    title: 'IS & IEC Compliant',
    description: 'All products comply with IS:3043, IEEE Std 80, and IEC 62561-7 — meeting Indian and international standards.',
    color: '#7C3AED',
  },
];

// ── Manufacturing Process ─────────────────────────────────────
export const processSteps = [
  { step: '01', icon: 'FaBoxOpen', title: 'Raw Material Procurement', description: 'IS:2062 grade MS billets and 99.9% pure copper are sourced from verified suppliers.' },
  { step: '02', icon: 'FaCog', title: 'Precision Machining', description: 'CNC cutting to exact dimensions — diameter, length and thread profile precision-engineered.' },
  { step: '03', icon: 'FaLayerGroup', title: 'Copper Electroplating', description: 'Permanent 250+ micron pure copper layer permanently bonded via electroplating — not just coating.' },
  { step: '04', icon: 'FaRuler', title: 'Quality Inspection', description: 'Dimensional checks, coating thickness verification, and visual inspection at every stage.' },
  { step: '05', icon: 'FaFlask', title: 'Performance Testing', description: 'Rigorous conductivity and short-time withstand current tests to verify electrical performance.' },
  { step: '06', icon: 'FaTruck', title: 'Packaging & Dispatch', description: 'Branded packaging with test certificates included. PAN India delivery from our Surat facility.' },
];

// ── Testimonials ─────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Patel',
    role: 'Electrical Contractor',
    location: 'Surat, Gujarat',
    rating: 5,
    text: 'We have been using Unique Electrodes copper bonded rods for our industrial projects. The certified quality and standards compliance gave us full confidence in specifying these products. Quality is consistently excellent.',
  },
  {
    id: 2,
    name: 'Suresh Mehta',
    role: 'Project Engineer',
    location: 'Ahmedabad, Gujarat',
    rating: 4.5,
    text: 'The Earth Enhancement Compound significantly reduced our ground resistance readings. The Bhumi Research lab report was a huge plus for project documentation and client confidence.',
  },
  {
    id: 3,
    name: 'Ankit Shah',
    role: 'Solar Project Developer',
    location: 'Rajkot, Gujarat',
    rating: 5,
    text: 'Used their solar earthing kits across multiple rooftop projects. Complete kit with all accessories saves time, and the IS:3043 compliance is exactly what our clients need for approvals.',
  },
  {
    id: 4,
    name: 'M. Krishnamurthy',
    role: 'Site Electrical Engineer',
    location: 'Hyderabad, Telangana',
    rating: 4,
    text: 'Ordered GI pipe electrodes and copper bonded rods for a substation project. Delivery was from Surat and the product quality matched the specifications perfectly. Highly recommended.',
  },
];

// ── FAQs ─────────────────────────────────────────────────────
export const faqs = [
  {
    q: 'What is a Copper Bonded Earthing Electrode?',
    a: 'A Copper Bonded Earthing Electrode is a mild steel rod with a permanent, thick layer of pure copper bonded to its surface via electroplating. Unlike simple coated rods, the copper layer is molecularly bonded to the steel core, giving it superior conductivity and long service life. Unique Electrodes uses 250+ microns of copper coating.',
  },
  {
    q: 'What is the difference between Strip-in-Pipe and Rod-in-Pipe Chemical Earthing?',
    a: 'Strip-in-Pipe uses an internal continuous flat strip (40x6mm or 50x10mm) surrounded by conductive mineral compound inside a heavy steel pipe — ideal for residential, commercial, and light-to-medium industrial grounding. Rod-in-Pipe houses a solid copper-bonded central rod (25mm or 38mm solid diameter) inside the pipe, offering massive cross-sectional area (up to 4860 mm²) and handling heavy fault currents (up to 31.10 kArms) for substations and power plants.',
  },
  {
    q: 'Why is the Ground Improving Compound important?',
    a: 'Soil resistivity directly impacts earth resistance. Our Ground Improving Compound dramatically reduces soil resistivity around the electrode to just 0.84 Ohm-cm (lab verified), ensures permanent moisture retention, and maintains consistent low earth resistance throughout the life of the installation without recurring watering.',
  },
  {
    q: 'Are your products tested and certified?',
    a: 'Yes. Our products undergo rigorous quality testing and standards verification, and all products comply with IS:3043 specifications. Our Ground Improving Compound is tested by Bhumi Research Center LLP, Surat.',
  },
  {
    q: 'What sizes of electrodes are available?',
    a: 'Copper Bonded Solid Rods: 14.2mm, 17.2mm, 20mm, 25mm, 32mm, 38mm diameter in 1.5m, 2m, 3m, and continuous 4m single lengths. Chemical Pipe type: 48mm and 76mm outer diameter in 2m and 3m lengths. All solid rods are extendable using couplers for deeper installations.',
  },
  {
    q: 'Which standards do your products comply with?',
    a: 'Our products strictly comply with IS:3043 (Indian Standard Code of Practice for Earthing).',
  },
  {
    q: 'Do you supply across India?',
    a: 'Yes. We supply PAN India from our manufacturing facility in Surat, Gujarat. We welcome bulk orders from contractors, EPC companies, and project developers across India.',
  },
  {
    q: 'How do I select the right electrode for my project?',
    a: 'Electrode selection is based on soil resistivity at your site. IS:3043 provides guidance: single 17.2mm rod for resistivity below 25 Ω-m, 25mm or pipe type for higher resistivity, and chemical earthing (compound) when resistivity exceeds 100 Ω-m. Contact us with your soil resistivity data for a recommendation.',
  },
];
