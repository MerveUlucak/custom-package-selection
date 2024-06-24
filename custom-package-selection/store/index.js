// store.js

import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers' // rootReducer'ü oluşturmanız gerekecek

const store = configureStore({
  reducer: rootReducer,
})

export default store
