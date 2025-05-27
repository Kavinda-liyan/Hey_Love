import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PageWrapper from "./PageWrapper";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Buttons/Button";
import HomeButton from "../Components/Buttons/HomeButton";
import BackButton from "../Components/Buttons/BackButton";

const Step_1 = () => {
  const txtRef1 = useRef(null);
  const txtRef2 = useRef(null);
  const txtRef3 = useRef(null);
  const btnRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    gsap.fromTo(
      txtRef1.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      txtRef2.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8 }
    );
    gsap.fromTo(
      txtRef3.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.1 }
    );
    gsap.fromTo(
      btnRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.8 }
    );
  }, []);

  const handleStep02 = () => {
    navigate("/step_1/step_2");
  };

  return (
    <PageWrapper Bg_Color={"bg-teal-700"}>
      <div className="relative h-full w-full flex flex-col">
        <div className="absolute top-1 left-1 flex gap-0">
          <BackButton
            BgColor="bg-teal-900"
            BgColorHov="bg-teal-600"
            BackLink="/happybirthday28"
          />
          <HomeButton BgColor="bg-teal-900" BgColorHov="bg-teal-600" />
        </div>
        <div className="ml-auto mr-auto mt-auto mb-auto text-center">
          <div>
            <h1 className="text-sm font-semibold text-teal-100" ref={txtRef1}>
              Hi
            </h1>
            <h2 className="text-lg font-semibold text-teal-200" ref={txtRef2}>
              Devi
            </h2>
            <h3
              className="text-xl font-semibold text-teal-300 w-50"
              ref={txtRef3}
            >
              I have something to say
            </h3>
          </div>
          <div className="flex items-center justify-center" ref={btnRef}>
            <Button
              Btn_Lable="Say!"
              icon_Flex={false}
              icon_Lable={faArrowRight}
              Click_Action={handleStep02}
              Btn_color="bg-teal-900"
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Step_1;
