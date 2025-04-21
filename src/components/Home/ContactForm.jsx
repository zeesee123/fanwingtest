import React from 'react'
import image1 from '../../assets/home/image02.webp'
import logo from '../../assets/logo.png'


export const Contact = () => {
    const newsSectionData = {
        tag: "Latest News",
        heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue gravida facilisis diam viverra. Porttitor vel et nisl, imperdiet tincidunt ornare fermentum tortor. Condimentum auctor nec in nulla pellentesque erat scelerisque commodo, accumsan. Nibh neque tellus et aliquet. Sagittis porttitor ullamcorper eget phasellus. Eleifend placerat amet velit tortor ac egestas. Massa quis sed in penatibus diam tellus.",
        contact: [
            {
                label: "24/7 FREE CALL US",
                value: "011-1234567",
            },
            {
                label: "WORKING HOURS",
                value: "Mon to Fri\n09:00 – 6:00",
            },
            {
                label: "ASK FOR A FREE QUOTE",
                value: "info@fanwings.in",
            },
        ],
    };
    const { tag, heading, description, contact } = newsSectionData;
    return (
        <>
            <section className='py-4 bg-[#052B98]'>
                <div className='max-w-7xl mx-auto px-6'>
                    <h3 className='text-white'>Internal Rotor</h3>
                </div>
            </section>
            <section className='py-10'>
                <div className='max-w-7xl mx-auto px-6'>
                    <img src={image1} alt='image' className='w-full' />
                    <div className="text-center  py-10 pb-6 space-y-8">
                        {/* Top Content */}
                        <div className="space-y-4">
                            <span className="inline-block bg-[#E0E0E0] text-sm px-8 py-2 rounded-full">
                                {tag}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-medium">{heading}</h2>
                            <p className="text-black/80 font-light leading-relaxed text-sm md:text-[15px]">
                                {description}
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <div className='bg-[#1FA54D]'>
                <div className='max-w-7xl mx-auto px-6'>
                    <div className=" text-white grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                        {contact.map((item, i) => (
                            <div key={i} className="px-6 py-6 text-center space-y-2">
                                <p className="uppercase text-[15px] font-light text-white">{item.label}</p>
                                <p className="font-medium whitespace-pre-line text-lg md:text-[20px]">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}


export const Form = () => {
    return (
        <div className='max-w-7xl mx-auto px-6'>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 ">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img
                        src={logo}
                        alt="Fanwings Logo"
                        className="w-44 md:w-48 h-auto"
                    />
                </div>

                {/* Email Input and Subscribe Button */}
                <form className="w-full md:w-auto flex items-center max-w-xl rounded-full overflow-hidden border border-black shadow-md">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow w-2/3 md:w-auto px-6 py-3 text-sm outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-red-600 w-[150px] px-2 md:w-auto  hover:bg-red-700 transition text-white md:px-6 py-3 text-sm font-medium"
                    >
                        Subscribe Now
                    </button>
                </form>
            </div>
        </div>
    )
}
