import { configureStore } from "@reduxjs/toolkit";
import trainerSlices from "./slices/trainer.slices";

 export default configureStore({ 
    reducer:{
      trainer: trainerSlices
    }
})