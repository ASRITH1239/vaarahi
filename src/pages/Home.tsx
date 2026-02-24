<<<<<<< HEAD
import Hero from "../components/layout/sections/Hero";
import SEO from '../components/common/SEO';

const Home = () => {
    return (
        <div>
            <SEO
                title="Pure & Premium Packaged Drinking Water"
                description="Vaaraahi Waters offers the purest packaged drinking water, processed with advanced filtration for a refreshing taste. Order your premium hydration today."
            />
            <Hero />
=======
import Hero from "../components/layout/sections/hero";

const Home = () => {
    return (
        <>
            <Hero />   
>>>>>>> d730f26463a23ec299dfacc2d15acc8be8931f09
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Welcome to Varahi Waters
                </h1>
                <p className="text-lg text-gray-600">
                    Pure, refreshing perfection in every drop.
                </p>
            </div>
<<<<<<< HEAD
        </div>
=======
        </>
>>>>>>> d730f26463a23ec299dfacc2d15acc8be8931f09
    );
};

export default Home;