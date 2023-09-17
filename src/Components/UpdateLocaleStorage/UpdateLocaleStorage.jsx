import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function UpdateLocaleStorage({ children }) {
  console.log("---Render UpdateLocaleStorage");

  const appConfig = useSelector((store) => store.appConfig)
  const tasks = useSelector((store) => store.tasks)


  const storeAppUpdate = useCallback(() => {
    localStorage.setItem('wp_config', JSON.stringify(appConfig));
  }, [appConfig])

  const storeTasksUpdate = useCallback(() => {
    localStorage.setItem('wp_tasks', JSON.stringify(tasks));

  }, [tasks])

  useEffect(() => {
    storeAppUpdate()
  }, [appConfig, storeAppUpdate])

  useEffect(() => {
    storeTasksUpdate()
  }, [tasks, storeTasksUpdate])


  return (
    <>{children}</>
  )
}
