import * as phoneContactsActionTypes from "./phoneContactsActionTypes.js";

export const deletePhoneContactAction = (contact) => {
    return {
        type: phoneContactsActionTypes.DELETE_CONTACT,
        payload: {
            contact
        }
    };
};