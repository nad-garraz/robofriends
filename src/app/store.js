import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../slices/counterSlice'
import searchFieldReducer from '../slices/searchFieldSlice'
import robotsReducer from '../slices/robotsSlice'
import routeReducer from '../slices/routeSlice'

export default configureStore({
  reducer: {
    // counter: counterReducer,
    searchField: searchFieldReducer,
    robots: robotsReducer,
    routeMap: routeReducer,
  },
})
