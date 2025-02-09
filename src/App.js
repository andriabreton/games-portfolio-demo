import GameCard from "./GameCard";
const gamesList = [
  {
    id: 0,
    name: "Cricket",
    rating: null,
    category: "Darts",
  },
  {
    id: 1,
    name: "Ship, Captain, Crew",
    rating: null,
    category: "Dice",
  },
  {
    id: 2,
    name: "Cassino",
    rating: null,
    category: "Cards",
  },
];

function App() {
  return (
    <div>
      <h1>My Favorite Games</h1>
        { gamesList.map( g => <GameCard game={g} />  ) }
    </div>
  );
}

export default App;