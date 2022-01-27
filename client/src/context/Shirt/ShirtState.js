import { useReducer } from 'react'

import axiosClientConnect from './../../config/axios'

import ShirtContext from './ShirtContext'
import ShirtReducer from './ShirtReducer'

import {
  GET_SHIRTS,
  POST_SHIRT,
  DELETE_SHIRT,
  PUT_SHIRT,
} from '../types/actionType'

const ShirtState = (props) => {
  const initialState = {
    shirts: [],
    msg: {},
  }

  const [globalState, dispatch] = useReducer(ShirtReducer, initialState)

  const loadShirts = async () => {
    try {
      const getShirts = await axiosClientConnect.get('/shirt')

      dispatch({
        type: GET_SHIRTS,
        payload: getShirts.data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const addShirt = async (dataAddShirt) => {
    try {
      const postShirt = await axiosClientConnect.post(
        '/shirt/create',
        dataAddShirt
      )

      await loadShirts()

      dispatch({
        type: POST_SHIRT,
        payload: postShirt.data.msg,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const editShirt = async (dataEditShirt, id) => {
    try {
      const putShirt = await axiosClientConnect.put(
        `/shirt/${id}/update`,
        dataEditShirt
      )

      await loadShirts()

      dispatch({
        type: PUT_SHIRT,
        payload: putShirt.data.msg,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const deleteShirt = async (idToDelete) => {
    try {
      const deleteShirt = await axiosClientConnect.delete(
        `/shirt/${idToDelete}/delete`
      )

      await loadShirts()

      dispatch({
        type: DELETE_SHIRT,
        payload: deleteShirt.data.msg,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ShirtContext.Provider
      value={{
        shirts: globalState.shirts,
        loadShirts,
        addShirt,
        editShirt,
        deleteShirt,
        msg: globalState.msg,
      }}
    >
      {props.children}
    </ShirtContext.Provider>
  )
}

export default ShirtState
