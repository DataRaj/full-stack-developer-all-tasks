import { FunctionComponent } from "react";
import ParentCheck from "./ParentCheck";
import ViewAll from "./common/viewAll";

const DataMerger: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-left text-xs text-text-colors-text-color-3 font-roboto">
      <div className="w-[182px] relative text-base font-medium flex items-center box-border pr-5">
        Todays Highlights (14)
      </div>
      <div className="flex flex-row items-start justify-start pt-0 pb-2 pr-5 pl-0 text-dimgray">
        <div className="relative inline-block min-w-[68px]">19 Mar 2024 </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[18px] gap-[18px] text-dimgray">
        <ParentCheck
          income="Income"
          cAD="100000 CAD"
          paymentsReceived="2 payments received"
        />
        <ParentCheck
          income="Expenses"
          cAD="50000 CAD"
          paymentsReceived="5 payments paid"
          propMinWidth="52px"
          propColor="#d04141"
          propMinWidth1="82px"
          propMinWidth2="89px"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-2 gap-[20px] text-sm">
          <div className="relative font-medium">Completed Activities (14)</div>
          <ViewAll/>
        </div>
      <div className="self-stretch rounded bg-white flex flex-col items-start justify-start py-3.5 px-0 gap-[13.5px] border-[1px] border-solid border-lightgray">
        <div className="self-stretch h-56 relative rounded bg-white box-border hidden border-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
          <div className="h-8 flex-1 relative leading-[16px] whitespace-pre-wrap inline-block z-[1]">
            <span className="text-text-colors-text-color-1">
              Gurpreet Singh
            </span>
            <span>{` `}</span>
            <span className="text-dimgray">{` (Dispatch team) has created `}</span>
            <span>Load No. I-I-AAA-1325</span>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 text-dimgray">
          <div className="flex-1 relative leading-[16px] z-[1]">
            <span className="text-text-colors-text-color-1">Aman</span>
            <span>{` (Driver) `}</span>
            <span className="text-gray">Picked Up</span>
            <span>{` goods at `}</span>
            <span className="text-gray">Location_Name</span>
            <span>{` for `}</span>
            <span className="text-text-colors-text-color-3">
              Load No. I-I-AAA-1325
            </span>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
          <div className="h-8 flex-1 relative leading-[16px] whitespace-pre-wrap inline-block z-[1]">
            <span className="text-text-colors-text-color-1">
              Gurpreet Singh
            </span>
            <span>{` `}</span>
            <span className="text-dimgray">{` (Dispatch team) has created `}</span>
            <span>Load No. I-I-AAA-1325</span>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
          <div className="relative leading-[16px] z-[1]">
            <span>{`Load No. I-I-AAA-1325 `}</span>
            <span className="text-dimgray">will</span>
            <span>{` `}</span>
            <span className="text-dimgray">{`start added by `}</span>
            <span className="text-text-colors-text-color-1">
              Gurpreet Singh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataMerger;
