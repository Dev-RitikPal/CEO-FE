import React from 'react';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-[#0F766E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Products = () => {
  return (
    <section className="bg-[#ECFDF5] py-20 px-6 font-inter" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[32px] md:text-6xl font-extrabold font-poppins text-[#31587c] mb-4">Products</h2>
        <p className="text-[#64748B] text-base md:text-lg max-w-xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className='flex flex-col pt-[50px] pb-[50px] gap-30'>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
            <div className="flex flex-col max-h-[100%] items-center text-center">
              <div className="bg-[#14B8A6] rounded-full w-[153px] h-[153px] flex items-center justify-center">
                <img
                  src="/productImg/products-01.png"
                  alt="Marketing Bot"
                  className="rounded-full w-[100%] h-[100%] object-contain"
                />
              </div>
              <h3 className="mt-4 text-2xl whitespace-nowrap font-semibold text-[#31587c]">Marketing Bot</h3>
            </div>

            <div className="text-left pt-[50px] px-[50px]">
              <h2 className="text-[24px] md:text-4xl font-bold text-[#31587c] mb-6 leading-snug">
                Easily automate your marketing campaigns, track leads and conversions, and optimize your ROI with powerful analytics and reporting.
              </h2>

              <div className="py-[30px]">
                <span className="block w-[100%] h-px bg-[#32597D23] mx-auto"></span>
              </div>

              <div className="grid md:grid-cols-2 gap-40">
                <div>
                  <h4 className="text-base md:text-2xl font-semibold text-[#31587c] mb-2">Track leads and conversions</h4>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    Proin porta lorem sed nulla ornare, ac volutpat enim interdum. Quisque maximus mauris ut urna porta viverra. Sed quis vestibulum eros. Vestibulum eget molestie arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eleifend a massa at mollis. Etiam a est sagittis, efficitur urna in, convallis nisi. Vestibulum nec leo ut dui commodo elementum. Duis nibh sapien, sollicitudin porttitor augue ac, volutpat vestibulum ipsum. Nulla ac interdum leo. Etiam ultrices rutrum tellus, et ornare felis aliquam in. Maecenas faucibus commodo ullamcorper. Phasellus nulla justo, dapibus gravida erat eu, congue euismod lectus.
                  </p>
                </div>
                <div>
                  <h4 className="text-base md:text-2xl font-semibold text-[#31587c] mb-2">Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-[#1ca6af] hover:text-[#f2a341] font-semibold"><CheckIcon />Intuitive task management system</li>
                    <li className="flex items-center text-[#1ca6af] hover:text-[#f2a341] font-semibold"><CheckIcon />Create and send targeted campaigns</li>
                    <li className="flex items-center text-[#1ca6af] hover:text-[#f2a341] font-semibold"><CheckIcon />Robust analytics features</li>
                  </ul>
                  <button className="mt-6 px-6 py-2 bg-[#F59E0B] text-white text-sm md:text-base font-semibold rounded-full shadow cursor-pointer hover:bg-[#1ca6af] transition">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="block w-[100%] h-px bg-[#32597D23] mx-auto"></span>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#14B8A6] rounded-full w-[153px] h-[153px] flex items-center justify-center">
                <img
                  src="/productImg/products-02.png"
                  alt="Marketing Bot"
                  className="rounded-full w-[100%] h-[100%] object-contain"
                />
              </div>
              <h3 className="mt-4 text-2xl whitespace-nowrap font-semibold text-[#31587c]">CRM Manager</h3>
            </div>

            <div className="text-left pt-[50px] px-[50px]">
              <h2 className="text-[24px] md:text-4xl font-bold text-[#31587c] mb-6 leading-snug">
                A powerful customer relationship management (CRM) tool that enables you to manage customer data, track interactions, and improve customer engagement and retention.
              </h2>

              <div className="py-[30px]">
                <span className="block w-[100%] h-px bg-[#32597D23] mx-auto"></span>
              </div>

              <div className="grid md:grid-cols-2 gap-40">
                <div>
                  <h4 className="text-base md:text-2xl font-semibold text-[#31587c] mb-2">Improve customer engagement</h4>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    Proin porta lorem sed nulla ornare, ac volutpat enim interdum. Quisque maximus mauris ut urna porta viverra. Sed quis vestibulum eros. Vestibulum eget molestie arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eleifend a massa at mollis. Etiam a est sagittis, efficitur urna in, convallis nisi. Vestibulum nec leo ut dui commodo elementum. Duis nibh sapien, sollicitudin porttitor augue ac, volutpat vestibulum ipsum. Nulla ac interdum leo. Etiam ultrices rutrum tellus, et ornare felis aliquam in. Maecenas faucibus commodo ullamcorper. Phasellus nulla justo, dapibus gravida erat eu, congue euismod lectus.
                  </p>
                </div>
                <div>
                  <h4 className="text-base md:text-2xl font-semibold text-[#31587c] mb-2">Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-[#1ca6af] hover:text-[#f2a341] font-semibold"><CheckIcon />Create and send targeted campaigns</li>
                    <li className="flex items-center text-[#1ca6af] hover:text-[#f2a341] font-semibold"><CheckIcon />Intuitive task management system</li>
                    <li className="flex items-center text-[#1ca6af] hover:text-[#f2a341] font-semibold"><CheckIcon />Robust analytics features</li>
                  </ul>
                  <button className="mt-6 px-6 py-2 bg-[#F59E0B] text-white text-sm md:text-base font-semibold rounded-full shadow cursor-pointer hover:bg-[#1ca6af] transition">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="block w-[100%] h-px bg-[#32597D23] mx-auto"></span>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#14B8A6] rounded-full w-[153px] h-[153px] flex items-center justify-center">
                <img
                  src="/productImg/products-03.png"
                  alt="Marketing Bot"
                  className="rounded-full w-[100%] h-[100%] object-contain"
                />
              </div>
              <h3 className="mt-4 text-2xl whitespace-nowrap font-semibold text-[#31587c]">The Cloud</h3>
            </div>

            <div className="text-left pt-[50px] px-[50px]">
              <h2 className="text-[24px] md:text-4xl font-bold text-[#31587c] mb-6 leading-snug">
                A cloud-based project management tool designed to help teams collaborate more efficiently and complete projects on time and within budget.
              </h2>

              <div className="py-[30px]">
                <span className="block w-[100%] h-px bg-[#32597D23] mx-auto"></span>
              </div>

              <div className="grid md:grid-cols-2 gap-40">
                <div>
                  <h4 className="text-base md:text-2xl font-semibold text-[#31587c] mb-2">Complete projects on time</h4>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    Proin porta lorem sed nulla ornare, ac volutpat enim interdum. Quisque maximus mauris ut urna porta viverra. Sed quis vestibulum eros. Vestibulum eget molestie arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eleifend a massa at mollis. Etiam a est sagittis, efficitur urna in, convallis nisi. Vestibulum nec leo ut dui commodo elementum. Duis nibh sapien, sollicitudin porttitor augue ac, volutpat vestibulum ipsum. Nulla ac interdum leo. Etiam ultrices rutrum tellus, et ornare felis aliquam in. Maecenas faucibus commodo ullamcorper. Phasellus nulla justo, dapibus gravida erat eu, congue euismod lectus.
                  </p>
                </div>
                <div>
                  <h4 className="text-base md:text-2xl font-semibold text-[#31587c] mb-2">Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-[#1ca6af] hover:text-[#f2a341] font-semibold"><CheckIcon />Robust analytics features</li>
                    <li className="flex items-center text-[#1ca6af] hover:text-[#f2a341] font-semibold"><CheckIcon />Create and send targeted campaigns</li>
                    <li className="flex items-center text-[#1ca6af] hover:text-[#f2a341] font-semibold"><CheckIcon />Intuitive task management system</li>
                  </ul>
                  <button className="mt-6 px-6 py-2 bg-[#F59E0B] text-white text-sm md:text-base font-semibold rounded-full shadow cursor-pointer hover:bg-[#1ca6af] transition">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="block w-[100%] h-px bg-[#32597D23] mx-auto"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;