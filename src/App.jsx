import { useState, useEffect } from 'react';
import GameCard from './components/GameCard';
import Loading from './components/Loading';

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('https://opensheet.elk.sh/1Apt22TRzWObY2frWXUmqqmylxUIbWTGvmHrIHBZqwHY/1');
        const result = await response.json();
        setGames(result);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (e) {
        console.log('Error fetching games: ' + e);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      {loading && <Loading loading={loading}/>}
      <main className={loading ? "hidden" : "block"}>
        <h1 className="text-8xl xs:text-9xl font-bold tracking-[-9.6px] xs:tracking-[-12px] leading-24 w-fit bg-linear-to-r from-white to-[#0a0a0a] bg-clip-text text-transparent">zerados</h1>
        <ul className="sm:mx-auto my-6 sm:my-12 w-full md:w-2xl lg:w-4xl xl:w-6xl 2xl:w-7xl flex justify-center flex-wrap gap-5">
          {games.filter(game => "Jogo" in game).map(game => <GameCard key={game.Jogo} {...game}/>)}
        </ul>
      </main>
    </>
  );
};

export default App;
