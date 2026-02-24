

const Locations = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Locations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Main Distribution Center</h2>
                    <p className="text-gray-600">123 Purity Lane, Water City, WC 12345</p>
                    <p className="text-gray-500 mt-2">Serving: Central District</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">North Hub</h2>
                    <p className="text-gray-600">456 Refresh Road, Northside, NS 67890</p>
                    <p className="text-gray-500 mt-2">Serving: Northern Suburbs</p>
                </div>
            </div>
        </div>
    );
};

export default Locations;
