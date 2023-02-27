import { ContactBody } from "@dispense-takehome/common";
import { UseFormRegister } from "react-hook-form";
import TextInput from "./TextInput";
import TextLabel from "./TextLabel";

interface FieldProps {
  address?: boolean
  fieldName:
    | "includeAddress"
    | "firstName"
    | "lastName"
    | "email"
    | "addressOne"
    | "addressTwo"
    | "city"
    | "state"
    | "zip";
  label: string;
  placeholder: string;
  register: UseFormRegister<ContactBody>;
}

const Field = ({ address, label, register, placeholder, fieldName }: FieldProps) => {
  return (
    <TextLabel label={label}>
      <TextInput
        address={address}
        placeholder={placeholder}
        fieldName={fieldName}
        register={register}
      />
    </TextLabel>
  );
};

export default Field;
