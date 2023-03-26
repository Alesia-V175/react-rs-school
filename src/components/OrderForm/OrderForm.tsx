import React from 'react';
import FormButton from '../UI/FormButton/FormButton.js';
import FormInput from '../UI/FormInput/FormInput.js';
import { FormCard } from '../../types/types';
import { IFormFields, IFormState } from '../../types/interfaces';
import FormInputFile from '../UI/FormInputFile/FormInputFile.js';
import FormInputRadio from '../UI/FormInputRadio/FormInputRadio.js';
import FormSelect from '../UI/FormSelect/FormSelect.js';
// import styles from './OrderForm.module.scss';

class OrderForm extends React.Component<IFormFields, IFormState> {
  firstNameRef: React.RefObject<HTMLInputElement>;

  secondNameRef: React.RefObject<HTMLInputElement>;

  emailRef: React.RefObject<HTMLInputElement>;

  dateRef: React.RefObject<HTMLInputElement>;

  selectRef: React.RefObject<HTMLSelectElement>;

  checkboxRef: React.RefObject<HTMLInputElement>;

  switcherRef1: React.RefObject<HTMLInputElement>;

  switcherRef2: React.RefObject<HTMLInputElement>;

  fileUploadRef: React.RefObject<HTMLInputElement>;

  onSelect: (item: FormCard) => void;

  constructor(props: IFormFields) {
    super(props);
    this.state = {
      file: '',
      firstNameError: '',
      emailError: '',
      dateError: '',
      paymentError: '',
      avatarError: '',
      checkboxError: '',
      avatar: '',
    };
    this.onSelect = props.onSelect;
    this.firstNameRef = React.createRef();
    this.secondNameRef = React.createRef();
    this.emailRef = React.createRef();
    this.dateRef = React.createRef();
    this.selectRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.switcherRef1 = React.createRef();
    this.switcherRef2 = React.createRef();
    this.fileUploadRef = React.createRef();

    this.saveFile = this.saveFile.bind(this);
  }

  saveFile(file: string): void {
    this.setState({
      file,
    });
  }

  private handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const errorCount = this.validate();
    if (errorCount) {
      return;
    }

    let paymentValue;

    if (this.switcherRef1.current?.checked) {
      paymentValue = this.switcherRef1.current?.value;
    } else {
      paymentValue = this.switcherRef2.current?.value;
    }

    let confirmValue = 'no';

    if (this.checkboxRef.current?.checked) {
      confirmValue = 'yes';
    }

    const newCard: FormCard = {
      name: this.firstNameRef.current?.value as string,
      email: this.emailRef.current?.value as string,
      date: this.dateRef.current?.value as string,
      payment: paymentValue as string,
      type: this.selectRef.current?.value as string,
      confirm: confirmValue,
      // avatar: this.fileUploadRef.current?.value as string,
      avatar: this.state.file,
    };

    this.onSelect(newCard);
  };

  private validate(): number {
    let errorCount = 0;
    if (this.firstNameRef.current && this.firstNameRef.current.value.length < 3) {
      errorCount += 1;
      this.setState({
        firstNameError: 'Your name must be at least 3 characters long',
      });
    } else {
      this.setState({
        firstNameError: '',
      });
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailRef.current?.value as string)) {
      errorCount += 1;
      this.setState({
        emailError: 'Incorrect email',
      });
    } else {
      this.setState({
        emailError: '',
      });
    }

    if (this.dateRef.current) {
      const todayDate = new Date();
      const userDate = new Date(this.dateRef.current.value);

      if (!this.dateRef.current?.value || userDate.getTime() < todayDate.getTime()) {
        errorCount += 1;
        this.setState({
          dateError: 'Your date can not be earlier than today',
        });
      } else {
        this.setState({
          dateError: '',
        });
      }
    }

    if (!this.switcherRef1.current?.checked && !this.switcherRef2.current?.checked) {
      errorCount += 1;
      this.setState({
        paymentError: 'Choose a type of payment',
      });
    } else {
      this.setState({
        paymentError: '',
      });
    }

    if (!this.fileUploadRef.current?.value) {
      errorCount += 1;
      this.setState({
        avatarError: 'Please upload your avatar',
      });
    } else {
      this.setState({
        avatarError: '',
      });
    }

    if (!this.checkboxRef.current?.checked) {
      errorCount += 1;
      this.setState({
        checkboxError: 'Confirm all your data',
      });
    } else {
      this.setState({
        checkboxError: '',
      });
    }

    return errorCount;
  }

  componentDidMount() {
    this.firstNameRef?.current?.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormInput
          title="Enter your name"
          type="text"
          name="firstName"
          placeholder="Ivan"
          ref={this.firstNameRef}
          // required={false}
          error={this.state.firstNameError}
          // value={firstName}
          // onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName}
        />
        <FormInput
          title="Enter your E-mail"
          type="email"
          name="email"
          placeholder="IvanIvanov@mail.com"
          error={this.state.emailError}
          ref={this.emailRef}
          // required={true}
          // value={firstName}
          // onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName}
        />
        <FormInput
          title="Choose date of Photo Shoot"
          type="date"
          name="date"
          error={this.state.dateError}
          ref={this.dateRef}
          // required={true}
        />

        <FormInputRadio
          title="Select the payment method"
          type="radio"
          name="radio"
          value="cash"
          ref={this.switcherRef1}
          error={this.state.paymentError}
          // required={true}
        />

        <FormInputRadio
          title=""
          type="radio"
          name="radio"
          value="card"
          ref={this.switcherRef2}
          // required={true}
        />

        <FormSelect
          title="Choose type of Photo Shoot"
          values={['Wedding', 'Love Story', 'Fashion', 'Animals', 'Advertising', 'Corporate', 'Automobile']}
          name="type"
          ref={this.selectRef}
        />

        <FormInputFile
          title="Choose your avatar"
          type="file"
          name="file"
          save={this.saveFile}
          ref={this.fileUploadRef}
          error={this.state.avatarError}
          // required={true}
        />

        <FormInput
          title="I confirm all entered data"
          type="checkbox"
          name="checkbox"
          ref={this.checkboxRef}
          error={this.state.checkboxError}
          // required={true}
        />

        <FormButton type="submit">Confirm</FormButton>
        <FormButton type="reset">Reset</FormButton>
      </form>
    );
  }
}

export default OrderForm;
