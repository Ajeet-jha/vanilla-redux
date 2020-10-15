import { createStore} from './node_modules/redux';
const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
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


app.get('/', (req, res) => {
    res.sendFile(app.use(express.static('public')));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})