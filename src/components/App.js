import './App.css';
import PlayerCard from './PlayerCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">      
        <PlayerCard 
          player_name="Manolo" 
          player_known_name="El del bombo" 
          player_birthday="01/01/1987"
          country_name="Brasil"
          ></PlayerCard>
      </header>
    </div>
  );
}

export default App;
