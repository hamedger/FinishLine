export const BUSINESS = {
  name: "Finish Line Oil Change and Repair",
  shortName: "Finish Line",
  tagline: "Your Livonia Oil Change Experts",
  phone: "(734) 367-6457",
  phoneHref: "tel:+17343676457",
  email: "contact@finishlineoilchange.com",
  contactEmail: "Hassandia82@hotmail.com",
  address: {
    street: "11900 Middlebelt Rd",
    city: "Livonia",
    state: "MI",
    zip: "48150",
    full: "11900 Middlebelt Rd, Livonia, MI 48150",
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=11900+Middlebelt+Rd,+Livonia,+MI+48150",
  mapsEmbed:
    "https://maps.google.com/maps?q=11900+Middlebelt+Rd,+Livonia,+MI+48150&output=embed",
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
} as const;

export const SERVICES = [
  {
    id: "oil-change",
    title: "Oil Change",
    description:
      "Keep your engine protected with a full-service oil change. We drain old oil, replace your filter, and top off essential fluids — then walk you through what we checked under the hood.",
    items: [
      "Conventional Oil Change",
      "Synthetic Blend Oil Change",
      "Full Synthetic Oil Change",
      "High-Mileage Oil Change",
      "Oil Filter Replacement",
      "Fluid Top-Off Included",
    ],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Technician performing a full-service oil change",
  },
  {
    id: "battery",
    title: "Battery",
    description:
      "A weak battery can leave you stranded — especially in Michigan winters. We test your battery and charging system, clean terminals, and install a quality replacement when you need one.",
    items: [
      "Battery Health Test",
      "Terminal Cleaning & Inspection",
      "Battery Replacement",
      "Charging System Check",
      "Starter & Alternator Inspection",
    ],
    image:
      "https://images.unsplash.com/photo-1486263119873-7ea59b246254?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mechanic testing a car battery under the hood",
  },
  {
    id: "brakes",
    title: "Brakes",
    description:
      "Your brakes are your most important safety system. From squealing pads to a soft pedal, our technicians inspect, diagnose, and repair brake components so you can stop with confidence.",
    items: [
      "Brake System Inspection",
      "Brake Pad Replacement",
      "Rotor Resurfacing & Replacement",
      "Brake Fluid Exchange",
      "Parking Brake Adjustment",
    ],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mechanic inspecting brake components on a vehicle",
  },
  {
    id: "engine",
    title: "Engine",
    description:
      "When your check engine light comes on or performance drops, you need answers fast. We diagnose engine issues and handle routine maintenance to keep your motor running strong mile after mile.",
    items: [
      "Check Engine Light Diagnostics",
      "Belts & Hoses Inspection",
      "Spark Plug Replacement",
      "Engine Air Intake Service",
      "General Engine Repair",
    ],
    image:
      "https://images.unsplash.com/photo-1486754730774-325b8931d4a8?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mechanic working on a car engine",
  },
  {
    id: "filters",
    title: "Filters",
    description:
      "Clean filters protect your engine and the air you breathe inside your car. We inspect and replace clogged filters to improve performance, fuel economy, and cabin air quality.",
    items: [
      "Engine Air Filter Replacement",
      "Cabin Air Filter Replacement",
      "Oil Filter Replacement",
      "Fuel Filter Service",
      "Filter Inspection with Every Visit",
    ],
    image:
      "https://images.unsplash.com/photo-1607860108853-7c7d2f8c4a2a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mechanic replacing an engine air filter",
  },
  {
    id: "fluids",
    title: "Fluids",
    description:
      "Fluids are the lifeblood of your vehicle. We check levels and condition of every major fluid system and perform exchanges when they're due — helping prevent costly breakdowns down the road.",
    items: [
      "Transmission Fluid Service",
      "Coolant / Antifreeze Exchange",
      "Power Steering Fluid",
      "Brake Fluid Service",
      "Differential & Transfer Case Fluid",
    ],
    image:
      "https://images.unsplash.com/photo-1625047509248-ec889cbff817?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Technician servicing vehicle fluids in a service bay",
  },
  {
    id: "inspections",
    title: "Inspections",
    description:
      "Catch small problems before they become big repairs. Our multi-point inspection covers the essentials — from tires and brakes to fluids and belts — so you always know the condition of your vehicle.",
    items: [
      "Multi-Point Vehicle Inspection",
      "Pre-Trip Safety Check",
      "Seasonal Readiness Inspection",
      "Under-Hood & Under-Car Review",
      "Written Inspection Summary",
    ],
    image:
      "https://images.unsplash.com/photo-1530046339160-ce66e568c747?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mechanic performing a multi-point vehicle inspection",
  },
  {
    id: "suspension",
    title: "Suspension",
    description:
      "Worn shocks, struts, or steering components affect handling, tire wear, and ride comfort. We inspect your suspension system and recommend repairs to keep your drive smooth and controlled.",
    items: [
      "Shock & Strut Inspection",
      "Steering System Check",
      "Ball Joint & Tie Rod Inspection",
      "Alignment Check & Referral",
      "Suspension Component Replacement",
    ],
    image:
      "https://images.unsplash.com/photo-1492144534655-eae7849b90ae?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mechanic inspecting vehicle suspension and steering",
  },
  {
    id: "tires",
    title: "Tires",
    description:
      "Proper tire care improves safety, handling, and fuel efficiency. We rotate, balance, and inspect your tires at every visit — and help you get back on the road quickly if you have a flat.",
    items: [
      "Tire Rotation",
      "Tire Pressure Check & Adjust",
      "Flat Tire Repair",
      "Tire Balancing",
      "TPMS Sensor Service",
    ],
    image:
      "https://images.unsplash.com/photo-1578844251756-43c8dbf9febb?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Technician rotating and inspecting tires",
  },
] as const;

export const COUPONS = [
  {
    id: "conventional",
    amount: "$10 OFF",
    title: "Conventional Oil Change",
    description: "Save on our full-service conventional oil change.",
    code: "FLCONV10",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Mike R.",
    location: "Livonia, MI",
    text: "Best oil change in town. They had me in and out in under 30 minutes, and the staff actually explained what they checked under the hood. Will definitely be back.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    location: "Westland, MI",
    text: "Family-owned feel with real professionalism. Fair prices, no upselling pressure, and they caught a low tire I hadn't noticed. Highly recommend Finish Line.",
    rating: 5,
  },
  {
    name: "James K.",
    location: "Farmington Hills, MI",
    text: "I've been coming here for two years. Consistent quality every visit. The synthetic oil change coupon is a great deal — show it on your phone and you're set.",
    rating: 5,
  },
  {
    name: "Linda M.",
    location: "Redford, MI",
    text: "Walked in on a Saturday morning without an appointment and they took care of me right away. Clean shop, friendly team, and honest service.",
    rating: 5,
  },
  {
    name: "David P.",
    location: "Livonia, MI",
    text: "Took my work truck in for an oil change and tire rotation. Quick, affordable, and they treated me like a regular. This is my go-to shop now.",
    rating: 5,
  },
  {
    name: "Angela W.",
    location: "Canton, MI",
    text: "So glad I found a local shop I can trust. They checked my brakes for free during my oil change and gave me a straight answer — no scare tactics.",
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

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#coupons", label: "Coupons" },
  { href: "#fleet", label: "Fleet Management" },
  { href: "#tips", label: "Tips" },
  { href: "#contact", label: "Contact" },
] as const;
