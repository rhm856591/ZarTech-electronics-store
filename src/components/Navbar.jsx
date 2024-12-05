"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-light shadow-md fixed w-full left-0 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold cursor-pointer">ZarTech</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-white"
            >
              About
            </Link>
            <Link
              href="/products"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-white"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-white"
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-white"
            >
              Cart
            </Link>
            <Link
              href="/profile"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-white"
            >
              Profile
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-light hover:bg-secondary focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-white"
            >
              About
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-white"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-white"
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-white"
            >
              Cart
            </Link>
            <Link
              href="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-white"
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
