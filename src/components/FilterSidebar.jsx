import React from 'react'

const FilterSidebar = () => {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg w-64">
            <h3 className="text-xl font-semibold mb-4">Filters</h3>
            <div className="space-y-4">
                <div>
                    <h4 className="font-medium">Category</h4>
                    <ul className="space-y-2">
                        <li><input type="checkbox" /> Gadgets</li>
                        <li><input type="checkbox" /> Accessories</li>
                        <li><input type="checkbox" /> Wearables</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium">Price Range</h4>
                    <input type="range" min="0" max="1000" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
