<<<<<<< HEAD
import SEO from '../components/common/SEO';

const Tracking = () => {
    return (
        <div className="container mx-auto px-4 py-32">
            <SEO
                title="Track Your Order"
                description="Keep track of your Vaaraahi Waters delivery in real-time. Enter your order ID to see the status of your premium hydration."
            />
            <h1 className="text-4xl font-bold text-primary-900 mb-8">Order Tracking</h1>
=======


const Tracking = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Track Your Order</h1>
>>>>>>> d730f26463a23ec299dfacc2d15acc8be8931f09
            <div className="max-w-xl mx-auto">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        placeholder="Enter Order ID"
                        className="flex-1 border p-3 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                    <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700">
                        Track
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tracking;
