import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Our investment strategy: identifying underperforming multifamily assets in Columbus, Ohio and driving value through hands-on management.",
};

const techLogos = [
  { name: "Freshdesk", src: "/images/tech/freshdesk.jpg" },
  { name: "Power BI", src: "/images/tech/power-bi.jpg" },
  { name: "AppFolio", src: "/images/tech/appfolio.jpg" },
  { name: "CoStar", src: "/images/tech/costar.jpg" },
  { name: "NextCentury", src: "/images/tech/nextcentury.jpg" },
  { name: "TriNet", src: "/images/tech/trinet.jpg" },
  { name: "Slab", src: "/images/tech/slab.png" },
];

export default function ApproachPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-charcoal py-12">
        <Container>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Our Approach
          </h1>
        </Container>
      </section>

      {/* Investment Strategy */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-charcoal mb-6">
              Investment Strategy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hamilton&apos;s core strategy is straightforward: identify
              underperforming multifamily assets, rapidly improve and sustain
              performance, and return capital to investors over time in a
              tax-efficient manner.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We target secondary markets that combine strong population growth
              with moderately priced housing — markets where there is room to
              bring below-market rents up to competitive levels through physical
              improvements and better management.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Columbus, Ohio fits this profile precisely. The metro ranks in the
              65th percentile for 20-year population growth among metropolitan
              areas with 1 to 5 million people, yet rents of $1.19 per square
              foot sit at just the 19th percentile. That gap between strong
              demand fundamentals and low prevailing rents is the core of our
              investment thesis.
            </p>
          </div>
        </Container>
      </section>

      {/* Columbus */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-charcoal mb-6">
                Why Columbus
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Columbus is the fastest growing major metro in the Midwest and
                one of the most economically diversified mid-size cities in the
                country. As the state capital and home to Ohio State
                University — one of the largest universities in the nation — the
                city benefits from a stable base of government and education
                employment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The private sector is equally strong. Six Fortune 500 companies
                are headquartered in the metro, and JPMorgan Chase operates a
                campus with more than 20,000 employees. Columbus is also
                emerging as a technology hub, anchored by Intel&apos;s $20 billion
                semiconductor fabrication facility — one of the largest private
                investments in U.S. history.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Despite these growth drivers, Columbus housing remains
                affordable. That combination — a growing, diversified economy
                with below-market rents — creates a durable opportunity for
                well-executed multifamily investment.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 space-y-6">
                <h3 className="text-lg font-semibold text-charcoal">
                  Columbus at a Glance
                </h3>
                {[
                  {
                    value: "65th %ile",
                    label: "20-year population growth (among 1–5M MSAs)",
                  },
                  {
                    value: "$1.19/SF",
                    label: "Average rent (19th percentile)",
                  },
                  {
                    value: "6",
                    label: "Fortune 500 headquarters",
                  },
                  {
                    value: "20,000+",
                    label: "JPMorgan Chase employees",
                  },
                  {
                    value: "$20B",
                    label: "Intel semiconductor fab investment",
                  },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-bold text-teal">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Property Selection */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-charcoal mb-6">
              Property Selection
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We rely on deep local market expertise and submarket knowledge to
              source deals before they reach a broad market. Our focus is on
              buildings with untapped potential — properties where rents are
              meaningfully below market due to deferred maintenance, poor
              management, or both.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              For every potential acquisition, we conduct a thorough analysis of
              the root causes of underperformance. Some buildings need physical
              investment — updated units, improved common areas, better curb
              appeal. Others suffer from management problems: high vacancy,
              below-market lease terms, or poorly controlled operating expenses.
              Many need both.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We assess the complexity, timeline, and cost of each improvement
              plan and underwrite every deal based on achieving market-rate
              rents — not above-market projections. This conservative approach
              provides a margin of safety and aligns our underwriting with
              achievable outcomes.
            </p>
          </div>
        </Container>
      </section>

      {/* Operations */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-bold text-charcoal mb-6">
              Operations
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hamilton manages all of its properties in-house through a
              wholly-owned property management subsidiary. We believe
              self-management is a competitive advantage: it gives us direct
              control over operations, faster response times, and better
              accountability than third-party managers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our on-site teams include property managers, maintenance
              technicians, and leasing staff — all Hamilton employees. We
              supplement them with a hybrid staffing model that uses offshore
              employees for recurring administrative tasks like work order
              processing and data entry. This approach keeps overhead low without
              compromising the quality of on-site service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We invest heavily in technology to run our operations efficiently.
              Our stack spans property management, business intelligence, help
              desk, market analytics, staffing, and internal knowledge
              management.
            </p>
          </div>

          {/* Tech logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200">
            {techLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Tax Efficiency */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-charcoal mb-6">
              Tax Efficiency
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We structure our investments to maximize after-tax returns.
              Hamilton uses cost segregation studies to accelerate depreciation
              deductions, providing investors with meaningful tax benefits in the
              early years of ownership.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We favor long holding periods, which reduce the cumulative burden
              of income and property taxes over the life of an investment. For
              investors with proceeds exceeding $1 million, we offer 1031
              exchange options that allow tax-deferred reinvestment into
              subsequent deals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              These strategies compound over time, meaningfully increasing the
              net returns our investors take home relative to a standard,
              tax-unaware approach.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
