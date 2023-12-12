import {configureStore} from '@reduxjs/toolkit'
import  userDetail from '../features/gitUserSlice';

export const store = configureStore(
  {
    reducer: {
      app: userDetail,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);