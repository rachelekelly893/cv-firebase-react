import './App.css';
import NavBar from './components/NavBar/NavBar';
import Details from './components/Details/Details';
import Summary from './components/Summary/Summary';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import ExtraCurricular from './components/ExtraCurricular/ExtraCurricular';
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills'

function App() {
  return (
    <div>
      <NavBar/>
      <div className="CV-content">
      <Details/>
      <Summary/>
      <Experience/>
      <Education/>
      <ExtraCurricular/>
      <TechnicalSkills/>
      </div>
    </div>
  );
}

export default App;
