// Creating the actions
import { COUNT_INCREASE } from "./actionTypes";
import { COUNT_DECREASE } from "./actionTypes";

// Function that returns the action of the expected type 
const increaseButton = () => {
    console.log("Increase action created");

    return {
        type: COUNT_INCREASE
    }
};

const decreaseButton = () => ({
    type: COUNT_DECREASE
});

export { increaseButton, decreaseButton };