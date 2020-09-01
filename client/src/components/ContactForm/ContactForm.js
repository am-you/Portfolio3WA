import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

const regexEmail = RegExp(/^[\w.-]+@[\da-z][\w.-]*\.[a-z0-9-]{2,}$/i);
// const regexPassword = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*&?-])[A-Za-z\d@$!%*&?-]{8,}$/);
const formValid = ({ formErrors, ...rest})  => {

    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class ContactForm extends Component {

    constructor(props) {

        super(props);

        this.state = {

            firstName: null,
            lastName: null,
            email: null,
            message: null,
            subject: null,

            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                message: "",
                subject: ""
            }
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        e.preventDefault();

        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "3 characters minimum" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "3 characters minimum": "";
                break;
            case "email":
                formErrors.email =
                    regexEmail.test(value)  && value.length > 0 ? "": "Please enter a valid Email";
                break;
            case "message":
                formErrors.message =
                    value.length < 10 ? "Please enter at least 10 characters message to continue": "";
                break;
            case "subject":
                formErrors.subject =
                    value.length < 3 ? "3 characters minimum": "";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value }, () => console.log(this.state));
    };

    handleSubmit = e => {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const subject = document.getElementById('subject').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;


        axios.post('/api/sendEmail',
            {
                firstName: firstName,
                lastName: lastName,
                subject: subject,
                email: email,
                message: message
            }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response)
        });
    };

    clearForm() {
        document.getElementById("myForm").reset();
        const submitButton = document.getElementById("submit");

        submitButton.disabled = true;
    }
    openModal()  {
        this.setState({
            visible : true
        });
    }
    closeModal() {
        this.setState({
            visible : false
        });
        this.clearForm();
    }

    render() {

        const { t } = this.props;
        const { formErrors } = this.state;
        const isEnabled = formValid(this.state);

        return (
            <div className="contact-page">
                <h2>Contact</h2>
                <div className="form-wrapper">
                    <form method="post" id="myForm" action="/api/sendEmail" onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName" >
                                {t('Contact.firstName')}
                                <input
                                    className={formErrors.firstName.length > 0 ? "error" : null}
                                    placeholder={t('Contact.firstName')}
                                    name="firstName"
                                    id="firstName"
                                    formNoValidate
                                    onChange={this.handleChange}
                                    tabIndex="0"
                                />
                                {formErrors.firstName.length > 0 && (
                                    <span className="errorMessage">{formErrors.firstName}</span>
                                )}
                            </label>
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName" >
                                {t('Contact.lastName')}
                                <input
                                    className={formErrors.lastName.length > 0 ? "error" : null}
                                    placeholder={t('Contact.lastName')}
                                    name="lastName"
                                    id="lastName"
                                    formNoValidate
                                    onChange={this.handleChange}
                                    tabIndex="0"
                                />
                                {formErrors.lastName.length > 0 && (
                                    <span className="errorMessage">{formErrors.lastName}</span>
                                )}
                            </label>
                        </div>
                        <div className="email">
                            <label htmlFor="email" >
                                email
                                <input
                                    type="email"
                                    className={formErrors.email.length > 0 ? "error" : null}
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    formNoValidate
                                    onChange={this.handleChange}
                                    tabIndex="0"
                                />
                                {formErrors.email.length > 0 && (
                                    <span className="errorMessage">{formErrors.email}</span>
                                )}
                            </label>
                        </div>
                        <div className="subject">
                            <label htmlFor="subject" >
                                {t('Contact.Subject')}
                                <input
                                    type="text"
                                    className={formErrors.subject.length > 0 ? "error" : null}
                                    placeholder={t('Contact.Subject')}
                                    name="subject"
                                    id="subject"
                                    formNoValidate
                                    onChange={this.handleChange}
                                    tabIndex="0"
                                />
                                {formErrors.subject.length > 0 && (
                                    <span className="errorMessage">{formErrors.subject}</span>
                                )}
                            </label>
                        </div>
                        <div className="message">
                            <label htmlFor="message" >
                                message
                                <textarea
                                    rows="5" cols="15"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    className={formErrors.message.length > 0 ? "error" : null}
                                    placeholder="Message"
                                    name="message"
                                    id="message"
                                    tabIndex="0"
                                />
                                {formErrors.message.length > 0 && (
                                    <span className="errorMessage">{formErrors.message}</span>
                                )}
                            </label>
                        </div>
                        <div className="sendMessage">
                            <small className="requis">{t('Contact.required')}</small>
                            <button id="submit" type="submit" name="myButton" disabled={!isEnabled} value="Open" onClick={() => this.openModal()}> {t('Contact.Send')} </button>
                            <Modal className="modal" visible={this.state.visible} effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                <div>
                                    <h3>Message Sent</h3>
                                    <p className="modalP">Merci {this.state.firstName} {this.state.lastName} {"\n"} On reviens vers vous au plus vite</p>
                                    <button type="button" className="modalButton" onClick={() => this.closeModal()}>Close</button>
                                </div>
                            </Modal>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withTranslation()(ContactForm);

