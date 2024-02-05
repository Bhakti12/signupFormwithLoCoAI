import Name1 from "./Name1";

const FrameComponent = () => {
  return (
    <form className="m-0 w-[454px] flex flex-col items-start justify-start gap-[32px] min-w-[454px] max-w-full mq750:min-w-full mq450:gap-[32px] mq1275:flex-1">
      <h1 className="m-0 self-stretch relative text-17xl tracking-[-0.04em] leading-[120%] font-semibold font-paragraph-small-semibold text-gray-100 text-center mq750:text-10xl mq750:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
        Create an account
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 rounded-mini bg-shade-white box-border overflow-hidden flex flex-col items-center justify-center p-4 max-w-full border-t-[1px] border-solid border-gainsboro-100 border-r-[1px] border-b-[2px] border-l-[1px]">
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <img
              className="h-5 w-5 relative object-cover"
              loading="eager"
              alt=""
              src="/rectangle-6@2x.png"
            />
            <div className="relative text-base leading-[145%] font-semibold font-paragraph-small-semibold text-grey-700 text-center">
              Sign up with Google
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-1 px-0 box-border max-w-full">
        <div className="h-px w-[454px] relative bg-grey-100 max-w-full" />
        <div className="w-8 bg-shade-white flex flex-row items-center justify-center z-[1] ml-[-244px]">
          <div className="relative text-sm leading-[145%] font-paragraph-small-semibold text-grey-500 text-center">
            Or
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <Name1
          label="Name"
          whatShouldWeCallPlacehold="What should we call you?"
        />
        <Name1
          label="Email"
          whatShouldWeCallPlacehold="you@domain.com"
          propWidth="121px"
        />
        <Name1
          label="Password"
          whatShouldWeCallPlacehold="••••••••"
          propWidth="60px"
        />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative text-sm leading-[145%] font-medium font-paragraph-small-semibold text-silver text-left">
            Must be at least 8 characters
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[26px]">
        <button className="cursor-pointer [border:none] py-4 px-6 bg-primary-500 self-stretch rounded-lg overflow-hidden flex flex-col items-center justify-center border-t-[1px] border-solid border-orangered border-r-[1px] border-b-[2px] border-l-[1px]">
          <div className="flex flex-row items-center justify-center">
            <div className="relative text-base leading-[145%] font-semibold font-paragraph-small-semibold text-shade-white text-center">
              Create account
            </div>
          </div>
        </button>
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="flex flex-row items-center justify-start">
            <div className="relative text-sm leading-[20px] font-paragraph-small-semibold text-black text-left">
              Already an member?
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-lg overflow-hidden flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <div className="relative text-sm leading-[145%] font-semibold font-paragraph-small-semibold text-primary-500 text-center whitespace-nowrap">
                Log in
              </div>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent;
