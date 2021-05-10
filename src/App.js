import './App.css';
import FirstSection from './components/sections/FirstSection.js';
import SecondSection from './components/sections/SecondSection.js';
import ThirdSection from './components/sections/ThirdSection.js';
import FourthSection from './components/sections/FourthSection.js';
import FifthSection from './components/sections/FifthSection.js';

export default function App() {
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
