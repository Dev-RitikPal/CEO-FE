import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-sky-50 min-h-screen py-16 px-6 sm:px-12 lg:px-24">
      <section className="max-w-5xl mx-auto text-center">
        {/* Top Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-16">
          We are a leading SaaS App Company phasellus blandit enim dui, nec blandit justo pharetra non.
          Phasellus sed massa augue. Phasellus quis velit in sem ultrices condimentum. Quisque in laoreet
          turpis, ut varius nisl. Cras tempus turpis non tellus convallis, in condimentum ante elementum.
          Vivamus quis nibh eget diam dapibus vulputate vel sit amet est. Mauris egestas magna.
        </p>

        {/* Who We Are Section */}
        <div className="text-left max-w-4xl mx-auto mb-8">
          <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2">Who we are</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 leading-snug">
            We are a leading SaaS App Company, dedicated to providing innovative, reliable, and
            easy-to-use software solutions for businesses of all sizes.
          </h3>
        </div>

        {/* Image Below Text */}
        <div className="w-full max-w-4xl mx-auto mt-8">
          <Image
            src={""}
            alt="Team working with sticky notes"
            className="rounded-xl shadow-lg w-full h-auto"
            priority
          />
        </div>
      </section>
    </main>
  );
}
