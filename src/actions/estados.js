import * as types from '../constants/GestionActionTypes';
import axios from 'axios';

const requestEstado = () => ({
  type: types.FECHT_STATUS
})

const reciveEstado = json => ({
    type: types.STATUS_FETCHED_SUCCESS,
    data: json
})

const reciveError = json => ({
    type: types.STATUS_FETCHED_ERROR,
    data: json
})

export const estados = () => {
  return function(dispatch){
      dispatch(requestEstado());
      return axios({
        url: '/estados',
        method:'get',
        responseType: 'json',
        timeout: 20000
      }).then(function(response){
        dispatch(reciveEstado(response.data));
      }).catch(function(response){
				dispatch(reciveError(response.data));
			})
  }
}
