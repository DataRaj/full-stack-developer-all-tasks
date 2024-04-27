import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import DataMerger from "../components/DataMerger";
import DataStack from "../components/DataStack";
import ViewAll from "../components/common/viewAll";
import HighPriorityAlert from "../components/priorities/priorityAlert-cart";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-colors-bg-3 overflow-hidden flex flex-row items-start justify-start gap-[10px] leading-[normal] tracking-[normal] text-left text-sm text-text-colors-text-color-3 font-roboto mq1025:flex-wrap mq1025:pl-2.5 mq1025:pr-2.5 mq1025:box-border">
      <div className="h-[720px] w-[74px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border mq1025:hidden">
        <div className="self-stretch flex-1 relative flex items-center justify-center">
          <img
            className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[2px] w-full h-full [transform:scale(1.25)]"
            loading="lazy"
            alt=""
            src="/frame-1.svg"
          />
        </div>
      </div>
      <section className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[537px] max-w-full text-left text-xs text-text-colors-text-color-3 font-roboto mq725:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
          <FrameComponent />
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border gap-[24px] max-w-full">
            <div className="self-stretch rounded-2xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] overflow-hidden flex flex-row items-start justify-between py-3.5 pr-[35px] pl-12 gap-[20px] mq725:flex-wrap mq725:justify-center mq975:pl-6 mq975:box-border">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start py-0 pr-[30px] pl-[29px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/fleet-icons.svg"
                    />
                  </div>
                  <div className="relative font-medium inline-block min-w-[79px]">
                    Create Indents
                  </div>
                </div>
              </div>
              <div className="h-[47px] w-px relative box-border border-r-[1px] border-solid border-lightgray mq725:w-full mq725:h-px" />
              <div className="w-[65px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-center">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-[22px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/regular-used-icons.svg"
                    />
                  </div>
                  <div className="self-stretch relative font-medium inline-block min-w-[65px]">
                    Add Vehicle
                  </div>
                </div>
              </div>
              <div className="h-[47px] w-px relative box-border border-r-[1px] border-solid border-lightgray mq725:w-full mq725:h-px" />
              <div className="w-[65px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-center">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-[22px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/rv-hookup-fill0-wght400-grad0-opsz24-1-5.svg"
                    />
                  </div>
                  <div className="self-stretch relative font-medium inline-block min-w-[65px]">
                    Add Trailer
                  </div>
                </div>
              </div>
              <div className="h-[47px] w-px relative box-border border-r-[1px] border-solid border-lightgray mq725:w-full mq725:h-px" />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-[22px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/regular-used-icons-1.svg"
                    />
                  </div>
                  <div className="relative font-medium inline-block min-w-[65px]">
                    Add Driver
                  </div>
                </div>
              </div>
              <div className="h-[47px] w-px relative box-border border-r-[1px] border-solid border-lightgray mq725:w-full mq725:h-px" />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-[22px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/regular-used-icons.svg"
                    />
                  </div>
                  <div className="relative font-medium inline-block min-w-[65px]">
                    Add Indents
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[52px] max-w-full text-base mq725:flex-wrap mq450:gap-[26px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[250px] max-w-full">
                <div className="w-[188px] relative font-medium flex items-center box-border pr-5">
                  High Priority alerts (14)
                </div>
                {/* <div className="self-stretch rounded-2xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] flex flex-col items-start justify-start p-3 box-border gap-[14px] max-w-full text-sm text-gray">
                  <div className="w-96 h-[146px] relative rounded-2xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
                    <img
                      className="h-8 w-8 relative rounded overflow-hidden shrink-0 min-h-[32px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon--container.svg"
                    />
                    <div className="flex-1 flex flex-row items-start justify-start gap-[44px] min-w-[208px] mq450:gap-[22px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="w-[159px] relative font-medium inline-block box-border pr-5 z-[1]">
                          Driver Raised Concern
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-3xs">
                          <div className="relative inline-block min-w-[75px] z-[1]">
                            Load No : 12454,
                          </div>
                          <div className="relative z-[1]">
                            Bill To : RoaDo demo Bangalore
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-xs">
                        <div className="relative inline-block min-w-[53px] z-[1]">
                          13 Fab 24
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative text-xs leading-[16px] z-[1]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius mod tempor incididunt ut labore et dolore magna
                    aliqua
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end text-text-colors-text-color-1">
                    <div className="w-[194px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border gap-[20px]">
                      <div className="rounded flex flex-row items-start justify-start py-[7px] px-2.5 z-[1]">
                        <div className="relative [text-decoration:underline] inline-block min-w-[40px]">
                          Ignore
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-[7px] px-3 bg-text-colors-text-color-1 rounded flex flex-row items-start justify-start z-[1] hover:bg-steelblue">
                        <div className="relative text-sm font-roboto text-white text-left inline-block min-w-[49px]">
                          Resolve
                        </div>
                      </button>
                    </div>
                  </div>
                </div> */}
                <HighPriorityAlert
                imgsrc="/icon--container.svg"
                title="Driver Raised Concern"
                little1="Load No : 12454,"
                little2="Bill To : RoaDo demo Bangalore"
                date="13 Fab 24"
                status="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua"
                neutralButton="Ignore"
                warnButton="Resolve"
                />
              </div>
              <div className="flex-1 flex flex-col items-end justify-start gap-[13px] min-w-[250px] max-w-full text-sm text-gray">
                <button className="cursor-pointer [border:none] py-0 pr-0 pl-5 bg-[transparent] flex flex-row items-start justify-start gap-[5px]">
                  <ViewAll/>
                </button>
                {/* <div className="self-stretch rounded-2xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] flex flex-col items-start justify-start p-3 box-border gap-[14px] max-w-full">
                  <div className="w-96 h-[146px] relative rounded-2xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
                    <img
                      className="h-8 w-8 relative rounded overflow-hidden shrink-0 min-h-[32px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon--container-1.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-9 pl-0 box-border gap-[4px] min-w-[168px]">
                      <div className="relative font-medium z-[1]">
                        Reefer Temp. out of range
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-3xs">
                        <div className="relative inline-block min-w-[75px] z-[1]">
                          Load No : 12454,
                        </div>
                        <div className="relative z-[1]">
                          Bill To : RoaDo demo Bangalore
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-xs">
                      <div className="relative inline-block min-w-[53px] z-[1]">
                        13 Fab 24
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative text-xs leading-[16px] z-[1]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius mod tempor incididunt ut labore et dolore magna
                    aliqua
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end text-text-colors-text-color-1">
                    <div className="w-[199px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border gap-[20px]">
                      <div className="rounded flex flex-row items-start justify-start py-[7px] px-2.5 z-[1]">
                        <div className="relative [text-decoration:underline] inline-block min-w-[40px]">
                          Ignore
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-[7px] px-3 bg-text-colors-text-color-1 rounded flex flex-row items-start justify-start z-[1] hover:bg-steelblue">
                        <div className="relative text-sm font-roboto text-white text-left inline-block min-w-[49px]">
                          Resolve
                        </div>
                      </button>
                    </div>
                  </div>
                </div> */}
                <HighPriorityAlert 
                imgsrc="/icon--container-1.svg"
                title="Reefer Temp. out of range"
                little1="Load No : 12454,"
                little2="Bill To : RoaDo demo Bangalore"
                date="13 Fab 24"
                status="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua"
                neutralButton="Ignore"
                warnButton="Resolve"
                />

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[360px] bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-6 px-4 pb-9 box-border gap-[24px] max-w-full mq725:pt-5 mq725:pb-[23px] mq725:box-border">
        <DataMerger />
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative font-medium">
              Scheduled Activities (14)
            </div>
            <ViewAll/>
          </div>
          <DataStack />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
