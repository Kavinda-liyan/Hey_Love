import PageWrapper from "./PageWrapper";
import HomeButton from "../Components/Buttons/HomeButton";
import BackButton from "../Components/Buttons/BackButton";
import EyesChaio from "../assets/Images/eyes.gif";
import Images from "../Components/ImageCards/Images";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Devi1 from "../assets/Images/Devi_1.jpg";
import Adarei from "../assets/Audio/Adarei Uthuranna~1.mp3";
import Button from "../Components/Buttons/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Step_2 = () => {
  const txt1Ref = useRef(null);
  const Img1Ref = useRef(null);
  const txt2Ref = useRef(null);
  const txt3Ref = useRef(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const Img2Ref = useRef(null);
  const aduRef = useRef(null);
  const BtnRef=useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const hasFadedRef = useRef(false);
  const [showNext,setShowNext]=useState(false);

  useEffect(() => {
    gsap.fromTo(
      txt1Ref.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );
    gsap.fromTo(
      Img1Ref.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.5 }
    );
    gsap.fromTo(
      txt2Ref.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.7 }
    );
    gsap.fromTo(
      txt3Ref.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.9 }
    );
    gsap.fromTo(
      aduRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 2.0 }
    );
     gsap.fromTo(
      BtnRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  useEffect(() => {
    if (showImage && Img2Ref.current) {
      gsap.fromTo(
        Img2Ref.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1,delay:0.5 }
      );
    }
  }, [showImage]);

  const handlePlayAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      hasFadedRef.current = false;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setShowImage(true);
        })
        .catch((e) => {
          console.log("Autoplay failed:", e);
        });

      audio.addEventListener("timeupdate", handleTimeUpdate);
    }

    setShowNext(true);

  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || hasFadedRef.current) return;

    const remaining = audio.duration - audio.currentTime;
    if (remaining <= 2) {
      hasFadedRef.current = true;
      fadeOutAudio(audio);
    }
  };

  const fadeOutAudio = (audio: HTMLAudioElement) => {
    const fadeInterval = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume = parseFloat((audio.volume - 0.05).toFixed(2));
      } else {
        audio.volume = 0;
        clearInterval(fadeInterval);
      }
    }, 150);
  };

  const handleNext=()=>{
    
  }

  return (
    <PageWrapper Bg_Color="bg-rose-500">
      <div className="relative h-full w-full flex flex-col">
        <div className="absolute top-1 left-1 flex gap-0">
          <BackButton
            BgColor="bg-rose-900"
            BgColorHov="bg-rose-700"
            BackLink="/step_1"
          />
          <HomeButton BgColor="bg-rose-900" BgColorHov="bg-rose-700" />
        </div>

        <div className="ml-auto mr-auto mt-auto mb-auto text-center text-gray-50">
          <div ref={txt1Ref}>
            <h1 className="text-xl">A wise man once said...</h1>
          </div>

          <div className="overflow-hidden text-center flex flex-col items-center">
            <div ref={Img1Ref}>
              <Images source={EyesChaio} height="h-36" />
            </div>

            <h2 ref={txt2Ref} className="text-xl">
              The eyes, chico,
            </h2>
            <h2 ref={txt3Ref} className="text-md">
              They never lie.
            </h2>
          </div>

          {showImage && (
            <div className="p-2 m-2">
              <div className="h-32 rounded-2xl w-full overflow-hidden">
                <img
                  src={Devi1}
                  alt="Devi"
                  className="h-40 object-cover"
                  ref={Img2Ref}
                />
              </div>
            </div>
          )}

          <div className="mt-4 flex justify-center" ref={aduRef}>
            {!isPlaying ? (
              <button
                onClick={handlePlayAudio}
                className="bg-rose-700 hover:bg-rose-600 text-white font-mono px-4 py-2 rounded-full"
              >
                ▶ Play Me..!
              </button>
            ) : (
              <span className="text-sm italic text-white">
                Audio is playing...
              </span>
            )}
          </div>

          <audio ref={audioRef} src={Adarei} preload="auto" />
          <div className={`text-center flex items-center justify-center p-2 m-2 ${showNext?'':'hidden'}`} ref={BtnRef}>
            <Button Btn_Lable="Next Chapter" icon_Lable={faArrowRight} icon_Flex={false} Btn_color="bg-rose-900" Click_Action={handleNext}/>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Step_2;
