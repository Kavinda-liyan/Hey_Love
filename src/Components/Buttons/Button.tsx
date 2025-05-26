import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

type ButtonProp = {
  Btn_Lable: string;
  Click_Action?: () => void;
  icon_Lable: IconProp;
  icon_Flex: boolean;
  Btn_color:string;
};

const Button: FC<ButtonProp> = ({
  Btn_Lable,
  Click_Action,
  icon_Lable,
  icon_Flex = true,
  Btn_color
}) => {
  return (
    <>
      <button
        className={`flex items-center ${icon_Flex?'flex-row-reverse':''}  font-mono text-gray-50 text-md 
          px-4 py-2 m-2 bg-${Btn_color}-900 rounded-full border border-${Btn_color}-100 hover:bg-${Btn_color}-600 focus-visible:bg-purple-500
          hover:cursor-pointer`}
        onClick={Click_Action}
      >
        {Btn_Lable}
        <FontAwesomeIcon icon={icon_Lable} className="px-1" />
      </button>
    </>
  );
};

export default Button;
