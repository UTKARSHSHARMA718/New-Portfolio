import Image from "next/image";
import React from "react";

type CardVariant = "style1" | "style2";

export type CardTheme = "linkedin" | "github" | "email";

interface CardProps {
  image: string;
  buttonText?: string;
  variant?: CardVariant;
  theme?: CardTheme;
  className?: string;
  imgClassName?: string;
  link: string;
}

/* 🎨 Shape Variants */
const variantStyles: Record<CardVariant, string> = {
  style1: "[border-radius:24%_121%_16%_176%_/106%_10%_117%_208%]",
  style2: "[border-radius:45%_79%_79%_63%_/106%_10%_117%_52%]",
};

/* 🎨 Background Themes */
const themeStyles: Record<CardTheme, string> = {
  linkedin: "bg-gradient-to-l from-[#0a66c2] to-white text-black",
  github: "bg-gradient-to-l from-white to-green-900 text-white",
  email: "bg-gradient-to-l from-red-500 to-white text-black",
};

const Card: React.FC<CardProps> = ({
  image,
  buttonText = "Connect with me",
  variant = "style1",
  theme = "linkedin",
  className,
  imgClassName,
  link,
}) => {
  return (
    <div
      className={`
        ${className}
        w-full max-w-1/3 p-6 relative overflow-hidden
        h-72
        backdrop-blur-xl
        shadow-[0_20px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]
        transition-all duration-300
        hover:-translate-y-2 hover:scale-105
        flex justify-center items-end
        ${variantStyles[variant]}
        ${themeStyles[theme]}
      `}
    >
      {/* Glow Blob */}
      {theme === "linkedin" && (
        <Image
          width={60}
          height={60}
          src="/images/linkedin-logo.png"
          alt="LinkedIn logo"
          className="absolute top-4 left-4"
        />
      )}
      {theme === "github" && (
        <Image
          width={60}
          height={60}
          src="/images/github-logo.png"
          alt="LinkedIn logo"
          className="absolute top-4 right-4"
        />
      )}

      {/* Profile Image */}
      <Image
        height={100}
        width={1000}
        src={image}
        alt="profile"
        className={`${imgClassName} absolute`}
      />

      <a
        href={link}
        target="_blank"
        className="
          px-5 py-2 rounded-full
          bg-black/70 text-white
          backdrop-blur-md cursor-pointer
          shadow-xl shadow-black/90
          transition-all duration-300
          hover:scale-105 hover:bg-black/90
          "
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Card;
