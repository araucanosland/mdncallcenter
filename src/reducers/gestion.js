import * as types from '../constants/GestionActionTypes';

const initialState = {
    gestionData: {},
    isLoading: false,
    error: false,
    data: {}
}



const gestion = (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_MANAGEMENT :
      return {
        isLoading: true,
        error: false
      }
    case types.ADD_MANAGEMENT_SUCCESS :
      return {
        isLoading: false,
        error: false,
        data: action.data
      }
    case types.ADD_MANAGEMENT_ERROR :
      return {
        isLoading: false,
        error: true,
        data: action.data
      }
    default:
      return state;
  }
}

export default gestion
