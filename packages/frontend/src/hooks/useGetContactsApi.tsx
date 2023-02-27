import { Contact, ContactBody } from "@dispense-takehome/common";
import { QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

const useGetContactsApi = () => {

  const getAllContacts = async (): Promise<Contact[]> => {
    const response = await axios.get("/api/contacts");
    return response.data;
  };

  const { data: contacts } = useQuery<Contact[], Error>({
    queryKey: ["veryUniqueId"],
    queryFn: getAllContacts,
  });


  return { contacts };
};

export default useGetContactsApi;
