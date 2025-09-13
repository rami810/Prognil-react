import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

interface LoadingProps {
  onFinish?: () => void;
}

function Loading({ onFinish }: LoadingProps) {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const loadedRef = useRef(0);
  const totalImages = 3;

  const handleImageLoad = () => {
    loadedRef.current++;
    const percent = Math.round((loadedRef.current / totalImages) * 100);
    setProgress(percent);
  };

  useEffect(() => {
    setProgress(0);
    setIsVisible(true);
    loadedRef.current = 0;

    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      if (current >= 100) {
        clearInterval(interval);
        setProgress(100);
      } else {
        setProgress((prev) => (prev < current ? current : prev));
      }
    }, 150);

    return () => clearInterval(interval);
  }, [pathname]);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onFinish) onFinish();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

  if (!isVisible) return null;

  return (
    <div className="loading-screen h-screen fixed z-[10000] top-0 left-0 bg-white w-full text-black flex justify-center items-center transition-opacity duration-700">
      <div className="w-[626px] h-[758px] absolute top-[-293px] left-[-163px] flex justify-end items-end">
        <img
          alt="left"
          src="/images/all/LOADINGL.svg"
          className="object-contain w-full h-full"
          onLoad={handleImageLoad}
        />
      </div>

      <div className="w-[626px] h-[758px] absolute top-[295px] left-[977px] flex justify-center items-start">
        <img
          alt="right"
          src="/images/all/loadingR.svg"
          className="object-contain w-full h-full"
          onLoad={handleImageLoad}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-5 z-[10]">
        <div className="w-[109px] h-[132px] relative">
          <img
            alt="center"
            src="/images/all/LoadingC.png"
            className="object-contain w-full h-full"
            onLoad={handleImageLoad}
          />
        </div>

        <div className="w-[303px] h-[9px] rounded-full bg-gray-200 overflow-hidden mb-5">
          <div
            className="h-full transition-all duration-200 ease-linear"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(270deg, #15CC70 0.03%, #026BD3 99.98%)",
            }}
          ></div>
        </div>

        <p className="font-poppins font-medium text-[20px] w-[735px] text-center">
          Great things take a moment—PROGNIL is preparing to deliver innovative
          solutions tailored just for you. Hang tight, we&apos;re almost there!
        </p>
      </div>
    </div>
  );
}

export default Loading;
