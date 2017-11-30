import * as types from '../constants/GestionActionTypes';
import axios from 'axios';

const requestGestion = gestionData => ({
  type: types.ADD_MANAGEMENT,
  gestionData
})

const reciveGestion = json => ({
    type: types.ADD_MANAGEMENT_SUCCESS,
    data: json
})

const reciveError = json => ({
    type: types.ADD_MANAGEMENT_ERROR,
    data: json
})

export const saveGestion = gestionData => {
  return function(dispatch){
      dispatch(requestGestion(gestionData));
      return axios({
        url: '/registrar-gestion',
        method:'POST',
        data: gestionData,
        responseType: 'json',
        timeout: 20000
      }).then(function(response){
        dispatch(reciveGestion(response.data));
      }).catch(function(response){
				dispatch(reciveError(response.data));
			})
  }
}
