import SEO from '../components/common/SEO';


const Products = () => {
    return (
        <div className="container mx-auto px-4 py-32">
            <SEO
                title="Our Pure Water Products"
                description="Explore our range of premium packaged drinking water products. From individual bottles to bulk orders, Vaaraahi Waters ensures clarity in every drop."
            />
            <h1 className="text-4xl font-bold text-primary-900 mb-8">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">20L Water Can</h2>
                    <p className="text-gray-600">Perfect for home and office.</p>
                    <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">Add to Cart</button>
                </div>
                {/* Placeholders */}
                <div className="border p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">1L Bottle (Case of 12)</h2>
                    <p className="text-gray-600">Hydration on the go.</p>
                    <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">Add to Cart</button>
                </div>
                <div className="border p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">500ml Bottle (Case of 24)</h2>
                    <p className="text-gray-600">Pocket-sized purity.</p>
                    <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
