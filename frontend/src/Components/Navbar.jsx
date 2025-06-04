import { Menu, X } from 'lucide-react';
import logo from "../assets/logo/logo.png"; // Update this path to your actual logo file
import userDamo from "../assets/logo/user.png";
import { ImCart } from "react-icons/im";
import React, { useState } from "react";
import { motion } from "framer-motion";

const container = {
    width: 50,
    height: 20,
    backgroundColor: "#DCDCDC",
    borderRadius: 100,
    cursor: "pointer",
    display: "flex",
};

const handle = {
    width: 18,
    height: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: "100%",
};

export default function Navbar() {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = ["Home", "special Offers", "Restaurnants", "Track Order", "contact"];

    return (
        <nav className="w-full z-50 bg-transparent px-4 md:px-8 py-0.5  flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-white">
                <a href="#"><img className='h-16' src={logo} alt="Logo" /></a>
            </div>

            {/* Desktop Nav Menu */}
            <div className="hidden lg:flex bg-gray-100 rounded-full px-7 py-2 shadow-md space-x-6 text-sm font-medium">
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        id='navAni'
                        className={`${item === "Home" ? "font-bold text-black" : "text-gray-700 px-2 py-0.5 hover:text-black"} capitalize`}
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* CTA + Icon */}
            <div className="hidden md:flex items-center space-x-2 ">
                <div>
                    <motion.button
                        className="toggle-container"
                        style={{
                            ...container,
                            justifyContent: isOn ? "flex-start" : "flex-end",
                        }}
                        onClick={toggleSwitch}
                        layout
                    >
                        <motion.div
                            className="toggle-handle"
                            style={handle}
                            layout
                            transition={{
                                type: "spring",
                                duration: 0.3,
                                bounce: 0.3,
                            }}
                        />
                    </motion.button>
                </div>

                <div className="text-black rounded-md text-sm font-medium hover:bg-gray-800 transition">
                    <img className='h-10 rounded-full w-10' src={userDamo} alt="User" />
                </div>
                <div className="flex items-center justify-center text-black bg-gray-200 gap-3 px-5 py-2.5 rounded-full hover:bg-gray-100 transition">
                    <a className='font-semibold text-sm' href="/">Login</a>
                    <div>
                        <a className='text-xl' href="#"><ImCart className='text-xl hover:text-gray-400' /></a>
                    </div>
                </div>
            </div>

            {/* Hamburger Icon */}
            <div className="lg:hidden">
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="text-gray-400"
                >
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden px-4 py-4 space-y-3 text-sm font-medium">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`block ${item === "Home" ? "font-bold text-black" : "text-gray-700 hover:text-black"} capitalize`}
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex items-center space-x-2 pt-4">
                        <button className="bg-cyan-200 text-black px-4 py-2 rounded-md text-sm font-medium w-full">
                            let's talk
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-black rounded-md">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
