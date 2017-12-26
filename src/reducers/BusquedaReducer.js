import * as types from '../constants/BuscadorActionTypes';

const initialState = {
    AfiliadoRut: '',
    isLoading: false,
    error: false,
    data: {},
    showGst: false,

}



const busqueda = (state = initialState, action) => {

/*console.log("Reducer Busqueda!!!");
console.log("-----State")
console.log(state);
console.log("-----Action");
console.log(action);
console.log("###############################");*/


  switch (action.type) {
    case types.HANDLE_SEARCH :
      return {
        AfiliadoRut: action.AfiliadoRut,
        isLoading: true,
        error: false
      }
    case types.SEARCH_COMPLETED_SUCCESS :
      return {
        isLoading: false,
        error: false,
        data: action.data,
        showGst: true
      }
    case types.SEARCH_COMPLETED_ERROR :
      return {
        isLoading: false,
        error: true,
        data: action.data
      }
    default:
      return state;
  }
}

export default busqueda
