import React from 'react';
import { orderItems } from "@/data"; // Assuming orderItems is imported from somewhere

const OrderSummary = () => {
    const total = orderItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <ul>
                {orderItems.map((item, index) => (
                    <li key={index} className="flex justify-between mb-2">
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between mt-4">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${total}</span>
            </div>
        </div>
    );
};

export default OrderSummary;
