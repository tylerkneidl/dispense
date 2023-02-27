import { Contact } from "@dispense-takehome/common";
import { QueryKey, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";


const useContactsApi = () => {
    const getAllContacts = (): Promise<Contact[]> => {
        return axios.get("/api/contacts").then(response => response.data);
      };
      
      const { data: contacts } = useQuery<Contact[], Error>({
        queryKey: ["veryUniqueId"],
        queryFn: getAllContacts,
      });
      

      return {contacts }

}

export default useContactsApi;
