import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./core/contactsSlice";

export default configureStore({
    reducer: {
        contacts: contactsReducer
    },
})