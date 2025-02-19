import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  // if value is present in local store and is valid then return JSON of that value else empty array
  // means all the earlier stored values become the initial values
  value: localStorage.getItem("pasteData")
    ? JSON.parse(localStorage.getItem("pasteData"))
    : []
};

export const pasteSlice = createSlice({
  name: "pasteData",
  initialState,
  reducers: {
    // create reducer functions
    createPaste: (state, action) => {
      // get the payload data in variable
      const pasteDataItem = action.payload;

      
      //Check for existing data
      const index = state.value.findIndex(
        (item) => item.title === pasteDataItem.title
      );
      if (index >= 0) {
        toast("Title Already Present");
      } else {
        // push the new payloaddata to the existing values (initialState)
        state.value.push(pasteDataItem);
        // set the array (combined intital and new data) to the localStorage
        localStorage.setItem("pasteData", JSON.stringify(state.value));
        toast.success("Paste Created Succesfully");
      }
    },

    updatePaste: (state,action) => {
      const pasteDataItem = action.payload;
      const index = state.value.findIndex(
        (item) => item._id === pasteDataItem._id
      );
      if (index >= 0){
        state.value[index] = pasteDataItem;
        localStorage.setItem("pastes", JSON.stringify(state.value));
        toast.success("Paste updated");

      }
      
    },
    deletePaste: (state, action) =>{
      const id= action.payload
      console.log(id)
      const index = state.value.findIndex((e)=>e._id === id);
      if(index >=0){
        console.log("Delete paste1");
        state.value.splice(index,1);
        localStorage.setItem("pasteData",JSON.stringify(state.value));
        toast.success("Paste Deleted Succesfully")
      }
    },
    resetAllPaste: (state, action) => {
      state.value= []
    },
  },
});

// Action creators are generated for each case reducer function
export const { createPaste, updatePaste, resetAllPaste, deletePaste } = pasteSlice.actions;

export default pasteSlice.reducer;
