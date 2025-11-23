import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      width: '100%'
    }}>
      <Navbar />
      <main style={{ flex: 1, width: '100%', paddingTop: '90px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 