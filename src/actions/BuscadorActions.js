import * as types from '../constants/BuscadorActionTypes';
import axios from 'axios';

const requestAfiliado = (AfiliadoRut) => ({
    type: types.HANDLE_SEARCH,
    AfiliadoRut
})

const reciveAfidata = json => ({
    type: types.SEARCH_COMPLETED_SUCCESS,
    data: json
})

const reciveError = json => ({
    type: types.SEARCH_COMPLETED_ERROR,
    data: json
})

export const  busquedaRut = AfiliadoRut => {
  return function(dispatch){
      dispatch(requestAfiliado(AfiliadoRut));
      return axios({
        url: 'http://localhost/motor/api/stage/call-center/afiliado-search/' + AfiliadoRut,
        method:'get',
        responseType: 'json',
        timeout: 20000
      }).then(function(response){
        dispatch(reciveAfidata(response.data));
      }).catch(function(response){
				dispatch(reciveError(response.data));
			})
  }
}
