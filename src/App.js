import './App.css';
import FirstSection from './components/FirstSection.js';
import SecondSection from './components/SecondSection.js';
import ThirdSection from './components/ThirdSection.js';
import FourthSection from './components/FourthSection.js';
import FifthSection from './components/FifthSection.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to our Medical Facility!</h3>
        <p>Please fill out the form below.</p> 
      </header>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
}

export default App;
