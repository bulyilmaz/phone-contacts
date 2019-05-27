import React, { Component } from "react";
import { connect } from "react-redux";

import { addPhoneContactAction } from ".././actions/addPhoneContactAction.js";
import { deletePhoneContactAction } from ".././actions/deletePhoneContactAction.js";
import { getPhoneContactsAction } from ".././actions/getPhoneContactsAction.js";

import PhoneContactsList from "./PhoneContactsList.jsx";
import PhoneContactsForm from "./PhoneContactsForm.jsx";

import "./PhoneContacts.css";

class PhoneContacts extends Component {
    constructor(props) {
        super(props);

        this.addPhoneContact = this.addPhoneContact.bind(this);
        this.deletePhoneContact = this.deletePhoneContact.bind(this);
    }

    addPhoneContact(contact) {
        this.props.onAddPhoneContact(contact);
    }

    deletePhoneContact(contact) {
        this.props.onDeletePhoneContactAction(contact);
    }

    componentDidMount() {
        this.props.onGetPhoneContactsAction();
    }

    render() {
        return (
            <div className="phoneContacts">
                <h1>{ this.props.message }</h1>
                <PhoneContactsList contacts={ this.props.contacts } deletePhoneContact={ this.deletePhoneContact }/>
                <PhoneContactsForm addPhoneContact={ this.addPhoneContact }/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...state,
        message: props.message
    };
};

const mapDispatchToProps = {
    onAddPhoneContact: addPhoneContactAction,
    onDeletePhoneContactAction: deletePhoneContactAction,
    onGetPhoneContactsAction: getPhoneContactsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneContacts);