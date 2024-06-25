import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {  
        addUser(state, action) {
            // state.push(action.payload);
        },
        removeUser(state, action) {
            // return state.filter(user => user.id !== action.payload.id);
        },
        clearAllUsers(state) {
            // return [];
        },
    },
});

export const { addUser, removeUser, clearAllUsers } = userSlice.actions; 
export default userSlice.reducer;
