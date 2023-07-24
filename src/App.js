import './App.css';
import Navbar from './componentes/sections/Navbar';
import Presentation from './componentes/sections/Presentation';
import Footer from './componentes/sections/Footer';
import Projects from './componentes/sections/Project';
import Skills from './componentes/sections/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
