import React, { useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import FormButton from '../UI/FormButton/FormButton';
import FormInput from '../UI/FormInput/FormInput';
import FormInputFile from '../UI/FormInputFile/FormInputFile';
import FormInputRadio from '../UI/FormInputRadio/FormInputRadio';
import FormSelect from '../UI/FormSelect/FormSelect';
import FormCheckbox from '../UI/FormCheckbox/FormCheckbox';
import FormPopup from '../FormPopup/FormPopup';
import {
  FormInputName,
  FormOptions,
  FormTextValue, InputPaymentValue,
  LabelTitle, regExp,
  ValidationErrorMessage,
} from '../../constants/componentsConstants';
import { ButtonType, InputType } from '../../types/enums';
import styles from './OrderForm.module.scss';

const OrderForm = ({ setItems }) => {
  const [file, setFile] = useState('');
  const [popup, setPopup] = useState(false);

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const saveFile = (inputFileUrl: string) => {
    setFile(inputFileUrl);
  };

  const isDateInFuture = (date: Date) => {
    const todayDate = new Date();
    const userDate = new Date(date);

    return userDate.getTime() > todayDate.getTime();
  };

  const showPopup = () => {
    setPopup(true);

    setTimeout(() => {
      setPopup(false);
    }, 4000);
  };

  const onSubmit = (data) => {
    setItems({ ...data, file });
    showPopup();
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <FormInput
        title={LabelTitle.nameTitle}
        type={InputType.TEXT}
        placeholder={FormTextValue.textPlaceholder}
        error={errors[FormInputName.name] as FieldError}
        {...register(FormInputName.name, {
          required: ValidationErrorMessage.requiredError,
          minLength: {
            value: 3,
            message: ValidationErrorMessage.nameError,
          },
        })}
      />
      <FormInput
        title={LabelTitle.emailTitle}
        type={InputType.EMAIL}
        placeholder={FormTextValue.emailPlaceholder}
        error={errors[InputType.EMAIL] as FieldError}
        {...register(InputType.EMAIL, {
          required: ValidationErrorMessage.requiredError,
          pattern: {
            value: regExp,
            message: ValidationErrorMessage.emailError,
          },
        })}
      />
      <FormInput
        title={LabelTitle.dateTitle}
        type={InputType.DATE}
        error={errors[InputType.DATE] as FieldError}
        {...register(InputType.DATE, {
          required: ValidationErrorMessage.requiredError,
          valueAsDate: true,
          validate: (value) => isDateInFuture(value) || ValidationErrorMessage.dateError,
        })}
      />
      <div>
        <label className={styles.form__label}>Select the payment method</label>
        <div className={styles.form__input_radio}>
        <FormInputRadio
          type={InputType.RADIO}
          value={InputPaymentValue.cash}
          {...register(InputType.RADIO)}
        />
        <FormInputRadio
          type={InputType.RADIO}
          value={InputPaymentValue.card}
          error={errors[InputType.RADIO] as FieldError}
          {...register(InputType.RADIO, {
            required: ValidationErrorMessage.paymentError,
          })}
        />
        </div>
      </div>
      <FormSelect
        title={LabelTitle.selectTitle}
        values={FormOptions}
        error={errors[FormInputName.select] as FieldError}
        {...register(FormInputName.select, {
          required: ValidationErrorMessage.selectError,
        })}
      />
      <FormInputFile
        title={LabelTitle.fileTitle}
        type={InputType.FILE}
        save={saveFile}
        error={errors[InputType.FILE] as FieldError}
        {...register(InputType.FILE, {
          required: ValidationErrorMessage.avatarError,
        })}
      />
      <FormCheckbox
        title={LabelTitle.checkboxTitle}
        type={InputType.CHECKBOX}
        error={errors[InputType.CHECKBOX] as FieldError}
        {...register(InputType.CHECKBOX, {
          required: ValidationErrorMessage.checkboxError,
        })}
      />
      <div className={styles.form__buttons}>
        <FormButton type={ButtonType.SUBMIT}>Confirm</FormButton>
        <FormButton type={ButtonType.RESET}>Reset</FormButton>
      </div>
      <FormPopup
       visible={popup}
      />
    </form>
  );
};

export default OrderForm;
