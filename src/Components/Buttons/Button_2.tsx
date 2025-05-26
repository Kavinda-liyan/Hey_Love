import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
type ButtonProps = {
  Click_Action?: () => void;
  icon_Lable: IconProp;
};
const Button_2: FC<ButtonProps> = ({ Click_Action, icon_Lable }) => {
  return (
    <button
      className={`flex items-center'flex-row-reverse':''}  font-mono text-gray-50 text-md h-9 w-9 justify-center
              p-2 m-2 bg-teal-900 rounded-full border border-teal-100 hover:bg-teal-600 focus-visible:bg-purple-500
              hover:cursor-pointer`}
      onClick={Click_Action}
    >
      <FontAwesomeIcon icon={icon_Lable} className="px-1" />
    </button>
  );
};

export default Button_2;
