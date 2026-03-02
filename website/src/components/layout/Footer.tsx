import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { NAV_LINKS, CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logos/logo-white.png"
              alt="Hamilton Real Estate Partners"
              width={200}
              height={44}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm mt-4">
              Multifamily real estate investor in Columbus, Ohio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={16} />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Hamilton Real Estate Partners. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
