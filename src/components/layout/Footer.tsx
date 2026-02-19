import { Link } from 'react-router-dom';
import { Droplets, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Droplets className="h-8 w-8 text-primary-400" />
                            <span className="text-2xl font-bold">Varahi Waters</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Pure, refreshing hydration delivered to your doorstep. Experience the taste of purity with every drop.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
                            <li><Link to="/products" className="hover:text-primary-400 transition-colors">Products</Link></li>
                            <li><Link to="/tracking" className="hover:text-primary-400 transition-colors">Track Order</Link></li>
                            <li><Link to="/locations" className="hover:text-primary-400 transition-colors">Locations</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Call Us: +91 98765 43210<br />
                            Email: hello@varahiwaters.com
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Varahi Waters. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
