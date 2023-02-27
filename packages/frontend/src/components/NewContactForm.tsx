import { ReactElement } from "react";
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import {
  ContactBodySchema,
  stateAbbrevArray,
  ContactBody,
} from "@dispense-takehome/common";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";


const NewContactForm = () => {
  const addContact = useMutation({
    mutationFn: (newContact: ContactBody) => {
      return axios.post("/api/contacts", newContact);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ContactBody>({
    resolver: zodResolver(ContactBodySchema),
  });

  const includeAddress = watch("includeAddress");

  const onSubmit: SubmitHandler<ContactBody> = (data) => {
    addContact.mutate(data);
  };
console.log(errors)
  return (
    <div className="flex flex-col">
      <form className="flex-col flex" onSubmit={handleSubmit(onSubmit)}>
        <TextLabel label="First Name">
          <TextInput
            defaultValue="name"
            fieldName="firstName"
            register={register}
          />
        </TextLabel>
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <TextLabel label="Last Name">
          <TextInput
            defaultValue="name"
            fieldName="lastName"
            register={register}
          />
        </TextLabel>
        <TextLabel label="Email">
          <TextInput
            defaultValue="name"
            fieldName="email"
            register={register}
          />
        </TextLabel>
        {errors.email && <span>{errors.email.message}</span>}
        <TextLabel label="Include Address?">
          <input type="checkbox" {...register("includeAddress")} />
        </TextLabel>
        {includeAddress && (
          <>
            <TextLabel label="Address Line 1">
              <TextInput
                address
                defaultValue="name"
                fieldName="addressOne"
                register={register}
              />
            </TextLabel>

            <TextLabel label="Address Line 2">
              <TextInput
                address
                defaultValue="name"
                fieldName="addressTwo"
                register={register}
              />
            </TextLabel>
            <TextLabel label="City">
              <TextInput
                address
                defaultValue="name"
                fieldName="city"
                register={register}
              />
            </TextLabel>
            <TextLabel label="State">
              <select {...register("state", { shouldUnregister: true })}>
                {stateAbbrevArray.map((state) => {
                  return (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  );
                })}
              </select>
            </TextLabel>
            <TextLabel label="Zip Code">
              <TextInput
                address
                defaultValue="name"
                fieldName="zip"
                register={register}
              />
            </TextLabel>
            {errors.zip && <span>{errors.zip.message}</span>}
          </>
        )}
        <pre>{JSON.stringify(watch())}</pre>
        <input type="submit" />
      </form>
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
    <label>
      <span>{`${label}: `}</span>
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
  defaultValue: string;
  register: UseFormRegister<ContactBody>;
}

const TextInput = ({
  address,
  defaultValue,
  fieldName,
  register,
}: TextInputProps) => {
  const isAddressOption = address ? { shouldUnregister: true } : {};
  return (
    <>
      <input
        defaultValue={defaultValue}
        {...register(fieldName, isAddressOption)}
      />
      ;
    </>
  );
};
