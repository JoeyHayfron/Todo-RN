import {combineReducers} from 'redux'
import {UIReducer} from './ui/ui.reducer'

const AppReducer = combineReducers({
    ui: UIReducer,
})

export default AppReducer;