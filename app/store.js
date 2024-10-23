const cofigureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger');

const userReducer = require('../features/user/userSlice')
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/iceCreamSlice');

const logger = reduxLogger.createLogger()

const store = cofigureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer,
    },
    // middleware : (getDefaultMiddleWare)=>getDefaultMiddleWare().concat(logger),
})

module.exports = store