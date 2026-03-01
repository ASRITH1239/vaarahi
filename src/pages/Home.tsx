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
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Welcome to Varahi Waters
                </h1>
                <p className="text-lg text-gray-600">
                    Pure, refreshing perfection in every drop.
                </p>
            </div>
        </div>
    );
};

export default Home;