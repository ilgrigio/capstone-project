import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/hero/Hero';
import ExplorerMenu from '../components/esploxerMenu/ExplorerMenu';
// import DishForCategory from '../components/dishForCategory/DishForCategory';
const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <MainLayout>
      {/* <DishForCategory category={'secondi'} /> */}
      <Hero />
      <ExplorerMenu category={category} setCategory={setCategory} />
    </MainLayout>
  );
};

export default Home;
