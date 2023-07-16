import { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}
export default function CustomButton({
  className,
  children,
  ...restProps
}: CustomButtonProps) {
  return (
    <button
      className={
        "bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" +
        (className as string)
      }
      {...restProps}
    >
      {children}
    </button>
  );
}
