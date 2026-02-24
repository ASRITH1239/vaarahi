import { motion } from "framer-motion";
import { Droplets, ArrowRight } from "lucide-react";
import heroBottle from "../../../assets/hero-bottle.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-primary-200/40 blur-3xl mix-blend-multiply"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-primary-300/30 blur-3xl mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left pt-12 lg:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-100 mb-6 shadow-sm"
            >
              <Droplets className="h-5 w-5 text-primary-500" />
              <span className="text-primary-700 font-medium text-sm tracking-wide uppercase">100% Pure & Natural</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6"
            >
              Taste the <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Purity of Nature
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience hydration like never before. Source-pure, mineral-rich, and impeccably refreshing. Elevate your daily water intake with Varahi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <button className="px-8 py-4 w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-500/30 flex items-center justify-center space-x-2 group">
                <span>Shop Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 rounded-full font-semibold text-lg transition-all shadow-sm border border-gray-100 hover:shadow-md">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Image Container with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end items-center"
          >
            {/* Glossy Backdrop for Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-200/40 to-white/10 rounded-full blur-2xl transform scale-90 -z-10"></div>

            <motion.img
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src={heroBottle}
              alt="Premium Varahi Water Bottle"
              className="w-[85%] max-w-md lg:max-w-lg object-contain drop-shadow-2xl z-20"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;