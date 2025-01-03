import React from 'react';
import { Store, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Store className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">shop with me</span>
            </div>
            <p className="text-sm">
              Your one-stop shop for all your shopping needs. Quality products at
              competitive prices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-blue-500">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/?category=electronics" className="hover:text-blue-500">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/?category=jewelery" className="hover:text-blue-500">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/?category=men's clothing" className="hover:text-blue-500">
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link to="/?category=women's clothing" className="hover:text-blue-500">
                  Women's Clothing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>support@shopwitheme.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>123 Main Street, kadapa, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Shop with me. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};