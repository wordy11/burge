const Profile = () => {
    return (
      <div className="flex items-center justify-center p-4 sm:p-6">
        {/* Profile Card */}
        <div className="max-w-5xl w-full bg-white overflow-hidden rounded-lg shadow-lg">
          {/* Header */}
          <div className="p-6 sm:p-8 text-black rounded-t-lg text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">User Profile</h2>
            <p className="text-lg sm:text-xl opacity-80">Manage and view your personal details below.</p>
          </div>
  
          {/* Profile Section */}
          <div className="p-4 sm:p-8 space-y-8">
            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-6 sm:space-y-0 sm:space-x-6">
              <div className="flex flex-col items-center sm:items-start sm:flex-row">
                <img
                  className="w-24 h-24 rounded-full shadow-xl sm:w-32 sm:h-32"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  alt="User Avatar"
                />
                <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">John Doe</h3>
                  <p className="text-lg sm:text-xl font-semibold text-gray-600">johndoe@example.com</p>
                  <p className="text-base sm:text-lg text-gray-500">Member since: January 2022</p>
                </div>
              </div>
  
              {/* Profile Edit & Upgrade KYC Buttons */}
              <div className="flex flex-col space-y-3">
                <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
                  Upgrade KYC
                </button>
                <button className="px-6 py-3 bg-gray-200 text-gray-800 text-lg font-semibold rounded-lg hover:bg-gray-300 transition">
                  Edit Profile
                </button>
              </div>
            </div>
  
            {/* Personal Information Section */}
            <div className="bg-white p-4 sm:p-6 lg:px-15 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">Personal Information</h4>
              <div className="space-y-3">
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Full Name:</span>
                  <span className="text-gray-800 font-medium">John Doe</span>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Email:</span>
                  <span className="text-gray-800 font-medium">johndoe@example.com</span>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Mobile Number:</span>
                  <span className="text-gray-800 font-medium">+1 (555) 123-4567</span>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Date of Birth:</span>
                  <span className="text-gray-800 font-medium">March 15, 1990</span>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Country:</span>
                  <span className="text-gray-800 font-medium">United States</span>
                </p>
                {/* Address Fields */}
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Street 1:</span>
                  <span className="text-gray-800 font-medium">1234 Elm Street</span>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Street 2:</span>
                  <span className="text-gray-800 font-medium">Apartment 45B</span>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">City:</span>
                  <span className="text-gray-800 font-medium">Springfield</span>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">State:</span>
                  <span className="text-gray-800 font-medium">Illinois</span>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Zip Code:</span>
                  <span className="text-gray-800 font-medium">62701</span>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">KYC Status:</span>
                  <span className="text-gray-800 font-medium">Verified (Level 2)</span>
                </p>
              </div>
            </div>
  
            {/* Additional Contact Information Section */}
            <div className="bg-white p-4 sm:p-6 lg:px-15 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">Additional Contact Information</h4>
              <div className="space-y-3">
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Emergency Contact Name:</span>
                  <span className="text-gray-800 font-medium">Jane Doe</span>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Emergency Contact Number:</span>
                  <span className="text-gray-800 font-medium">+1 (555) 987-6543</span>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Preferred Contact Method:</span>
                  <span className="text-gray-800 font-medium">Email</span>
                </p>
              </div>
            </div>
  
            {/* User Documents Section */}
            <div className="bg-white p-4 sm:p-6 lg:px-15 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">User Documents</h4>
              <div className="space-y-3">
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Identification Number:</span>
                  <span className="text-gray-800 font-medium">Uploaded</span>
                  <button className="text-blue-600 hover:underline">View</button>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Driver License:</span>
                  <span className="text-gray-800 font-medium">Uploaded</span>
                  <button className="text-blue-600 hover:underline">View</button>
                </p>
                <p className="flex justify-between text-sm sm:text-lg">
                  <span className="text-gray-600 font-semibold">Proof of Address:</span>
                  <span className="text-gray-800 font-medium">Uploaded</span>
                  <button className="text-blue-600 hover:underline">View</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
  