import Breadcrumb from "@/components/Breadcrumb";
import FilterSidebar from "@/components/FilterSidebar";
import LoadingSpinner from "@/components/LoadingSpinner";
import Modal from "@/components/Modal";
import OrderSummary from "@/components/OrderSummary";
import ProductCard from "@/components/ProductCard";
import ReviewSection from "@/components/ReviewSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to ZarTech</h1>
        <p className="text-xl text-gray-600 mb-8">Discover the best gadgets and accessories.</p>
        <Link href="/products" className="text-white bg-primary px-6 py-2 rounded-md text-lg hover:bg-secondary transition">
          Shop Now
        </Link>
      </header>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Product Card */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="https://picsum.photos/id/57/600/400" alt="Product" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-4">Wireless Earbuds</h3>
            <p className="text-gray-600 mt-2">$99.99</p>
            <Link href="/products/1" className="text-primary hover:text-secondary mt-4 inline-block">
              View Details
            </Link>
          </div>
        </div>
      </section>
    </div>
      <ProductCard />
      {/* <FilterSidebar /> */}
      {/* <OrderSummary /> */}
      <ReviewSection />
      {/* <LoadingSpinner /> */}
      <Modal />
    </>
  );
}
