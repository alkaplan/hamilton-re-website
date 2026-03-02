import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title:
    "Hamilton Real Estate Partners | Multifamily Real Estate in Columbus, Ohio",
  description:
    "Multi-disciplinary, focused, and hands-on multifamily real estate investor in Columbus, Ohio.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-charcoal via-charcoal/95 to-teal/30">
        <div className="absolute inset-0 bg-[url('/images/hero/skyline.jpg')] bg-cover bg-center opacity-20" />
        <Container className="relative z-10 text-center py-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Real Estate Private Equity.
            <br />
            <span className="text-teal/80">Disciplined Strategy.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Hamilton Real Estate Partners is a vertically integrated multifamily
            investor targeting underperforming properties in the Columbus, Ohio
            market. We combine institutional discipline with hands-on ownership
            to drive value for our investors.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/approach">Our Approach</Button>
            <Button
              href="/portfolio"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-charcoal"
            >
              View Portfolio
            </Button>
          </div>
        </Container>
      </section>

      {/* Three pillars */}
      <section className="py-24">
        <Container>
          <h2 className="text-3xl font-bold text-charcoal sm:text-4xl text-center mb-6">
            Why Hamilton
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            We bring together expertise in finance, technology, and consulting to
            approach real estate investing differently than traditional operators.
          </p>

          <div className="space-y-20">
            {/* Multi-disciplinary */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Multi-disciplinary
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our team brings together backgrounds in structured finance,
                  enterprise technology, and management consulting — an unusual
                  combination in multifamily real estate. This cross-functional
                  expertise allows us to evaluate deals with the rigor of
                  institutional investors while operating properties with the
                  efficiency of a technology company.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our principals have held senior roles at Credit Suisse First
                  Boston, RBS Greenwich Capital, Microsoft, McKinsey, and
                  Innovatus Capital Partners, bringing institutional best
                  practices to a local real estate operation.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="flex flex-wrap justify-center items-center gap-6">
                  {[
                    { name: "Yale", src: "/images/institutions/yale.jpg" },
                    { name: "Harvard", src: "/images/institutions/harvard.jpg" },
                    {
                      name: "Microsoft",
                      src: "/images/institutions/microsoft.png",
                    },
                    {
                      name: "McKinsey",
                      src: "/images/institutions/mckinsey.jpg",
                    },
                    { name: "CSFB", src: "/images/institutions/csfb.jpg" },
                    {
                      name: "Greenwich Capital",
                      src: "/images/institutions/greenwich.png",
                    },
                  ].map((logo) => (
                    <Image
                      key={logo.name}
                      src={logo.src}
                      alt={logo.name}
                      width={100}
                      height={50}
                      className="h-10 w-auto object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Focused */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Focused
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We invest exclusively in multifamily properties in the
                  Columbus, Ohio metropolitan area. Columbus is the fastest
                  growing major metro in the Midwest, with a diverse economy
                  anchored by Ohio State University, a state capital, six Fortune
                  500 headquarters, and Chase&apos;s 20,000-employee campus.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Despite strong fundamentals, Columbus rents remain in the 19th
                  percentile among comparable metros — creating a compelling
                  opportunity to acquire underperforming assets and bring them to
                  market rate through targeted improvements.
                </p>
              </div>
              <div className="md:order-1 bg-teal/5 rounded-xl p-8 border border-teal/10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "65th %ile", label: "Population Growth" },
                    { value: "19th %ile", label: "Rent per SF" },
                    { value: "6", label: "Fortune 500 HQs" },
                    { value: "$20B", label: "Intel Fab Investment" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-bold text-teal">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hands-on */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Hands-on Management
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Unlike most private equity sponsors, we do not outsource
                  property management. Hamilton owns and operates a dedicated
                  property management subsidiary that provides intensive
                  day-to-day oversight of every asset in the portfolio.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our on-site teams — property managers, maintenance technicians,
                  and leasing staff — are Hamilton employees. This vertical
                  integration gives us direct control over the resident
                  experience, operating costs, and the pace of property
                  improvements. We supplement our on-site teams with offshore
                  staff handling recurring administrative tasks, keeping overhead
                  low without sacrificing quality.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="flex flex-wrap justify-center items-center gap-6">
                  {[
                    { name: "AppFolio", src: "/images/tech/appfolio.jpg" },
                    { name: "Power BI", src: "/images/tech/power-bi.jpg" },
                    { name: "CoStar", src: "/images/tech/costar.jpg" },
                    { name: "Freshdesk", src: "/images/tech/freshdesk.jpg" },
                  ].map((logo) => (
                    <Image
                      key={logo.name}
                      src={logo.src}
                      alt={logo.name}
                      width={100}
                      height={50}
                      className="h-10 w-auto object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            See Our Work
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our portfolio of multifamily properties across the Columbus
            metro, or learn more about our investment strategy.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-teal hover:text-teal/80 font-semibold transition-colors"
            >
              View Portfolio <ArrowRight size={18} />
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-teal hover:text-teal/80 font-semibold transition-colors"
            >
              Meet the Team <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
