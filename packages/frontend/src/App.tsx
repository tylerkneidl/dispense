import DisplayContacts from "./components/DisplayContacts";
import DisplayNewContactForm from "./components/DisplayNewContactForm";

import useContactsApi from "./hooks/useGetContactsApi";

function App() {
  const { contacts } = useContactsApi();
  return (
    <div className="bg-[#8864fc] justify-center font-sans font-regular flex h-screen py-5 px-10 space-x-20">
      <DisplayNewContactForm />
      {contacts && <DisplayContacts contacts={contacts} />}
    </div>
  );      
}

export default App;
