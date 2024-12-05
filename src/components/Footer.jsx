import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary  text-light py-8 mt-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">ZarTech</h3>
                        <p>Your tech, your world. Discover the best gadgets at ZarTech!</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                            <li><a href="/products" className="hover:underline">Products</a></li>
                            <li><a href="/cart" className="hover:underline">Cart</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-sm">© 2024 ZarTech. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
