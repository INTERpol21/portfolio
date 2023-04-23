import { useEffect } from "react";
import NextImage, { ImageProps } from 'next/image'
import classNames from "classnames";
import style from "./style.module.scss";
import sun from "./sun.svg";
import moon from "./moon.svg";
import useLocalStorage from "@/component/utils/useLocalStorage";
import detectDarkMode from "@/component/utils/detectDarkMode";

type CustomImageProps = ImageProps & { alt?: string };

const CustomImage = ({ alt = "", ...props }: CustomImageProps) => {
  return <NextImage {...props} alt={alt} />;
};

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const btnClasses = classNames(style["dark-mode-btn"], {
    [style["dark-mode-btn--active"]]: darkMode === "dark",
  });

  const toggleDarkMode = () => {
    setDarkMode((currantValue: string) => {
      return currantValue === "light" ? "dark" : "light";
    });
  };

  return (
      <button className={btnClasses} onClick={toggleDarkMode}>
        <CustomImage src={sun} alt="Light mode" className={style["dark-mode-btn__icon"]} />
        <CustomImage src={moon} alt="Dark mode" className={style["dark-mode-btn__icon"]} />
      </button>
  );
};

export default BtnDarkMode;
