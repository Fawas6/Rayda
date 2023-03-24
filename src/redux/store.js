import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { DataApi } from './apiSlice'

export const store = configureStore({
        reducer: {
            [DataApi.reducerPath]: DataApi.reducer,
        },
        middleware: (gDM) => gDM().concat(DataApi.middleware),
        devTools: true,
    })
    /*const reducer = combineReducers({
        [DataApi.reducerPath]: DataApi.reducer,
    })

    export const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(DataApi.middleware),
    });*/

setupListeners(store.dispatch)