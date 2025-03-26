import { useState } from "react";
import { ChevronDown, Gem, Crown, Phone, X, Menu } from "lucide-react";

const HeroSection = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white w-full min-h-screen mx-auto relative pt-[84px]">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full h-[84px] bg-white bg-opacity-90 shadow-lg backdrop-blur-lg flex justify-between items-center px-6 md:px-[80px] py-4 z-50">
                <h1 className="text-2xl font-bold text-red-600">ambitio.</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-gray-600 relative items-center">
                    <ul className="flex space-x-6">
                        <li className="relative group">
                            <a href="#" className="hover:text-black flex items-center">Study <ChevronDown size={16} className="ml-1" /></a>
                            <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg hidden group-hover:block">
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">USA</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Canada</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">UK</a></li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <a href="#" className="hover:text-black flex items-center">Bootcamps <ChevronDown size={16} className="ml-1" /></a>
                            <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg hidden group-hover:block">
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Web Development</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Data Science</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">AI & ML</a></li>
                            </ul>
                        </li>
                    </ul>
                    <a href="#" className="hover:text-black flex items-center">
                        <Gem size={18} className="text-red-500 mr-1" /> Ambitio Pro
                    </a>
                    <a href="#" className="hover:text-black font-semibold flex items-center">
                        <Crown size={18} className="text-red-500 mr-1" /> Ambitio Elite
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center">
                    <button className="border border-red-500 text-red-600 px-4 py-2 rounded-full flex items-center hover:bg-red-50">
                        <Phone size={16} className="mr-2 text-red-600" /> Speak with our Experts
                    </button>
                    <button className="md:hidden ml-4" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="text-center py-10 px-5 mt-[120px] relative animate-fadeIn">
                {/* Image Grid with Hover Effect */}
                <div className="relative w-full max-w-[1440px] mx-auto grid grid-rows-3 gap-[8px] items-center">
                    {/* Background University Logos */}
                    {["/Frame 1000010332.png", "/Frame 1000010331.png", "/Frame 1000010330.png"].map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`Row ${index + 1}`} 
                            className="w-full h-auto mx-auto transition-transform duration-300 hover:scale-105"
                        />
                    ))}

                    {/* Centered Glowing Crown Image */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                        <div className="relative">
                            {/* Glowing Effect */}
                            <div className="absolute inset-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-red-500 rounded-full blur-xl opacity-60 animate-pulse"></div>

                            {/* Main Image */}
                            <img
                                src="/Frame 1000010327.png"
                                alt="Centered Figure"
                                className="w-[100px] h-auto rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-red-500 animate-bounce"
                            />
                        </div>
                    </div>
                </div>

                {/* Heading & Description */}
                <h2 className="text-3xl font-bold mt-8">
                    Give the best shot at your <span className="text-red-600">Dream University</span>
                </h2>
                <p className="text-gray-600 max-w-lg mx-auto my-4">
                    Get expert help, personalized guidance, and all the support you need to increase your chances of success with Ambitio Elite.
                </p>

                {/* CTA Button */}
                <button className="bg-black text-white px-6 py-2 rounded-full mt-4 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                    10x your chances with Ambitio
                </button>
            </div>

            {/* Footer Section */}
            <div className="max-w-[1280px] w-full mx-auto bg-[#FFFBFB] bg-opacity-85 backdrop-blur-lg py-[56px] px-6 md:px-[152px] flex flex-col md:flex-row items-center justify-between gap-[10px] text-center md:text-left">
                <div className="flex-1">
                    <h3 className="text-2xl font-semibold">
                        We let our <span className="text-red-600">numbers</span> do the talking
                    </h3>
                    <p className="text-gray-500 mt-2">
                        Our users love us and we know you will too! Explore our products.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px] text-red-600 font-bold text-2xl flex-1">
                    <div className="text-center md:text-left">
                        <p>98.2%</p>
                        <span className="text-gray-500 text-sm">got into their Target Program</span>
                    </div>
                    <div className="text-center md:text-left">
                        <p>4.96</p>
                        <span className="text-gray-500 text-sm">Google Rating</span>
                    </div>
                    <div className="text-center md:text-left">
                        <p>30,000+</p>
                        <span className="text-gray-500 text-sm">Students Assisted</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
