import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

type ButtonProp = {
  Btn_Lable: string;
  Click_Action?: () => void;
  icon_Lable: IconProp;
  icon_Flex: boolean;
};

const Button: FC<ButtonProp> = ({
  Btn_Lable,
  Click_Action,
  icon_Lable,
  icon_Flex = true,
}) => {
  return (
    <>
      <button
        className={`flex items-center ${icon_Flex?'flex-row-reverse':''}  font-mono text-gray-50 text-2xl 
          px-4 py-2 m-2 bg-purple-900 rounded-full border border-purple-100 hover:bg-purple-600 focus-visible:bg-purple-500`}
        onClick={Click_Action}
      >
        {Btn_Lable}
        <FontAwesomeIcon icon={icon_Lable} className="mx-2" />
      </button>
    </>
  );
};

export default Button;
