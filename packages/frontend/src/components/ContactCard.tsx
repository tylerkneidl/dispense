import { Contact } from "@dispense-takehome/common";

interface ContactCardProps {
  contactInfo: Contact;
}

const ContactCard = ({ contactInfo }: ContactCardProps) => {
  return (
    <div className="flex flex-col p-2 w-64 items-center border text-gray-700 bg-white leading-5 rounded-2xl shadow-sm">
      <div className="flex space-x-1 font-bold">
        <span>{contactInfo.firstName}</span>
        <span>{contactInfo.lastName}</span>
      </div>
      <div className="flex space-x-1 text-sm leading-4 mb-1">
        <span className="text-[#8864fc]">{contactInfo.email}</span>
      </div>
      {contactInfo.includeAddress && (
        <div className="flex flex-col items-center text-xs ml-1  leading-4">
          <span>{contactInfo.addressOne}</span>
          <span>{contactInfo.addressTwo}</span>
          <div>
            {`
            ${contactInfo.city}
            ${contactInfo.state}, ${contactInfo.zip}`}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
