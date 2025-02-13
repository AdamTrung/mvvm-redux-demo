import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "../slices/todoSlice";
import IdReducer from "../slices/idSlice";

export const store = configureStore({
    reducer: {
        todos: TodosReducer,
        ids: IdReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;