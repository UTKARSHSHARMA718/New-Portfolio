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

const variantStyles: Record<CardVariant, string> = {
  style1: "rounded-lg",
  style2: "rounded-lg",
};

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
        w-full
        h-56 sm:h-64 md:h-72
        p-4 sm:p-6
        relative overflow-hidden
        backdrop-blur-xl
        shadow-[0_20px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]
        transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.02]
        flex justify-center items-end
        ${variantStyles[variant]}
        ${themeStyles[theme]}
      `}
    >
      {/* Icons */}
      {theme === "linkedin" && (
        <Image
          width={40}
          height={40}
          src="/images/linkedin-logo.png"
          alt="LinkedIn"
          className="absolute top-3 left-3 sm:w-12 sm:h-12"
        />
      )}

      {theme === "github" && (
        <Image
          width={40}
          height={40}
          src="/images/github-logo.png"
          alt="GitHub"
          className="absolute top-3 right-3 sm:w-12 sm:h-12"
        />
      )}

      {/* Profile Image */}
      <Image
        height={300}
        width={300}
        src={image}
        alt="profile"
        className={`
          ${imgClassName}
          absolute 
          w-32 h-32 sm:w-40 sm:h-40 md:w-auto md:h-auto
          object-contain
          opacity-90
        `}
      />

      {/* Button */}
      <a
        href={link}
        target="_blank"
        className="
          px-4 py-2 sm:px-5 sm:py-2.5
          text-sm sm:text-base
          rounded-full
          bg-black/70 text-white
          backdrop-blur-md
          shadow-xl shadow-black/70
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
