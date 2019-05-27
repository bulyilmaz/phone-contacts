import * as phoneContactsActionTypes from "./phoneContactsActionTypes.js";

export const addPhoneContactAction = (contact) => {
    return {
        type: phoneContactsActionTypes.ADD_CONTACT,
        payload: {
            contact
        }
    };
};