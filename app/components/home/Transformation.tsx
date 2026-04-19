import PrimaryButton from "../PrimaryButton";
import rightArrow from "@/app/assets/svgs/arrow-right.svg";
import SliderTransformation from "./SliderTransformation";
import transformation1 from "@/app/assets/images/transformation-1.png";
import transformation2 from "@/app/assets/images/transformation-2.png";

const sliderData = [
  {
    id: 1,
    beforeImage: transformation1,
    afterImage: transformation2,
    label: "12 Weeks Later",
  },
  {
    id: 2,
    beforeImage: transformation1,
    afterImage: transformation2,
    label: "8 Weeks Later",
  },
  {
    id: 3,
    beforeImage: transformation1,
    afterImage: transformation2,
    label: "8 Weeks Later",
  },
  {
    id: 4,
    beforeImage: transformation1,
    afterImage: transformation2,
    label: "8 Weeks Later",
  },
];

function Transformation() {
  return (
    <div className="px-[100px] py-[70px]">
      <div className=" flex justify-between w-full lg:mb-0 mb-10 w-full">
        <h2 className="w-[600px] text-center leading-17 font-nudgetrial font-bold sm:text-[50px] text-[40px] md:text-[64px] lg:text-start text-center">
          Real Transformations, Lasting Results
        </h2>
        <div>
          <PrimaryButton
            className={" cursor-pointer h-fit"}
            title={"See More Transformations"}
            image={rightArrow}
          />
        </div>
      </div>
      <div className="flex gap-6 overflow-x-auto w-full flex-nowrap">
        {sliderData.map((item) => (
          <SliderTransformation key={item.id} data={item} />
        ))}
      </div>{" "}
    </div>
  );
}

export default Transformation;
