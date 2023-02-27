import { ReactElement } from "react";

export interface TextLabelProps {
    children: ReactElement;
    label: string;
  }
  
  const TextLabel = ({ children, label }: TextLabelProps) => {
    return (
      <label className="w-full flex flex-col font-bold text-[#8864fc]">
        <span className="w-fit">{label}</span>
        {children}
      </label>
    );
  };


  export default TextLabel