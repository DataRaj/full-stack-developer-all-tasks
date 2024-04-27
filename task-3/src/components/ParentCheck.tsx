import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ParentCheckType = {
  income?: string;
  cAD?: string;
  paymentsReceived?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const ParentCheck: FunctionComponent<ParentCheckType> = ({
  income,
  cAD,
  paymentsReceived,
  propMinWidth,
  propColor,
  propMinWidth1,
  propMinWidth2,
}) => {
  const incomeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const cADStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth1,
    };
  }, [propColor, propMinWidth1]);

  const paymentsReceivedStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className="flex-1 rounded bg-white flex flex-col items-start justify-start p-3 gap-[6px] text-left text-xs text-dimgray font-roboto border-[1px] border-solid border-lightgray">
      <div className="w-[155px] h-[83px] relative rounded bg-white box-border hidden border-[1px] border-solid border-lightgray" />
      <div
        className="relative font-medium inline-block min-w-[41px] z-[1]"
        style={incomeStyle}
      >
        {income}
      </div>
      <div
        className="relative text-base font-medium text-green inline-block min-w-[91px] z-[1]"
        style={cADStyle}
      >
        {cAD}
      </div>
      <div
        className="relative inline-block min-w-[110px] z-[1]"
        style={paymentsReceivedStyle}
      >
        {paymentsReceived}
      </div>
    </div>
  );
};

export default ParentCheck;
