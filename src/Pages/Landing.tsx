import { useNavigate } from "react-router-dom";
import Capybara_01 from "../assets/Images/Cappybara_float.gif";
import Button from "../Components/Buttons/Button";
import Images from "../Components/ImageCards/Images";
import PageWrapper from "./PageWrapper";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Landing = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/happybirthday28");
  };
  return (
    <>
      <PageWrapper Bg_Color="bg-purple-500">
        <div className="ml-auto mr-auto">
          <Images source={Capybara_01} />
        </div>
        <div>
          <Button Btn_Lable="Click Me! " Click_Action={handleNav} icon_Lable={faArrowRight} icon_Flex={false} />
        </div>
      </PageWrapper>
    </>
  );
};

export default Landing;
