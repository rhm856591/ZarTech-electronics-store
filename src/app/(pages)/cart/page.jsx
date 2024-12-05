// src/app/cart/page.jsx
import { orderItems } from '@/data'; // Assuming data is imported here
import Link from 'next/link';

export default function Cart() {
  const total = orderItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto pt-20 px-4 py-8">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">Your Cart</h1>
      <div className="space-y-4">
        {orderItems.map((item, i) => (
          <div key={i} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
      <div className="text-right mt-8">
        <h2 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h2>
        <Link href={"/checkout"} >
        <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary mt-4">
          Proceed to Checkout
        </button>
        </Link>
      </div>
    </div>
  );
}
