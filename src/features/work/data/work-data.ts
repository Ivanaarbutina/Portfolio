import searchApp from "./../../../assets/search-app.png";
import chatApp from "./../../../assets/chat1.png";
import toDo from "./../../../assets/planer1.png";
import europe from "./../../../assets/europe-pic.png";

type WorkType = {
  path: string;
  descriptKey: string;
  gitHub: string;
  img: string;
  nameKey: string;
};

export const works: WorkType[] = [
  {
    path: "/search-app",
    descriptKey: "project-1-desc",
    gitHub:
      "https://github.com/Ivanaarbutina/New-react-app/blob/main/src/pages/search-app.tsx",
    img: searchApp,
    nameKey: "project-1",
  },
  {
    path: "https://ivanaarbutina.github.io/algebra-seminarski/",
    descriptKey: "project-2-desc",
    gitHub: "https://github.com/Ivanaarbutina/algebra-seminarski.git",
    img: chatApp,
    nameKey: "project-2",
  },
  {
    path: "/to-do-list",
    descriptKey: "project-3-desc",
    gitHub:
      "https://github.com/Ivanaarbutina/New-react-app/blob/main/src/pages/todo.tsx",
    img: toDo,
    nameKey: "project-3",
  },
  {
    path: "/europe",
    descriptKey: "project-4-desc",
    gitHub:
      "https://github.com/Ivanaarbutina/New-react-app/blob/main/src/pages/europe.tsx",
    img: europe,
    nameKey: "project-4",
  },
];
