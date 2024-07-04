import React, { useState, useEffect } from 'react';
import AvatarModal from '../shared/AvatarModal';
import {
  avatar1, avatar2, avatar3, avatar4, avatar5,
  avatar6, avatar7, avatar8, avatar9, avatar10
} from '../assets/avatar';
import { useProfile } from '../context/ProfileProvider';

const avatars = [
  avatar1, avatar2, avatar3, avatar4, avatar5,
  avatar6, avatar7, avatar8, avatar9, avatar10
];

const UserSettings: React.FC = () => {
  const { profile, setProfile } = useProfile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedAvatar = localStorage.getItem('avatar');
    if (savedAvatar) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        avatar: savedAvatar
      }));
    }
  }, [setProfile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setProfile({ ...profile, [id]: value });
  };

  const handleAvatarSelect = (avatar: string) => {
    setProfile({ ...profile, avatar });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    localStorage.setItem('avatar', profile.avatar);
    alert('Cambios guardados con éxito');
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold mb-4">Configuración de Cuenta</h2>
      <div className="flex flex-col items-center mb-4">
        <img src={profile.avatar} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
        <button onClick={openModal} className="py-2 px-4 bg-blue-500 text-white rounded mb-2">Cambiar Avatar</button>
      </div>
      <div className="w-full max-w-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input type="text" value={profile.firstName} readOnly className="w-full px-3 py-2 border rounded bg-gray-200" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Apellido</label>
            <input type="text" value={profile.lastName} readOnly className="w-full px-3 py-2 border rounded bg-gray-200" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Correo</label>
            <input type="email" id="email" value={profile.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Actividad u Oficio</label>
            <input type="text" id="occupation" value={profile.occupation} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Región</label>
            <input type="text" id="region" value={profile.region} readOnly className="w-full px-3 py-2 border rounded bg-gray-200" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Comuna</label>
            <input type="text" id="comuna" value={profile.comuna} readOnly className="w-full px-3 py-2 border rounded bg-gray-200" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Dirección</label>
            <input type="text" id="address" value={profile.address} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Número de Hogar</label>
            <input type="text" id="houseNumber" value={profile.houseNumber} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
        </div>
        <button onClick={handleSave} className="w-full py-2 px-4 bg-blue-500 text-white rounded">Guardar Ahora</button>
      </div>
      {isModalOpen && (
        <AvatarModal
          avatars={avatars}
          selectedAvatar={profile.avatar}
          onSelect={handleAvatarSelect}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default UserSettings;
