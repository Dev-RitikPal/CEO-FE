// components/Footer.tsx
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import type { ReactElement } from "react";

interface FooterLinkGroup {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}

interface SocialLink {
  href: string;
  label: string;
  icon: ReactElement;
}

const footerLinks: FooterLinkGroup[] = [
  {
    title: "Menu",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/products", label: "Products" },
      { href: "/features", label: "Features" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/support", label: "Support" },
      { href: "/careers", label: "Careers" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <Facebook
        fontSize="medium"
        className="hover:text-teal-800 transition-colors"
      />
    ),
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: (
      <Twitter
        fontSize="medium"
        className="hover:text-teal-800 transition-colors"
      />
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <Instagram
        fontSize="medium"
        className="hover:text-teal-800 transition-colors"
      />
    ),
  },
];

const FooterSection = ({ title, links }: FooterLinkGroup) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-2 text-sm">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className="text-teal-600 hover:underline transition-colors"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Future<span className="text-blue-600">Flow</span>
            </h2>
            <p className="text-sm text-gray-500">TECHNOLOGIES</p>
          </div>

          {footerLinks.map((section) => (
            <FooterSection key={section.title} {...section} />
          ))}

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm text-teal-600 space-y-1">
              <p>56 Hendford Rd, Warwickshire, BH10 5AU</p>
              <a
                href="mailto:contact@info.com"
                className="hover:underline block"
              >
                contact@info.com
              </a>
              <a href="tel:01202511337" className="hover:underline block">
                01202 511337
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 SaaS App Company | Powered by SaaS App</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-teal-600">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
