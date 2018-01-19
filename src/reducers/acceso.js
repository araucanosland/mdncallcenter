import * as types from '../constants/AccesoActionTypes';

const initialState = {
    isLoading: false,
    error: false,
    data: {}
}



const acceso = (state = initialState, action) => {


/*console.log("Reducer acceso!!!");
console.log("-----State")
console.log(state);
console.log("-----Action");
console.log(action);
console.log("###############################");*/


  switch (action.type) {
    case types.FETCH_LOGIN :
      return {
        isLoading: true,
        error: false
      }
    case types.LOGIN_COMPLETED_SUCCESS :
      return {
        isLoading: false,
        error: false,
        data: action.data
      }
    case types.LOGIN_COMPLETED_ERROR :
      return {
        isLoading: false,
        error: true,
        data: action.data
      }
    default:
      return state;
  }
}

export default acceso
