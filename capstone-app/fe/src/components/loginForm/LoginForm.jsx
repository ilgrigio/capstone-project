import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import './LoginForm.css';

const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeInput = e => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };
  console.log(loginFormData);

  // Submit event
  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginFormData),
        }
      );
      const data = await response.json();
      console.log(data.token);
      if (data.token) {
        localStorage.setItem('auth', JSON.stringify(data.token));
        setTimeout(() => {
          setLoading(false);
          navigate('/');
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onSignupClick = () => {
    navigate('/signup');
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="container">
          <div className="row justify-content-center g-1">
            <div className="col-md-4">
              <form onSubmit={onSubmit} className="card-body cardbody-color">
                <div className="text-center">
                  <img
                    src="https://picsum.photos/340/340"
                    className="login img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>

                <div className="mb-3">
                  <input
                    onChange={onChangeInput}
                    type="email"
                    className="form-control"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Inserisci la tua email..."
                  />
                </div>

                <div className="mb-3">
                  <input
                    onChange={onChangeInput}
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Inserisci la tua password"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn__send btn btn-primary mb-3"
                  >
                    Login
                  </button>
                </div>

                <div
                  onClick={onSignupClick}
                  id="help__login"
                  className="form-text text-center mb-5 text-light"
                >
                  Non sei registrato?
                  <a href="#" className="text-light fw-bold ms-2">
                    Registrati ora!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
