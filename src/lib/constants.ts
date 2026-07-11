export const SITE_URL = "https://finishlineoil.com" as const;

export const BUSINESS = {
  name: "Finish Line Oil Change and Repair",
  shortName: "Finish Line",
  tagline: "Drive With Confidence. Drive With Finish Line.",
  seoH1: "Oil Change in Livonia, MI",
  heroServices:
    "Fast Oil Changes • Tires • Brakes • Diagnostics • Repairs",
  heroTrust: "Family Owned. Community Trusted.",
  phone: "(734) 367-6457",
  phoneHref: "tel:+17343676457",
  email: "finishlinequicklube@gmail.com",
  contactEmail: "Hassandia82@hotmail.com",
  address: {
    street: "11900 Middlebelt Rd, Suite A",
    city: "Livonia",
    state: "MI",
    zip: "48150",
    full: "11900 Middlebelt Rd, Suite A, Livonia, MI 48150",
  },
  websiteUrl: SITE_URL,
  logoFullUrl: `${SITE_URL}/logo.png`,
  googlePlaceUrl:
    "https://www.google.com/maps/search/?api=1&query=Finish+Line+Oil+Change+and+Repair+11900+Middlebelt+Rd+Suite+A+Livonia+MI+48150",
  // Replace with your GBP short review link from business.google.com when available
  googleReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Finish+Line+Oil+Change+and+Repair+11900+Middlebelt+Rd+Suite+A+Livonia+MI+48150",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=11900+Middlebelt+Rd,+Suite+A,+Livonia,+MI+48150",
  mapsEmbed:
    "https://maps.google.com/maps?q=11900+Middlebelt+Rd,+Suite+A,+Livonia,+MI+48150&output=embed",
  hours: [
    { day: "Monday", hours: "8:00 AM – 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 6:00 PM" },
    { day: "Friday", hours: "8:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
    { day: "Sunday", hours: "CLOSED" },
  ],
  walkInNote: "No appointment needed — walk in anytime during business hours.",
  logoSrc: "/logo.png?v=3",
  social: {
    instagram:
      "https://www.instagram.com/finishlineoilchangeautorepair?utm_source=qr",
    facebook: "https://www.facebook.com/share/18tQe2xiWA/?mibextid=wwXIfr",
  },
} as const;

export const SERVICES = [
  {
    id: "oil-change",
    title: "Oil Change",
    description:
      "Keep your engine protected with a full-service oil change. We drain the old oil, replace your filter, and top off essential fluids — then walk you through everything we checked under the hood for complete peace of mind.",
    items: [
      "Conventional Oil Change",
      "Synthetic Blend Oil Change",
      "Full Synthetic Oil Change",
      "High-Mileage Oil Change",
      "Premium Oil Filter Replacement",
      "Essential Fluid Top-Offs Included",
      "Courtesy Vehicle Inspection",
    ],
    closing:
      "Quality service, trusted products, and expert care to keep your vehicle running at its best.",
  },
  {
    id: "battery",
    title: "Battery",
    description:
      "Don't get stranded by a weak battery — especially during harsh Michigan winters. We test your battery and charging system, clean battery terminals, and install a high-quality replacement when needed to keep your vehicle starting reliably.",
    items: [
      "Battery Health Test",
      "Battery Terminal Cleaning & Inspection",
      "Battery Replacement",
      "Charging System Check",
      "Starter & Alternator Inspection",
    ],
    closing:
      "Stay prepared with dependable battery service and expert diagnostics you can trust.",
  },
  {
    id: "brakes",
    title: "Brakes",
    description:
      "Your brakes are your vehicle's most important safety system. From squealing pads to a soft brake pedal, our technicians inspect, diagnose, and repair brake components so you can stop with confidence.",
    items: [
      "Complete Brake System Inspection",
      "Brake Pad Replacement",
      "Rotor Replacement",
      "Brake Fluid Exchange",
      "Parking Brake Adjustment",
    ],
    closing:
      "Reliable brake service helps ensure your vehicle performs safely when it matters most. Trust our experienced technicians to keep your braking system in top condition.",
  },
  {
    id: "engine",
    title: "Engine",
    description:
      "When your check engine light comes on or performance drops, you need answers fast. Our technicians diagnose engine issues and perform essential maintenance to keep your vehicle running strong mile after mile.",
    items: [
      "Check Engine Light Diagnostics",
      "Belts & Hoses Inspection",
      "Spark Plug Replacement",
      "Engine Air Intake Service",
      "General Engine Repair",
    ],
    closing:
      "From routine maintenance to engine troubleshooting, we provide reliable service to help maximize performance, efficiency, and the life of your vehicle.",
  },
  {
    id: "filters",
    title: "Filters",
    description:
      "Clean filters protect both your engine and the air you breathe inside your vehicle. We inspect and replace dirty or clogged filters to help improve engine performance, fuel efficiency, and cabin air quality.",
    items: [
      "Engine Air Filter Replacement",
      "Cabin Air Filter Replacement",
      "Oil Filter Replacement",
      "Fuel Filter Service",
      "Filter Inspection with Every Visit",
    ],
    closing:
      "Regular filter maintenance helps your vehicle run more efficiently while keeping the air inside your car clean and comfortable.",
  },
  {
    id: "fluids",
    title: "Fluids",
    description:
      "Fluids are the lifeblood of your vehicle. We inspect the condition and level of every major fluid system and perform recommended services to help prevent costly repairs and keep your vehicle running smoothly.",
    items: [
      "Transmission Fluid Service",
      "Coolant / Antifreeze Exchange",
      "Power Steering Fluid Service",
      "Brake Fluid Service",
      "Differential & Transfer Case Fluid Service",
    ],
    closing:
      "Routine fluid maintenance helps extend the life of your vehicle and ensures critical systems continue to perform at their best.",
  },
  {
    id: "inspections",
    title: "Inspections",
    description:
      "Catch small problems before they turn into costly repairs. Our comprehensive multi-point inspection covers the essentials — from tires and brakes to fluids and belts — so you always know the condition of your vehicle.",
    items: [
      "Multi-Point Vehicle Inspection",
      "Pre-Trip Safety Check",
      "Seasonal Readiness Inspection",
      "Under-Hood & Under-Car Inspection",
      "Written Inspection Summary",
    ],
    closing:
      "Our thorough inspections help identify potential issues early, giving you peace of mind and helping keep your vehicle safe and reliable.",
  },
  {
    id: "suspension",
    title: "Suspension",
    description:
      "Worn shocks, struts, or steering components can affect handling, tire wear, and overall ride comfort. Our technicians inspect your suspension system and recommend the necessary repairs to keep your vehicle riding smoothly and safely.",
    items: [
      "Shock & Strut Inspection",
      "Steering System Check",
      "Ball Joint & Tie Rod Inspection",
      "Alignment Check & Referral",
      "Suspension Component Replacement",
    ],
    closing:
      "A properly maintained suspension system improves vehicle control, extends tire life, and provides a smoother, more comfortable driving experience.",
  },
  {
    id: "tires",
    title: "Tires",
    description:
      "Proper tire care improves safety, handling, and fuel efficiency. We rotate, balance, and inspect your tires to help extend their life — and get you back on the road quickly if you experience a flat.",
    items: [
      "Tire Rotation",
      "Tire Pressure Check & Adjust",
      "Flat Tire Repair",
      "Tire Balancing",
      "TPMS Sensor Service",
    ],
    closing:
      "Regular tire maintenance helps improve traction, ride comfort, and overall driving safety in all road conditions.",
  },
  {
    id: "visibility",
    title: "Visibility & Lighting",
    description:
      "Clear visibility is critical for safe driving in every season. From your windshield to your wiper system and headlights, we inspect and service the essential components that help you see the road clearly and drive with confidence.",
    items: [
      "Windshield Repair & Replacement",
      "Wiper Blade Replacement",
      "Wiper System Inspection",
      "Headlight Bulb Replacement",
      "Full Visibility & Lighting Inspection",
    ],
    closing:
      "Reliable visibility systems are especially important in rain, snow, nighttime driving, and harsh Michigan weather conditions. Stay safe with properly maintained vision and lighting systems all year round.",
  },
] as const;

export const COUPONS = [
  {
    id: "any-oil-change",
    amount: "$5 OFF",
    title: "Any Full-Service Oil Change",
    description: "Save $5 on any full-service oil change.",
    includes: [
      "Conventional",
      "Synthetic Blend",
      "High Mileage",
      "Full Synthetic",
      "Mobil 1 Full Synthetic",
    ],
    terms:
      "Valid on one full-service oil change. Taxes, shop fees, oil filter upgrades, additional quarts, and specialty oils may incur additional charges. Cannot be combined with any other offer. One coupon per visit. See store for details.",
    code: "FLOIL5",
  },
  {
    id: "brakes-suspension-repair",
    amount: "$25 OFF",
    title: "Brakes, Suspension & Auto Repair",
    description:
      "Save $25 on any brake, suspension, or auto repair service of $350 or more.",
    includes: [
      "Brake Repairs",
      "Suspension Repairs",
      "Steering Repairs",
      "Engine Repairs",
      "General Auto Repairs",
    ],
    terms:
      "Valid on repairs totaling $350 or more before tax and shop fees. Cannot be combined with any other offer. One coupon per visit. See store for details.",
    code: "FLREPAIR25",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Katie Puga",
    location: "Verified Customer",
    text: "I'm thrilled I found this place. I've never been to a repair shop that has been so transparent!",
    rating: 5,
  },
  {
    name: "James Wagner",
    location: "Verified Customer",
    text: "I highly recommend these guys — they are not pushy, they are fast and friendly. I would definitely come back.",
    rating: 5,
  },
  {
    name: "Bobby Nowotny",
    location: "Verified Customer",
    text: "Thanks to Sam and the crew. Did great work at a good price.",
    rating: 5,
  },
  {
    name: "Breanna Gorski",
    location: "Verified Customer",
    text: "New tire in and out in 30 minutes or so. Very nice, and from out of town — got us on our way.",
    rating: 5,
  },
  {
    name: "Nikki Cote",
    location: "Verified Customer",
    text: "Treated very well and everyone is knowledgeable. Very comfortable visiting this place, unlike others that try to sell, sell, sell. Love it!",
    rating: 5,
  },
  {
    name: "Leah Moore",
    location: "Verified Customer",
    text: "Best service around. My husband and I have been going for years. Will never go anywhere else. Always fair and honest.",
    rating: 5,
  },
  {
    name: "Tahrir Zara",
    location: "Verified Customer",
    text: "Great place, great staff!!",
    rating: 5,
  },
  {
    name: "Taghrid Zara",
    location: "Verified Customer",
    text: "Best place, very skilled and knowledgeable.",
    rating: 5,
  },
  {
    name: "Allan A. Gorski",
    location: "Verified Customer",
    text: "Great quick service. Employees are great at what they do.",
    rating: 5,
  },
  {
    name: "Daniel Miller",
    location: "Verified Customer",
    text: "Thanks for the fast, professional service.",
    rating: 5,
  },
  {
    name: "Amber Hall",
    location: "Verified Customer",
    text: "Great staff, quick service and fair prices. Won't go anywhere else again.",
    rating: 5,
  },
  {
    name: "Bridgette Desira",
    location: "Verified Customer",
    text: "Went in today for the first time to get my oil changed. Apparently Wednesdays are ladies day so I got $5 off :) It was super quick, and the guys were really nice. Will be going here from now on!",
    rating: 5,
  },
] as const;

export const TIPS = [
  {
    title: "How Often Should You Change Your Oil?",
    excerpt:
      "Most vehicles need an oil change every 3,000–5,000 miles for conventional oil, or 5,000–7,500 miles for synthetic. Check your owner's manual — and when in doubt, ask us.",
    category: "Maintenance",
  },
  {
    title: "Synthetic vs. Conventional Oil: Which Is Right for You?",
    excerpt:
      "Synthetic oil offers better protection in extreme temperatures and lasts longer between changes. High-mileage and turbocharged engines especially benefit. We'll help you choose.",
    category: "Oil Types",
  },
  {
    title: "5 Signs Your Brakes Need Attention",
    excerpt:
      "Squealing, grinding, a soft pedal, pulling to one side, or a dashboard warning light all signal it's time for a brake inspection. Don't wait — safety first.",
    category: "Safety",
  },
  {
    title: "Why Tire Rotation Matters",
    excerpt:
      "Rotating tires every 5,000–7,500 miles promotes even wear, extends tire life, and improves handling. Pair it with your next oil change for easy maintenance.",
    category: "Tires",
  },
  {
    title: "What We Check During Every Visit",
    excerpt:
      "Beyond your oil change, we inspect fluid levels, filters, tire pressure, belts, hoses, and more. It's our way of helping you catch small issues before they become big repairs.",
    category: "Service",
  },
] as const;

export const FLEET_FEATURES = [
  "Scheduled maintenance for cars, trucks, and vans",
  "Volume pricing for multiple vehicles",
  "Flexible billing and invoicing options",
  "Priority service to minimize downtime",
  "Dedicated account support",
  "Maintenance records for your fleet",
] as const;

export const FLEET_PARTNERS = [
  {
    name: "Enterprise",
    href: "https://www.google.com/search?q=Enterprise+fleet+management",
  },
  {
    name: "Holman",
    href: "https://www.google.com/search?q=Holman+fleet+management",
  },
  {
    name: "Element",
    href: "https://www.google.com/search?q=Element+fleet+management",
  },
  {
    name: "Wheels",
    href: "https://www.google.com/search?q=Wheels+fleet+management",
  },
  {
    name: "EMKAY",
    href: "https://www.google.com/search?q=EMKAY+fleet+management",
  },
  {
    name: "Voyager",
    href: "https://www.google.com/search?q=Voyager+fleet+management",
  },
  {
    name: "Merchants Fleet",
    href: "https://www.google.com/search?q=Merchants+Fleet+management",
  },
  {
    name: "Fleet Response",
    href: "https://www.google.com/search?q=Fleet+Response+management",
  },
  {
    name: "Mike Albert",
    href: "https://www.google.com/search?q=Mike+Albert+fleet+management",
  },
] as const;

export const FLEET_PARTNERS_IMAGE = "/fleet-partners.png";

export const AREA_SERVED = [
  "Livonia",
  "Westland",
  "Redford",
  "Farmington Hills",
  "Canton",
  "Wayne County",
] as const;

export const OIL_CHANGE_FAQS = [
  {
    question: "Do I need an appointment for an oil change in Livonia?",
    answer:
      "No appointment is needed. Finish Line is a walk-in oil change shop — just drive to 11900 Middlebelt Rd during business hours and we'll take care of you.",
  },
  {
    question: "How long does an oil change take?",
    answer:
      "Most oil changes are completed in about 30 minutes or less. Wait times may vary on busy days, but we work efficiently to get you back on the road quickly.",
  },
  {
    question: "What types of oil do you offer?",
    answer:
      "We offer conventional, synthetic blend, full synthetic, and high-mileage oil changes. Every service includes a new oil filter, fluid top-offs, and a courtesy vehicle inspection.",
  },
  {
    question: "How often should I change my oil?",
    answer:
      "Most vehicles need an oil change every 3,000–5,000 miles with conventional oil, or 5,000–7,500 miles with full synthetic. Check your owner's manual — our technicians can recommend the right interval for your vehicle.",
  },
  {
    question: "Is synthetic oil worth it in Michigan?",
    answer:
      "Synthetic oil performs better in extreme hot and cold temperatures, which makes it a strong choice for Michigan winters and summers. It also lasts longer between changes. We'll help you choose the right oil for your vehicle and driving habits.",
  },
  {
    question: "Do you serve areas outside Livonia?",
    answer:
      "Yes. We serve Livonia, Westland, Redford, Farmington Hills, Canton, and surrounding Wayne County communities. Many customers drive in from nearby cities for fast, trusted walk-in service.",
  },
] as const;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#coupons", label: "Coupons" },
  { href: "#fleet", label: "Fleet" },
  { href: "#tips", label: "Tips" },
  { href: "#contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = [
  { href: "/oil-change-livonia-mi", label: "Oil Change Livonia" },
  { href: "/#services", label: "Services" },
  { href: "/#coupons", label: "Coupons" },
  { href: "/#fleet", label: "Fleet" },
  { href: "/#tips", label: "Tips" },
  { href: "/#contact", label: "Contact" },
] as const;
