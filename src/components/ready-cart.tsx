import { User } from "lucide-react";

export default function AlertCard() {
  return (
    <>
      <div className="rounded-md w-fit max-w-[500px] bg-background flex p-6 flex-col">
        <div className="grid grid-cols-2">
          <div className="text-start flex items-center gap-2">
            <span className="bg-muted p-3 rounded-md">
              <User />
            </span>
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Driver raised concern</h1>
              <span>address...</span>
            </div>
          </div>
          <span className="text-end text-sm">13 Feb 2023</span>
        </div>
        <p className="mt-2 leading-5 tracking-tight text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          magnam ducimus sapiente consequuntur nemo voluptas, nobis tempora rem
          eum iure ratione, sed rerum doloremque eos numquam sint tenetur atque
          assumenda.
        </p>
      </div>
      <div className="rounded-md w-fit max-w-[500px] bg-background flex p-6 flex-col">
        <div className="grid grid-cols-2">
          <div className="text-start flex items-center gap-2">
            <span className="bg-muted p-3 rounded-md">
              <User />
            </span>
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Driver raised concern</h1>
              <span>address...</span>
            </div>
          </div>
          <span className="text-end text-sm">13 Feb 2023</span>
        </div>
        <p className="mt-2 leading-5 tracking-tight text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
        </p>
      </div>
    </>
  );
}