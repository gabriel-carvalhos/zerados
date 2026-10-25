import { useState, useEffect } from "react";

function Loading({ loading }) {
    const [text, setText] = useState("carregando");
    
    useEffect(() => {
        const interval = setInterval(() => {
            setText(text => {
                if (text == "carregando...") {
                    text = "carregando";
                }
                return text += ".";
            });
        }, 350);

        return () => {
            clearInterval(interval);
        }
    }, [text, loading])

    return (
        <div className="w-full h-dvh absolute flex justify-center items-center bg-[#0a0a0a]">
            <p className="text-9xl tracking-[-12px] text-white font-bold">{text}</p>
        </div>       
    );
}

export default Loading;