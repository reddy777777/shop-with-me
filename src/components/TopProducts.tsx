import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatINR, toINR } from '../utils/currency';

interface TopProductsProps {
  products: Product[];
}

export const TopProducts: React.FC<TopProductsProps> = ({ products }) => {
  // Sort products by rating and take top 4
  const topProducts = [...products]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Rated Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="relative h-48">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm font-semibold flex items-center">
                <Star className="w-4 h-4 mr-1 fill-current" />
                {product.rating.rate}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {product.title}
              </h3>
              <p className="text-xl font-bold text-gray-900 mt-2">
                {formatINR(toINR(product.price))}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};