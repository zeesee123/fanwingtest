import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../../assets/logo.png";

const navigation = [
    { name: "Home", href: "/" },
    {
        name: "Products",
        href: "#",
        submenu: [
            { name: "Axial Fans", href: "#" },
            { name: "Backward Curved Centrifugal Fan", href: "#" },
            { name: "Forward Curves Centrifugal Fan", href: "#" },
            { name: "Compact Fan", href: "#" },
            { name: "Box Fan (For Refrigeration)", href: "#" },

        ],
    },
    {
        name: "Industry",
        href: "#",
        submenu: [
            { name: "Data center", href: "#" },
            { name: "Energy & Environment", href: "#" },
            { name: "Fan Renovation", href: "#" },
            { name: "Ventilation & Purification", href: "#" },
            { name: "Medical Purification", href: "#" },
        ],
    },
    { name: "News Centre", href: "#" },
    { name: "Support", href: "#" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleMouseEnter = (index) => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setOpenDropdown(index);
    };

    const handleMouseLeave = () => {
        setHoverTimeout(setTimeout(() => setOpenDropdown(null), 300));
    };

    return (
        <>
            <div className="bg-[#1FA54D] py-3 text-white text-sm">
                <div className="mx-auto max-w-7xl px-4 md:px-4 lg:px-2 flex justify-end items-center">
                    <ul className="flex gap-6">
                        <li className="border-r-1 border-white pr-6"><Link to="#">Blogs</Link></li>
                        <li className="border-r-1 border-white pr-6"><Link to="#">About Us</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <header className="sticky top-0 z-50 bg-white shadow-md">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex items-center justify-between py-2">
                        {/* Logo */}
                        <Link to="/" className="p-2">
                            <img src={Logo} alt="Logo" className="h-12 w-auto object-contain" />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex space-x-4">
                            {navigation.map((item, index) => {
                                const isActive =
                                    location.pathname === item.href ||
                                    (item.submenu && item.submenu.some((sub) => location.pathname === sub.href));

                                return (
                                    <div
                                        key={index}
                                        className="relative group"
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            to={item.href}
                                            className={`flex items-center px-1 mx-2 py-2 text-base transition-colors duration-200 ${isActive
                                                ? "text-[#030303] border-b-3 border-[#FF0000]"
                                                : "text-[#030303] hover:text-[#FF0000]"
                                                }`}
                                        >
                                            {item.name}
                                            {item.submenu && <MdKeyboardArrowDown className="ml-1" />}
                                        </Link>
                                        {item.submenu && openDropdown === index && (
                                            <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg z-10">
                                                {item.submenu.map((subItem, subIndex) => {
                                                    const isSubActive = location.pathname === subItem.href;
                                                    return (
                                                        <Link
                                                            key={subIndex}
                                                            to={subItem.href}
                                                            className={`block px-4 py-2 text-sm ${isSubActive
                                                                ? "text-[#469E8E] hover:bg-teal-50"
                                                                : "text-gray-600 hover:bg-teal-50"
                                                                }`}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Icon */}
                        <button onClick={toggleMenu} className="md:hidden text-gray-600">
                            {menuOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 ease-in-out md:hidden`}
                >
                    <ul className="mt-12 px-4 space-y-4">
                        {navigation.map((item, index) => {
                            const isActive =
                                location.pathname === item.href ||
                                (item.submenu && item.submenu.some((sub) => location.pathname === sub.href));

                            return (
                                <li key={index}>
                                    <div
                                        onClick={() =>
                                            item.submenu
                                                ? setOpenDropdown(openDropdown === index ? null : index)
                                                : setMenuOpen(false)
                                        }
                                        className={`flex justify-between items-center cursor-pointer ${isActive ? "text-[#469E8E]" : "text-gray-600"
                                            }`}
                                    >
                                        <Link to={item.href} onClick={() => setMenuOpen(false)}>
                                            {item.name}
                                        </Link>
                                        {item.submenu && <MdKeyboardArrowDown />}
                                    </div>


                                    {item.submenu && openDropdown === index && (
                                        <ul className="ml-2 mt-2 space-y-2">
                                            {item.submenu.map((subItem, subIndex) => {
                                                const isSubActive = location.pathname === subItem.href;
                                                return (
                                                    <li key={subIndex}>
                                                        <Link
                                                            to={subItem.href}
                                                            onClick={() => setMenuOpen(false)}
                                                            className={`block py-1 text-[15px] ${isSubActive ? "text-[#469E8E]" : "text-gray-500"
                                                                }`}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
