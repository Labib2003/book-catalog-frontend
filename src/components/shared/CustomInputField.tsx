import { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export default function CustomInputField({
  className,
  ...restProps
}: CustomInputProps) {
  return (
    <div>
      <input
        className={
          "px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-teal-300 outline-none focus:outline-none focus:ring w-full " +
          (className as string)
        }
        {...restProps}
      />
    </div>
  );
}
