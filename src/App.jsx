import { useState, useEffect } from 'react';
import GameCard from './components/GameCard';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('https://opensheet.elk.sh/1Apt22TRzWObY2frWXUmqqmylxUIbWTGvmHrIHBZqwHY/1');
        const result = await response.json();
        setGames(result);
      } catch (e) {
        console.log('Error fetching games: ' + e);
      }
    };

    fetchGames();
  }, []);

  return (
    <main>
      <h1 className="text-9xl text-white font-bold tracking-[-12px] leading-24">zerados</h1>
      <ul className="mt-12 flex justify-center flex-wrap gap-5">
        {games.filter(game => "Jogo" in game).map(game => <GameCard key={game.Jogo} {...game}/>)}
      </ul>
    </main>
  );
};

export default App;
