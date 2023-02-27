import { ContactBody, ContactBodySchema, stateAbbrevArray } from "@dispense-takehome/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Field from "./Field";
import ErrorMessage from "./ErrorMessage";
import TextLabel from "./TextLabel";

const NewContactForm = () => {
  const queryClient = useQueryClient();

  const submitNotification = (type: "success" | "error") => {
    if (type === "success")
      toast.success("Contact successfully added!", { position: "top-center" });
    if (type === "error")
      toast.error("Something went wrong", { position: "top-center" });
  };

  const addContact = useMutation({
    mutationFn: (newContact: ContactBody) => {
      return axios.post("/api/contacts", newContact);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["veryUniqueId"] });
      submitNotification("success");
    },
    onError() {
      submitNotification("error");
    },
    onSettled() {
      reset();
    },
  });

  const {
    register,
    reset,
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
  return (
    <form
      className="flex-col flex font-Golos font-regular"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field
        label="First Name"
        placeholder="required"
        fieldName="firstName"
        register={register}
      />
      <ErrorMessage errors={errors} fieldName="firstName" />
      <Field
        label="Last Name"
        placeholder="optional"
        fieldName="lastName"
        register={register}
      />
      <Field
        label="Email"
        placeholder="required"
        fieldName="email"
        register={register}
      />
      <ErrorMessage errors={errors} fieldName="email" />
      <div className="flex">
        <label
          className="text-[#8864fc] font-bold my-2 flex space-between"
          htmlFor="includeAddress"
        >
          Include Address?
        </label>
        <input
          type="checkbox"
          id="includeAddress"
          className="ml-5 accent-[#8864fc]"
          {...register("includeAddress")}
        />
      </div>
      {includeAddress && (
        <div className="flex flex-col">
          <Field
            label="Address Line 1"
            address
            placeholder="optional"
            fieldName="addressOne"
            register={register}
          />
          <Field
            label="Address Line 2"
            address
            placeholder="optional"
            fieldName="addressTwo"
            register={register}
          />
          <Field
            label="City"
            address
            placeholder="optional"
            fieldName="city"
            register={register}
          />
          <TextLabel label="State">
            <select
              className="w-fit border-2 border-gray-500 rounded-2xl px-2 py-1 focus:outline-none focus-visible:outline-none"
              {...register("state", { shouldUnregister: true })}
            >
              {stateAbbrevArray.map((state) => {
                return (
                  <option key={state} value={state}>
                    {state}
                  </option>
                );
              })}
            </select>
          </TextLabel>
          <Field
            label="Zip Code"
            address
            placeholder="optional"
            fieldName="zip"
            register={register}
          />
        </div>
      )}
      <input
        className="text-lg self-center text-gray-700 text-bold border-[#8864fc] border-2 shadow-xl hover:bg-indigo-100 w-fit rounded-2xl px-2 py-1"
        type="submit"
      />
    </form>
  );
};

export default NewContactForm;
