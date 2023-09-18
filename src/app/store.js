import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
// import counterReducer from '../slices/counterSlice'
import searchFieldReducer, {
  updateSearchField,
  resetSearchField,
} from '../slices/searchFieldSlice';
import robotsReducer from '../slices/robotsSlice';
import routeReducer, { changeRoute } from '../slices/routeSlice';

// middleware listeners para ver el cambio de los estados
// según los reducers
const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: updateSearchField,

  effect: async (action, listenerApi) => {
    console.log('Update on SearchField: ', action.payload);
  },
});

listenerMiddleware.startListening({
  actionCreator: resetSearchField,

  effect: async (action, listenerApi) => {
    console.log('Reseted on SearchField: ');
  },
});

listenerMiddleware.startListening({
  actionCreator: changeRoute,

  effect: async (action, listenerApi) => {
    console.log('Route state: ', action.payload);
  },
});

export default configureStore({
  reducer: {
    // counter: counterReducer,
    searchField: searchFieldReducer,
    robots: robotsReducer,
    routeMap: routeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
