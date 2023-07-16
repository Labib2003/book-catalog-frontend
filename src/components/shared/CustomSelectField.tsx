import { InputHTMLAttributes } from "react";
import { ReactNode } from "react";

interface CustomInputFieldProps extends InputHTMLAttributes<HTMLSelectElement> {
  className?: string;
  children: ReactNode;
}
export default function CustomInputField({
  className,
  children,
  ...restProps
}: CustomInputFieldProps) {
  return (
    <div>
      <select
        className={
          "px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-teal-300 outline-none focus:outline-none focus:ring w-full " +
          (className as string)
        }
        {...restProps}
      >
        {children}
      </select>
    </div>
  );
}
