import axios from 'axios';

const initialState = {
    duration: 3000,
    timerStarted: false,
    timerEnded: false,
    joke: ''
}

const UPDATE_STARTED = 'UPDATE_STARTED';
const UPDATE_ENDED = 'UPDATE_ENDED';
const UPDATE_JOKE = 'UPDATE_JOKE';

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_STARTED:
            return Object.assign({}, state, {timerStarted: action.payload});
        case UPDATE_ENDED:
            return Object.assign({}, state, {timerEnded: action.payload});
        case UPDATE_JOKE:
            return Object.assign({}, state, {joke: action.payload});
        default:
            return state;
    }
}

//actions
export const startTimer = (val) => {
    return { type: UPDATE_STARTED, payload: val }
}
export const endTimer = (val) => {
    return { type: UPDATE_ENDED, payload: val }
}
export const gotJoke = (val) => {
    return { type: UPDATE_JOKE, payload: val}
}

//redux thunk
export const startTimerAsync = () => {
    return (dispatch) => {
        dispatch(startTimer(true))
        setTimeout(() => {
            dispatch(endTimer(true));
        }, 3000)
    }
}

export const restartTimerAsync = () => {
    return (dispatch) => {
        dispatch(endTimer(false));
        setTimeout(() => {
            dispatch(startTimer(false))
        }, 3000)
        
    }
}

export const getJoke = () => {
    const request = axios.get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'text/plain'
        }
      })
    
      return (dispatch) => {
          request.then((res) => {
            dispatch(gotJoke(res.data))
          })
      }
}

export default reducer