import Player from "./components/Player";
import Gameboard from "./components/Gameboard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player-1" symbol="X"></Player>
          <Player initialName="Player-2" symbol="O"></Player>
        </ol>
        <Gameboard></Gameboard>
      </div>
    </main>
  );
}

export default App;
