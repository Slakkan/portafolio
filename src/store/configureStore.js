import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import authReducer from '../reducers/auth'
import projectsReducer from '../reducers/projects'
import modalsReducer from '../reducers/modals'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            projects: projectsReducer,
            modals: modalsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}


