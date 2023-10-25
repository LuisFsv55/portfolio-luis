import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Design from "./components/Design/Design";
import Skill from "./components/skills/Skill";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="bg-primary">
            <Navbar />
            <Design />
            <About />
            <Skill />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;