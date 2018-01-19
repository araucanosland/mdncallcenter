import { combineReducers } from 'redux'
import busquedaReducer from './busquedaReducer'
import estados from './estados'
import gestion from './gestion'
import oficinas from './oficinas'
import acceso from './acceso'

const rootReducer = combineReducers({
  busquedaReducer,
  estados,
  gestion,
  oficinas,
  acceso
})

export default rootReducer
