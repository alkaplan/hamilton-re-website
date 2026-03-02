import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { principals, leadership, institutionLogos } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Hamilton Real Estate Partners team — experienced professionals in finance, technology, and property management.",
};

export default function TeamPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-charcoal py-12">
        <Container>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Our Team
          </h1>
        </Container>
      </section>

      {/* Principals */}
      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-bold text-charcoal mb-12">
            Investment Principals
          </h2>
          <div className="space-y-16">
            {principals.map((member, idx) => (
              <div
                key={member.name}
                className={`grid md:grid-cols-3 gap-10 items-start ${
                  idx % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                {member.image && (
                  <div className="md:col-span-1">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full max-w-xs rounded-xl object-contain"
                    />
                  </div>
                )}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-teal font-medium mt-1 mb-4">
                    {member.title}
                  </p>
                  <div className="space-y-3">
                    {member.bio.map((line, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                  {member.education && (
                    <p className="mt-4 text-sm text-gray-500">
                      <span className="font-medium">Education:</span>{" "}
                      {member.education}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Institution logos */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {institutionLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-bold text-charcoal mb-12">
            Leadership Team
          </h2>
          <div className="space-y-12">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="border-b border-gray-100 pb-12 last:border-0 last:pb-0"
              >
                <h3 className="text-xl font-bold text-charcoal">
                  {member.name}
                </h3>
                <p className="text-teal font-medium mt-1 mb-4">
                  {member.title}
                </p>
                <div className="space-y-2 max-w-3xl">
                  {member.bio.map((line, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
                {member.education && (
                  <p className="mt-3 text-sm text-gray-500">
                    <span className="font-medium">Education:</span>{" "}
                    {member.education}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
