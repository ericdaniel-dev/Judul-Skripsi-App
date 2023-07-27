import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from '../component/header.jsx';
import Introduction from '../component/introduction.jsx';
import Daftarjudul from '../component/daftarjudul.jsx';
import LoginPage from '../src/pages/login.jsx';
import RegisterPage from '../src/pages/register.jsx';

function App(props) {
  return (
    <>
    <div id="container" className="p-0 md:p-2 flex flex-col justify-center items-center gap-2">
      <Header/>
      <main className="w-full flex flex-col gap-2">
        {props.pages}
      </main>
    </div>   
    </>
  )
}

export default App;
