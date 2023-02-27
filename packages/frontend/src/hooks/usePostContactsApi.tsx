import { ContactBody } from "@dispense-takehome/common";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const usePostContactsApi = () => {
const queryClient = useQueryClient()

const addContact = useMutation({
    mutationFn: (newContact: ContactBody) => {
      return axios.post("/api/contacts", newContact);
    },
    onSuccess() {
        queryClient.invalidateQueries({queryKey:  ["veryUniqueId"]})
    }
  });

  const isAddContactError = addContact.isError
  const isAddContactSuccess = addContact.isSuccess

  return {isAddContactError, isAddContactSuccess, addContact}
}

export default usePostContactsApi