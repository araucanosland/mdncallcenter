import * as types from '../constants/GestionActionTypes';

const initialState = {
    isLoading: false,
    error: false,
    data: {}
}



const oficinas = (state = initialState, action) => {

/*console.log("Reducer Busqueda!!!");
console.log("-----State")
console.log(state);
console.log("-----Action");
console.log(action);
console.log("###############################");*/


  switch (action.type) {
    case types.FECHT_OFFICES :
      return {
        isLoading: true,
        error: false
      }
    case types.OFFICES_FETCHED_SUCCESS :
      return {
        isLoading: false,
        error: false,
        data: action.data
      }
    case types.OFFICES_FETCHED_ERROR :
      return {
        isLoading: false,
        error: true,
        data: action.data
      }
    default:
      return state;
  }
}

export default oficinas
