import React from 'react';
import { MdError } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <div className="container bg-transparent mt-5 text-center text-light">
      <h2>Ops! La pagina che hai cercato non esiste!</h2>
      <MdError size={50} />
      <h5 className="mt-4">
        Ritorna alla
        <Link to={'/home'} className="bg-danger ms-2 p-1 rounded-3">
          {' '}
          Home{' '}
        </Link>
      </h5>
    </div>
  );
};

export default Errorpage;
