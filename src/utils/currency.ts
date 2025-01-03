const RUPEE_CONVERSION_RATE = 83;

export const toINR = (usdPrice: number): number => {
  return usdPrice * RUPEE_CONVERSION_RATE;
};

export const formatINR = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);
};