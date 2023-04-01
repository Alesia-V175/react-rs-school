import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormButton from '../UI/FormButton/FormButton';
import FormInput from '../UI/FormInput/FormInput';
import FormInputFile from '../UI/FormInputFile/FormInputFile';
import FormInputRadio from '../UI/FormInputRadio/FormInputRadio';
import FormSelect from '../UI/FormSelect/FormSelect';
import FormCheckbox from '../UI/FormCheckbox/FormCheckbox';
import FormPopup from '../FormPopup/FormPopup';
import {
  FormOptions,
  FormTextValue, InputPaymentValue,
  LabelTitle, regExp,
  ValidationErrorMessage,
} from '../../constants/componentsConstants';
import { ButtonType, InputName, InputType } from '../../types/enums';
import { IFormCard } from '../../types/interfaces';
import styles from './OrderForm.module.scss';

interface Props {
  setItems: (item: IFormCard) => void;
}

const OrderForm = ({ setItems }: Props) => {
  const [file, setFile] = useState('');
  const [popup, setPopup] = useState(false);

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm<IFormCard>({
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

  const onSubmit = (data: IFormCard) => {
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
        error={errors[InputName.NAME]}
        {...register(InputName.NAME, {
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
        error={errors[InputName.EMAIL]}
        {...register(InputName.EMAIL, {
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
        error={errors[InputName.DATE]}
        {...register(InputName.DATE, {
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
          {...register(InputName.RADIO)}
        />
        <FormInputRadio
          type={InputType.RADIO}
          value={InputPaymentValue.card}
          error={errors[InputName.RADIO]}
          {...register(InputName.RADIO, {
            required: ValidationErrorMessage.paymentError,
          })}
        />
        </div>
      </div>
      <FormSelect
        title={LabelTitle.selectTitle}
        values={FormOptions}
        error={errors[InputName.SELECT]}
        {...register(InputName.SELECT, {
          required: ValidationErrorMessage.selectError,
        })}
      />
      <FormInputFile
        title={LabelTitle.fileTitle}
        type={InputType.FILE}
        save={saveFile}
        error={errors[InputName.FILE]}
        {...register(InputName.FILE, {
          required: ValidationErrorMessage.avatarError,
        })}
      />
      <FormCheckbox
        title={LabelTitle.checkboxTitle}
        type={InputType.CHECKBOX}
        error={errors[InputName.CHECKBOX]}
        {...register(InputName.CHECKBOX, {
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
