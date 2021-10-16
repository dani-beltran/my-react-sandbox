import './style.css';
import PlayerCard from '../player-card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <PlayerCard player_name="Manolo" player_known_name="El del bombo" player_birthday="01/01/1987"></PlayerCard>
      </header>
    </div>
  );
}

export default App;
