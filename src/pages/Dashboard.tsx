import React from 'react';
import { useAuth } from '../store/useAuth';
import { useCart } from '../store/useCart';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { items } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            User Dashboard
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
              <div className="mt-3 border rounded-md p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="mt-1 text-sm text-gray-900">{user?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="mt-1 text-sm text-gray-900">{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Shopping Activity</h3>
              <div className="mt-3 border rounded-md p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Items in Cart</p>
                    <p className="mt-1 text-sm text-gray-900">{items.length}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Items</p>
                    <p className="mt-1 text-sm text-gray-900">
                      {items.reduce((sum, item) => sum + item.quantity, 0)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};