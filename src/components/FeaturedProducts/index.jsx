import React from 'react';

const FeaturedProducts = (props) => {
    const {title} = props
    const products = [
        {
            id: 1,
            name: 'Orange',
            weight: '1kg',
            price: 15000,
            image: '/images/products/product1.png',
            category: 'FRUITS',
            featured: true,
        },
        {
            id: 2,
            name: 'Tomato',
            weight: '500g',
            price: 7000,
            image: '/images/products/product2.png',
            category: 'FRUITS',
            featured: true
        },
        {
            id: 3,
            name: 'Fresh Meat',
            weight: '500g',
            price: 150000,
            image: '/images/products/product3.jpg',
            category: 'MEAT',
            featured: true
        },
        {
            id: 4,
            name: 'Eggs',
            weight: '30pcs',
            price: 50000,
            image: '/images/products/product4.jpg',
            category: 'POULTRY',
            featured: true
        },
        {
            id: 5,
            name: 'Potato',
            weight: '1kg',
            price: 14000,
            image: '/images/products/product5.png',
            category: 'VEGETABLE',
            featured: true
        },
        {
            id: 6,
            name: 'Carrot',
            weight: '1kg',
            price: 9000,
            image: '/images/products/product6.png',
            category: 'VEGETABLE',
            featured: true
        },
        {
            id: 7,
            name: 'Broccoli',
            weight: '1kg',
            price: 8000,
            image: '/images/products/product7.png',
            category: 'VEGETABLE',
            featured: true
        },
        {
            id: 8,
            name: 'Onion',
            weight: '1kg',
            price: 40000,
            image: '/images/products/product8.png',
            category: 'VEGETABLE',
            featured: true
        },
    ];

    // Function to format price to IDR
    const formatPrice = (price) => {
        return `IDR ${price.toLocaleString('id-ID')}`;
    };

    return (
        <div className="py-12 bg-gray-50 relative z-10 mt-[-30px] pt-[45px] overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 z-0 overflow-visible">
                <img
                    src="/images/pattern.png"
                    alt=""
                    className="w-[377px] object-contain opacity-30 -mr-20 ml-60 -mt-5"
                    style={{
                        mixBlendMode: 'multiply',
                        transform: 'rotate(45deg)',
                        transformOrigin: 'top right'
                    }}
                />
            </div>
            <div className="absolute bottom-0 left-0 z-0 overflow-visible opacity-30">
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

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white relative group shadow-sm hover:shadow-md transition-shadow">
                            {product.featured && (
                                <div className="absolute top-0 left-0 z-10">
                                    <span className="bg-[#559416] text-white text-xs font-medium px-4 py-1 block">
                                        Featured
                                    </span>
                                </div>
                            )}

                            <div className="pt-8 pb-4 px-4">
                                <div className="flex justify-center items-center mb-6">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-28 object-contain"
                                    />
                                </div>

                                <div className="text-center">
                                    <div className="text-sm text-gray-500 font-medium mb-1">
                                        {product.category}
                                    </div>
                                    <h3 className="text-lg font-medium text-green-600 mb-1">
                                        {product.name} - {product.weight}
                                    </h3>
                                    <div className="text-md font-bold text-gray-900">
                                        {formatPrice(product.price)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;