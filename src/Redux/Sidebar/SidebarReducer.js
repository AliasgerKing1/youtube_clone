import { createSlice } from "@reduxjs/toolkit";
const initialState = false

let SidebarReducer = createSlice({
    name : "sidebar condition",
    initialState,
    reducers : {
        setSidebar : (state, action) => {
            state = action.payload
        }
    }
})

export default SidebarReducer.reducer
export const {setSidebar} = SidebarReducer.actions