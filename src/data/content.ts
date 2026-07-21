import productCopperRoad from '/src/assets/product_copper_rod.webp';
import productCopperRoadNew from '/src/assets/product_copper_rod_new.webp';
import productGiRod from '/src/assets/product_gi_rod.webp';
import productLightningArrester from '/src/assets/product_lightning_arrester.webp';
import productEarthCompound from '/src/assets/product_earth_compound.webp';
import productSolarKit from '/src/assets/product_solar_kit.webp';

export const company = {
  name: 'Unique Electrodes',
  legalName: 'Unique Enterprise',
  tagline: 'Grounded in Quality. Built for Safety.',
  established: 'July 2021',
  type: 'Manufacturer & Trader',
  msme: 'UDYAM-GJ-22-0120594',
  isoNo: 'TSNUK02740',
  website: 'www.uniqueelectrodes.com',
  contacts: ['+91 9512231350', '+91 9557025000'],
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
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 6, suffix: '+', label: 'Product Lines' },
    { value: 3, suffix: '', label: 'Testing Labs' },
    { value: 4, suffix: '', label: 'Certifications' },
  ],
};

// ── Products ──────────────────────────────────────────────────
export const products = [
  {
    id: 'copper-bonded-solid-rod',
    name: 'Copper Bonded Solid Rod',
    shortName: 'CB Solid Rod',
    category: 'Copper Bonded',
    tagline: 'CPRI & ERDA Tested. IS:3043 Compliant.',
    description:
      'Our Copper Bonded Solid Earthing Electrode is manufactured via a permanent electroplating process — not just coating — delivering 250+ microns of pure copper permanently bonded to a mild steel low-carbon core. Tested at CPRI Bhopal and ERDA Vadodara for short-time withstand current.',
    image: productCopperRoadNew,
    badge: 'CPRI Tested',
    badgeType: 'success',
    keySpec: '250+ Micron Copper | 25 kArms Rated',
    specifications: [
      { param: 'Core Material', value: 'MS Low Carbon Steel (IS:2062)' },
      { param: 'Copper Coating', value: '250+ Microns (Electroplated)' },
      { param: 'Available Diameters', value: '14.2 mm, 17.2 mm, 20 mm, 25 mm' },
      { param: 'Available Lengths', value: '1.5 m, 2 m, 3 m (extendable via couplers)' },
      { param: 'Withstand Current (17.2mm)', value: '15.11 kArms for 1 second' },
      { param: 'Withstand Current (25mm)', value: '25 kArms for 1 second' },
      { param: 'Test Model', value: 'UECB 2503 (25mm, 3m)' },
      { param: 'Standards', value: 'IS:3043, IEEE Std 80, IEC 62561-7' },
    ],
    testReports: [
      { lab: 'CPRI Bhopal', date: 'March 2026', reportNo: 'CPRIBPLSTNBMISC26T0059', result: 'PASSED', detail: '17.2mm — 15.11 kArms / 1 sec' },
      { lab: 'ERDA Vadodara', date: 'January 2026', reportNo: 'RP-2526-034776', result: 'PASSED', detail: '25mm — 25 kArms / 1 sec' },
    ],
    applications: ['Power Plants', 'Substations', 'Data Centers', 'Telecom Towers', 'Solar Installations', 'Industrial Plants'],
  },
  {
    id: 'copper-bonded-pipe-type',
    name: 'Copper Bonded Pipe Type',
    shortName: 'CB Pipe Type',
    category: 'Copper Bonded',
    tagline: 'High-capacity fault current dissipation.',
    description:
      'The Copper Bonded Pipe-in-Pipe Electrode is a hollow GI pipe with a copper bonded outer layer, designed for deeper installations and environments requiring large fault current dissipation. Tested by CPRI Bhopal at 31.10 kArms (71.54 kApk).',
    image: productCopperRoad,
    badge: 'CPRI Tested',
    badgeType: 'success',
    keySpec: '31.10 kArms | 76mm OD Available',
    specifications: [
      { param: 'Type', value: 'Hollow GI Pipe with Copper Bonded Layer' },
      { param: 'Available Diameters', value: '50 mm, 76 mm (outer diameter)' },
      { param: 'Available Lengths', value: '1.5 m, 3 m per section (extendable)' },
      { param: 'Withstand Current (76mm)', value: '31.10 kArms for 1 second' },
      { param: 'Peak Current', value: '71.54 kApeak' },
      { param: 'Test Model', value: 'UE-SIP-763 (76mm GI Electrode)' },
      { param: 'Standards', value: 'IS:3043, IEEE Std 80' },
    ],
    testReports: [
      { lab: 'CPRI Bhopal', date: 'March 2026', reportNo: 'CPRIBPLSTNBMISC26T0060', result: 'PASSED', detail: '76mm — 31.10 kArms / 1 sec' },
    ],
    applications: ['Heavy Industry', 'Substations', 'Power Stations', 'High Fault Current Areas', 'Deep Installation Sites'],
  },
  {
    id: 'gi-earthing-electrodes',
    name: 'GI Earthing Electrodes',
    shortName: 'GI Electrodes',
    category: 'GI Electrodes',
    tagline: 'Hot-dip galvanized for lasting corrosion resistance.',
    description:
      'Our GI Earthing Electrodes are manufactured from MS low-carbon steel hot-dip galvanized to IS:2629 standards. They provide excellent corrosion resistance in aggressive soil environments at an economical price point. Available as solid rods and pipe types.',
    image: productGiRod,
    badge: 'IS:3043',
    badgeType: 'primary',
    keySpec: 'Hot-Dip Galvanized | IS:2629 Standard',
    specifications: [
      { param: 'Core Material', value: 'MS Low Carbon Steel' },
      { param: 'Coating Process', value: 'Hot-Dip Galvanized (IS:2629)' },
      { param: 'Available Diameters', value: '50 mm, 76 mm' },
      { param: 'Available Lengths', value: '1.5 m, 3 m (extendable)' },
      { param: 'Withstand Current (76mm)', value: '31.10 kArms for 1 second' },
      { param: 'Standards', value: 'IS:3043, IS:2629' },
    ],
    testReports: [
      { lab: 'CPRI Bhopal', date: 'March 2026', reportNo: 'CPRIBPLSTNBMISC26T0060', result: 'PASSED', detail: '76mm GI — 31.10 kArms / 1 sec' },
    ],
    applications: ['Commercial Buildings', 'Industrial Sheds', 'Rural Electrification', 'Residential Projects', 'General Earthing'],
  },
  {
    id: 'earth-enhancement-compound',
    name: 'Earth Enhancement Compound',
    shortName: 'Earth Compound',
    category: 'Compounds',
    tagline: 'Ultra-low 0.84 Ω-cm resistivity. Lab verified.',
    description:
      'Our Earth Enhancement Compound (Soil Energizer/Backfill Compound) is a highly hygroscopic mineral compound that absorbs and retains moisture to maintain permanently low ground resistance. Tested by Bhumi Research Center LLP with a verified electrical resistivity of just 0.84 Ohm-cm.',
    image: productEarthCompound,
    badge: 'Lab Verified',
    badgeType: 'accent',
    keySpec: '0.84 Ω-cm Resistivity | 96.88% Fine Particles',
    specifications: [
      { param: 'Electrical Resistivity', value: '0.84 Ohm-cm (IEC 62561-7:2018)' },
      { param: 'Silt+Clay Fraction', value: '96.88% (IS 2720 Part 4:1985)' },
      { param: 'Volumetric Free Swell Index', value: '81.82% (IS 2720 Part 40)' },
      { param: 'Swelling Volume', value: '8.18 ml' },
      { param: 'Moisture Content', value: '4.32% (IS 2720 Part 2)' },
      { param: 'Bulk Density', value: '1063 kg/m³ (IS 2386 Part 3)' },
      { param: 'Nature', value: 'Non-toxic, environmentally safe' },
      { param: 'Test Lab', value: 'Bhumi Research Center LLP, Surat' },
    ],
    testReports: [
      { lab: 'Bhumi Research Center LLP, Surat', date: 'February 2026', reportNo: 'MT-02-2026-EEC-PHY-1742-01', result: 'PASSED', detail: 'Resistivity 0.84 Ω-cm' },
    ],
    applications: ['Around Earthing Electrodes', 'High-Resistivity Soil Areas', 'Chemical Earthing Systems', 'All Earthing Installations'],
  },
  {
    id: 'lightning-arresters',
    name: 'Lightning Arresters',
    shortName: 'ESE Arresters',
    category: 'Lightning Protection',
    tagline: 'Complete IEC 62305 lightning protection.',
    description:
      'Our Early Streamer Emission (ESE) Lightning Arresters provide a protection radius of up to 60–80 metres per unit. Part of a complete lightning protection system including down conductors, test clamps, and earth electrode systems. Compliant with IEC 62305 and NFC 17-102.',
    image: productLightningArrester,
    badge: 'IEC 62305',
    badgeType: 'primary',
    keySpec: '60–80m Protection Radius | ESE Type',
    specifications: [
      { param: 'Type', value: 'Early Streamer Emission (ESE)' },
      { param: 'Protection Radius', value: 'Up to 60–80 metres per unit' },
      { param: 'Standards', value: 'IEC 62305, NFC 17-102' },
      { param: 'Down Conductor', value: 'Copper / GI Strip' },
      { param: 'Mounting', value: 'Rooftops, towers, industrial structures' },
      { param: 'System Includes', value: 'Arrester + Down Conductor + Test Clamp + Earth System' },
    ],
    testReports: [],
    applications: ['Industrial Buildings', 'Telecom Towers', 'Rooftops', 'Warehouses', 'Educational Institutions', 'Hospitals'],
  },
  {
    id: 'solar-earthing-kit',
    name: 'Solar Earthing Kit',
    shortName: 'Solar Kit',
    category: 'Solar',
    tagline: 'Complete earthing solution for solar installations.',
    description:
      'A complete earthing kit designed specifically for solar panel installations. Includes copper bonded rod, earth enhancement compound, and all necessary accessories. Designed as per IS:3043 to ensure solar panels and inverters are safely earthed against fault currents and lightning.',
    image: productSolarKit,
    badge: 'IS:3043',
    badgeType: 'success',
    keySpec: 'Complete Kit | IS:3043 Compliant',
    specifications: [
      { param: 'Includes', value: 'Copper Bonded Rod + Backfill Compound + Accessories' },
      { param: 'Electrode Standard', value: 'IS:3043' },
      { param: 'Suitable For', value: 'Rooftop Solar, Ground-Mounted Solar Farms' },
      { param: 'Protection Against', value: 'Fault Currents, Lightning, Surges' },
    ],
    testReports: [],
    applications: ['Rooftop Solar', 'Ground-Mounted Solar Farms', 'Solar Water Pumps', 'Industrial Solar Plants'],
  },
];

