// // components/Footer.tsx
// import Link from "next/link";
// import { Facebook, Twitter, Instagram } from "@mui/icons-material";

// export default function Footer() {
//   return (
//     <footer className="bg-white text-gray-700 py-12 border-t">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Logo */}
//           <div>
//             <h2 className="text-xl font-semibold text-gray-900 mb-2">
//               Future<span className="text-blue-600">Flow</span>
//             </h2>
//             <p className="text-sm text-gray-500">TECHNOLOGIES</p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Menu</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="/" className="text-teal-600 hover:underline">Home</Link></li>
//               <li><Link href="/about" className="text-teal-600 hover:underline">About Us</Link></li>
//               <li><Link href="/products" className="text-teal-600 hover:underline">Products</Link></li>
//               <li><Link href="/features" className="text-teal-600 hover:underline">Features</Link></li>
//               <li><Link href="/contact" className="text-teal-600 hover:underline">Contact</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="/blog" className="text-teal-600 hover:underline">Blog</Link></li>
//               <li><Link href="/support" className="text-teal-600 hover:underline">Support</Link></li>
//               <li><Link href="/careers" className="text-teal-600 hover:underline">Careers</Link></li>
//               <li><Link href="/privacy-policy" className="text-teal-600 hover:underline">Privacy Policy</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
//             <p className="text-sm text-teal-600">
//               56 Hendford Rd, Warwickshire, BH10 5AU<br />
//               <a href="mailto:contact@info.com" className="hover:underline">contact@info.com</a><br />
//               <a href="tel:01202511337" className="hover:underline">01202 511337</a>
//             </p>
//           </div>
//         </div>

//         <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
//           <p>&copy; 2025 SaaS App Company | Powered by SaaS App</p>
//           <div className="flex space-x-4 mt-4 md:mt-0 text-teal-600">
//             <Link href="#"><Facebook className="hover:text-teal-800 cursor-pointer" /></Link>
//             <Link href="#"><Twitter className="hover:text-teal-800 cursor-pointer" /></Link>
//             <Link href="#"><Instagram className="hover:text-teal-800 cursor-pointer" /></Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


// components/Footer.tsx
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const footerLinks = [
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

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Future<span className="text-blue-600">Flow</span>
            </h2>
            <p className="text-sm text-gray-500">TECHNOLOGIES</p>
          </div>

          {/* Mapped Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-teal-600 hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-sm text-teal-600">
              56 Hendford Rd, Warwickshire, BH10 5AU<br />
              <a href="mailto:contact@info.com" className="hover:underline">contact@info.com</a><br />
              <a href="tel:01202511337" className="hover:underline">01202 511337</a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 SaaS App Company | Powered by SaaS App</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-teal-600">
            <Link href="#"><Facebook className="hover:text-teal-800 cursor-pointer" /></Link>
            <Link href="#"><Twitter className="hover:text-teal-800 cursor-pointer" /></Link>
            <Link href="#"><Instagram className="hover:text-teal-800 cursor-pointer" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
