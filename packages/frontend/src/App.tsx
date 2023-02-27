import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DisplayContacts from "./components/DisplayContacts";
import NewContactForm from "./components/DisplayNewContactForm";
import useContactsApi from "./hooks/useContactsApi";

function App() {
  const { contacts } = useContactsApi();
  return (
    <div className="bg-[#8864fc] justify-center font-sans font-regular flex h-screen py-5 px-10 space-x-20">
      <NewContactForm />
      {contacts && <DisplayContacts contacts={contacts} />}
    </div>
  );
}

export default App;
