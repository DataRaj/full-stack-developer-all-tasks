import React from 'react'

export default function ViewAll() {
  return (
            <button className="cursor-pointer [border:none] py-0 pr-0 pl-5 bg-[transparent] flex flex-row items-start justify-start gap-[5px]">
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="relative text-sm font-roboto text-text-colors-text-color-1 text-left inline-block min-w-[50px]">
            View All
          </div>
        </div>
        <img
          className="h-5 w-5 relative min-h-[20px]"
          alt=""
          src="/group-2616069.svg"
        />
      </button>
  )
}
