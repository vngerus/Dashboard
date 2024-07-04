import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="w-1/4 bg-white shadow-md min-h-screen">
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Configuración</h2>
                <ul>
                    <li className="mb-2"><Link to="/perfil" className="text-blue-500">Perfil Público</Link></li>
                    <li className="mb-2"><Link to="/configuraciones" className="text-gray-700">Configuración de Cuenta</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
