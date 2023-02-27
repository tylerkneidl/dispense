import { ReactElement } from "react";
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import {
  ContactBodySchema,
  stateAbbrevArray,
  ContactBody,
} from "@dispense-takehome/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Field from "./Field";
import ErrorMessage from "./ErrorMessage";

const NewContactForm = () => {
  

  return (
    <div className="flex flex-col">
      <h2 className="font-bold ml-5 text-2xl text-white">Add New Contact</h2>
      <div className="flex flex-col bg-white h-fit p-3 rounded-2xl shadow-md">
        
        <img
          className="w-52 mt-5 mb-1"
          src="https://assets.website-files.com/5ea9d15f1dc39001c43c80bd/5f58f0aa6ca842699577f18c_dispense-logo.svg"
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default NewContactForm;

interface TextLabelProps {
  children: ReactElement;
  label: string;
}

const TextLabel = ({ children, label }: TextLabelProps) => {
  return (
    <label className="w-full flex flex-col font-bold text-[#8864fc]">
      <span className="w-fit">{label}</span>
      {children}
    </label>
  );
};

interface TextInputProps {
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
