import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
// import { useCheckDate } from './Components/hooks/useCheckDate';

import './App.css';

import Home from './Components/Home/Home';

function App() {
  console.log("-----Render APP");

  // const appConfigure = useSelector((store) => store.appConfig)
  const tasks = useSelector((store) => store.tasks)
  // const didUpdate = useSelector((store) => store.appConfig.didUpdate)

  // const { checkDateHandler } = useCheckDate()

  function setDefaultLocalStorage() {
    localStorage.setItem('wp_tasks', JSON.stringify(tasks))
    // console.log("LANG", userLanguage);
    // const appConfig = localStorage.getItem('wp_config')
    // if (!appConfig) {
    //   localStorage.setItem('wp_config', JSON.stringify(appConfigure))
    // }
  }

  useEffect(() => {
    setDefaultLocalStorage()
  }, [])


  // useEffect(() => {
  //   if (didUpdate) {

  //     checkDateHandler()
  //     console.log("NULL");
  //   }
  // }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
