import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";

import './App.css';

import Home from './Components/Home/Home';

function App() {
  console.log("-----Render APP");

  const appConfigure = useSelector((store) => store.appConfig)
  const tasks = useSelector((store) => store.tasks)


  function setDefaultLocalStorage() {
    localStorage.setItem('wp_tasks', JSON.stringify(tasks))
    // const userLanguage = navigator.language || navigator.userLanguage;

    // console.log("LANG", userLanguage);
    const appConfig = localStorage.getItem('wp_config')
    if (!appConfig) {
      localStorage.setItem('wp_config', JSON.stringify(appConfigure))
    }
  }


  useEffect(() => {
    setDefaultLocalStorage()
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
