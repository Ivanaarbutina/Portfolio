import Html from "./../../../assets/html_1051277.png";
import Css from "./../../../assets/css-3_732190.png";
import Sass from "./../../../assets/sass_919831.png";
import JavaSc from "./../../../assets/js_5968292.png";
import TypeSc from "./../../../assets/typescript_5968381.png";
import React from "./../../../assets/react.svg";
import GitIcon from "./../../../assets/github_4926624.png";

export type IconType = {
  img: string;
  name: string;
};

export const iconsList: IconType[] = [
  { img: Html, name: "HTML" },
  { img: Css, name: "CSS" },
  { img: JavaSc, name: "JavaScript" },
  { img: TypeSc, name: "TypeScript" },
  { img: React, name: "React" },
  { img: Sass, name: "SASS" },
  { img: GitIcon, name: "GitHub" },
];
