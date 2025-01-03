import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useCart } from '../store/useCart';
import { useAuth } from '../store/useAuth';
import { SearchBar } from './SearchBar';
import { Store } from 'lucide-react';

export const Header: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const items = useCart((state) => state.items);
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <Store className="w-8 h-8 text-600" />
            <span className="ml-2 text-lg sm:text-xl font-extrabold text-gray-800">Shop with me</span>
          </Link>

          {/* Hamburger Menu */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-4">
            <SearchBar onSearch={onSearch} />
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">{user.name}</span>
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowDropdown(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setShowDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/login" className="px-4 py-2 text-blue-600 hover:text-blue-700">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
            <Link
              to="/cart"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="sm:hidden mt-2 bg-white rounded-md shadow-lg">
            <div className="flex flex-col gap-2 mt-4 px-4 pb-4">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="text-left text-gray-700 hover:text-blue-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-blue-600 hover:text-blue-700">
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-white bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700"
                  >
                    Sign Up
                  </Link>
                </>
              )}
              <Link
                to="/cart"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Cart ({itemCount})</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
