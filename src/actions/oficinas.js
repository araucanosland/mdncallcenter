import * as types from '../constants/GestionActionTypes';
import axios from 'axios';

const requestOficinas = () => ({
  type: types.FECHT_OFFICES
})

const reciveOficinas = json => ({
    type: types.OFFICES_FETCHED_SUCCESS,
    data: json
})

const reciveError = json => ({
    type: types.OFFICES_FETCHED_ERROR,
    data: json
})

export const oficinas = () => {
  return function(dispatch){
      dispatch(requestOficinas());
      return axios({
        url: '/oficinas',
        method:'get',
        responseType: 'json',
        timeout: 20000
      }).then(function(response){
        dispatch(reciveOficinas(response.data));
      }).catch(function(response){
				dispatch(reciveError(response.data));
			})
  }
}
