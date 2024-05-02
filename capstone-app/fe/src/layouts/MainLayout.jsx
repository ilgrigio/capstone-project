import React from 'react';
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';

const MainLayout = ({ children }) => {
  return (
    <>
      <Main />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
