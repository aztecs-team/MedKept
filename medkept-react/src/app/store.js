import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import patientReducer from '../features/patient/patient'
export const store = configureStore({
  reducer: {
    patient: patientReducer,
  },
});
