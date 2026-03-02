export const SITE_NAME = "Hamilton Real Estate Partners";
export const SITE_DESCRIPTION =
  "Multifamily real estate investor in Columbus, Ohio. Real Estate Private Equity with a disciplined strategy.";
export const SITE_URL = "https://hamiltonrepartners.com";

export const CONTACT_EMAIL = "website@hamiltonrec.com";

export const OFFICES = [
  {
    name: "Columbus Office",
    address: "4449 Easton Way, 2nd Floor",
    city: "Columbus, OH 43219",
  },
  {
    name: "New York Office",
    address: "800 Westchester Ave, Suite 641-N",
    city: "Rye Brook, NY 10573",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Approach", href: "/approach" },
  { label: "Team", href: "/team" },
  { label: "Portfolio", href: "/portfolio" },
] as const;
