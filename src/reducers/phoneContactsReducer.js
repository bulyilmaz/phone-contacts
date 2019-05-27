import * as phoneContactsActionTypes from "../actions/phoneContactsActionTypes.js";

export const phoneContactsReducer = (contacts = [], action) => {
    switch (action.type) {
        case phoneContactsActionTypes.ADD_CONTACT:
            return contacts.concat(action.payload.contact);
        case phoneContactsActionTypes.DELETE_CONTACT:
            return contacts.filter(contact => {
                return contact.name !== action.payload.contact.name;
            });
        default:
            return contacts;
    }
};
