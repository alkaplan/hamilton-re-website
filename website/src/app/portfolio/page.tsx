import { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Hamilton Real Estate Partners' portfolio of multifamily properties in the Columbus, Ohio metro area.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-charcoal py-12">
        <Container>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Our Portfolio
          </h1>
          <p className="mt-2 text-gray-300">
            Multifamily properties in the Columbus, Ohio metro area.
          </p>
        </Container>
      </section>

      {/* Properties */}
      <section className="py-20">
        <Container>
          <div className="space-y-12">
            {properties.map((property, idx) => (
              <div
                key={property.name}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? "md:[direction:rtl] md:[&>*]:direction-ltr" : ""
                }`}
              >
                {/* Image */}
                <div className="rounded-xl overflow-hidden">
                  {property.image ? (
                    <Image
                      src={property.image}
                      alt={property.name}
                      width={800}
                      height={500}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  ) : (
                    <div className="w-full h-64 md:h-80 bg-gradient-to-br from-teal/10 to-charcoal/5 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">
                        Photo coming soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div>
                  <h2 className="text-2xl font-bold text-charcoal">
                    {property.name}
                  </h2>

                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p className="flex items-start gap-2">
                      <MapPin
                        size={14}
                        className="shrink-0 mt-0.5 text-teal"
                      />
                      {property.address}
                    </p>
                    {property.phone && (
                      <p className="flex items-center gap-2">
                        <Phone size={14} className="text-teal" />
                        {property.phone}
                      </p>
                    )}
                  </div>

                  <p className="mt-4 text-gray-600">{property.units}</p>

                  {property.pricing && (
                    <p className="mt-1 font-semibold text-teal">
                      {property.pricing}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {property.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href={property.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                    >
                      Visit Website
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
