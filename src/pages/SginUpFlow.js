import ProductShowcase from "../components/ProductShowcase";
import FrameComponent from "../components/FrameComponent";

const SginUpFlow = () => {
  return (
    <div className="w-full relative rounded-[20px] bg-shade-white overflow-hidden flex flex-row items-center justify-start p-5 box-border gap-[135px] tracking-[normal] mq750:gap-[135px] mq450:gap-[135px] mq1275:flex-wrap mq1275:gap-[135px]">
      <ProductShowcase />
      <FrameComponent />
    </div>
  );
};

export default SginUpFlow;
