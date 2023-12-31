import Home from "./features/home/home";
import Layout from "./components/layout";
import "./style/styles.scss";
import { Route, Routes } from "react-router-dom";
import SearchApp from "./features/work/search-app";
import ToDo from "./features/work/to-do-list";
import Contact from "./features/home/contact";
import About from "./features/about/about";
import Europe from "./features/work/europe";
import WorkList from "./features/work/work-list";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<WorkList />} />
          <Route path="/search-app" element={<SearchApp />} />
          <Route path="/to-do-list" element={<ToDo />} />
          <Route path="/europe" element={<Europe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
