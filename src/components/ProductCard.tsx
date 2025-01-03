import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../store/useCart';
import { formatINR, toINR } from '../utils/currency';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
      <Link to={`/product/${product.id}`}>
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4 transition-transform hover:scale-110"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 truncate hover:text-blue-600">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {formatINR(toINR(product.price))}
          </span>
          <button
            onClick={() => addItem(product)}
            className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};