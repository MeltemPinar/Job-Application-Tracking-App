import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../redux/slices/jobSlice";

export default configureStore({ reducer: { jobReducer } });
