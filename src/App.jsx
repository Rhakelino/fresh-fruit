import React from 'react';
import SearchMenu from './components/SearchMenu';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryMenu from './components/CategoryMenu';
import FeaturedProducts from './components/FeaturedProducts';
import OrganicPromotion from './components/OrganicPromotion';
import Footer from './components/Footer';

const App = () => {
  // Product data
  const featuredProducts = [
    { id: 1, name: 'Orange', price: '$2.99', image: '/images/orange.png', category: 'Fruits' },
    { id: 2, name: 'Strawberry', price: '$3.99', image: '/images/strawberry.png', category: 'Fruits' },
    { id: 3, name: 'Beef', price: '$8.99', image: '/images/meat.png', category: 'Meat' },
    { id: 4, name: 'Chicken', price: '$5.99', image: '/images/chicken.png', category: 'Poultry' },
    { id: 5, name: 'Carrot', price: '$1.99', image: '/images/carrot.png', category: 'Vegetables' },
    { id: 6, name: 'Broccoli', price: '$2.49', image: '/images/broccoli.png', category: 'Vegetables' },
    { id: 7, name: 'Cabbage', price: '$1.99', image: '/images/cabbage.png', category: 'Vegetables' },
    { id: 8, name: 'Tomato', price: '$2.29', image: '/images/tomato.png', category: 'Vegetables' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header/Navigation */}
      <Header />
      
      {/* Hero Section */}
      <div id="home">
        <HeroSection />
      </div>

      {/* Categories */}
      <div id="categories">
        <CategoryMenu />
      </div>

      {/* Shop/Featured Products */}
      <div id="shop">
        <FeaturedProducts title="Featured Product" />
      </div>

      {/* Promotion Banner */}
      <div id="about">
        <OrganicPromotion />
      </div>

      {/* Best Sellers */}
      <div id="products">
        <FeaturedProducts title="Best Seller" />
      </div>

      {/* Footer */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default App;