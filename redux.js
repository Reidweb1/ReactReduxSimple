import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux'

export const testAction = () => ({
    type: 'TEST_ACTION',
})

export const testReducer = (state = {}, action) => {
    switch (action.type) {
        case 'TEST_ACTION':
            return {
                content: 'Hello World'
            }
        default:
            return state
    }
}

export const reducers = combineReducers({
    testReducer
})

export const configureStore = (initialState = {}) => {
    const store = createStore(
        reducers,
        initialState
    )
    return store
}

export const store = configureStore()
