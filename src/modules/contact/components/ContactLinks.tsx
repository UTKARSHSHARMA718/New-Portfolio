'use client'

import { contactLinks } from "../utils/contactData";
import ContactCard from "./ContactCard";

export default function ContactLinks() {
  const getClassName = (title: string) => {
    // Desktop only positioning
    if (title === "LinkedIn") {
      return "top-4 md:-top-4 md:-right-20 w-60 h-60";
    } else if (title === "Email") {
      return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-40! md:h-40!";
    }
    return "md:w-60 md:h-60 w-50 h-50 top-6 md:top-0 md:left-0";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
      {contactLinks.map((item, index) => (
        <ContactCard
          key={item.title}
          variant={index % 2 === 0 ? "style1" : "style2"}
          image={item.imgUrl}
          buttonText="Connect With Me"
          theme={item.theme}
          imgClassName={getClassName(item.title)}
          link={item.href}
        />
      ))}
    </div>
  );
}
