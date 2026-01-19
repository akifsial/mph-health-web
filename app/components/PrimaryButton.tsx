import Image from "next/image";

function PrimaryButton({title,image,className}) {
  return (
    <button className={`${className} gap-[8px] flex items-center justify-content-center font-nudgetrial font-bold bg-[#E8FE61] pt-[14px] pb-[14px] ps-[22px] pe-[22px] rounded-full`}>
      <span>{title}</span>
      <Image src={image} className="pb-1" />
    </button>
  );
}

export default PrimaryButton;
