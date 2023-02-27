import { ContactBody } from "@dispense-takehome/common";
import { UseFormRegister } from "react-hook-form";

export interface TextInputProps {
    address?: boolean;
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
    placeholder: string;
    register: UseFormRegister<ContactBody>;
  }

  const TextInput = ({
    address,
    placeholder,
    fieldName,
    register,
  }: TextInputProps) => {
    const isAddressOption = address ? { shouldUnregister: true } : {};
    return (
      <>
        <input
          type="text"
          className="w-full font-regular text-gray-700 px-4 py-2 border-b-2 border-gray-400 outline-none  focus:bprder-[#8864fc]"
          placeholder={placeholder}
          {...register(fieldName, isAddressOption)}
        />
      </>
    );
  };

  export default TextInput