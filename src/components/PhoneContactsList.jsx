import React, { Component } from "react";
import PropTypes from "prop-types";

import "./PhoneContactsList.css";

class PhoneContactsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onClick(contact) {
        this.props.deletePhoneContact(contact);
    }

    render() {
        const filterText = this.state.filterText;
        const filteredContacts = this.props.contacts.filter(contact =>
            contact.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
            ||
            contact.phone.indexOf(filterText) !== -1
        );
        const contacts = filteredContacts.map((item, index) =>
            <li key={ index } className="phoneContactsList-listItem">
                <span className="phoneContactsList-listItemName">{ item.name }</span>
                <span className="phoneContactsList-listItemNumber">{ item.phone }</span>
                <a href="javascript:;" onClick={ event => this.onClick(item) }>Delete</a>
            </li>
        );

        return (
            <div className="phoneContactsList">
                <input
                    name="filterText"
                    id="filter"
                    placeholder="Filter by name or phone"
                    value={ filterText }
                    onChange={ this.onChange }/>
                <ul className="phoneContactsList-list">
                    { contacts }
                </ul>
            </div>
        );
    }
}

PhoneContactsList.propTypes = {
    contacts: PropTypes.array.isRequired
};

export default PhoneContactsList;