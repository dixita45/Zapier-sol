import { ReactNode } from "react";

export const SecondaryButton = ({
  children,
  onClick,
  size = "small",
}: {
  children: ReactNode;
  onClick: () => void;
  size?: "big" | "small";
}) => {
  return (
    <div
      onClick={onClick}
      className={`${size === "small" ? "text-sm py-2 px-4" : "text-xl py-3 px-6 font-medium"} 
                  cursor-pointer hover:shadow-md border text-black border-black 
                  rounded-full text-center flex justify-center items-center`}
    >
      {children}
    </div>
  );
};
