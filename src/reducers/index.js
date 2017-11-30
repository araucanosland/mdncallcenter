import { combineReducers } from 'redux'
import busquedaReducer from './busquedaReducer'
import estados from './estados'
import gestion from './gestion'

const rootReducer = combineReducers({
  busquedaReducer,
  estados,
  gestion
})

export default rootReducer
