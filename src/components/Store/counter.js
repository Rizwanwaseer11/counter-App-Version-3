import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{counterVal : 0},
    reducers: {
        increment: (state, action) =>{
            state.counterVal ++;
            // console.log(state,action)
        },

        decrement: (state, action) =>{
            state.counterVal --;
            // console.log(state,action)
        },

        add: (state, action) =>{
            // state.counterVal += Number(action.payload.num);
            state.counterVal += Number(action.payload);  // this method is used to get data directly from dispatch method from controlles component
            // console.log(state,action)
        },

        subtract: (state, action) =>{
            state.counterVal -= Number(action.payload.num);
            // console.log(state,action)
        },
    }
 });

 export const counterAction = counterSlice.actions;

 export default counterSlice