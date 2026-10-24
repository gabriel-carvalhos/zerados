import { useState, useEffect } from 'react';

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
    <>
      <h1>zerados</h1>
      <ul>
        {games.filter(game => "Jogo" in game).map(game => <li key={game.id}>{game.Jogo}</li>)}
      </ul>
    </>
  );
};

export default App;
