// src/app/profile/page.jsx
export default function Profile() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">Your Profile</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600 mt-4">Email: john.doe@example.com</p>
          <button className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-primary mt-4">
            Edit Profile
          </button>
        </div>
      </div>
    );
  }
  