import * as types from '../constants/BuscadorActionTypes';

const busqueda = (state, action) => {
  switch (action.type) {
    case types.HANDLE_SEARCH :
      return action.handleSearch()
    default:
      return {
        s: 0
      }
  }
}

export default busqueda
