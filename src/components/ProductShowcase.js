const ProductShowcase = () => {
  return (
    <div className="w-[700px] rounded-11xl overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[41px] pb-[167px] pr-[78px] pl-[60px] box-border relative gap-[416px] bg-[url('/public/rectangle-4@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[700px] max-w-full text-left text-41xl text-shade-white font-paragraph-small-semibold mq750:gap-[416px] mq750:pt-5 mq750:pb-[71px] mq750:pr-[39px] mq750:pl-[30px] mq750:box-border mq750:min-w-full mq450:gap-[416px] mq1100:pt-[27px] mq1100:pb-[109px] mq1100:box-border mq1275:flex-1">
      <img
        className="w-full h-full absolute my-0 mx-[!important] bottom-[-5px] left-[-2px] rounded-11xl object-cover"
        alt=""
        src="/rectangle-4@2x.png"
      />
      <div className="flex flex-row items-center justify-start py-0.5 pr-px pl-0 gap-[11px] z-[1]">
        <img
          className="h-[43.8px] w-11 relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/logomark.svg"
        />
        <img
          className="h-[21.1px] w-[126.4px] relative"
          loading="eager"
          alt=""
          src="/logotype.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full shrink-0 mq750:gap-[32px]">
        <h1 className="m-0 self-stretch h-[198px] relative text-inherit tracking-[-0.02em] leading-[110%] font-semibold font-inherit inline-block z-[1] mq750:text-29xl mq750:leading-[53px] mq450:text-17xl mq450:leading-[40px]">
          Enhance your design process with Nietzsche.
        </h1>
        <div className="w-[420px] relative text-lg leading-[145%] text-gainsboro-200 inline-block max-w-full z-[1]">
          Our versatile tool provides an extensive array of components, igniting
          creativity and enhancing efficiency to streamline workflows for
          designers.
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
