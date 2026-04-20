import { StaticImageData } from "next/image";

export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PrimaryButtonProps {
  title: string;
  image?: StaticImageData | string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface SliderItems{
  id:number;
  label:string
  beforeImage:StaticImageData
  afterImage:StaticImageData
}

export interface SliderProps{
 data:SliderItems
}

  //  id: 1,
  //   beforeImage: transformation1,
  //   afterImage: transformation2,
  //   label: "12 Weeks Later",