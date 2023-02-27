import { Contact } from "@dispense-takehome/common";
import React from "react";

interface ContactCardProps {
  contactInfo: Contact;
}

const ContactCard = ({ contactInfo }: ContactCardProps) => {
  return (
    <div>
      <div>
        <span>{contactInfo.firstName}</span>
        <span>{contactInfo.lastName}</span>
      </div>
      <span>{contactInfo.email}</span>
      {contactInfo.includeAddress && (
        <div>
          <span>{contactInfo.addressOne}</span>
          <span>{contactInfo.addressTwo}</span>
          <span>{contactInfo.city}</span>
          <span>{contactInfo.state}</span>
          <span>{contactInfo.zip}</span>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
