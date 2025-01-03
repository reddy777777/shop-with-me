import React from 'react';
import { Tag, Clock, Percent } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Flash Sale',
    description: '24 Hours Only',
    discount: '30% OFF',
    icon: Clock,
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 2,
    title: 'Special Deal',
    description: 'First Purchase',
    discount: '₹500 OFF',
    icon: Tag,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 3,
    title: 'Bulk Discount',
    description: 'Buy 3 Get 1 Free',
    discount: '25% OFF',
    icon: Percent,
    color: 'bg-green-100 text-green-600',
  },
];

export const Offers = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {offers.map((offer) => {
        const Icon = offer.icon;
        return (
          <div
            key={offer.id}
            className={`${offer.color} rounded-lg p-6 flex items-center justify-between transition-transform hover:scale-105`}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-sm opacity-75">{offer.description}</p>
              <p className="text-2xl font-bold mt-2">{offer.discount}</p>
            </div>
            <Icon className="w-12 h-12 opacity-75" />
          </div>
        );
      })}
    </div>
  );
};