import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Button_2 from "./Button_2";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

type BackBtn = {
  BgColor: string;
  BgColorHov: string;
  BackLink: string;
};

const BackButton: FC<BackBtn> = ({ BgColor, BgColorHov, BackLink }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(BackLink);
  };
  return (
    <Button_2
      icon_Lable={faArrowLeft}
      icon_Bg={BgColor}
      icon_bg_Hover={BgColorHov}
      Click_Action={handleBack}
    />
  );
};

export default BackButton;
