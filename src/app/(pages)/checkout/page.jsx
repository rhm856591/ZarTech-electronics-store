// src/app/checkout/page.jsx
export default function Checkout() {
    return (
      <div className="container mx-auto pt-20 px-4 py-8">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">Checkout</h1>
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Shipping Address</label>
            <input type="text" id="address" className="w-full p-3 mt-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="payment" className="block text-sm font-medium text-gray-700">Payment Information</label>
            <input type="text" id="payment" className="w-full p-3 mt-2 border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary mt-4">
            Complete Purchase
          </button>
        </form>
      </div>
    );
  }
  