import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    certificates:[],
}

const certificateSlice = createSlice({
    name:'certificate',
    initialState,
    reducers: {
        setCertificates: (state,action)=>{
            state.certificates = action.payload;
        }
    }
})

export const {setCertificates} = certificateSlice.actions;
export const selectCertificates = (state)=>state.certificate.certificates;
// export const selectNames = (state)=>state.certificate.names;
export default certificateSlice.reducer;