// ── Industries ────────────────────────────────────────────────
export const industries = [
  {
    id: 'power',
    icon: 'FaBolt',
    title: 'Power Sector',
    description: 'Substations, power plants and transmission lines require reliable earthing for both safety and equipment protection.',
    products: ['CB Solid Rod', 'CB Pipe Type', 'Earth Compound'],
    color: '#F59E0B',
  },
  {
    id: 'telecom',
    icon: 'FaSatelliteDish',
    title: 'Telecom & BTS',
    description: 'Telecom towers and BTS sites demand low earth resistance to protect sensitive equipment and personnel.',
    products: ['CB Solid Rod', 'Earth Compound', 'Lightning Arresters'],
    color: '#3B82F6',
  },
  {
    id: 'solar',
    icon: 'FaSolarPanel',
    title: 'Solar Energy',
    description: 'Solar installations require proper earthing to protect panels, inverters and wiring from fault currents.',
    products: ['Solar Earthing Kit', 'CB Solid Rod'],
    color: '#EF4444',
  },
  {
    id: 'industrial',
    icon: 'FaIndustry',
    title: 'Industrial Plants',
    description: 'Manufacturing facilities and industrial plants need robust earthing systems for equipment and worker safety.',
    products: ['GI Electrodes', 'CB Pipe Type', 'Earth Compound'],
    color: '#8B5CF6',
  },
  {
    id: 'healthcare',
    icon: 'FaHospital',
    title: 'Healthcare',
    description: 'Hospitals and healthcare facilities require premium earthing to protect critical medical equipment.',
    products: ['CB Solid Rod', 'Earth Compound'],
    color: '#10B981',
  },
  {
    id: 'datacenters',
    icon: 'FaServer',
    title: 'Data Centers',
    description: 'Server farms and IT infrastructure need highly reliable earthing to prevent data loss and equipment damage.',
    products: ['CB Solid Rod', 'Earth Compound', 'Lightning Arresters'],
    color: '#06B6D4',
  },
  {
    id: 'oilgas',
    icon: 'FaOilWell',
    title: 'Oil & Gas',
    description: 'Refineries and pipelines require heavy-duty earthing for both safety and explosion protection.',
    products: ['CB Pipe Type', 'GI Electrodes', 'Earth Compound'],
    color: '#F97316',
  },
  {
    id: 'construction',
    icon: 'FaBuilding',
    title: 'Construction',
    description: 'Roads, bridges, buildings and railways all require proper earthing during and after construction.',
    products: ['GI Electrodes', 'CB Solid Rod', 'Lightning Arresters'],
    color: '#6B7280',
  },
];

