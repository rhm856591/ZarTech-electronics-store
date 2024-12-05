// src/app/contact/page.jsx
export default function Contact() {
    return (
      <div className="container mx-auto px-4 pt-20 py-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">We’d love to hear from you! Feel free to reach out.</p>
        </header>
  
        <section className="mt-8 max-w-2xl mx-auto">
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input type="text" id="name" className="w-full p-3 mt-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input type="email" id="email" className="w-full p-3 mt-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea id="message" className="w-full p-3 mt-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition">
              Send Message
            </button>
          </form>
        </section>
      </div>
    );
  }
  