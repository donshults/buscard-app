import React, { Component } from 'react';
import Button from "../../Components/UI/Button/Button";
import Input from "../../Components/UI/Input/Input";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Label from "../../Components/UI/Label/Label";
import { updateObject, checkValidity } from "../../Shared/Utility";
import axios from 'axios'
import classes from './OptinForm.css';

class OptinForm extends Component {
    state = {
        isVisible: true,
        optinForm: {
            companyName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Company Name',
                    label: "Company Name"
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your First Name',
                    label: "First Name"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Last Name',
                    label: "Last Name"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            emailAddress: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Business Email',
                    label: "Business Email"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            mobilePhoneNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'string',
                    placeholder: 'Your Mobile Number',
                    label: "Mobile Number"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    }
    optInDataHandler = (event) => {
        event.preventDefault();
        const formData = [];
        for (let formElementIdentifier in this.form.optinForm) {
            formData[formElementIdentifier] = this.state.optinForm[formElementIdentifier].value;
        }
        const contactData = {
            contactInfo: formData
        }
        this.props.onUpdateContactInfo(contactData, this.props.token);
    }
    inputChangedHandler = (event, inputIdentifier) => {

        let updatedFormElement = updateObject(this.state.optinForm[inputIdentifier], {
            value: event.target.value,
            touched: true,
            valid: checkValidity(event.target.value, this.state.optinForm[inputIdentifier].validation)
        });
        const updatedOptinForm = updateObject(this.state.optinForm, {
            [inputIdentifier]: updatedFormElement
        });
        let formIsValid = true;
        for (let inputIdentifier in updatedOptinForm) {
            formIsValid = updatedOptinForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ optinForm: updatedOptinForm, formIsValid: formIsValid });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.optinForm) {
            formElementsArray.push({
                id: key,
                config: this.state.optinForm[key]
            });
        }
        let form = (
            <form onSubmit={this.optInDataHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        data-test='input-component'
                    />

                ))}
                <div>
                    <Button btnType="Success" disabled={!this.state.formIsValid}>Send Contact Info</Button>
                </div>
            </form>
        )
        if (this.props.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.OptinForm} btnType="Success" data-test="optinform-component">
                <center><h4>Enter Contact Information</h4>
                    {form}
                </center>
            </div>
        );
    }
}

export default OptinForm;