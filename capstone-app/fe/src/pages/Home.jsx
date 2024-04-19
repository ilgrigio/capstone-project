import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/hero/Hero';
import ExplorerMenu from '../components/esploxerMenu/ExplorerMenu';

const Home = () => {
  return (
    <MainLayout>
      <ExplorerMenu />
    </MainLayout>
  );
};

export default Home;
