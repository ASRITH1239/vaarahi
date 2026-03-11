import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { useCart } from '../context/CartContext';

// Asset Imports
import img100ml from '../assets/bottles/100ml.png';
import img250ml from '../assets/bottles/250ml.png';
import img500ml from '../assets/bottles/500ml.png';
import img1000ml from '../assets/bottles/1000ml.png';
import img5000ml from '../assets/bottles/5000ml.png';
import img10l from '../assets/bottles/10litre.png';
import img20l from '../assets/package/20litrepckg.png';
import imgCooling from '../assets/package/15litrepckg.png';
import pkg250ml from '../assets/package/250mlx24pckg.png';
import pkg500ml from '../assets/package/500mlx24pckg.png';
import pkg1l from '../assets/package/1litrex12pckg.png';
import pkg2l from '../assets/package/2litresx12pckg.png';
import pkg5l from '../assets/package/5litresx12pckg.png';

const products = [
    { name: "100ml Pocket", size: "100ml", price: 3, image: img100ml, desc: "Mini hydration for quick events.", canBookOnline: true },
    { name: "250ml Classic", size: "250ml", price: 6, image: img250ml, desc: "Perfect for meetings and travel.", canBookOnline: true },
    { name: "500ml Handy", size: "500ml", price: 10, image: img500ml, desc: "Your daily hydration partner.", canBookOnline: true },
    { name: "1L Pure", size: "1000ml", price: 20, image: img1000ml, desc: "Standard pure mineral water.", canBookOnline: true },
    { name: "5L Family", size: "5000ml", price: 65, image: img5000ml, desc: "Ideal for home consumption.", canBookOnline: true },
    { name: "10L Bulk", size: "10 Litre", price: 110, image: img10l, desc: "Economical choice for kitchens.", canBookOnline: true },
    { name: "20L Legend", size: "20 Litre", price: 0, image: img20l, desc: "The standard for office and home.", canBookOnline: false, note: "For 20L can, Please contact us" },
    { name: "Cooling Can", size: "15 Litre", price: 0, image: imgCooling, desc: "Chilled water for events & parties.", canBookOnline: false, note: "For cooling can, Please contact us" },
];

const bulkPackages = [
    { name: "Event Pack", type: "250ml", count: "24 Bottles", image: pkg250ml },
    { name: "Standard Case", type: "500ml", count: "24 Bottles", image: pkg500ml },
    { name: "Family Bundle", type: "1L", count: "12 Bottles", image: pkg1l },
    { name: "Premium Pack", type: "2L", count: "12 Bottles", image: pkg2l },
    { name: "Mini Bulk", type: "5L", count: "12 Bottles", image: pkg5l },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center w-full max-w-[240px] mx-auto h-full"
        >
            {/* Main Visual Unit - Bottle + Price + Button Integrated */}
            <div className="relative w-full aspect-[4/5] bg-cyan-100/10 rounded-[2.5rem] flex items-center justify-center border border-white/10 backdrop-blur-3xl mb-4 shadow-xl transition-all duration-500 group-hover:bg-cyan-500/20 group-hover:border-white/30">

                {/* 3D Pop-out Bottle */}
                <motion.img
                    src={product.image}
                    alt={product.name}
                    initial={{ y: 0 }}
                    whileHover={{ y: -45, scale: 1.25 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-[80%] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.5)] z-20"
                />

                {/* Integrated Action Button */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 w-[85%]">
                    {product.canBookOnline ? (
                        <button
                            onClick={() => addToCart(product)}
                            className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl font-bold text-[10px] shadow-xl shadow-cyan-900/40 active:scale-95 border border-cyan-400/30"
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <a
                            href="tel:+919492266645"
                            className="w-full py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl font-bold text-[10px] shadow-xl active:scale-95 border border-white/20 flex items-center justify-center"
                        >
                            Call to Order
                        </a>
                    )}
                </div>
            </div>

            {/* Product Info - Compact Below */}
            <div className="text-center w-full px-1 pt-2 flex-grow flex flex-col">
                <h2 className="text-lg font-bold text-white tracking-tight">{product.name}</h2>
                <div className="flex items-center justify-center space-x-2 mb-1">
                    <p className="text-cyan-400 font-bold text-[10px] tracking-wider bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">{product.size}</p>
                    {product.canBookOnline && (
                        <span className="text-white/60 font-black text-[10px] tracking-widest uppercase italic">₹{product.price}</span>
                    )}
                </div>
                {product.note && (
                    <p className="text-blue-400 text-[9px] font-black uppercase tracking-widest mt-1 mb-2 animate-pulse">
                        {product.note}
                    </p>
                )}
                <p className="text-cyan-100/20 max-w-[180px] mx-auto text-[9px] leading-tight font-medium mt-auto">
                    {product.desc}
                </p>
            </div>
        </motion.div>
    );
};

const Products = () => {
    return (
        <div className="min-h-screen bg-transparent text-white selection:bg-cyan-500/30 pt-32 pb-24 px-6">
            <SEO
                title="Our Pure Water Products"
                description="Explore our range of premium packaged drinking water products. From individual bottles to bulk orders, Chaamundeshwari Water ensures clarity in every drop."
            />

            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-black tracking-widest mb-2 text-white">
                            Collection
                        </h1>
                        <p className="text-[10px] text-cyan-400 font-bold tracking-widest opacity-60">
                            Pure Elite Hydration
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16 items-stretch mb-32">
                    {products.map((product, i) => (
                        <ProductCard key={i} product={product as any} />
                    ))}
                </div>

                {/* Bulk Distribution Gallery */}
                <div className="mb-16">
                    <div className="flex items-center space-x-4 mb-12">
                        <div className="h-px flex-grow bg-white/10" />
                        <h2 className="text-sm font-black text-white/40 tracking-[0.3em] uppercase">Bulk Distribution</h2>
                        <div className="h-px flex-grow bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bulkPackages.map((pkg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <span className="text-4xl font-black italic tracking-tighter">BULK</span>
                                </div>

                                <div className="relative mb-8 aspect-square flex items-center justify-center">
                                    <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
                                    <motion.img
                                        src={pkg.image}
                                        alt={pkg.name}
                                        whileHover={{ y: -10, scale: 1.05 }}
                                        className="h-full w-auto object-contain drop-shadow-2xl z-10"
                                    />
                                </div>

                                <div className="text-center">
                                    <p className="text-cyan-400 font-black text-[10px] tracking-widest uppercase mb-1">{pkg.type} Bulk Case</p>
                                    <h3 className="text-xl font-black text-white tracking-tight mb-2">{pkg.name}</h3>
                                    <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-white/60 tracking-wider mb-6">
                                        {pkg.count} per box
                                    </div>

                                    <a
                                        href="tel:+919492266645"
                                        className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl font-black text-[10px] tracking-widest uppercase shadow-xl shadow-cyan-900/40 active:scale-95 border border-cyan-400/30 transition-all flex items-center justify-center space-x-2"
                                    >
                                        <span>Call for Bulk Order</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
