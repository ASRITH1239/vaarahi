

const Checkout = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Checkout</h1>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                <p className="text-gray-600 mb-4">Your cart is currently empty.</p>
                <button className="px-6 py-3 bg-primary-600 text-white rounded-lg w-full font-semibold hover:bg-primary-700">
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};

export default Checkout;
