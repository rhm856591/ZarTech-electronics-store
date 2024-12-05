import React from 'react'
import { products } from "@/data"

const ProductCard = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 pt-16">
            {products.map((product, i) => {
                return (
                    <div key={i} className="p-4 h-[400px] w-full">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-bold text-primary">${product.price}</span>
                            <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>


    );
};

export default ProductCard;
