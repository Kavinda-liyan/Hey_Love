import { useNavigate } from "react-router-dom";
import Button from "../Components/Buttons/Button";
import PageWrapper from "./PageWrapper";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Images from "../Components/ImageCards/Images";
import Gift_Box from "../assets/Images/Box.gif";
import HappyBirthdayCat from "../assets/Images/Happy Birthday GIF by Tutimon.gif";
import { useRef, useState } from "react";
import gsap from "gsap";

type bottomTxtProp = {
  text: string;
  color: string;
};

const HappyBirthDay = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate("/");

  const [ImageFold, setImageFold] = useState<string>(Gift_Box);
  const [bgColor, setBgColor] = useState<string>("bg-purple-500");
  const [bottomTxt, setBottomTxt] = useState<bottomTxtProp>({
    text: "click me",
    color: "text-gray-50",
  });

  const imageRef = useRef(null);
  const textRef = useRef(null);

  const onGiftOpen = () => {
    setImageFold(HappyBirthdayCat);
    setBgColor("bg-purple-500");
    setBottomTxt({
      text: "Happy Birth Day Chuutii !",
      color: "text-gray-900",
    });

    
    gsap.fromTo(
      imageRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );
    gsap.fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1 }
    );
  };

  return (
    <main>
      <PageWrapper Bg_Color={bgColor}>
        <div className="relative h-full w-full flex flex-col">
          <div className="absolute top-0 left-0">
            <Button
              Btn_Lable="Back"
              Click_Action={handleBack}
              icon_Lable={faArrowLeft}
              icon_Flex={true}
            />
          </div>

          <div className="ml-auto mr-auto mt-auto mb-auto text-center">
            <button onClick={onGiftOpen}>
              <div ref={imageRef}>
                <Images source={ImageFold} />
              </div>
            </button>

            <div
              ref={textRef}
              className={`px-2 py-2 font-mono font-semibold ${bottomTxt.color}`}
            >
              <p>{bottomTxt.text}</p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </main>
  );
};

export default HappyBirthDay;
