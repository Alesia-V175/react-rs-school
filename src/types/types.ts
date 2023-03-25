export type FormCard = {
  name: string,
  email: string,
  date: string,
  payment: string,
  type: string,
  confirm: string,
  avatar: string,
};

export type Ref = HTMLInputElement;

export type RefSelect = HTMLSelectElement;
//
// export type FormFields = {
//   firstNameRef: React.RefObject<HTMLInputElement>;
//   secondNameRef: React.RefObject<HTMLInputElement>;
//   emailRef: React.RefObject<HTMLInputElement>;
//   dateRef: React.RefObject<HTMLInputElement>;
//   selectRef: React.RefObject<HTMLSelectElement>;
//   checkboxRef: React.RefObject<HTMLSelectElement>;
//   switcherRef: React.RefObject<HTMLInputElement>;
//   fileUploadRef: React.RefObject<HTMLInputElement>;
//   onSelect: (item: FormCard) => void;
// }
