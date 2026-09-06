import { Link } from "react-router-dom";
import {
    ArrowUpRight,
} from "lucide-react";
import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa";

function Footer() {
    const footerLinks = [
        { name: "About", href: "/about" },
        { name: "Programs", href: "/programs" },
        { name: "Trainers", href: "/trainers" },
        { name: "Membership", href: "/membership" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <footer className="border-t border-white/10 bg-[#080808]">

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">

                <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

                    {/* Brand */}
                    <div>

                        <Link
                            to="/"
                            className="inline-flex items-center"
                        >
                            <span className="font-display text-3xl leading-none tracking-wide text-white">
                                IRON
                            </span>

                            <span className="font-display text-3xl leading-none tracking-wide text-[#FF5A1F]">
                                FORGE
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
                            A performance-driven training space built for people
                            who refuse to settle for average.
                        </p>

                        <div className="mt-7 flex items-center gap-3">

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-white"
                            >
                                <FaInstagram size={15} />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-white"
                            >
                                <FaFacebookF size={14} />
                            </a>

                            <a
                                href="#"
                                aria-label="YouTube"
                                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-white"
                            >
                                <FaYoutube size={16} />
                            </a>

                        </div>

                    </div>


                    {/* Explore */}
                    <div>

                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#FF5A1F]">
                            Explore
                        </p>

                        <div className="mt-6 flex flex-col items-start gap-4">

                            {footerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-xs font-medium uppercase tracking-[0.12em] text-white/45 transition-colors duration-300 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}

                        </div>

                    </div>


                    {/* Contact */}
                    <div>

                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#FF5A1F]">
                            Contact
                        </p>

                        <div className="mt-6 space-y-5">

                            <div>
                                <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                                    Phone
                                </p>

                                <a
                                    href="tel:+919876543210"
                                    className="mt-1 block text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    +91 98765 43210
                                </a>
                            </div>

                            <div>
                                <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                                    Email
                                </p>

                                <a
                                    href="mailto:hello@ironforge.com"
                                    className="mt-1 block text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    hello@ironforge.com
                                </a>
                            </div>

                            <div>
                                <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                                    Location
                                </p>

                                <p className="mt-1 text-sm leading-6 text-white/60">
                                    42 Industrial Avenue
                                    <br />
                                    Jamshedpur, Jharkhand
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* Opening Hours */}
                    <div>

                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#FF5A1F]">
                            Opening Hours
                        </p>

                        <div className="mt-6 space-y-4">

                            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                <span className="text-xs text-white/45">
                                    Monday — Friday
                                </span>

                                <span className="text-xs text-white/70">
                                    05:00 — 23:00
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                <span className="text-xs text-white/45">
                                    Saturday
                                </span>

                                <span className="text-xs text-white/70">
                                    06:00 — 22:00
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                <span className="text-xs text-white/45">
                                    Sunday
                                </span>

                                <span className="text-xs text-white/70">
                                    07:00 — 20:00
                                </span>
                            </div>

                        </div>


                        <Link
                            to="/contact"
                            className="group mt-7 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:text-[#FF5A1F]"
                        >
                            Get Directions

                            <ArrowUpRight
                                size={13}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>

                    </div>

                </div>

            </div>


            {/* Bottom Bar */}
            <div className="border-t border-white/10">

                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

                    <p className="text-[9px] uppercase tracking-[0.16em] text-white/25">
                        © 2026 IRONFORGE DEMO WEBSITE. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-5">

                        <span className="text-[9px] uppercase tracking-[0.16em] text-white/20">
                            Built. Not Born.
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#FF5A1F]" />

                        <span className="text-[9px] uppercase tracking-[0.16em] text-white/20">
                            Train Hard. Live Strong.
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;