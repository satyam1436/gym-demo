import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Programs", href: "/programs" },
        { name: "Trainers", href: "/trainers" },
        { name: "Membership", href: "/membership" },
        { name: "Gallery", href: "/gallery" },
    ];

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto max-w-7xl px-5 pt-5 sm:px-6 lg:px-8">

                <nav className="flex items-center justify-between border border-white/10 bg-black/55 px-5 py-3.5 backdrop-blur-xl sm:px-6">

                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center"
                    >
                        <span className="font-display text-2xl leading-none tracking-wide text-white">
                            IRON
                        </span>

                        <span className="font-display text-2xl leading-none tracking-wide text-[#FF5A1F]">
                            FORGE
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                className={({ isActive }) =>
                                    `text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${isActive
                                        ? "text-white"
                                        : "text-white/45 hover:text-white"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <Link
                        to="/contact"
                        className="group hidden items-center gap-2 bg-[#FF5A1F] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#ff6b35] lg:flex"
                    >
                        Start Training

                        <ArrowUpRight
                            size={14}
                            strokeWidth={2.5}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <X size={24} strokeWidth={1.5} />
                        ) : (
                            <Menu size={24} strokeWidth={1.5} />
                        )}
                    </button>

                </nav>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden border-x border-b border-white/10 bg-[#0b0b0b] transition-all duration-500 lg:hidden ${isOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 border-transparent opacity-0"
                        }`}
                >
                    <div className="px-6 py-7">

                        <div className="flex flex-col">

                            {navLinks.map((link, index) => (
                                <NavLink
                                    key={link.name}
                                    to={link.href}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `border-b border-white/10 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${isActive
                                            ? "text-[#FF5A1F]"
                                            : "text-white/60 hover:text-white"
                                        }`
                                    }
                                >
                                    <span className="mr-3 text-[9px] text-white/25">
                                        0{index + 1}
                                    </span>

                                    {link.name}
                                </NavLink>
                            ))}

                        </div>

                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="mt-6 flex items-center justify-center gap-2 bg-[#FF5A1F] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
                        >
                            Start Training
                            <ArrowUpRight size={14} />
                        </Link>

                    </div>
                </div>

            </div>
        </header>
    );
}

export default Navbar;