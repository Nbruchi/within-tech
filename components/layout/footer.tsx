import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="relative  dark-background ">
            <div
                className="absolute bg-purple-950 inset-0 -z-10"
                style={{
                    backgroundImage: 'url("/images/footer.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                {/* Main Footer Content - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

                        <Link href="/">
                            <Image
                                src="/icons/logo-light.svg"
                                alt="WithinTech Rwanda"
                                width={52}
                                height={32}
                                className="w-auto"
                            />
                    </Link>

                    {/* Column 2: Useful Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">
                            Useful Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="w-0 h-0.5 bg-app-orange group-hover:w-4 transition-all duration-300"></span>
                                        About
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/programs"
                                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="w-0 h-0.5 bg-app-orange group-hover:w-4 transition-all duration-300"></span>
                                        Programs
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/impact"
                                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="w-0 h-0.5 bg-app-orange group-hover:w-4 transition-all duration-300"></span>
                                        Impact
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/gallery"
                                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 group"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="w-0 h-0.5 bg-app-orange group-hover:w-4 transition-all duration-300"></span>
                                        Gallery
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">
                            Contact Us
                        </h3>
                        <div className="space-y-4">
                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Kigali,Rwanda
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <Link
                                    href="tel:+250783645551"
                                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                                >
                                    +250 783 645 551
                                </Link>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">

                                <a
                                    href="mailto:info@withintechrwanda.org"
                                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                                >
                                    info@withintechrwanda.org
                                </a>
                            </div>

                            {/* Social Media Icons */}
                            <div className="pt-4">
                                <p className="text-sm text-gray-400 mb-3">Follow Us</p>
                                <div className="flex gap-3">
                                    {/* LinkedIn */}
                                    <Link
                                        href="https://www.linkedin.com/company/withintechrwanda"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-link"
                                        aria-label="Within Tech LinkedIn"
                                    >
                                       <FaLinkedin className="footer-link-icon"/>
                                    </Link>

                                    {/* Twitter */}
                                    <Link
                                        href="https://x.com/WithinTech_Rda"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-link"
                                        aria-label="Within Tech Twitter"
                                    >
                                        <FaXTwitter className="footer-link-icon"/>
                                    </Link>

                                    {/* Facebook */}
                                    <Link
                                        href="https://www.facebook.com/profile.php?id=61565875454028"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-link"
                                        aria-label="Within Tech Facebook"
                                    >
                                       <FaFacebook className="footer-link-icon"/>
                                    </Link>
                                    {/* Instagram*/}
                                    <Link
                                        href="https://www.instagram.com/withintechrwanda/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-link"
                                        aria-label="Within Tech Instagram"
                                    >
                                        <FaInstagram className="footer-link-icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-white/10 my-8"></div>

                {/* Copyright Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p className={` w-full text-center text-[16px] font-semibold`}>
                        © {new Date().getFullYear()} WithinTech Rwanda. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;