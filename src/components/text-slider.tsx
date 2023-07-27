import { useEffect, useRef } from "react";

const TextSlider = () => {
  const revealTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let delay = 0.3;

    if (revealTextRef.current) {
      let revealText = revealTextRef.current;
      let letters = revealText.textContent?.split("") || [];
      revealText.textContent = "";
      let middle = letters.filter((e) => e !== " ").length / 2;

      letters.forEach((letter: string, i: number) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
        revealText.append(span);
      });
    }
  }, []);

  return (
    <div className="reveal" ref={revealTextRef}>
      | my skills |
    </div>
  );
};

export default TextSlider;
