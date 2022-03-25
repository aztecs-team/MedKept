import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    certificates:[],
    names:[],
}

const certificateSlice = createSlice({
    name:'certificate',
    initialState,
    reducers: {
        setCertificates: (state,action)=>{
            state.certificates = action.payload;
        },
        setNames: (state,action)=>{
            state.names = action.payload;
        }
    }
})

export const {setCertificates,setNames} = certificateSlice.actions;
export const selectCertificates = (state)=>state.certificate.certificates;
export const selectNames = (state)=>state.certificate.names;
export default certificateSlice.reducer;

