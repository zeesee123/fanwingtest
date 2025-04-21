'use client';
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";

import productimg1 from '../../assets/home/product1.png'
import productimg2 from '../../assets/home/product2.png'
import productimg3 from '../../assets/home/product3.png'
import productimg4 from '../../assets/home/product4.png'


import image1 from '../../assets/home/image1.webp'
import icon from '../../assets/home/Fanwings_icon.svg'
import bgcontact from '../../assets/home/bg-product.webp'






export const Feature = () => {

    const products = [
        {
            title: "Compact Fan",
            images: productimg1,
            specs: [
                "Compact Fans - AC/ DC / EC",
                "Voltage: 12,24,48,115,230,415 V",
                "Size: 20x20 mm to 280x280 mm",
                "Application: UPS, Inverters, Electric Vehicles & Chargers",
            ],
        },
        {
            title: "Shaded Pole Motor",
            images: productimg2,
            specs: [
                "Shaded Pole Motors - Q Type, C Frame",
                "Elevator Cabin fans",
                "EC Motors",
                "Voltage: 115, 230V",
                "Range: 5W to 34W",
                "Application: Water coolers, Visi coolers, Elevators",
            ],
        },
        {
            title: "Axial Fan",
            images: productimg3,
            specs: [
                "Large Axial Fans – Suction/Blow",
                "Voltage: 115,230,415VAC",
                "Size: 200 to 910 mm",
                "Application: Commercial refrigeration, Chiller , Cold Room",
            ],
        },
        {
            title: "Centrifugal Fan",
            images: productimg4,
            specs: [
                "EC Centrifugal Fans",
                "Voltage: 230,400 VAC",
                "Size: 133 to 630 mm",
                "Application: Data center, AHU, FFU",
                "Centrifugal Blowers – Single/ Dual Inlet",
                "Voltage: 230,415 V",
                "Size: 120 mm to 225mm",
                "Application: Plastic extrusion, Inverters",
            ],
        },
        {
            title: "Centrifugal Fan",
            images: productimg1,
            specs: [
                "EC Centrifugal Fans",
                "Voltage: 230,400 VAC",
                "Size: 133 to 630 mm",
                "Application: Data center, AHU, FFU",
                "Centrifugal Blowers – Single/ Dual Inlet",
                "Voltage: 230,415 V",
                "Size: 120 mm to 225mm",
                "Application: Plastic extrusion, Inverters",
            ],
        },
    ];



    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <>

            <div className="py-0 -mt-8 md:mt-0 md:py-10 max-w-7xl mx-auto px-6">
                <div className="flex justify-end md:justify-between flex-wrap items-center mb-6">
                    <div>
                        <p className="text-[#E2000F] tracking-wide mb-2">Featured Products</p>
                        <h2 className="text-2xl md:text-3xl text-black font-medium leading-relaxed mb-6">
                            Lorem Ipsum Is Simply Dummy Text Of The <br />
                            Printing And Typesetting Industry.
                        </h2>
                    </div>
                    <div className="flex gap-3 justify-end">
                        <button
                            ref={prevRef}
                            className={`p-2 rounded-full ${isBeginning ? "bg-[#1FA54D] opacity-50" : "bg-[#1FA54D]"
                                } text-white`}
                            disabled={isBeginning}
                        >
                            <GoChevronLeft className="text-xl" />
                        </button>
                        <button
                            ref={nextRef}
                            className={`p-2 rounded-full ${isEnd ? "bg-[#1FA54D] opacity-50" : "bg-[#1FA54D]"
                                } text-white`}
                            disabled={isEnd}
                        >
                            <GoChevronRight className="text-xl" />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={handleSlideChange}

                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                >
                    {products.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="   h-full flex flex-col">
                                <div className="flex border-2 border-[#1D40A2] rounded-3xl p-4 py-8 mb-8 justify-center items-center gap-2  h-full">

                                    <img src={item.images} alt={item.title} className="h-[160px] object-contain" />

                                </div>
                                <h3 className="text-[22px] text-black font-medium mb-2">{item.title}</h3>
                                <ul className="text-sm md:text-[15px]  space-y-1 mb-4">
                                    {item.specs.map((spec, i) => (
                                        <li key={i} className="flex items-start font-light mb-2 gap-2">
                                            <span className="text-[#052B98] mt-1"><IoMdSettings /></span> {spec}
                                        </li>
                                    ))}
                                </ul>
                                <button className="text-[#1FA54D] font-medium flex items-center gap-4 hover:underline">
                                    Know More <IoArrowForwardCircleSharp className="text-2xl" />
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    )
}



export const Product = () => {
    const productData = [
        {
            title: 'AC/EC Axial flow fan',
            description:
                'Axial flow fans are characterized by small installation depth, low noise, high efficiency, and are particularly suitable for air flow in heat exchangers. Sanmu\'s EC technology will change...',
            img: image1,
            buttons: ['External Rotor', 'AC', 'DC'],
        },
        {
            title: 'Shaded Pole Motor',
            description:
                'Shaded pole motors are ideal for low-torque applications. Known for simplicity and reliability in fans and blowers.',
            img: image1,
            buttons: ['C Frame', '230V'],
        },
    ];
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };
    return (
        <>

            <div className="relative text-white  bg-no-repeat bg-cover pb-8 mt-6 overflow-hidden" style={{ backgroundImage: `url(${bgcontact})` }}>
                <div className="grid grid-cols-1   items-center gap-8 max-w-7xl mx-auto px-6">
                    {/* Arrow buttons before image */}
                    <div className="relative">
                        <div className="absolute top-10 left-[75%] md:left-2/4 flex gap-3 z-10">
                            <button
                                ref={prevRef}
                                className={`p-2 rounded-full ${isBeginning ? "bg-[#1FA54D] opacity-50" : "bg-[#1FA54D]"
                                    } text-white`}
                                disabled={isBeginning}
                            >
                                <GoChevronLeft className="text-xl" />
                            </button>
                            <button
                                ref={nextRef}
                                className={`p-2 rounded-full ${isEnd ? "bg-[#1FA54D] opacity-50" : "bg-[#1FA54D]"
                                    } text-white`}
                                disabled={isEnd}
                            >
                                <GoChevronRight className="text-xl" />
                            </button>
                        </div>
                    </div>


                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onSwiper={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        onSlideChange={handleSlideChange}

                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}

                        className="w-full"
                    >
                        {productData.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 mt-18 md:mt-0">
                                    {/* Text Content */}
                                    <div className="lg:col-span-7 space-y-4 order-2 lg:order-1 md:w-[88%]">
                                        <div className="flex items-center gap-5 mb-6 font-light">
                                            <span className="text-2xl "><img src={icon} height={35} width={35} /></span>
                                            <span>Product Series</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-normal py-2">{item.title}</h2>
                                        <p className="text-white/90 font-light">{item.description}</p>
                                        <div className="flex flex-wrap gap-4 pt-6">
                                            {item.buttons.map((btn, i) => (
                                                <button
                                                    key={i}
                                                    className={`px-4 py-2 font-normal text-sm flex items-center gap-0 ${i === 0
                                                        ? 'bg-white px-8 text-black'
                                                        : 'text-white  px-4 pr-0 transition '
                                                        }`}
                                                >
                                                    {i !== 0 && <IoMdArrowDropright className="text-lg" />}
                                                    {btn}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="lg:col-span-5 order-1 lg:order-2">
                                        <div className="flex justify-center">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="w-full "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}
