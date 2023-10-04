import searchApp from "./../../../assets/search-app.png";
import chatApp from "./../../../assets/chat1.png";
import toDo from "./../../../assets/planer1.png";
import europe from "./../../../assets/europe-pic.png";
import worldOP from "./../../../assets/world-of-parfumes.png";
import react from "./../../../assets/react.svg";
import typeSc from "./../../../assets/typescript_5968381.png";
import sass from "./../../../assets/sass_919831.png";
type WorkType = {
  path: string;
  descriptKey: string;
  gitHub: string;
  img: string;
  nameKey: string;
  reactIcon: string;
  typeScIcon: string;
  sassIcon: string;
};

export const works: WorkType[] = [
  {
    path: "https://world-of-parfumes.netlify.app/",
    descriptKey: "project-5-desc",
    gitHub: "https://github.com/Ivanaarbutina/World-of-Parfumes",
    img: worldOP,
    nameKey: "project-5",
    reactIcon: react,
    typeScIcon: typeSc,
    sassIcon: sass,
  },
  {
    path: "/search-app",
    descriptKey: "project-1-desc",
    gitHub:
      "https://github.com/Ivanaarbutina/New-react-app/blob/main/src/pages/search-app.tsx",
    img: searchApp,
    nameKey: "project-1",
    reactIcon: react,
    typeScIcon: typeSc,
    sassIcon: sass,
  },
  {
    path: "https://ivanaarbutina.github.io/algebra-seminarski/",
    descriptKey: "project-2-desc",
    gitHub: "https://github.com/Ivanaarbutina/algebra-seminarski.git",
    img: chatApp,
    nameKey: "project-2",
    reactIcon: react,
    typeScIcon: typeSc,
    sassIcon: sass,
  },
  {
    path: "/to-do-list",
    descriptKey: "project-3-desc",
    gitHub:
      "https://github.com/Ivanaarbutina/New-react-app/blob/main/src/pages/todo.tsx",
    img: toDo,
    nameKey: "project-3",
    reactIcon: react,
    typeScIcon: typeSc,
    sassIcon: sass,
  },
  {
    path: "/europe",
    descriptKey: "project-4-desc",
    gitHub:
      "https://github.com/Ivanaarbutina/New-react-app/blob/main/src/pages/europe.tsx",
    img: europe,
    nameKey: "project-4",
    reactIcon: react,
    typeScIcon: typeSc,
    sassIcon: sass,
  },
];
