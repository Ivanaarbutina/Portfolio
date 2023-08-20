import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const TextSlider = () => {
  const revealTextRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    let delay = 0.3;
    if (revealTextRef.current) {
      let revealText = revealTextRef.current;
      let text = t("skills");
      revealText.textContent = "";

      let span = document.createElement("span");
      span.textContent = text;
      span.style.animationDelay = `${delay}s`;
      revealText.append(span);
    }
  }, [t]);

  return <div className="reveal" ref={revealTextRef}></div>;
};

export default TextSlider;
