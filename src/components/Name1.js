import { useMemo } from "react";

const Name1 = ({ label, whatShouldWeCallPlacehold, propWidth }) => {
  const whatShouldWeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-sm text-grey-900 font-paragraph-small-semibold">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
        <div className="self-stretch relative leading-[145%] font-medium">
          {label}
        </div>
        <div className="self-stretch h-14 rounded-mini bg-shade-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 pr-[17px] pl-[15px] max-w-full border-t-[1px] border-solid border-gainsboro-100 border-r-[1px] border-b-[2px] border-l-[1px]">
          <div className="h-5 flex-1 flex flex-row items-center justify-start gap-[8px] max-w-full">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
              alt=""
              src="/iconleft.svg"
            />
            <div className="self-stretch w-0 flex flex-row items-center justify-start gap-[2px]">
              <div className="self-stretch w-[34px] relative leading-[145%] hidden items-center">
                Input
              </div>
              <div className="h-5 w-0.5 relative hidden">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-primary-500-main hidden" />
              </div>
              <div className="self-stretch w-[79px] relative leading-[145%] text-grey-400 hidden items-center">
                Placeholder
              </div>
            </div>
            <input
              className="w-[170px] [border:none] [outline:none] font-medium font-paragraph-small-semibold text-sm bg-[transparent] h-5 relative leading-[145%] text-silver text-left flex items-center"
              placeholder={whatShouldWeCallPlacehold}
              type="text"
              style={whatShouldWeStyle}
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-5 relative leading-[145%] text-grey-500 hidden">
        Helper text
      </div>
    </div>
  );
};

export default Name1;
