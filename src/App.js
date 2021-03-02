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
      <Details/>
      <Summary/>
      <Education/>
      <Experience/>
      <ExtraCurricular/>
      <TechnicalSkills/>
      <div id="btn">
        <a className="nav-item" href="#nav-container">To Top of Page</a>
      </div>
    </div>
  );
}

export default App;
