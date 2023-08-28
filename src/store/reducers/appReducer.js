// boilerPlate
const SET_PAGE = 'SET_PAGE'
const SET_MENU = 'SET_MENU'

const initState = { page: 2, menu: 'all' } // Вкладка Сегодня

export function setPage(payload) {
  return {
    type: SET_PAGE,
    payload,
  }
}

export function setMenu(payload) {
  return {
    type: SET_MENU,
    payload,
  }
}

export default function appReducer(state = initState, action) {

  switch (action.type) {
    case SET_PAGE:
      return { ...state, page: action.payload }
    case SET_MENU:
      return { ...state, menu: action.payload }

    default:
      return { ...state }
  }

}