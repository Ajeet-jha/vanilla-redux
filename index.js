import { createStore} from 'redux';

const initialState = {
    age: 21
}

const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    }
    switch (action.type) {
        case "ADD_AGE":
            newState.age += action.val;
            return {
                ...newState
            }
            break;

        case "SUB_AGE":
            newState.age -= action.val;
            return {
                ...newState
            }
            break;
        default:
            return {
                ...state
            }
            break;
    }
}

const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: "ADD_AGE",
    val: 12
})
store.dispatch({
    type: "SUB_AGE",
    val: 10
})