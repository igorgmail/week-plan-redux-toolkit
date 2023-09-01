const updateTime = 24;

const checkTodayTaskDate = (date) => {
  const dataDead = new Date(date).setHours(updateTime, 0, 0, 0);
  const different = Date.now() - dataDead;
  if (different > 24 * 60 * 60 * 1000) {
    return true // Переносим в прошлое
  } else {
    return false // не трогаем
  }
}

const checkTomorrowTaskDate = (date) => {
  const dataDead = new Date(date).setHours(updateTime, 0, 0, 0);
  const different = Date.now() - dataDead
  const oneDay = 24 * 60 * 60 * 1000;
  if (different < 0) {
    return 0 // Оставляем не трогаем
  }
  if (different > 0 && different < oneDay) {
    return 1 // Переносим на сегодня
  }
  if (different > oneDay) {
    return 2 // Переносим в прошлое
  }
}



export default function checkDate(date) {

  const checkDay = checkTodayTaskDate(date)
  console.log("▶ ⇛ checkDay:", checkDay);
  const checkTomorrow = checkTomorrowTaskDate(date)
  console.log("▶ ⇛ checkTomorrow:", checkTomorrow);


  // const dataDead = new Date(date);
  // dataDead.setHours(updateTime, 0, 0, 0); // Тестовая дата в 24-00
  // console.log("▶ ⇛ dataDead:", new Date(dataDead));

  // const different = dataDead - Date.now() // разница
  // console.log("▶ ⇛ Разница", different);

  // const hours = Math.floor(different / 3600000);
  // const remainingMillisecondsAfterHours = different % 3600000;

  // const minutes = Math.floor(remainingMillisecondsAfterHours / 60000);
  // const remainingMillisecondsAfterMinutes = remainingMillisecondsAfterHours % 60000;
  // const seconds = Math.floor(remainingMillisecondsAfterMinutes / 1000);

  // console.log(`Часы: ${hours}, Минуты: ${minutes}, Секунды: ${seconds}`);


  // return different > 0 // Если срок вышел то true || false
}