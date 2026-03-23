import { ContactLink } from "../utils/contactData";

type ContactInfoCardProps = {
  item: ContactLink;
};

export default function ContactInfoCard({ item }: ContactInfoCardProps) {
  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      className="group block rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-teal-300/30 hover:bg-white/10"
    >
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      </div>

      <p className="break-all text-sm font-medium text-teal-300 group-hover:text-teal-200">
        {item.value}
      </p>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {item.description}
      </p>
    </a>
  );
}