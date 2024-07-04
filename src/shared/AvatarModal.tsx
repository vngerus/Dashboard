import React from 'react';
import Selector from '../shared/Selector';

interface AvatarModalProps {
  avatars: string[];
  selectedAvatar: string;
  onSelect: (avatar: string) => void;
  onClose: () => void;
}

const AvatarModal: React.FC<AvatarModalProps> = ({ avatars, selectedAvatar, onSelect, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <button onClick={onClose} className="float-right">Cerrar</button>
        <h2 className="text-2xl mb-4">Selecciona un avatar</h2>
        <Selector avatars={avatars} selectedAvatar={selectedAvatar} onSelect={onSelect} />
      </div>
    </div>
  );
};

export default AvatarModal;
