import { configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter";
import todoReducer from "./todos";

const store = configureStore({
    reducer: { 
        counter: counterReducer, 
        todos: todoReducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default store;