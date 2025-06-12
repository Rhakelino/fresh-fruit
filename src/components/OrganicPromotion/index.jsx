import React from 'react';

const OrganicPromotion = () => {
    return (
        // Remove any default borders by adding border-0 and extend section fully
        <section className="relative bg-[#E0FF89] py-12 md:py-16 z-20 overflow-visible">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 z-0 overflow-visible">
                <img
                    src="/images/products/product7.png"
                    alt=""
                    className="w-48 object-contain -mt-20 -ml-10"
                    style={{
                        mixBlendMode: 'multiply',
                        transform: 'rotate(150deg)',
                    }}
                />
            </div>

            {/* Modified oranges positioning with higher z-index */}
            <div className="absolute top-0 right-0 z-10 overflow-visible">
                <img
                    src="/images/products/product10.png"
                    alt=""
                    className="w-36 object-contain -mt-12 -mr-20" 
                    style={{
                        mixBlendMode: 'multiply',
                        transform: 'rotate(-150deg)',
                        position: 'relative', // Ensure relative positioning
                        right: '-10px', // Push further right
                    }}
                />
            </div>

            <div className="absolute bottom-0 left-0 z-0 overflow-visible">
                <img
                    src="/images/products/product9.png"
                    alt=""
                    className="w-36 md:w-40 object-contain -mb-10 -ml-10"
                    style={{
                        mixBlendMode: 'multiply',
                        transform: 'rotate(10deg)',
                    }}
                />
            </div>

            {/* Make sure container doesn't clip content */}
            <div className="container mx-auto px-4 overflow-visible">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Rest of your content */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-around">
                        <img
                            src="/images/promotion.png"
                            alt="Organic grocery bag with fresh vegetables and fruits"
                            className="w-64 md:w-80 object-contain"
                        />
                    </div>

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h3 className="text-green-600 text-lg md:text-xl font-medium mb-2">
                            SAVE UP TO 20%
                        </h3>
                        <h2 className="text-green-700 text-3xl md:text-5xl font-bold mb-4">
                            Organic Foods
                        </h2>
                        <p className="text-green-800 text-base md:text-lg mb-6 max-w-md">
                            Start your daily shopping with some Organic Foods
                        </p>
                        <button className="bg-[#559416] hover:bg-green-700 text-white font-medium px-8 py-3 transition duration-300">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrganicPromotion;