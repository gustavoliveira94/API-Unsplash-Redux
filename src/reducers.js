import { combineReducers } from 'redux'

const INITIAL_STATE = {
    col1: [],
    col2: [],
    col3: [],
    search1: [],
    search2: [],
    search3: [],
    error: [],
    isFetching: false
}

export const dataCol1 = (state = INITIAL_STATE, action) => {
        if (action.type === 'LOAD_DATA_REQUEST1') {
            return {
                isFetching: true,
                col1: []
            }
        }else if (action.type === 'LOAD_DATA_SUCCESS1') {
            return {
                isFetching: false,
                col1: action.col1,     
            }
        } else if (action.type === 'LOAD_DATA_FAILURE1') {
            return {
                isFetching: false,
                error: action.error
            }
        }
    return state
}

export const dataCol2 = (state = INITIAL_STATE, action) => {
    if (action.type === 'LOAD_DATA_REQUEST2') {
        return {
            isFetching: true,
            col2: []
        }
    }else if (action.type === 'LOAD_DATA_SUCCESS2') {
        return {
            isFetching: false,
            col2: action.col2,     
        }
    } else if (action.type === 'LOAD_DATA_FAILURE2') {
        return {
            isFetching: false,
            error: action.error
        }
    }
    return state
}

export const dataCol3 = (state = INITIAL_STATE, action) => {
        if (action.type === 'LOAD_DATA_REQUEST3') {
            return {
                isFetching: true,
                col3: []
            }
        }else if (action.type === 'LOAD_DATA_SUCCESS3') {
            return {
                isFetching: false,
                col3: action.col3,     
            }
        } else if (action.type === 'LOAD_DATA_FAILURE3') {
            return {
                isFetching: false,
                error: action.error
            }
        }
    return state
}

export const dataSearch1 = (state = INITIAL_STATE, action) => {
        if (action.type === 'LOAD_DATA_SEARCH_REQUEST1') {
            return {
                isFetching: true,
                search1: []
            }
        }else if (action.type === 'LOAD_DATA_SEARCH_SUCCESS1') {
            return {
                isFetching: false,
                search1: action.search1
            }
        } else if (action.type === 'LOAD_DATA_SEARCH_FAILURE1') {
            return {
                isFetching: false,
                error: action.error
            }
        }
    return state
}

export const dataSearch2 = (state = INITIAL_STATE, action) => {
    if (action.type === 'LOAD_DATA_SEARCH_REQUEST2') {
        return {
            isFetching: true,
            search2: []
        }
    }else if (action.type === 'LOAD_DATA_SEARCH_SUCCESS2') {
        return {
            isFetching: false,
            search2: action.search2
        }
    } else if (action.type === 'LOAD_DATA_SEARCH_FAILURE2') {
        return {
            isFetching: false,
            error: action.error
        }
    }
return state
}

export const dataSearch3 = (state = INITIAL_STATE, action) => {
    if (action.type === 'LOAD_DATA_SEARCH_REQUEST3') {
        return {
            isFetching: true,
            search3: []
        }
    }else if (action.type === 'LOAD_DATA_SEARCH_SUCCESS3') {
        return {
            isFetching: false,
            search3: action.search3
        }
    } else if (action.type === 'LOAD_DATA_SEARCH_FAILURE3') {
        return {
            isFetching: false,
            error: action.error
        }
    }
return state
}

export default combineReducers({
    dataCol1,
    dataCol2,
    dataCol3,
    dataSearch1,
    dataSearch2,
    dataSearch3
})