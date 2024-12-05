// src/app/products/page.jsx
import Link from 'next/link';
import {products} from "@/data"

export default function Products() {
  return (
    <div className="container mx-auto pt-20 px-4 py-8">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <span className="text-xl font-bold text-primary mt-4">${product.price}</span>
            <Link href={`/products/${product.id}`} className="text-primary hover:text-secondary mt-4 inline-block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
