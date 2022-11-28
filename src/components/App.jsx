import { React, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './App.styled';
import MainPage from './MainPage/MainPage';
import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CookieConfirmation from './CookieConfirmation/CookieConfirmation';



const App = () => {
  return (
    <>
      <Wrapper>
        <MainPage />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
      </Wrapper>
      <CookieConfirmation />
      <ToastContainer autoClose={3000} position = 'top-right'/>
    </>
    )
};

export default App;