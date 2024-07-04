import React from 'react';

interface AvatarSelectorProps {
    avatars: string[];
    selectedAvatar: string;
    onSelect: (avatar: string) => void;
}

const Selector: React.FC<AvatarSelectorProps> = ({ avatars, selectedAvatar, onSelect }) => {
    return (
        <div className="flex space-x-4">
            {avatars.map((avatar, index) => (
                <img
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index}`}
                    onClick={() => onSelect(avatar)}
                    className={`w-16 h-16 rounded-full cursor-pointer ${selectedAvatar === avatar ? 'border-4 border-blue-500' : 'border'}`}
                />
            ))}
        </div>
    );
};

export default Selector;
