import {
  GET_SHIRTS,
  POST_SHIRT,
  DELETE_SHIRT,
  PUT_SHIRT,
  RESET_MSG
} from '../types/actionType'

const reducer = (globalState, action) => {
  switch (action.type) {
    case POST_SHIRT:
      return {
        ...globalState,
        msg: action.payload,
      }

    case GET_SHIRTS:
      return {
        ...globalState,
        shirts: action.payload,
      }

    case PUT_SHIRT:
      return {
        ...globalState,
        msg: action.payload,
      }

    case DELETE_SHIRT:
      return {
        ...globalState,
        msg: action.payload,
      }

    case RESET_MSG:
      return {
        ...globalState,
        msg: ""
      }

    default:
      return globalState
  }
}

export default reducer
