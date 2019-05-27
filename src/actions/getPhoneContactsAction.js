import { addPhoneContactAction } from "./addPhoneContactAction.js";

export const getPhoneContactsAction = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                const mappedUsers = users.map(user => {
                    return {
                        name: user.name,
                        phone: user.phone
                    };
                });

                mappedUsers.map(user => {
                    dispatch(addPhoneContactAction(user));
                });
            });
    };
};