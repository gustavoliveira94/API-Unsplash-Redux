import { unsplash } from './utils/api'

export const loadDataRequestCol1 = () => {
    return {
        type: 'LOAD_DATA_REQUEST1'
    }
}

export const loadDataSuccessCol1 = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS1',
        col1: data
    }
}

export const loadDataFailureCol1 = (error) => {
    return {
        type: 'LOAD_DATA_FAILURE1',
        error
    }
}

export const loadDataCol1 = () => {
    return dispatch => {
        dispatch(loadDataRequestCol1())
        unsplash.photos.listPhotos(1, 30, "latest")
            .then(response => response.json())
            .then((data) => dispatch(loadDataSuccessCol1(data)))
            .catch(error => dispatch(loadDataFailureCol1(error)))
    }
}

export const loadDataRequestCol2 = () => {
    return {
        type: 'LOAD_DATA_REQUEST2'
    }
}

export const loadDataSuccessCol2 = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS2',
        col2: data
    }
}

export const loadDataFailureCol2 = (error) => {
    return {
        type: 'LOAD_DATA_FAILURE0',
        error
    }
}

export const loadDataCol2 = () => {
    return dispatch => {
        dispatch(loadDataRequestCol2())
        unsplash.photos.listPhotos(2, 30, "latest")
            .then(response =>response.json())
            .then((data) => dispatch(loadDataSuccessCol2(data)))
            .catch(error => dispatch(loadDataFailureCol2(error)))
    }
}

export const loadDataRequestCol3 = () => {
    return {
        type: 'LOAD_DATA_REQUEST3'
    }
}

export const loadDataSuccessCol3 = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS3',
        col3: data
    }
}

export const loadDataFailureCol3 = (error) => {
    return {
        type: 'LOAD_DATA_FAILURE3',
        error
    }
}

export const loadDataCol3 = () => {
    return dispatch => {
        dispatch(loadDataRequestCol3())
        unsplash.photos.listPhotos(3, 30, "latest")
            .then(response =>response.json())
            .then((data) => dispatch(loadDataSuccessCol3(data)))
            .catch(error => dispatch(loadDataFailureCol3(error)))
    }
}

export const loadDataRequestSearch1 = () => {
    return {
        type: 'LOAD_DATA_SEARCH_REQUEST1'
    }
}

export const loadDataSuccessSearch1 = (data) => {
    return {
        type: 'LOAD_DATA_SEARCH_SUCCESS1',
        search1: data
    }
}

export const loadDataFailureSearch1 = (error) => {
    return {
        type: 'LOAD_DATA_SEARCH_FAILURE1',
        error
    }
}

export const loadDataSearch1 = (data) => {
    return dispatch => {
        dispatch(loadDataRequestSearch1())
        unsplash.search.photos(data, 1, 30)
            .then(response =>response.json())
            .then((data) => dispatch(loadDataSuccessSearch1(data.results)))
            .catch(error => dispatch(loadDataFailureSearch1(error)))
    }
}

export const loadDataRequestSearch2 = () => {
    return {
        type: 'LOAD_DATA_SEARCH_REQUEST2'
    }
}

export const loadDataSuccessSearch2 = (data) => {
    return {
        type: 'LOAD_DATA_SEARCH_SUCCESS2',
        search2: data
    }
}

export const loadDataFailureSearch2 = (error) => {
    return {
        type: 'LOAD_DATA_SEARCH_FAILURE2',
        error
    }
}

export const loadDataSearch2 = (data) => {
    return dispatch => {
        dispatch(loadDataRequestSearch2())
        unsplash.search.photos(data, 2, 30)
            .then(response =>response.json())
            .then((data) => dispatch(loadDataSuccessSearch2(data.results)))
            .catch(error => dispatch(loadDataFailureSearch2(error)))
    }
}

export const loadDataRequestSearch3 = () => {
    return {
        type: 'LOAD_DATA_SEARCH_REQUEST3'
    }
}

export const loadDataSuccessSearch3 = (data) => {
    return {
        type: 'LOAD_DATA_SEARCH_SUCCESS3',
        search3: data
    }
}

export const loadDataFailureSearch3 = (error) => {
    return {
        type: 'LOAD_DATA_SEARCH_FAILURE3',
        error
    }
}

export const loadDataSearch3 = (data) => {
    return dispatch => {
        dispatch(loadDataRequestSearch3())
        unsplash.search.photos(data, 3, 30)
            .then(response =>response.json())
            .then((data) => dispatch(loadDataSuccessSearch3(data.results)))
            .catch(error => dispatch(loadDataFailureSearch3(error)))
    }
}