import styles from './FormPopup.module.scss';

interface Props {
  visible: boolean
}

const FormPopup = (props: Props) => (
  <div className={styles.popup__wrap}>
    {props.visible
      && <div className={styles.popup}>
        <h2 className={styles.popup__title}>Your order has been successfully created</h2>
      </div>
    }
  </div>
);

export default FormPopup;
