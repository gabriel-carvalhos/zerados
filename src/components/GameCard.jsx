function GameCard({ Jogo, Plataforma, Tempo, Capa, ...props }) {
    return (
        <>
            <li className="bg-[#111] text-white border rounded-lg w-4/5 xs:w-60 sm:w-70 text-sm flex flex-col">
                {Capa != undefined &&
                    <div className="border-b rounded-lg rounded-b-none overflow-hidden">
                        <img className="transition duration-300 hover:scale-110" src={Capa} alt={`Capa de ${Jogo}`} />
                    </div>
                }

                <div className="p-2 grow flex flex-col text-base tracking-tighter font-light">
                    <h2 className="font-bold text-2xl">{Jogo}</h2>
                    <p>Plataforma: {Plataforma}</p>
                    <p>Tempo Jogado: {Tempo}</p>
                    { props["Terminou em"] != "" ? 
                        <p>Zerado em {props["Terminou em"]}</p> :
                        <p>Ainda não zerado</p>
                    }
                    <button className="flex flex-col mt-auto ml-auto text-xl font-bold tracking-tight cursor-pointer after:w-full after:h-0.5 after:bg-amber-50 after:scale-x-0 after:transition after:duration-300 hover:after:scale-x-100 hover:text-amber-50">Ver mais +</button>
                </div>
            </li>
        </>
    );
};

export default GameCard;