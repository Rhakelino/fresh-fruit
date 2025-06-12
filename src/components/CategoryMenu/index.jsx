import React from 'react';

const CategoryMenu = () => {
    const categories = [
        { id: 1, name: 'Fruits', icon: '/images/fruits.png' },
        { id: 2, name: 'Vegetables', icon: '/images/vegetables.png' },
        { id: 3, name: 'Meat', icon: '/images/meat.png' },
        { id: 4, name: 'Seafood', icon: '/images/seafood.png' },
        { id: 5, name: 'Groceries', icon: '/images/groceries.png' },
        { id: 6, name: 'Dairy', icon: '/images/dairy.png' },
    ];

    return (
        <div className="py-10 bg-white w-full mx-auto border">
            <div className="container mx-auto px-4">
                {/* Scroll container with improved mobile scrolling */}
                <div className="overflow-x-auto scrollbar-hide -mx-4 px-4" style={{ WebkitOverflowScrolling: 'touch' }}>
                    <div className="flex space-x-4 min-w-max pb-1 snap-x snap-mandatory">
                        {categories.map((category) => (
                            <a
                                key={category.id}
                                href={`/category/${category.name.toLowerCase()}`}
                                className="flex items-center bg-[#EFFFE2D4] hover:bg-green-100 px-5 py-2 
                                           transition-all relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]
                                           snap-start flex-shrink-0 w-auto min-w-[140px]"
                            >
                                <div className="w-8 h-8 mr-3 flex-shrink-0">
                                    <img
                                        src={category.icon}
                                        alt={`${category.name} icon`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="font-medium text-green-900 text-sm md:text-base">{category.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* Optional: Scroll indicator for mobile - shows on small screens only */}
                <div className="mt-3 text-center text-xs text-gray-500 md:hidden">
                    <span>← Swipe to see more →</span>
                </div>
            </div>
        </div>
    );
};

export default CategoryMenu;