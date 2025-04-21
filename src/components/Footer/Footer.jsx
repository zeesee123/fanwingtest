import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaTwitter: <FaTwitter />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaInstagram: <FaInstagram />,
};


function Footer() {
  const footerData = {
    about: {
      title: "Fanwings Pvt. Ltd.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum vel erat cursus enim turpis lectus sit senectus metus.",
      socialIcons: [
        { icon: "FaFacebookF", url: "#" },
        { icon: "FaTwitter", url: "#" },
        { icon: "FaLinkedinIn", url: "#" },
        { icon: "FaInstagram", url: "#" },
      ],
    },
    companyLinks: ["About", "Contact Us", "Terms of Service", "Help"],
    branches: {
      India: ["Delhi", "West Bengal", "Haryana"],
      Overseas: ["China", "USA"],
    },
    quickContact: {
      description: "If you have any questions or need help, feel free to contact with our team.",
      phone: "0124-1234567",
    },
    copyright: "Copyright © 2025 Fanwings Pvt. Ltd. | All rights reserved",
  };
  return (
    <>

      <footer className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-lg font-normal mb-4 md:mb-8">ABOUT</h3>
            <p className="font-medium text-[#B8B8B8]  text-base mb-3 md:mb-6">{footerData.about.title}</p>
            <p className="mb-4 font-light text-[#B8B8B8] md:mb-8">{footerData.about.description}</p>
            <div className="flex gap-4 text-2xl">
              {footerData.about.socialIcons.map((item, idx) => (
                <a key={idx} href={item.url} className="hover:text-[#1FA54D]">
                  {iconMap[item.icon]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4 md:mb-8">COMPANY</h3>
            <ul className="space-y-2">
              {footerData.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-[#B8B8B8] hover:text-[#1FA54D]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4 md:mb-8">OUR BRANCHES</h3>
            <p className="text-[#B8B8B8] mb-2 ">India:-</p>
            <ul className="mb-2">
              {footerData.branches.India.map((loc, idx) => (
                <li key={idx} className="text-[#B8B8B8] font-light">{loc}</li>
              ))}
            </ul>
            <p className="text-[#B8B8B8] mb-2 mt-4 md:mt-6">Overseas:-</p>
            <ul>
              {footerData.branches.Overseas.map((loc, idx) => (
                <li key={idx} className="text-[#B8B8B8] font-light">{loc}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4 md:mb-8">QUICK CONTACT</h3>
            <p className=" text-[#B8B8B8] mb-4 md:mb-10 font-light">{footerData.quickContact.description}</p>
            <div className="flex items-center gap-2 text-lg font-bold">
              <FaPhoneAlt /> {footerData.quickContact.phone}
            </div>
          </div>
        </div>

        <div className="bg-[#1FA54D] text-center py-3 text-white text-sm">
          {footerData.copyright}
        </div>
      </footer>
    </>
  )
}

export default Footer