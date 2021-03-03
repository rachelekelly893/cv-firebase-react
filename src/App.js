import './App.css';
import SideBar from './components/SideBar/SideBar';
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
      <div>
      <SideBar/>
      <NavBar/>
      </div>
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
