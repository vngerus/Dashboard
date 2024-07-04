import React from 'react';
import { useProfile } from '../context/ProfileProvider';

const UserView: React.FC = () => {
  const { profile } = useProfile();

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Perfil Público</h2>
        <div className="flex flex-col items-center mb-6">
          <img src={profile.avatar} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
          <h3 className="text-xl font-medium">{profile.firstName} {profile.lastName}</h3>
          <p className="text-gray-600">{profile.occupation}</p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Correo</label>
              <div className="text-lg font-light text-gray-800">{profile.email}</div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Actividad u Oficio</label>
              <div className="text-lg font-light text-gray-800">{profile.occupation}</div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Región</label>
              <div className="text-lg font-light text-gray-800">{profile.region}</div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Comuna</label>
              <div className="text-lg font-light text-gray-800">{profile.comuna}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserView;
