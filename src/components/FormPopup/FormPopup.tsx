interface Props {
  visible: boolean
}

const FormPopup = (props: Props) => {
  return (
    <>
      {props.visible
        && <div>
          <h2>Your order has been successfully created</h2>
        </div>
      }
    </>
  );
};

export default FormPopup;
