import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import PageWrapper from "./PageWrapper";
import BackButton from "../Components/Buttons/BackButton";
import HomeButton from "../Components/Buttons/HomeButton";
import Eya from "../assets/Audio/Hakiynam Niwenna.mp3";
import Video from "../assets/Video/Clip.mp4";

const Step_4 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const hasFadedRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
    }

    // Animate headings on mount
    gsap.from(h1Ref.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(h2Ref.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const handlePlayAudio = () => {
    const audio = audioRef.current;
    const video = videoRef.current;

    if (audio) {
      audio.volume = 1;
      audio.play();
      setIsPlaying(true);
      hasFadedRef.current = false;
    }

    if (video) {
      gsap.fromTo(
        video,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      );
    }
  };

  const handleStopAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
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

  return (
    <PageWrapper Bg_Color="bg-blue-500">
      <div className="relative h-full w-full flex flex-col">
        {/* Navigation Buttons */}
        <div className="absolute top-1 left-1 flex gap-0">
          <BackButton
            BgColor="bg-blue-800"
            BackLink="/step_1/step_2/step_3"
            BgColorHov="bg-blue-600"
          />
          <HomeButton BgColor="bg-blue-800" BgColorHov="bg-blue-600" />
        </div>

        <div className="relative z-10 mx-auto my-auto text-center text-gray-50 flex flex-col">
          {/* Background Video */}
          {isPlaying && (
            <video
              ref={videoRef}
              className=" w-full h-full z-0 object-cover"
              src={Video}
              muted
              autoPlay
              loop
              playsInline
            />
          )}

          {/* Main Content */}
          <h1 ref={h1Ref} className="text-4xl m-2 relative z-10">
            Just listen to this song
          </h1>
          <h2 ref={h2Ref} className="text-lg m-2 relative z-10">
            It speaks the love in my heart
          </h2>

          {/* Audio Controls */}
          <div className="mt-4 flex justify-center gap-4 items-center relative z-10">
            {!isPlaying ? (
              <button
                onClick={handlePlayAudio}
                className="bg-blue-700 hover:bg-blue-600 text-white font-mono px-4 py-2 rounded-full"
              >
                ▶ Play Me..!
              </button>
            ) : (
              <>
                <span className="text-sm italic text-white">
                  Audio is playing...
                </span>
                <button
                  onClick={handleStopAudio}
                  className="bg-gray-800 hover:bg-gray-600 text-white font-mono px-4 py-2 rounded-full"
                >
                  ⏹ Stop
                </button>
              </>
            )}
          </div>

          {/* Hidden Audio Element */}
          <audio ref={audioRef} src={Eya} preload="auto" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Step_4;
