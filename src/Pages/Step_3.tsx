import { useEffect, useRef } from "react";
import BackButton from "../Components/Buttons/BackButton";
import HomeButton from "../Components/Buttons/HomeButton";
import PageWrapper from "./PageWrapper";
import gsap from "gsap";
import OmShanthi from "../assets/Images/om-shanti-om-shah-rukh-khan.gif";
import Button from "../Components/Buttons/Button";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Step_3 = () => {
  const txt1Ref = useRef(null);
  const txt2Ref = useRef(null);
  const btnRef=useRef(null);
  const imgRef=useRef(null);
  const navigate=useNavigate();

  const handleNext=()=>{
    navigate("/step_1/step_2/step_3/step_4");
  }

  useEffect(() => {
    gsap.fromTo(
      txt1Ref.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(2)" }
    );
    gsap.fromTo(
      txt2Ref.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(2)", delay: 0.5 }
    );
    gsap.fromTo(
      btnRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(2)", delay: 1.5 }
    );
    gsap.fromTo(
      imgRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(2)", delay:0.2 }
    );
  }, []);
  return (
    <PageWrapper Bg_Color="bg-amber-500">
      <div className="relative h-full w-full flex flex-col">
        <div className="absolute top-1 left-1 flex gap-0">
          <BackButton
            BgColor="bg-amber-800"
            BackLink="/step_1/step_2"
            BgColorHov="bg-amber-600"
          />
          <HomeButton BgColor="bg-amber-800" BgColorHov="bg-amber-600" />
        </div>
        <div className="ml-auto mr-auto mt-auto mb-auto text-center text-gray-50 flex flex-col">
          <div ref={imgRef} className="h-36  flex items-center justify-center text-center  m-4 overflow-hidden rounded-xl shadow-md">
            <div className="overflow-hidden flex items-center w-full justify-center">
              <img src={OmShanthi} alt={OmShanthi} className="h-full" />
            </div>
          </div>

          <div>
            <h1 ref={txt1Ref} className="text-5xl m-2 font-bold">
              Can you imagine
            </h1>
            <h2 ref={txt2Ref} className="text-2xl m-2">
              how much I love you?
            </h2>
          </div>
          <div className="flex items-center justify-center" ref={btnRef}>
            <Button
              Btn_Lable="How Much..?"
              Btn_color="bg-amber-800"
              icon_Lable={faHeart}
              icon_Flex={false}
              Click_Action={handleNext}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Step_3;
