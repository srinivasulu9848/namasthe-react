import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";

const AppStore = configureStore({
    reducer: {
        cart: cardReducer
    }
});

export default AppStore;