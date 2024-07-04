import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserView from './components/UserView';
import UserSettings from './shared/UserSettings';
import Sidebar from './components/Sidebar'; // Ajusta la ruta según tu estructura de carpetas
import { ProfileProvider } from './context/ProfileProvider'; 

const App: React.FC = () => {
  return (
    <ProfileProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-100">
          <Sidebar />
          <div className="w-3/4">
            <Routes>
              <Route path="/perfil" element={<UserView />} />
              <Route path="/configuraciones" element={<UserSettings />} />
              <Route path="/" element={<UserView />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ProfileProvider>
  );
};

export default App;
