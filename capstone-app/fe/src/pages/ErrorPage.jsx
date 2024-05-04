import React from 'react';
import { MdError } from 'react-icons/md';

const Errorpage = () => {
  return (
    <div className="container bg-transparent mt-5 text-center text-light">
      <h2>Ops! La pagina che hai cercato non esiste!</h2>
      <MdError size={50} />
    </div>
  );
};

export default Errorpage;
