import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { ArrowRight } from 'lucide-react';

function App() {
  const featuredProducts = [
    {
      id: 1,
      name: "Classic White Tee",
      price: "$29.99",
      category: "T-Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: "$89.99",
      category: "Outerwear",
      image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Black Dress",
      price: "$119.99",
      category: "Dresses",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Slim Fit Jeans",
      price: "$69.99",
      category: "Pants",
      image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-screen w-full object-cover"
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            New Season Collection
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Discover our latest arrivals featuring timeless pieces and contemporary designs.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Women's Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Women</h3>
            </div>
          </div>
          <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Men's Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Men</h3>
            </div>
          </div>
          <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Accessories"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Accessories</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <a href="#" className="text-black hover:text-gray-600 flex items-center">
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Join Our Newsletter</h2>
            <p className="mt-4 text-gray-600">
              Subscribe to get special offers, free giveaways, and updates.
            </p>
            <div className="mt-8 flex max-w-md mx-auto">
              <input
                type="email"
                className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                placeholder="Enter your email"
              />
              <button className="flex-shrink-0 px-6 py-3 rounded-r-md border border-transparent text-base font-medium text-white bg-black hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Shop</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">New Arrivals</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Best Sellers</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact Us</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">FAQs</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Follow Us</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Instagram</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Facebook</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2024 LUXEWEAR. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;