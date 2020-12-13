
import './App.css';
import Die from './Die.js';
import Footer from './Footer';
import RollDice from './RollDice'

function App() {
  return (
    <div className="App">
      <h1> Dice Chess  </h1>
      <h3> Choose one of them to make your next move</h3>
      <h4> Are you lucky ? </h4>
      <RollDice/>
      <Footer/>
      
    </div>
  );
}

export default App;