// ── Certifications ────────────────────────────────────────────
export const certifications = [
  {
    id: 'iso',
    title: 'ISO 9001:2015',
    icon: '🏆',
    issuedBy: 'TSN Certification Ltd (EUAS Accredited)',
    certNo: 'TSNUK02740',
    scope: 'Manufacturers & Traders of Earth Electrode, Earthing Chemical & Accessories',
    color: '#C8791A',
    category: 'Quality Management',
  },
  {
    id: 'udyam',
    title: 'UDYAM MSME',
    icon: '🇮🇳',
    issuedBy: 'Government of India, Ministry of MSME',
    certNo: 'UDYAM-GJ-22-0120594',
    scope: 'Manufacturing Enterprise — NIC Codes 27320 & 46529',
    color: '#16A34A',
    category: 'Government Registration',
  },
  {
    id: 'cpri1',
    title: 'CPRI Test Report',
    icon: '⚡',
    issuedBy: 'Central Power Research Institute, Bhopal',
    certNo: 'CPRIBPLSTNBMISC26T0059',
    scope: '17.2mm Copper Bonded Rod — 15.11 kArms for 1 second — PASSED',
    date: 'March 2026',
    color: '#2563EB',
    category: 'Test Report',
  },
  {
    id: 'cpri2',
    title: 'CPRI Test Report',
    icon: '⚡',
    issuedBy: 'Central Power Research Institute, Bhopal',
    certNo: 'CPRIBPLSTNBMISC26T0060',
    scope: '76mm GI Electrode — 31.10 kArms for 1 second (71.54 kApk) — PASSED',
    date: 'March 2026',
    color: '#2563EB',
    category: 'Test Report',
  },
  {
    id: 'erda',
    title: 'ERDA Test Report',
    icon: '🔬',
    issuedBy: 'Electrical Research & Development Association, Vadodara',
    certNo: 'RP-2526-034776',
    scope: '25mm CB Solid Rod (3m) — 25 kArms for 1 second — PASSED',
    date: 'January 2026',
    color: '#7C3AED',
    category: 'Test Report',
  },
  {
    id: 'bhumi',
    title: 'Bhumi Research Report',
    icon: '🧪',
    issuedBy: 'Bhumi Research Center LLP, Surat',
    certNo: 'MT-02-2026-EEC-PHY-1742-01',
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
    title: 'CPRI & ERDA Tested',
    description: 'Every product is independently tested at India\'s premier labs. No claims — just lab-verified performance with official test reports.',
    color: '#2563EB',
  },
  {
    icon: 'FaAward',
    title: 'ISO 9001:2015 Certified',
    description: 'Our quality management system is ISO 9001:2015 certified, ensuring consistent quality across every batch manufactured.',
    color: '#C8791A',
  },
  {
    icon: 'FaBolt',
    title: 'Ultra-Low 0.84 Ω-cm',
    description: 'Our Earth Enhancement Compound has a lab-verified resistivity of just 0.84 Ohm-cm — ensuring dramatically lower ground resistance.',
    color: '#F59E0B',
  },
  {
    icon: 'FaCubes',
    title: 'Complete System Provider',
    description: 'From electrodes and backfill compound to lightning arresters and solar kits — we supply every component of your earthing system.',
    color: '#10B981',
  },
  {
    icon: 'FaClipboardCheck',
    title: 'IS & IEC Compliant',
    description: 'All products comply with IS:3043, IEEE Std 80, IEC 62561-7 and NFC 17-102 — meeting Indian and international standards.',
    color: '#7C3AED',
  },
  {
    icon: 'FaBuilding',
    title: 'MSME Manufacturer',
    description: 'Government-registered MSME manufacturer (UDYAM-GJ-22-0120594) ensuring transparency, trust and direct factory supply.',
    color: '#16A34A',
  },
];

