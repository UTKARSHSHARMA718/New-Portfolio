import { contactLinks } from "../utils/contactData";
import ContactInfoCard from "./ContactInfoCard";

export default function ContactLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
      {contactLinks.map((item) => (
        <ContactInfoCard key={item.title} item={item} />
      ))}
    </div>
  );
}