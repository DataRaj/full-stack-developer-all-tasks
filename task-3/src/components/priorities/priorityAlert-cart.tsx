import React from 'react'

type HighPriorityAlertProps = {
    imgsrc: string,
    title: string,
    little1 : string,
    little2: string,
    date: string,
    status: string,
    neutralButton: string,
    warnButton: string,
}
export default function HighPriorityAlert(props: HighPriorityAlertProps) {
  return (

    <div className="self-stretch flex flex-row items-start justify-start gap-[52px] max-w-full text-base mq725:flex-wrap mq450:gap-[26px]">
    <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[250px] max-w-full">

      <div className="self-stretch rounded-2xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] flex flex-col items-start justify-start p-3 box-border gap-[14px] max-w-full text-sm text-gray">
        <div className="w-96 h-[146px] relative rounded-2xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
          <img
            className="h-8 w-8 relative rounded overflow-hidden shrink-0 min-h-[32px] z-[1]"
            loading="lazy"
            alt=""
            src={props.imgsrc}
          />
          <div className="flex-1 flex flex-row items-start justify-start gap-[44px] min-w-[208px] mq450:gap-[22px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
              <div className="w-[159px] relative font-medium inline-block box-border pr-5 z-[1]">
                {props.title}
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-3xs">
                <div className="relative inline-block min-w-[75px] z-[1]">
                  {props.little1}
                </div>
                <div className="relative z-[1]">
                  {props.little2}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-xs">
              <div className="relative inline-block min-w-[53px] z-[1]">
                {props.date}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-xs leading-[16px] z-[1]">
          {props.status}
        </div>
        <div className="self-stretch flex flex-row items-start justify-end text-text-colors-text-color-1">
          <div className="w-[194px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border gap-[20px]">
            <div className="rounded flex flex-row items-start justify-start py-[7px] px-2.5 z-[1]">
              <div className="relative [text-decoration:underline] inline-block min-w-[40px]">
                {props.neutralButton}
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[7px] px-3 bg-text-colors-text-color-1 rounded flex flex-row items-start justify-start z-[1] hover:bg-steelblue">
              <div className="relative text-sm font-roboto text-white text-left inline-block min-w-[49px]">
                {props.warnButton}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
