import React from "react";
import ReactDOM from "react-dom";
import { compose, applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { phoneContactsReducer } from "./reducers/phoneContactsReducer.js";

import PhoneContacts from "./components/PhoneContacts.jsx";

const mainReducer = combineReducers({
    contacts: phoneContactsReducer
});
const allEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(
    mainReducer, {
        contacts: []
    },
    allEnhancers
);

ReactDOM.render(<Provider store={ store }><PhoneContacts message="Phone Contacts"/></Provider>, document.getElementById("root"));