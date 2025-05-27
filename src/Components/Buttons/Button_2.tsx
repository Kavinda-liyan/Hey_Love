import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
type ButtonProps = {
  Click_Action?: () => void;
  icon_Lable: IconProp;
  icon_Bg:string;
  icon_bg_Hover:string
};
const Button_2: FC<ButtonProps> = ({ Click_Action, icon_Lable,icon_Bg ,icon_bg_Hover}) => {
  return (
    <button
      className={`flex items-center'flex-row-reverse':''}  font-mono text-gray-50 text-md h-9 w-9 justify-center
              p-2 m-1 ${icon_Bg} rounded-full border border-gray-50 hover:${icon_bg_Hover} 
              hover:cursor-pointer`}
      onClick={Click_Action}
    >
      <FontAwesomeIcon icon={icon_Lable} className="px-1" />
    </button>
  );
};

export default Button_2;