// ── Manufacturing Process ─────────────────────────────────────
export const processSteps = [
  { step: '01', icon: 'FaBoxOpen', title: 'Raw Material Procurement', description: 'IS:2062 grade MS billets and 99.9% pure copper are sourced from verified suppliers.' },
  { step: '02', icon: 'FaCog', title: 'Precision Machining', description: 'CNC cutting to exact dimensions — diameter, length and thread profile precision-engineered.' },
  { step: '03', icon: 'FaLayerGroup', title: 'Copper Electroplating', description: 'Permanent 250+ micron pure copper layer permanently bonded via electroplating — not just coating.' },
  { step: '04', icon: 'FaRuler', title: 'Quality Inspection', description: 'Dimensional checks, copper coating thickness verification, and visual inspection at every stage.' },
  { step: '05', icon: 'FaFlask', title: 'Lab Testing', description: 'Short-time withstand current tests at CPRI Bhopal and ERDA Vadodara to verify performance.' },
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
    text: 'We have been using Unique Electrodes copper bonded rods for our industrial projects. The CPRI test reports gave us full confidence in specifying these products. Quality is consistently excellent.',
  },
  {
    id: 2,
    name: 'Suresh Mehta',
    role: 'Project Engineer',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
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
    rating: 5,
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
    q: 'What is the difference between the Solid Rod and Pipe-in-Pipe type?',
    a: 'The Solid Rod is a solid MS low-carbon steel rod with copper bonding — ideal for most standard applications. The Pipe-in-Pipe (hollow) type uses a GI pipe outer body, allowing for deeper installations and handling higher fault currents (up to 31.10 kArms). Pipe type is recommended for substations and heavy industrial use.',
  },
  {
    q: 'Why is the Earth Enhancement Compound important?',
    a: 'Soil resistivity directly impacts earth resistance. Our Earth Enhancement Compound (EEC) dramatically reduces soil resistivity around the electrode to just 0.84 Ohm-cm (lab verified), ensures permanent moisture retention, and maintains consistent low earth resistance throughout the life of the installation.',
  },
  {
    q: 'Are your products CPRI and ERDA tested?',
    a: 'Yes. All our major products carry official test reports from India\'s premier institutions. Our Copper Bonded Rods are tested at CPRI Bhopal (Report: CPRIBPLSTNBMISC26T0059 & T0060) and ERDA Vadodara (Report: RP-2526-034776). Earth Enhancement Compound is tested by Bhumi Research Center LLP, Surat.',
  },
  {
    q: 'What sizes of electrodes are available?',
    a: 'Copper Bonded Solid Rods: 14.2mm, 17.2mm, 20mm, 25mm diameter in 1.5m, 2m, 3m lengths. Pipe-in-Pipe: 50mm, 76mm outer diameter in 1.5m, 3m lengths. All sizes are extendable using couplers for deeper installations.',
  },
  {
    q: 'Which standards do your products comply with?',
    a: 'Our products comply with IS:3043 (Code of Practice for Earthing), IEEE Standard 80, IEC 62561-7, and NFC 17-102 for lightning protection. Our quality management system is certified to ISO 9001:2015.',
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
