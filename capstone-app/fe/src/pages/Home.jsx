import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/hero/Hero';
import ExplorerMenu from '../components/esploxerMenu/ExplorerMenu';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <MainLayout>
      <Hero />
      <ExplorerMenu category={category} setCategory={setCategory} />
    </MainLayout>
  );
};

export default Home;
