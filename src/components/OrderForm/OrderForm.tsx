import React from 'react';
import FormButton from '../UI/FormButton/FormButton.js';
import FormInput from '../UI/FormInput/FormInput.js';
import { FormCard } from '../../types/types';
import { IFormFields, IFormState } from '../../types/interfaces';
import FormInputFile from '../UI/FormInputFile/FormInputFile.js';
import FormInputRadio from '../UI/FormInputRadio/FormInputRadio.js';
import FormSelect from '../UI/FormSelect/FormSelect.js';
import FormPopup from '../FormPopup/FormPopup.js';
import {
  formInputName,
  formOptions,
  formTextValue,
  labelTitle,
  validationErrorMessage,
} from '../../constants/componentsConstants';
import FormCheckbox from '../UI/FormCheckbox/FormCheckbox.js';
import { ButtonType, InputType } from '../../types/enums';
import styles from './OrderForm.module.scss';

class OrderForm extends React.Component<IFormFields, IFormState> {
  formRef: React.RefObject<HTMLFormElement>;

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
      selectError: '',
      avatarError: '',
      checkboxError: '',
      avatar: '',
      isShowPopup: false,
    };
    this.onSelect = props.onSelect;
    this.formRef = React.createRef();
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

  private saveFile(file: string): void {
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

    if (this.switcherRef1.current!.checked) {
      paymentValue = this.switcherRef1.current?.value;
    } else {
      paymentValue = this.switcherRef2.current?.value;
    }

    let confirmValue = formTextValue.nonConfirmation;

    if (this.checkboxRef.current!.checked) {
      confirmValue = formTextValue.confirmation;
    }

    const newCard: FormCard = {
      name: this.firstNameRef.current!.value as string,
      email: this.emailRef.current!.value as string,
      date: this.dateRef.current!.value as string,
      payment: paymentValue as string,
      type: this.selectRef.current!.value as string,
      confirm: confirmValue,
      avatar: this.state.file,
    };

    this.setState({ isShowPopup: true });

    setTimeout(() => {
      this.setState({ isShowPopup: false });
    }, 4000);

    this.onSelect(newCard);
    this.formRef.current?.reset();
  };

  private validate(): number {
    let errorCount = 0;

    if (this.firstNameRef.current!.value.length < 3) {
      errorCount += 1;

      this.setState({
        firstNameError: validationErrorMessage.nameError,
      });
    } else {
      this.setState({
        firstNameError: '',
      });
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailRef.current?.value as string)) {
      errorCount += 1;

      this.setState({
        emailError: validationErrorMessage.emailError,
      });
    } else {
      this.setState({
        emailError: '',
      });
    }

    if (this.dateRef.current) {
      const todayDate = new Date();
      const userDate = new Date(this.dateRef.current.value);

      if (!this.dateRef.current?.value
        || userDate.getTime() < todayDate.getTime()
      ) {
        errorCount += 1;
        this.setState({
          dateError: validationErrorMessage.dateError,
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
        paymentError: validationErrorMessage.paymentError,
      });
    } else {
      this.setState({
        paymentError: '',
      });
    }

    if (!this.fileUploadRef.current?.value) {
      errorCount += 1;

      this.setState({
        avatarError: validationErrorMessage.avatarError,
      });
    } else {
      this.setState({
        avatarError: '',
      });
    }

    if (!this.selectRef.current?.selectedIndex) {
      errorCount += 1;
      this.setState({
        selectError: validationErrorMessage.selectError,
      });
    } else {
      this.setState({
        selectError: '',
      });
    }

    if (!this.checkboxRef.current?.checked) {
      errorCount += 1;

      this.setState({
        checkboxError: validationErrorMessage.checkboxError,
      });
    } else {
      this.setState({
        checkboxError: '',
      });
    }

    return errorCount;
  }

  componentDidMount() {
    this.firstNameRef.current!.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef} className={styles.form}>
        <FormInput
          title={labelTitle.nameTitle}
          type={InputType.TEXT}
          name={formInputName.name}
          placeholder={formTextValue.textPlaceholder}
          ref={this.firstNameRef}
          error={this.state.firstNameError}
        />
        <FormInput
          title={labelTitle.emailTitle}
          type={InputType.EMAIL}
          name={InputType.EMAIL}
          placeholder={formTextValue.emailPlaceholder}
          error={this.state.emailError}
          ref={this.emailRef}
        />
        <FormInput
          title={labelTitle.dateTitle}
          type={InputType.DATE}
          name={InputType.DATE}
          error={this.state.dateError}
          ref={this.dateRef}
        />
        <div>
          <label className={styles.form__label}>Select the payment method</label>
          <div className={styles.form__input_radio}>
          <FormInputRadio
            type={InputType.RADIO}
            name={InputType.RADIO}
            value="cash"
            ref={this.switcherRef1}
          />
          <FormInputRadio
            type={InputType.RADIO}
            name={InputType.RADIO}
            value="card"
            ref={this.switcherRef2}
            error={this.state.paymentError}
          />
          </div>
        </div>
        <FormSelect
          title={labelTitle.selectTitle}
          values={formOptions}
          name={formInputName.select}
          ref={this.selectRef}
          error={this.state.selectError}
        />
        <FormInputFile
          title={labelTitle.fileTitle}
          type={InputType.FILE}
          name={InputType.FILE}
          save={this.saveFile}
          ref={this.fileUploadRef}
          error={this.state.avatarError}
        />
        <FormCheckbox
          title={labelTitle.checkboxTitle}
          type={InputType.CHECKBOX}
          name={InputType.CHECKBOX}
          ref={this.checkboxRef}
          error={this.state.checkboxError}
        />
        <div className={styles.form__buttons}>
          <FormButton type={ButtonType.SUBMIT}>Confirm</FormButton>
          <FormButton type={ButtonType.RESET}>Reset</FormButton>
        </div>
        <FormPopup
          visible={this.state.isShowPopup}
        />
      </form>
    );
  }
}

export default OrderForm;
