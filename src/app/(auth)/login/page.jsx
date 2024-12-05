// src/app/auth/login/page.jsx
export default function Login() {
    return (
      <div className="container pt-20 mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">Login</h1>
        <form className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="w-full p-3 mt-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="w-full p-3 mt-2 border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary mt-4">
            Login
          </button>
        </form>
      </div>
    );
  }
  