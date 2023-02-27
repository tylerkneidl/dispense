import { Contact } from "@dispense-takehome/common";
import ContactCard from "./ContactCard";

interface DisplayContactsProps {
  contacts: Contact[];
}

const DisplayContacts = ({ contacts }: DisplayContactsProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold ml-5 text-2xl text-white">Contacts</h2>
      <div className="flex flex-col h-11/12 pr-3 rounded-2xl overflow-y-scroll scrollbar-thin scrollbar- scrollbar-thumb-white scrollbar-track-indigo-200 scrollbar-track-rounded-2xl scrollbar-thumb-rounded-2xl space-y-1">
        {contacts
          ?.sort((a: Contact, b: Contact) =>
            a.firstName.localeCompare(b.firstName)
          )
          .map((contact: Contact) => {
            return <ContactCard key={contact.id} contactInfo={contact} />;
          })}
      </div>
    </div>
  );
};

export default DisplayContacts;
