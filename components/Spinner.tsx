import { FC } from "react";

export const Spinner: FC = () => {
  return (
    <div className="bg-white fixed inset-0 z-40 flex h-screen w-screen place-items-center justify-center bg-base-100 ">
      <div className="duration-75 z-50 h-12 w-12 animate-spin rounded-full border-8 border-slate-300 border-t-transparent opacity-100 " />
    </div>
  );
};
