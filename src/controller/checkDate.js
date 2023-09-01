export default function checkDate(date) {
  const updateTime = 24; // 01, 02, 03 , 04 часа ночи

  const dataDead = new Date(date);
  dataDead.setHours(updateTime, 0, 0, 0); // Тестовая дата в 24-00

  const different = dataDead - Date.now() // разница
  console.log("▶ ⇛ Разница", different);
  return different > 0 // Если срок вышел то true || false
}