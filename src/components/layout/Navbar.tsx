import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    // Track scroll position
    const { scrollY } = useScroll();

    // Map scroll position [0px to 800px] to various CSS properties for a perfectly fluid, long transition
    const scrollRange = [0, 800];

    // Width: Starts at 100% (full bar), shrinks to 90% (pill)
    const navWidth = useTransform(scrollY, scrollRange, ["100%", "90%"]);
    // Max Width: No cap when full, capped when pill
    const navMaxWidth = useTransform(scrollY, scrollRange, ["100vw", "1280px"]);
    // Border Radius: Starts flat (0px), rounds to pill (9999px)
    const navRadius = useTransform(scrollY, scrollRange, [0, 9999]);
    // Top Margin/Padding: Starts flush (0px), drops down to floating (24px)
    const navTopMargin = useTransform(scrollY, scrollRange, [0, 24]);

    // Colors: Transitions from entirely transparent to translucent pill
    const bgColor = useTransform(
        scrollY,
        scrollRange,
        ["rgba(6, 182, 212, 0)", "rgba(6, 182, 212, 0.45)"]
    );
    const borderColor = useTransform(
        scrollY,
        scrollRange,
        ["rgba(34, 211, 238, 0)", "rgba(34, 211, 238, 0.6)"]
    );
    const boxShadow = useTransform(
        scrollY,
        scrollRange,
        [
            "0 0px 0px 0px rgba(6, 182, 212, 0), inset 0 0px 0px rgba(255, 255, 255, 0), inset 0 0px 0px rgba(6, 182, 212, 0)",
            "0 20px 40px -10px rgba(6, 182, 212, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.5), inset 0 -1px 2px rgba(6, 182, 212, 0.5)"
        ]
    );

    // Text Color: Crisp white for maximum visibility and neatness against the hero background
    const textColor = useTransform(scrollY, scrollRange, ["#ffffff", "#ffffff"]);

    // Text/Icon dropshadow: Stronger at top for visibility over the image, softer on the pill
    const textShadowParams = useTransform(
        scrollY,
        scrollRange,
        ["0 2px 6px rgba(0,0,0,0.4)", "0 1px 3px rgba(0,0,0,0.15)"]
    );

    // Noise Opacity: completely invisible at top, reveals slightly on scroll
    const noiseOpacity = useTransform(scrollY, scrollRange, [0, 0.3]);

    // Height: Smoothly shift from 80px to 64px
    const navHeight = useTransform(scrollY, scrollRange, [80, 64]);

    // Layout values that Framer Motion templates need
    const navPaddingX = useTransform(scrollY, scrollRange, [48, 24]); // 3rem to 1.5rem

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Tracking', path: '/tracking' },
        { name: 'Locations', path: '/locations' },
        { name: 'About', path: '/awards' },
    ];

    return (
        <motion.div
            className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none"
            style={{ paddingTop: isHome ? navTopMargin : 0 }}
        >
            {/* The dynamically scaling container tied directly to scroll */}
            <motion.nav
                style={{
                    width: isHome ? navWidth : "100%",
                    maxWidth: isHome ? navMaxWidth : "100%",
                    borderRadius: isHome ? navRadius : 0,
                    backgroundColor: isHome ? bgColor : "rgba(8, 145, 178, 0.95)",
                    borderColor: isHome ? borderColor : "rgba(34, 211, 238, 0.2)",
                    boxShadow: isHome ? boxShadow : "0 10px 30px -10px rgba(6, 182, 212, 0.3), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0px 0px rgba(6, 182, 212, 0)",
                    height: isHome ? navHeight : 80,
                    paddingLeft: isHome ? navPaddingX : 48,
                    paddingRight: isHome ? navPaddingX : 48,
                }}
                className="pointer-events-auto backdrop-blur-xl border overflow-hidden flex items-center justify-between"
            >
                {/* Subtle animated water noise/gradient layer behind content */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
                    style={{
                        opacity: isHome ? noiseOpacity : 0.2,
                        backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 60%)",
                        backgroundSize: "150% 150%"
                    }}
                />

                {/* Logo on Left */}
                <div className="relative z-10 flex items-center shrink-0">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} alt="Vaarahi Logo" className="h-10 sm:h-12 w-auto object-contain drop-shadow-md" />
                    </Link>
                </div>

                {/* Center Links */}
                <div className="relative z-10 hidden md:flex items-center justify-center space-x-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="px-5 py-2 rounded-full font-medium transition-colors text-sm lg:text-base hover:bg-white/20"
                        >
                            <motion.span style={{
                                color: isHome ? textColor : "#ffffff",
                                textShadow: isHome ? textShadowParams : "0 1px 3px rgba(0,0,0,0.15)"
                            }}>
                                {link.name}
                            </motion.span>
                        </Link>
                    ))}
                </div>

                {/* Right Icons */}
                <div className="relative z-10 flex items-center space-x-3 shrink-0">
                    <Link to="/auth" className="p-2.5 rounded-full transition-colors hover:bg-white/20">
                        <motion.div style={{
                            color: isHome ? textColor : "#ffffff",
                            filter: isHome ? textShadowParams : "drop-shadow(0px 1px 3px rgba(0,0,0,0.15))"
                        }}>
                            <User className="h-5 w-5" />
                        </motion.div>
                    </Link>
                    <Link to="/checkout" className="relative p-2.5 rounded-full transition-colors hover:bg-white/20">
                        <motion.div style={{
                            color: isHome ? textColor : "#ffffff",
                            filter: isHome ? textShadowParams : "drop-shadow(0px 1px 3px rgba(0,0,0,0.15))"
                        }}>
                            <ShoppingCart className="h-5 w-5" />
                        </motion.div>
                        <span className="absolute top-0 right-0 bg-white text-primary-700 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-md">
                            0
                        </span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2.5 rounded-full transition-colors hover:bg-white/20"
                    >
                        <motion.div style={{ color: isHome ? textColor : "#ffffff" }}>
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </motion.div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute top-full left-4 right-4 mt-20 p-4 bg-primary-800/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-primary-500/50 md:hidden flex flex-col space-y-2 pointer-events-auto"
                        style={{
                            boxShadow: "0 20px 40px -10px rgba(8, 145, 178, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2)"
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-3 rounded-2xl block text-white font-medium hover:bg-primary-700 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Navbar;
