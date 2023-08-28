// boilerPlate
const SET_LANG = 'SET_LANG'
const SET_USER_NAME = 'SET_USER_NAME'

const initState = { lang: 'RU', user: null } // Вкладка Сегодня

export function setLang(payload) {
  return {
    type: SET_LANG,
    payload,
  }
}
export function setUserName(payload) {
  return {
    type: SET_USER_NAME,
    payload,
  }
}

export default function appConfigReducer(state = initState, action) {

  switch (action.type) {
    case SET_LANG:
      return { ...state, lang: action.payload }

    case SET_USER_NAME:
      return {
        ...state, user: { ...state.user, name: action.payload }
      }


    default:
      return { ...state }
  }

}