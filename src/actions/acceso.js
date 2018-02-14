import * as types from '../constants/AccesoActionTypes';
import axios from 'axios';
import store from '../store'


const requestLogin = (userdata) => ({
  type: types.FETCH_LOGIN,
  userdata: userdata
})

const reciveLogin = json => ({
    type: types.LOGIN_COMPLETED_SUCCESS,
    data: json
})

const reciveError = json => ({
    type: types.LOGIN_COMPLETED_ERROR,
    data: json
})


export const handleLogin = userdata => {

  return function(dispatch){
      dispatch(requestLogin(userdata));
      return axios({
        url: 'http://localhost/motor/api/Auth/call/authenticate',
        method:'POST',
        data: userdata,
        responseType: 'json',
        timeout: 20000
      }).then(function(response){
        dispatch(reciveLogin(response.data)); 
      }).catch(function(response){
        dispatch(reciveError(response.data));
	  })
  }
}