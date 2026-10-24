function GameCard({ Jogo, Plataforma, Tempo, ...props }) {
    return (
        <>
            <li className="bg-[#111] text-white border rounded-lg w-72 text-sm flex flex-col">
                <div className="w-full h-72 border-b rounded-lg rounded-b-none">

                </div>

                <div className="p-2 grow flex flex-col text-base tracking-tighter font-light">
                    <h2 className="font-bold text-2xl">{Jogo}</h2>
                    <p>Plataforma: {Plataforma}</p>
                    <p>Tempo Jogado: {Tempo}</p>
                    { props["Terminou em"] != "" ? 
                        <p>Zerado em {props["Terminou em"]}</p> :
                        <p>Ainda não zerado</p>
                    }
                    <button className="block mt-auto ml-auto text-xl font-bold tracking-tight cursor-pointer">Ver mais +</button>
                </div>
            </li>
        </>
    );
}

export default GameCard;