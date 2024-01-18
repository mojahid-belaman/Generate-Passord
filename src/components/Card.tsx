import { ReactNode } from "react";

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="w-1/3 bg-slate-700 px-5 py-10 mt-10 m-auto rounded-md shadow-lg">
      {children}
    </div>
  );
}

export default Card;
