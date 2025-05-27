import Link from "next/link";
import React from "react";

export interface ButtonProps {
  text: string;
  type?: "href" | "button";
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  href,
  className,
}) => {
  if (!className) {
    className = "bg-primary text-dark px-5 font-medium py-3 rounded-lg mt-5";
  }

  const style = `${className} inline-block hover:bg-secondary transition-colors`;

  if (!text && typeof text !== "string") {
    throw new Error("Invalid text prop: It must be a non-empty string.");
  }

  if (type === "href" && href) {
    return (
      <Link className={style} href={href}>
        {text}
      </Link>
    );
  }

  return <button className={style}>{text}</button>;
};

export default Button;
