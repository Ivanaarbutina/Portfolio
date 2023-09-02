import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const TextSlider = () => {
  const revealTextRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("useEffect started"); // Log when the useEffect starts
    let delay = 0.3;
    if (revealTextRef.current) {
      let revealText = revealTextRef.current;
      let text = t("skills");
      revealText.textContent = "";
      console.log(text);
      let span = document.createElement("span");
      span.textContent = text;
      span.style.animationDelay = `${delay}s`;
      revealText.append(span);
      console.log("Animation added"); // Log when the animation is added
    }
  }, [t]);

  return <div className="reveal" ref={revealTextRef}></div>;
};

export default TextSlider;
