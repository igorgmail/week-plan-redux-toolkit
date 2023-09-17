import React, { useCallback, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { useCheckDate } from './Components/hooks/useCheckDate';
import { setName } from './store/slices/configSlice'
import { authStatus } from './store/slices/configSlice'
import './App.css';

import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import LoginPage from './Components/UserLogin/LoginPage';

function App() {
  console.log("-----Render APP");

  const dispatch = useDispatch()
  // const appConfigure = useSelector((store) => store.appConfig)
  // const tasks = useSelector((store) => store.tasks)
  const firstVisit = useSelector((store) => store.appConfig.visit)
  console.log("▶ ⇛ firstVisit:", firstVisit);
  // const didUpdate = useSelector((store) => store.appConfig.didUpdate)

  // const { checkDateHandler } = useCheckDate()

  // const setDefaultLocalStorage = useCallback(() => localStorage.setItem('wp_tasks', JSON.stringify(tasks)), [tasks])

  // useEffect(() => {
  //   setDefaultLocalStorage()
  // }, [setDefaultLocalStorage])


  useEffect(() => {
    const abortController = new AbortController();
    dispatch(authStatus(abortController))
    return () => abortController.abort()
  }, [dispatch])


  return (
    <>
      {/* {firstVisit ? (<Navigate to='/home' replace={true} />) : <Navigate to='/main' replace={true} />} */}

    <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={firstVisit ? <Layout /> : <Main />} >
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

    </Routes>
    </>

  );
}

export default App;
