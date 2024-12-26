import React from 'react';

const Profile: React.FC = () => {
  // Mock profile data
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    accountCreated: '2023-10-12',
    profilePicture: '/profile-pic.jpg', // Replace with actual path
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Profile</h3>
      <div className="flex items-center space-x-6">
        <img
          src={userProfile.profilePicture}
          alt="Profile Picture"
          className="w-20 h-20 rounded-full border-2 border-gray-300"
        />
        <div className="space-y-2">
          <div>
            <span className="text-sm text-gray-500">Name</span>
            <p className="text-lg font-semibold text-gray-800">{userProfile.name}</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Email</span>
            <p className="text-lg font-semibold text-gray-800">{userProfile.email}</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Account Created</span>
            <p className="text-lg font-semibold text-gray-800">{userProfile.accountCreated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
