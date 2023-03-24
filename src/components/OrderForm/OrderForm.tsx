import React from 'react';
import FormButton from '../UI/FormButton/FormButton.js';
import FormInput from '../UI/FormInput/FormInput.js';
import { IFormFields } from '../../types/interfaces';
// import styles from './OrderForm.module.scss';

class OrderForm extends React.Component {
  firstNameRef: React.RefObject<HTMLInputElement> | null;

  secondNameRef: React.RefObject<HTMLInputElement> | null;

  emailRef: React.RefObject<HTMLInputElement> | null;

  dateRef: React.RefObject<HTMLInputElement> | null;

  selectRef: React.RefObject<HTMLSelectElement> | null;

  checkboxRef: React.RefObject<HTMLSelectElement> | null;

  switcherRef: React.RefObject<HTMLInputElement> | null;

  fileUploadRef: React.RefObject<HTMLInputElement> | null;

  constructor(props: IFormFields) {
    super(props);
    this.state = {
      firstName: '',
      email: '',
    };
    this.firstNameRef = React.createRef();
    this.secondNameRef = React.createRef();
    this.emailRef = React.createRef();
    this.dateRef = React.createRef();
    this.selectRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.switcherRef = React.createRef();
    this.fileUploadRef = React.createRef();
  }

  private handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // const form = event.currentTarget;
    // const {firstName, secondName} = form

    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });

    // console.log();

    // onSubmit({
    //   firstName: firstName.value,
    //   secondName: secondName.value,
    // });
  };

  componentDidMount() {
    this.firstNameRef?.current?.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">Enter your first name
          <FormInput
            type="text"
            name="firstName"
            ref={this.firstNameRef}
            // value={firstName}
            // onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName}
          />
        </label>
        <label htmlFor="email">Enter your E-mail
          <input
            type="email"
            name="email"
            ref={this.emailRef}
            // value={firstName}
            // onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName}
          />
        </label>
        <FormButton type="submit" disabled>Confirm</FormButton>
        <FormButton type="reset">Reset</FormButton>
      </form>
    );
  }
}

export default OrderForm;
