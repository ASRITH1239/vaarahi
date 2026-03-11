import { motion } from 'framer-motion';
import { Home, Phone, Building2, School, PartyPopper, Briefcase } from 'lucide-react';
import SEO from '../components/common/SEO';
import deliveryImg from '../assets/delivery.png';
import pkg250ml from '../assets/package/250mlx24pckg.png';
import pkg500ml from '../assets/package/500mlx24pckg.png';
import pkg1l from '../assets/package/1litrex12pckg.png';

const Services = () => {
    const services = [
        {
            icon: Home,
            title: "Home & Office Delivery",
            desc: "Punctual and reliable doorstep delivery for residences and workplace environments across Hyderabad.",
            features: ["Subscription Plans", "Bulk Ordering", "Morning Slots"]
        },
        {
            icon: PartyPopper,
            title: "Birthdays & Weddings",
            desc: "Elegant 250ml and 500ml bottles tailored for your special celebrations and guest hospitality.",
            features: ["Custom Branding", "Cooling Support", "Large Quantity"]
        },
        {
            icon: Briefcase,
            title: "Corporate Events",
            desc: "Professional hydration solutions for seminars, meetings, and large-scale corporate gatherings.",
            features: ["On-site Management", "Premium Packaging", "Tax Invoicing"]
        },
        {
            icon: School,
            title: "Schools & Functions",
            desc: "Safe, mineral-rich water distribution for educational institutions and religious functions.",
            features: ["Safety Certified", "Regular Refills", "Priority Support"]
        }
    ];

    return (
        <div className="min-h-screen bg-[#030712] pt-32 pb-24 overflow-hidden relative">
            <SEO
                title="Our Services | Premium Water Supply Hyderabad"
                description="Chaamundeshwari Water provides bulk supply for weddings, corporate events, schools, and home delivery across Hyderabad."
            />

            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
                    >
                        <Building2 className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] font-black text-cyan-400 tracking-widest uppercase">Elite Supply Network</span>
                    </motion.div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6">
                        Clinical Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Service</span>
                    </h1>
                    <p className="text-cyan-100/40 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        Pure hydration tailored for every occasion. From daily refills to grand celebrations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="grid grid-cols-1 gap-6">
                            {services.map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all group"
                                >
                                    <div className="flex items-start space-x-6">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-cyan-400 group-hover:scale-110 transition-transform">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-black text-white mb-2">{service.title}</h3>
                                            <p className="text-sm text-cyan-100/40 font-medium mb-4 leading-relaxed">{service.desc}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {service.features.map((feature, j) => (
                                                    <span key={j} className="text-[9px] font-black text-cyan-400/60 uppercase tracking-widest bg-cyan-500/5 px-2 py-1 rounded-md">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-10 bg-cyan-500/20 blur-[100px] rounded-full -z-10" />
                            <img
                                src={deliveryImg}
                                alt="Service Delivery"
                                className="w-full max-h-[220px] md:max-h-[500px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Logistics Excellence - NEW SECTION */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div className="max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-cyan-400 font-black text-[10px] tracking-[0.4em] uppercase mb-4"
                            >
                                Scale of Service
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">
                                Logistics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Excellence</span>
                            </h2>
                            <p className="text-cyan-100/40 font-medium leading-relaxed">
                                We don't just deliver bottles; we manage entire hydration ecosystems for Hyderabad's largest events. Our bulk packaging is designed for efficiency and aesthetics.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { img: pkg250ml, label: "Event Ready", desc: "250ml x 24 Box" },
                            { img: pkg500ml, label: "Retail Standard", desc: "500ml x 24 Box" },
                            { img: pkg1l, label: "Bulk Household", desc: "1L x 12 Box" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative group p-10 rounded-[3rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-cyan-500/30 transition-all duration-700 overflow-hidden"
                            >
                                <div className="relative aspect-square mb-8 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full scale-75 group-hover:scale-110 transition-transform duration-1000" />
                                    <img
                                        src={item.img}
                                        alt={item.label}
                                        className="h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="text-center relative z-10">
                                    <h3 className="text-xl font-black text-white mb-1 tracking-tight">{item.label}</h3>
                                    <p className="text-[10px] font-black text-cyan-400/40 uppercase tracking-widest mb-6">{item.desc}</p>

                                    <a
                                        href="tel:+919492266645"
                                        className="inline-flex items-center px-6 py-2.5 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 rounded-xl text-[9px] font-black text-white tracking-[0.2em] uppercase transition-all"
                                    >
                                        Call for Quote
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trust CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-20 rounded-[3.5rem] bg-gradient-to-br from-cyan-950 to-blue-950 border border-cyan-500/20 text-center relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Ready for bulk ordering?</h2>
                        <p className="text-cyan-100/60 text-lg mb-10 max-w-xl mx-auto">Our logistics fleet is ready to serve your event or institution with clinical-grade purity.</p>
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                            <a href="tel:+919492266645" className="px-12 py-5 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-cyan-400 hover:text-white transition-all shadow-2xl active:scale-95 flex items-center space-x-3">
                                <Phone className="w-4 h-4" />
                                <span>Call Support</span>
                            </a>
                        </div>
                    </div>
                    {/* Background Shine */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
