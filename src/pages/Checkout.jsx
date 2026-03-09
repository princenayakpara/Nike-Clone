import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCheck, HiLockClosed } from 'react-icons/hi';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardName: '',
  });

  const shipping = cartTotal >= 150 ? 0 : 8;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsComplete(true);
      clearCart();
    }
  };

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto px-4 py-20 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <HiCheck className="w-10 h-10 text-white" />
        </motion.div>
        <h1 className="text-3xl font-black mb-4 dark:text-white">Order Confirmed!</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-2">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">
          Order #{Math.random().toString(36).substring(2, 10).toUpperCase()}
        </p>
        <Link to="/products" className="btn-primary">
          Continue Shopping
        </Link>
      </motion.div>
    );
  }

  if (cart.length === 0 && !isComplete) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Your bag is empty</h1>
        <Link to="/products" className="btn-primary">Shop Now</Link>
      </div>
    );
  }

  const steps = [
    { num: 1, label: 'Shipping' },
    { num: 2, label: 'Payment' },
    { num: 3, label: 'Review' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-4 lg:px-6 py-8"
    >
      <h1 className="text-3xl font-black text-nike-black dark:text-white mb-8">Checkout</h1>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-10">
        {steps.map((s, index) => (
          <div key={s.num} className="flex items-center">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step >= s.num
                    ? 'bg-nike-black text-white dark:bg-white dark:text-nike-black'
                    : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                }`}
              >
                {step > s.num ? <HiCheck className="w-4 h-4" /> : s.num}
              </div>
              <span
                className={`text-sm font-medium hidden sm:block ${
                  step >= s.num ? 'text-nike-black dark:text-white' : 'text-gray-400'
                }`}
              >
                {s.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-12 sm:w-20 h-0.5 mx-2 ${
                  step > s.num ? 'bg-nike-black dark:bg-white' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-bold mb-4 dark:text-white">Shipping Information</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white"
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white"
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="ZIP Code"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white"
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-bold mb-4 dark:text-white">Payment Information</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <HiLockClosed className="w-4 h-4" />
                  <span>Your payment information is secure</span>
                </div>
                <input
                  type="text"
                  name="cardName"
                  placeholder="Name on Card"
                  value={formData.cardName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white"
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  maxLength={19}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleChange}
                    required
                    maxLength={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    maxLength={4}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white"
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold mb-4 dark:text-white">Review Your Order</h2>
                
                {/* Shipping Summary */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-sm dark:text-white">Shipping</h3>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-nike-orange hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formData.firstName} {formData.lastName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{formData.address}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formData.city}, {formData.state} {formData.zip}
                  </p>
                </div>

                {/* Payment Summary */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-sm dark:text-white">Payment</h3>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs text-nike-orange hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Card ending in ****{formData.cardNumber.slice(-4)}
                  </p>
                </div>

                {/* Order Items */}
                <div>
                  <h3 className="font-semibold text-sm mb-3 dark:text-white">Items ({cart.length})</h3>
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div key={`${item.id}-${item.selectedSize}`} className="flex gap-3 items-center">
                        <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-lg">
                          <img src={item.images[0]} alt={item.name} className="w-full h-full object-contain p-1" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium dark:text-white line-clamp-1">{item.name}</p>
                          <p className="text-xs text-gray-500">Size: {item.selectedSize} × {item.quantity}</p>
                        </div>
                        <p className="text-sm font-bold dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            <div className="flex gap-3 mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="btn-outline"
                >
                  Back
                </button>
              )}
              <button type="submit" className="btn-primary flex-1">
                {step === 3 ? `Place Order — $${total.toFixed(2)}` : 'Continue'}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 sticky top-24">
            <h2 className="text-lg font-bold mb-4 dark:text-white">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal ({cart.length} items)</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>
                <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="flex justify-between font-bold text-lg text-nike-black dark:text-white">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
