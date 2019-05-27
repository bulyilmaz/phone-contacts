import React, { Component } from "react";
import PropTypes from "prop-types";

import "./PhoneContactsForm.css";

class PhoneContactsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            phone: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.addPhoneContact({
            ...this.state
        });

        this.setState({
            name: "",
            phone: ""
        });
    }

    render() {
        return (
            <form className="phoneContactsForm" onSubmit={ this.onSubmit }>
                <input
                    name="name"
                    id="name"
                    value={ this.state.name }
                    onChange={ this.onChange }
                    autoComplete="off"
                    placeholder="Enter a name"/>
                <input
                    name="phone"
                    id="phone"
                    value={ this.state.phone }
                    onChange={ this.onChange }
                    autoComplete="off"
                    placeholder="Enter a phone"/>
                <button type="submit" className="phoneContactsButton">Add</button>
            </form>
        );
    }
}

PhoneContactsForm.propTypes = {
    addPhoneContact: PropTypes.func.isRequired
};

export default PhoneContactsForm;