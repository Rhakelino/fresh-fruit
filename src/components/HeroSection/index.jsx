import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative bg-[#A4D57DD4] overflow-hidden py-16">
            {/* Background vegetable illustrations - positioned to extend out right side */}
            <div className="absolute top-0 right-0 z-0 overflow-visible">
                <img
                    src="/images/pattern.png"
                    alt=""
                    className="w-[377px] object-contain opacity-90 -mr-20 ml-60 -mt-5"
                    style={{
                        mixBlendMode: 'multiply',
                        transform: 'rotate(45deg)',
                        transformOrigin: 'top right'
                    }}
                />
            </div>
            <div className="absolute bottom-0 left-0 z-0 overflow-visible">
                <img
                    src="/images/pattern.png"
                    alt=""
                    className="w-[450px] object-contain -ml-20 mb-[-150px]"
                    style={{
                        mixBlendMode: 'multiply',
                        transform: 'rotate(-45deg)',  // Changed rotation direction
                        transformOrigin: 'bottom left' // Changed transform origin
                    }}
                />
            </div>
            <div className="container mx-auto px-4 relative z-0">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left content - Text and button */}
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <h2 className="text-xl md:text-2xl font-light text-yellow-500 mb-2">
                            100% Healty and Affordable
                        </h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-4">
                            Organic products
                        </h1>
                        <p className="text-xl md:text-2xl text-green-800 mb-8">
                            Small Changes Big Difference
                        </p>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 text-lg transition duration-300">
                            Shop Now
                        </button>
                    </div>

                    {/* Right content - Circular image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative flex justify-center items-center">
                            {/* Main circular container */}
                            <div className="bg-white rounded-full p-0 shadow-xl w-64 h-64 md:w-96 md:h-96 flex items-center justify-center overflow-hidden">
                                <img
                                    src="/images/hero.jpg"
                                    alt="Woman with organic vegetables and fruits"
                                    className="w-[95%] h-[95%] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;