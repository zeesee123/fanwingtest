import React, { useRef, useEffect, useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import banner from '../../assets/home/banner.webp'
import slider1 from '../../assets/home/slider1.webp'
import slider2 from '../../assets/home/slider2.webp'
import slider3 from '../../assets/home/slider3.webp'
import slider4 from '../../assets/home/slider4.webp'
import slider5 from '../../assets/home/slider5.webp'
import slider6 from '../../assets/home/slider6.webp'
import bgslider from '../../assets/home/bg-slider.webp'




export const Banner = () => {
    const heroData = {
        hero: {
            heading: ["Driven by Heart Inspired By Art"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sed nisl, varius facilisis.",
            buttonText: "Know More",
        },
        about: {
            tag: "About Fanwings",
            title:
                "Fanwings Airengineers Pvt. Ltd. is a high-tech enterprise located in Tapukara, Rajasthan.",
            description:
                "The company is based on advanced production equipment and technology, focusing on the research and development, production, and sales of AC/EC high-efficiency energy-saving external rotor fans.The company specializes in producing a series of products such as axial flow fans, forward tilt single/double inlet centrifugal fans....",
            readMore: "Read More",
        },
    };

    const { hero, about } = heroData;
    return (
        <>
            <div>
                <section
                    className=" relative text-white bg-no-repeat bg-cover bg-bottom py-24 pt-14 md:pt-20 md:py-20"
                    style={{ backgroundImage: `url(${banner})` }}
                >
                    <div className="max-w-7xl mx-auto px-6 md:py-10 md:pb-28 grid md:grid-cols-5 items-center z-10 relative">
                        <div className='col-span-1 md:col-span-2'>
                            <h1 className="text-4xl md:text-5xl font-medium leading-snug mb-6">
                                {hero.heading.map((line, i) => (
                                    <div key={i}>{line}</div>
                                ))}
                            </h1>
                            <p className="mb-10 text-base font-light text-white opacity-80 md:text-lg">{hero.description}</p>
                            <button className="bg-[#1FA54D] hover:bg-white text-white py-3 md:py-4 px-6 md:px-10 rounded-full flex items-center gap-4 hover:text-[#1FA54D]">
                                {hero.buttonText}
                                <BsArrowRightCircle className='text-xl' />

                            </button>
                        </div>

                    </div>

                    {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                        <svg
                            className="relative block w-[calc(100%+1.3px)] h-[100px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39 56.36C213.18 96.71 109.74 111.75 0 103.33V0h1200v103.33c-110.71 8.42-221.39-9.71-331.15-31.94C747.74 49.86 642.08 19.99 531.45 25.73c-109.42 5.67-218.39 50.89-321.39 30.63z"
                                fill="#fff"
                            ></path>
                        </svg>
                    </div> */}
                </section>

                <section className="bg-white py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-center">
                    <div className='md:col-span-5'>
                        <p className="text-[#E2000F] tracking-wide mb-2">{about.tag}</p>
                        <h2 className="text-2xl md:text-3xl text-[#052B98] font-medium leading-9 md:leading-11  mb-6">
                            {about.title}
                        </h2>
                        <div className="w-full h-[2px] bg-[#1FA54D] relative">
                            <span className="absolute -bottom-[6px] right-0 h-3 w-3 rounded-full bg-[#1FA54D]"></span>
                        </div>
                    </div>
                    <div className='md:col-span-7 '>
                        <p className="text-black opacity-80 text-base md:text-[17px] font-light mb-8">{about.description}</p>
                        <button className="text-[#1FA54D] font-medium flex items-center gap-4 hover:underline">
                            {about.readMore}
                            <BsArrowRightCircleFill className="text-lg" />
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}





export const Slider = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.on("slideChange", () => {
                setIsBeginning(swiperInstance.isBeginning);
                setIsEnd(swiperInstance.isEnd);
            });
        }
    }, [swiperInstance]);
    const sliderData = [
        {
            title: "Refrigeration & Air-Conditioning",
            subtitle: "Industry And Applications",
            description:
                "Refrigeration technology is widely used in cooling towers, with fans playing a fundamental role. In the cooling tower, timely discharge of vaporized cooling medium is crucial for reducing the temperature inside...",
            image: slider1,
            btnText: "Know More",
        },
        {
            title: "Data Center",
            subtitle: "Industry And Applications",
            description:
                "Fans play an important role in data centers, mainly used for heat dissipation, air circulation, and energy conservation. As one of the basic components in the data center cooling system, fans generate airflow, transfer the heat...   ",
            image: slider2,
            btnText: "Know More",
        },
        {
            title: "Energy & Environment   ",
            subtitle: "Industry And Applications",
            description:
                "Energy and the environment are one of the most important global issues related to human survival and development. In this context, the energy and environmental industries bear an important mission of safeguarding the...",
            image: slider3,
            btnText: "Know More",
        },
        {
            title: "Fan Renovation",
            subtitle: "Industry And Applications",
            description:
                "In the fields of refrigeration, air  conditioning, and building services, AC asynchronous motors are commonly used to drive fans. However, the  efficiency of this method is relatively low, leading to an increase in energy...  ",
            image: slider4,
            btnText: "Know More",
        },
        {
            title: "Ventilation & Purification",
            subtitle: "Industry And Applications",
            description:
                "Mingzhen Electronics provides   comprehensive solutions for building air conditioning and ventilation equipment, helping to solve problems in building ventilation design. In building ventilation  design, selecting the appropriate fan is...",
            image: slider5,
            btnText: "Know More",
        },
        {
            title: "Medical purification",
            subtitle: "Industry And Applications",
            description:
                "In medical facilities, bacteria, viruses, and harmful substances in the air may pose a threat to the health of patients, so maintaining the cleanliness and purity of the air is crucial. The fan can remove  pollutants such as bacteria, viruses, and...",
            image: slider6,
            btnText: "Know More",
        },

    ];
    return (
        <>

            <section className="relative ">
                <div className="absolute h-[75%] top-[52%] -translate-y-2/4 left-0 w-full bg-no-repeat bg-cover " style={{ backgroundImage: `url(${bgslider})` }}></div>
                <div className="max-w-7xl mx-auto px-6">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        pagination={{
                            el: ".custom-pagination4",
                            clickable: true,
                        }}
                    >
                        {sliderData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col md:flex-row items-center text-white  relative">
                                    <div className="py-12 pb-40 md:py-24  w-full md:w-1/2 order-2 md:order-1">
                                        <h4 className="text-sm mb-4 -mt-8 md:mt-0">{item.subtitle}</h4>
                                        <h2 className="text-2xl md:text-3xl mb-4">{item.title}</h2>
                                        <p className="mb-6 md:mb-10 text-sm font-light md:text-base">{item.description}</p>
                                        <button className="bg-[#1FA54D] hover:bg-white text-white py-3 md:py-4 px-6 md:px-10 rounded-full flex items-center gap-4 hover:text-[#1FA54D]">
                                            {item.btnText}
                                            <BsArrowRightCircle className='text-xl' />

                                        </button>

                                    </div>
                                    <div className="w-full md:w-1/2 p-8 order-1 md:order-2">
                                        <div className="overflow-hidden">
                                            <img src={item.image} alt={item.title} className="w-full object-cover rounded-xl" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Custom Arrows */}
                        <div className="flex justify-between items-center   style2_slider z-10">
                            <div className="flex items-center middle_arrow gap-10 lg:gap-14">
                                <button
                                    className={`swiper-button-prev   order-1 rounded-full   !text-white  px-4 py-2 ${isBeginning ? "opacity-100 cursor-not-allowed" : ""
                                        }`}
                                    disabled={isBeginning}
                                >

                                </button>
                                <button
                                    className={`swiper-button-next   order-3 rounded-full !text-white      px-4 py-2 ${isEnd ? "opacity-100 cursor-not-allowed" : ""
                                        }`}
                                    disabled={isEnd}
                                >

                                </button>
                                <div className="order-2">
                                <div className="custom-pagination4 white-pagination flex justify-start mb-3 space-x-2"></div>
                            </div>
                            </div>

                        </div>

                        {/* <div className=" bottom-10 left-10 z-50 flex gap-4">
                        <button ref={prevRef} className="text-white bg-[#2ecc71] p-3 rounded-full">
                            <FaArrowLeft />
                        </button>
                        <button ref={nextRef} className="text-white bg-[#2ecc71] p-3 rounded-full">
                            <FaArrowRight />
                        </button>
                    </div> */}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

