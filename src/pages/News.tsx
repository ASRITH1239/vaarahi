

const News = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">News & Updates</h1>
            <div className="space-y-6">
                <article className="border-b pb-6">
                    <h2 className="text-2xl font-semibold mb-2 hover:text-primary-600 cursor-pointer">Varahi Waters Expands to New Region</h2>
                    <p className="text-sm text-gray-500 mb-4">October 25, 2025</p>
                    <p className="text-gray-600">We are excited to announce our expansion into the western districts...</p>
                </article>
            </div>
        </div>
    );
};

export default News;
