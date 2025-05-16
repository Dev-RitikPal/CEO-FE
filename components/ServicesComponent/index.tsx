import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-[#0F766E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const ServicesComponet = () => {
    return (
        <section className="bg-[#ECFDF5] py-20 px-6 font-inter" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-[32px] md:text-6xl font-extrabold font-poppins text-[#31587c] mb-4">Services</h2>
                <p className="text-[#64748B] text-base md:text-lg max-w-xl mx-auto mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className='flex flex-col gap-12 pt-[50px] px-[20px]'>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-[#14B8A6] rounded-full w-[74px] h-[74px] flex items-center justify-center">
                            <img
                                src="/productImg/products-01.png"
                                alt="Marketing Bot"
                                className="rounded-full w-[100%] h-[100%] object-contain"
                            />
                        </div>
                        <h3 className="mt-4 text-2xl whitespace-nowrap font-semibold text-[#31587c]">Marketing Bot</h3>
                    </div>

                    <h2 className="text-[24px] md:text-5xl text-left font-bold text-[#31587c] mb-6 leading-snug">
                        Easily automate your marketing campaigns, track leads and conversions, and optimize your ROI with powerful analytics and reporting.
                    </h2>

                    <div className='pt-[25px] pb-[25px]'>
                        <span className="block w-[100%] h-px bg-[#32597D23] mx-auto"></span>
                    </div>

                    <div className="h-auto flex flex-col md:flex-row justify-between gap-y-10 md:gap-x-10 pt-[25px] pb-[25px]">
                        <div className="content-center text-left w-full md:w-[42%]">
                            <h3 className="text-sm md:text-base font-bold text-[#F59E0B] mb-2 uppercase">
                                Targeted Campaigns
                            </h3>
                            <h4 className="text-xl md:text-4xl font-semibold text-[#31587c] mb-2">
                                Track leads, conversions, and optimize your ROI ut et nunc laoreet, porttitor nibh vel, iaculis
                            </h4>
                        </div>
                        <div className="w-full md:w-[500px] h-auto">
                            <img
                                src="/featuresImg/features-01.png"
                                alt="Marketing Bot"
                                className="w-full h-auto max-w-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="h-auto flex flex-col-reverse md:flex-row justify-between gap-6 pt-[25px] pb-[25px]">
                        <div className="w-full md:w-[500px] h-auto">
                            <img
                                src="/featuresImg/features-02.png"
                                alt="Marketing Bot"
                                className="h-[100%] object-contain"
                            />
                        </div>
                        <div className='content-center text-left w-full md:w-[42%]'>
                            <h3 className="text-sm md:text-base font-bold text-[#F59E0B] mb-2 uppercase">Robust analytics featuresS</h3>
                            <h4 className="text-xl md:text-4xl font-semibold text-[#31587c] mb-2">Easily automate your marketing campaigns, aliquam erat volutpat aliquam semper</h4>
                        </div>
                    </div>

                    <div className='pt-[25px] pb-[25px]'>
                        <span className="block w-[100%] h-px bg-[#32597D23] mx-auto"></span>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="bg-[#14B8A6] rounded-full w-[74px] h-[74px] flex items-center justify-center">
                            <img
                                src="/productImg/products-02.png"
                                alt="Marketing Bot"
                                className="rounded-full w-[100%] h-[100%] object-contain"
                            />
                        </div>
                        <h3 className="mt-4 text-2xl whitespace-nowrap font-semibold text-[#31587c]">CRM Manager</h3>
                    </div>

                    <h2 className="text-[24px] text-left md:text-5xl font-bold text-[#31587c] mb-6 leading-snug">
                        Powerful customer relationship management (CRM) tool that enables you to manage customer data and track interactions
                    </h2>

                    <div className='pt-[25px] pb-[25px]'>
                        <span className="block w-[100%] h-px bg-[#32597D23] mx-auto"></span>
                    </div>

                    <div className="h-auto flex flex-col md:flex-row justify-between gap-6 pt-[25px] pb-[25px]">
                        <div className='content-center text-left w-full md:w-[42%]'>
                            <h3 className="text-sm md:text-base font-bold text-[#F59E0B] mb-2 uppercase">Track Interactions</h3>
                            <h4 className="text-xl md:text-4xl font-semibold text-[#31587c] mb-2">Manage customer data quisque maximus ut urna porta viverra sed quis eros</h4>
                        </div>
                        <div className="w-full md:w-[500px] h-auto">
                            <img
                                src="/featuresImg/features-03.png"
                                alt="Marketing Bot"
                                className=" w-[100%] h-[100%] object-contain"
                            />
                        </div>
                    </div>

                    <div className="h-auto flex flex-col-reverse md:flex-row justify-between gap-6 pt-[25px] pb-[25px]">
                        <div className="w-full md:w-[500px] h-auto">
                            <img
                                src="/featuresImg/features-04.png"
                                alt="Marketing Bot"
                                className="h-[100%] object-contain"
                            />
                        </div>
                        <div className='content-center text-left w-full md:w-[42%]'>
                            <h3 className="text-sm md:text-base font-bold text-[#F59E0B] mb-2 uppercase">Targeted campaigns</h3>
                            <h4 className="text-xl md:text-4xl font-semibold text-[#31587c] mb-2">
                                Powerful CRM tool that enables you to duis nibh sapien, porttitor volutpat ipsum nulla ac
                            </h4>
                        </div>
                    </div>

                    <div className='pt-[25px] pb-[25px]'>
                        <span className="block w-[100%] h-px bg-[#32597D23] mx-auto"></span>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="bg-[#14B8A6] rounded-full w-[74px] h-[74px] flex items-center justify-center">
                            <img
                                src="/productImg/products-03.png"
                                alt="Marketing Bot"
                                className="rounded-full w-[100%] h-[100%] object-contain"
                            />
                        </div>
                        <h3 className="mt-4 text-2xl whitespace-nowrap font-semibold text-[#31587c]">The Cloud</h3>
                    </div>

                    <h2 className="text-[24px] text-left md:text-5xl font-bold text-[#31587c] mb-6 leading-snug">
                        A cloud-based management tool designed to help teams collaborate efficiently and complete projects on time
                    </h2>

                    <div className='pt-[25px] pb-[25px]'>
                        <span className="block w-[100%] h-px bg-[#32597D23] mx-auto"></span>
                    </div>

                    <div className="h-auto flex flex-col md:flex-row justify-between gap-6 pt-[25px] pb-[25px]">
                        <div className='content-center text-left w-full md:w-[42%]'>
                            <h3 className="text-sm md:text-base font-bold text-[#F59E0B] mb-2 uppercase">Set deadlines</h3>
                            <h4 className="text-xl md:text-4xl font-semibold text-[#31587c] mb-2">Intuitive task management system that makes it easy to assign tasks</h4>
                        </div>
                        <div className="w-full md:w-[500px] h-auto">
                            <img
                                src="/featuresImg/features-02.png"
                                alt="Marketing Bot"
                                className=" w-[100%] h-[100%] object-contain"
                            />
                        </div>
                    </div>
                    <div className="h-auto flex flex-col-reverse md:flex-row justify-between gap-6 pt-[25px] pb-[25px]">
                        <div className="w-full md:w-[500px] h-auto">
                            <img
                                src="/featuresImg/features-01.png"
                                alt="Marketing Bot"
                                className="h-[100%] object-contain"
                            />
                        </div>
                        <div className='content-center text-left w-full md:w-[42%]'>
                            <h3 className="text-sm md:text-base font-bold text-[#F59E0B] mb-2 uppercase">Track progress</h3>
                            <h4 className="text-xl md:text-4xl font-semibold text-[#31587c] mb-2">Robust reporting and analytics features that provide valuable insights</h4>
                        </div>
                    </div>

                    <div className='pt-[25px] pb-[25px]'>
                        <span className="block w-[100%] h-px bg-[#32597D23] mx-auto"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesComponet;