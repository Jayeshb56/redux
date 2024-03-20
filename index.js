const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = "BUY_ICECREAM"



function buyCake() {
 return{
    type:BUY_CAKE,
    info: 'First redux action'
}
}

function buyIceCream() {
    return{
        type: BUY_ICECREAM,
        info: 'Secone redux action'
    }
}


const initialCakeState ={
    numberOfCake : 10
}

const initailIceCreamState = {
    numberOfIceCream : 20
}



const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
       case BUY_CAKE : return {
           ...state,
           numberOfCake : state.numberOfCake - 1
       }
      
       default: return state
    }
   }

   const iceCreamReducer = (state = initailIceCreamState, action) => {
    switch(action.type) {
       case BUY_ICECREAM : return {
           ...state,
           numberOfIceCream : state.numberOfIceCream - 1
       }
      
       default: return state
    }
   }
const rootReducers = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducers)
console.log("initail state", store.getState())
const unSubscribe = store.subscribe(() => console.log("update state",store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unSubscribe()