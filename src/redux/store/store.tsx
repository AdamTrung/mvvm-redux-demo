import { Tuple, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import TodosReducer from "../slices/todoSlice";
import IdReducer from "../slices/idSlice";

export const store = configureStore({
    reducer: {
        todos: TodosReducer,
        ids: IdReducer,
    },
    middleware: () => new Tuple(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;