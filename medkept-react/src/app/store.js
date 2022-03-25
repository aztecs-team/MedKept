import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import patientReducer from '../features/patient/patient'
import metamaskReducer from '../features/metamask/metamaskSlice'
export const store = configureStore({
  reducer: {
    patient: patientReducer,
    metamask: metamaskReducer,
  },
});
