import Image from "next/image";
import { PrimaryButtonProps } from "../types/ui";

function PrimaryButton({
  title,
  image,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex h-fit items-center justify-center gap-2 font-nudgetrial font-bold bg-[#E8FE61] py-[14px] px-[22px] rounded-full transition-all duration-200 ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"} ${className}`}
    >
      <span>{title}</span>

      {image && (
        <Image
          src={image}
          alt="button icon"
          className="pb-1"
        />
      )}
    </button>
  );
}

export default PrimaryButton;