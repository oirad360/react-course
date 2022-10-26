import './App.css';
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Socials from './components/Socials'
function App() {
  return (
    <div className='card'>
      <Info />
      <About />
      <Interests />
      <Socials />
    </div>
  );
}

export default App;
