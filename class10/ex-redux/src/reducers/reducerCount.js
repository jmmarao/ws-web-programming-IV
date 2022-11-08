// Receives an action and current state and calculates the new state

// Action list
import { COUNT_INCREASE } from "../actions/actionTypes";

const initState = {
    score: 0
}

// Reducer is a function that recieves an action (based on current state), 
// then it process the new state and return
export const reducerCount = (state = initState, action) => {
    console.log("New action...");
    switch (action.type) {
        case COUNT_INCREASE:
            return {
                score: (state.score + 1)
            }
        default:
            return state;
    }
};