import { CardTheme } from "../components/ContactCard";

export type ContactLink = {
  title: string;
  value: string;
  href: string;
  description: string;
  imgUrl: string;
  theme: CardTheme
};

export const contactLinks: ContactLink[] = [
  {
    title: "LinkedIn",
    value: "linkedin.com/in/utkarsh-sharma-98860520a",
    href: "https://www.linkedin.com/in/utkarsh-sharma-98860520a",
    imgUrl: '/images/linkedin-profile-removebg.png',
    description: "Connect with me professionally and view my experience.",
    theme: 'linkedin'
  },
  {
    title: "GitHub",
    value: "github.com/UTKARSHSHARMA718",
    href: "https://github.com/UTKARSHSHARMA718",
    imgUrl:"/images/github-profile-removebg.png",
    description: "Check out my projects, code, and contributions.",
    theme: 'github'
  },
  {
    title: "Email",
    value: "utkarsh79sharma@gmail.com",
    href: "mailto:utkarsh79sharma@gmail.com",
    imgUrl: "/images/gmail.png",
    description: "Send me a direct email for work, collaboration, or queries.",
    theme: 'email'
  },
];