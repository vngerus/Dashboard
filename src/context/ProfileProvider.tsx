import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Profile {
    firstName: string;
    lastName: string;
    rut: string;
    age: string;
    email: string;
    occupation: string;
    region: string;
    comuna: string;
    avatar: string;
    address: string;
    houseNumber: string;
}

interface ProfileContextProps {
    profile: Profile;
    setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error('useProfile must be used within a ProfileProvider');
    }
    return context;
};

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [profile, setProfile] = useState<Profile>({
        firstName: 'Nicolas',
        lastName: 'Herrera',
        rut: '12345678-9',
        age: '30',
        email: 'ejemplo@gmail.com',
        occupation: 'Developer',
        region: 'Región Metropolitana',
        comuna: 'Santiago',
        avatar: '/src/assets/avatar/avatar-1.svg',
        address: 'Avenida Siempre Viva',
        houseNumber: '742',
    });

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};
