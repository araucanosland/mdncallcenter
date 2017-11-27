import * as types from '../constants/BuscadorActionTypes';

export const  busquedaRut = AfiliadoRut => (dispatch, getState) => {
  dispatch({
    type: types.HANDLE_SEARCH,
    AfiliadoRut
  })
}
