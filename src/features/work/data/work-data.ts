import searchApp from "./../../../assets/search-app.png";
import chatApp from "./../../../assets/chat1.png";
import toDo from "./../../../assets/planer1.png";
import europe from "./../../../assets/europe-pic.png";

type WorkType = {
  path: string;
  descript: string;
  gitHub: string;
  img: string;
  name: string;
};

export const works: WorkType[] = [
  {
    path: "/search-app",
    descript:
      "This application is a music search app developed using React, TypeScript, and external APIs. It provides users with a seamless interface to search for their favorite songs and preview audio clips. The app leverages the iTunes API to fetch search results based on user input.",
    gitHub:
      "https://github.com/Ivanaarbutina/New-react-app/blob/main/src/pages/search-app.tsx",
    img: searchApp,
    name: "Music search App",
  },
  {
    path: "https://ivanaarbutina.github.io/algebra-seminarski/",
    descript:
      "This application is a real-time chat app built using React and Scaledrone for WebSocket communication. It allows users to join a chat room and exchange messages with other users in real-time. Each user is represented by a randomly generated username and a unique color .",
    gitHub: "https://github.com/Ivanaarbutina/algebra-seminarski.git",
    img: chatApp,
    name: "Chat Application",
  },
  {
    path: "/to-do-list",
    descript:
      "This application is a simple To-Do List app developed using React. It allows users to create, manage, and track their tasks or to-do items. The app provides a clean and user-friendly interface for adding new tasks, marking tasks as completed, and deleting tasks as they are completed.",
    gitHub:
      "https://github.com/Ivanaarbutina/New-react-app/blob/main/src/pages/todo.tsx",
    img: toDo,
    name: "To do list",
  },
  {
    path: "/europe",
    descript:
      "The Europe uses the Fetch API to retrieve data from the RestCountries API, which provides detailed information about countries worldwide. The application leverages React's state and effect hooks to manage the data and provide real-time updates to the user interface.",
    gitHub:
      "https://github.com/Ivanaarbutina/New-react-app/blob/main/src/pages/europe.tsx",
    img: europe,
    name: "Europe",
  },
];
