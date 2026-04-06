import { contactLinks } from "../utils/contactData";
import ContactCard from "./ContactCard";

export default function ContactLinks() {
  const getClassName = (title: string) => {
    if (title === "LinkedIn") {
      return "-top-16 -right-25";
    } else if (title === "Email") {
      return "w-40 h-40 left-30 top-10";
    }
    return "w-70 h-70 top-10 left-0";
  };

  return (
    <div className="flex flex-col gap-1">
      {contactLinks.map((item, index) => (
        <ContactCard
          key={item.title}
          variant={index % 2 == 0 ? "style1" : "style2"}
          image={item.imgUrl}
          buttonText="Connect With Me"
          theme={item.theme}
          className={index % 2 == 1 ? "self-end" : ""}
          imgClassName={getClassName(item.title)}
          link={item.href}
        />
      ))}
    </div>
  );
}
