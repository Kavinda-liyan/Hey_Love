import type { FC } from "react";

type ButtonProp = {
  Btn_Lable: string;
  Click_Action?: () => void;
};

const Button: FC<ButtonProp> = ({ Btn_Lable, Click_Action }) => {
  return (
    <>
      <button
        className="font-mono text-gray-50 text-2xl p-3 m-2 bg-purple-900 rounded-lg border border-purple-100 hover:bg-purple-600 focus-visible:bg-purple-500"
        onClick={Click_Action}
      >
        {Btn_Lable}
      </button>
    </>
  );
};

export default Button;
