import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  trips?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  trips,
  propWidth,
}) => {
  const tripsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-12 px-0 pb-0 box-border min-w-[180px] max-w-[196px] text-left text-sm text-text-colors-text-color-3 font-roboto">
      <div className="self-stretch rounded-xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] flex flex-col items-start justify-start pt-3 px-3 pb-3.5 gap-[16px]">
        <div className="w-[196px] h-[266px] relative rounded-xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] hidden" />
        <div className="w-[145px] flex flex-row items-start justify-start py-0 px-1 box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
            <div
              className="w-[52px] relative inline-block box-border pr-5 z-[1]"
              style={tripsStyle}
            >
              {trips}
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[27px] text-xs">
              <div className="flex-1 flex flex-row items-start justify-start py-[39px] px-[33px] relative">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-mediumaquamarine z-[1]" />
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumslateblue w-full h-full z-[2]" />
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-goldenrod w-full h-full z-[3]" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
                  <div className="relative font-medium inline-block min-w-[41px] z-[4]">
                    123456
                  </div>
                </div>
                <div className="relative text-dimgray inline-block min-w-[27px] z-[4] ml-[-32.4px]">
                  Total
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xs">
          <div className="self-stretch rounded [background:linear-gradient(90deg,_#fff,_#ffcb49)] flex flex-row items-start justify-between py-[5px] pr-3 pl-1 gap-[20px] z-[1]">
            <div className="h-6 w-[172px] relative rounded [background:linear-gradient(90deg,_#fff,_#ffcb49)] hidden" />
            <div className="relative inline-block min-w-[55px] z-[2]">
              Upcoming
            </div>
            <div className="relative inline-block min-w-[14px] z-[2]">50</div>
          </div>
          <div className="self-stretch rounded [background:linear-gradient(90deg,_#fff,_#7464ff)] flex flex-row items-start justify-between py-[5px] pr-3 pl-1 gap-[20px] z-[1]">
            <div className="h-6 w-[172px] relative rounded [background:linear-gradient(90deg,_#fff,_#7464ff)] hidden" />
            <div className="relative inline-block min-w-[45px] z-[2]">
              Ongoing
            </div>
            <div className="relative inline-block min-w-[21px] z-[2]">100</div>
          </div>
          <div className="self-stretch rounded [background:linear-gradient(90deg,_#fff,_#4fd2b5)] flex flex-row items-start justify-between py-[5px] pr-3 pl-1 gap-[20px] z-[1]">
            <div className="h-6 w-[172px] relative rounded [background:linear-gradient(90deg,_#fff,_#4fd2b5)] hidden" />
            <div className="relative inline-block min-w-[59px] z-[2]">
              Completed
            </div>
            <div className="relative inline-block min-w-[14px] z-[2]">50</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
