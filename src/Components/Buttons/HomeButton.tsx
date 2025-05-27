import { faHome } from "@fortawesome/free-solid-svg-icons";
import Button_2 from "./Button_2";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

type HomeBtn = {
  BgColor: string;
  BgColorHov: string;
};
const HomeButton: FC<HomeBtn> = ({ BgColor, BgColorHov }) => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <Button_2
      icon_Lable={faHome}
      icon_Bg={BgColor}
      icon_bg_Hover={BgColorHov}
      Click_Action={handleHome}
    />
  );
};

export default HomeButton;
