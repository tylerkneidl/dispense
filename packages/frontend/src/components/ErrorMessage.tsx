import { Contact } from "@dispense-takehome/common";
import { FieldErrors } from "react-hook-form";

interface ErrorMessageProps {
  errors: FieldErrors<Contact>;
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
}

const ErrorMessage = ({ errors, fieldName }: ErrorMessageProps) => {
  return (
    <div className="h-5 text-xs flex items-center text-red-500">
      {errors[`${fieldName}`] && <span>{errors[`${fieldName}`]?.message}</span>}
    </div>
  );
};
export default ErrorMessage;
