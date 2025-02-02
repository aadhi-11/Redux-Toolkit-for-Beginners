const store = require('./app/store')
const {cakeActions} = require ('./features/cake/cakeSlice')
const {iceCreamActions} = require('./features/icecream/iceCreamSlice')
const {fetchUsers} = require('./features/user/userSlice')

console.log('Inital state',store.getState());

const unsubScribe = store.subscribe(()=>{
    console.log("Updated state :",store.getState());
    
})

// store.dispatch(cakeActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(5))
// store.dispatch(cakeActions.restocked(5))

store.dispatch(fetchUsers())

// unsubScribe()