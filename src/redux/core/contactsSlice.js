import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contact",
    initialState: {
        address: "",
        tel: "",
        map_lat: "0",
        map_long: "0",
        email: "",
        text: "",
        whatsapp: "",
        telegram: "",
        instagram: ""
    },
    reducers: {
        updateContacts: (state, action) => {
            state.address = action.payload.address;
            state.tel = action.payload.tel;
            state.map_lat = action.payload.map_lat;
            state.map_long = action.payload.map_long;
            state.email = action.payload.email;
            state.text = action.payload.text;
            state.whatsapp = action.payload.whatsapp;
            state.telegram = action.payload.telegram;
            state.instagram = action.payload.instagram;
        }
    }
})

export const { updateContacts } = contactsSlice.actions;

export default contactsSlice.reducer;