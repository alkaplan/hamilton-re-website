export interface Property {
  name: string;
  website: string;
  address: string;
  phone?: string;
  units: string;
  pricing?: string;
  features: string[];
  image?: string;
}

export const properties: Property[] = [
  {
    name: "Townhomes at Bexley Creek",
    website: "https://bexleycreek.com/",
    address: "3058A Allegheny Ave, Columbus, OH 43209",
    phone: "(614) 231-6539",
    units: "1BR garden apartments and 2BR townhomes, 596–967 sq ft",
    pricing: "Starting at $849",
    features: ["Pet-friendly", "Freshly renovated", "Spacious kitchens"],
    image: "/images/properties/bexley-creek.jpg",
  },
  {
    name: "Courtship Village Apartments",
    website: "https://www.horizonsassetmanagement.com/courtship-village",
    address: "1503 D Monmouth St, Lancaster, OH 43130",
    phone: "(740) 746-1136",
    units: "1–2 BR, 600–800 sq ft",
    pricing: "$1,175 – $1,399/mo",
    features: [
      "24-hr maintenance",
      "Washer/dryers",
      "Patios",
      "Professional landscaping",
    ],
    image: "/images/properties/courtship-village.jpg",
  },
  {
    name: "Kingswood Court",
    website:
      "https://www.horizonsassetmanagement.com/kingswood-court-apartments",
    address: "301 Executive Dr, Newark, OH 43055",
    phone: "(740) 366-3100",
    units: "129 units, built 1971, 2 stories",
    features: ["Swimming pool", "Playground", "On-site laundry"],
    image: "/images/properties/kingswood-court.jpg",
  },
  {
    name: "Courtyard Townhomes",
    website: "https://www.horizonsassetmanagement.com/courtyard_townhomes",
    address: "1462 Elaine Rd, Columbus, OH 43227",
    units: "2BR/1.5BA, 975 sq ft",
    pricing: "Starting at $1,299",
    features: [
      "Updated flooring",
      "Equipped kitchen",
      "Basement with W/D hookups",
      "Private patio",
      "Individual entrances",
      "Pet-friendly",
    ],
    image: "/images/properties/courtyard-townhomes.jpg",
  },
  {
    name: "Falls at Arlington",
    website: "https://www.fallsatarlington.com/",
    address: "2283 Graydon Blvd, Columbus, OH 43220",
    phone: "(614) 442-1205",
    units: "1BR ranch-style apartments",
    pricing: "Starting at $890",
    features: [
      "Private entrance",
      "Fenced-in patio",
      "A/C",
      "W/D hookups",
      "Pet-friendly",
    ],
    image: "/images/properties/falls-at-arlington.jpg",
  },
];
