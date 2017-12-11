import { combineReducers } from 'redux'
import busquedaReducer from './busquedaReducer'
import estados from './estados'
import gestion from './gestion'
import oficinas from './oficinas'

const rootReducer = combineReducers({
  busquedaReducer,
  estados,
  gestion,
  oficinas
})

export default rootReducer
