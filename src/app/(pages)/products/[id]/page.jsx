'use client' 
// src/app/products/[id]/page.jsx
import { useRouter } from 'next/router';
import { products } from '@/data'; // Assuming data is imported here
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [isMounted, setIsMounted] = useState(false); // State to track if component is mounted
  const router = useRouter();

  useEffect(() => {
    // Set isMounted to true once the component is mounted on the client-side
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Wait for router to be ready and the component to be mounted
    if (router.isReady && isMounted) {
      const { id } = router.query;
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false); // Set loading to false when the data is fetched
    }
  }, [router.isReady, router.query, isMounted]);

  if (!isMounted || loading) {
    return <p>Loading...</p>; // Show loading message or spinner
  }

  if (!product) {
    return <p>Product not found.</p>; // Handle the case when the product is not found
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center">
        <img src={product.image} alt={product.name} className="w-1/2 h-64 object-cover rounded-lg" />
        <div className="ml-8">
          <h2 className="text-3xl font-semibold text-primary">{product.name}</h2>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-2xl font-bold text-primary">${product.price}</span>
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
