import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Softwares from "./pages/Softwares";
import "./App.css";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Scroll from "./components/Scroll";

function App() {
  return (
    <div className="app container bg-light p-0">
      <Scroll showBelow={300} />
      <Navbar />
      <About />
      <Softwares />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
