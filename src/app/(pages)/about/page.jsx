// src/app/about/page.jsx
export default function About() {
    return (
      <div className="container h-screen pt-20 mx-auto px-4 py-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">About ZarTech</h1>
          <p className="text-lg text-gray-600">We are dedicated to providing the best tech gadgets and accessories for your needs.</p>
        </header>
  
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-center mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Our mission is to offer top-quality products that enhance the daily lives of our customers through cutting-edge technology and innovation.
          </p>
        </section>
      </div>
    );
  }
  