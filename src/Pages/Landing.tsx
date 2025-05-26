import { useNavigate } from "react-router-dom";
import Capybara_01 from "../assets/Images/Cappybara_float.gif";
import Button from "../Components/Buttons/Button";
import Images from "../Components/ImageCards/Images";
import PageWrapper from "./PageWrapper";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
const Landing = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/happybirthday28");
    setShowBtn(false);
  };
  const [ShowBtn, setShowBtn] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const Birthday = Number(event.target.value);
    if (Birthday != null && Birthday === 19990329) {
      setShowBtn(true);
      setShowError(false);
    } else if (Birthday != null && Birthday !== 19990329) {
      setShowError(true);
      setShowBtn(false);
    }
  };
  const imageRef = useRef(null);
  const TxtRef_1 = useRef(null);
  const TxtRef_2 = useRef(null);
  const TxtRef_3 = useRef(null);
  const Btn_ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );
    gsap.fromTo(
      TxtRef_1.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)", delay: 0.5 }
    );
    gsap.fromTo(
      TxtRef_2.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: 0.8 }
    );
    gsap.fromTo(
      TxtRef_3.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: 2 }
    );
   
   
  
  }, []);

  return (
    <>
      <PageWrapper Bg_Color="bg-purple-500">
        <div className="ml-auto mr-auto " ref={imageRef}>
          <Images source={Capybara_01} />
        </div>
        <div className="flex flex-col items-center">
          <label
            className="font-mono text-gray-50 my-2 text-md w-72 text-center"
            ref={TxtRef_1}
          >
            When is your BoyFriend's birth Day ?
          </label>

          <input
            type="number"
            placeholder="20000220"
            className=" bg-gray-50 border border-purple-800 rounded-md p-2 my-2 font-mono font-semibold"
            onChange={handleChange}
            ref={TxtRef_2}
          />
          <label
            className="text-xs font-mono font-semibold text-gray-50"
            ref={TxtRef_3}
          >
            Type: YearMonthDay(20000220) Format
          </label>
          <div className={`${ShowBtn == false ? "hidden" : ""}`} ref={Btn_ref}>
            <Button
              Btn_Lable="Click Me! "
              Click_Action={handleNav}
              icon_Lable={faArrowRight}
              icon_Flex={false}
              Btn_color="purple"
            />
          </div>
          <div className={`${showError == false ? "hidden" : ""}`}>
            <p className="text-xs font-semibold text-red-600 bg-gray-50 p-1 my-2 rounded-2xl">
               Hmm... Try again! 😉
            </p>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Landing;
