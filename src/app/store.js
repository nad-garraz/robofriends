import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import searchFieldReducer from '../features/searchField/searchFieldSlice'
import robotsReducer from '../features/robots/robotsSlice'

export default configureStore({
  reducer: {
    // counter: counterReducer,
    searchField: searchFieldReducer,
    robots: robotsReducer,
  },
})
