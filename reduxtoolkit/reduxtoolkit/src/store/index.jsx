import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlices";  

const Store = configureStore({
    reducer: {
        users: userReducer  
    }
});

export default Store;
