import { useEffect, useState } from "react"
import { useChronometre } from "./useChronometre";

type useAppClientProps = {
    player: string,
    players: string[],
    max_time: number
}

export const useAppClient = ({
    player,
    players,
    max_time
}: useAppClientProps) => {

    const [current_player, setCurrentPlayer] = useState<string | null>(null);
    const [current_time, start, _, restart] = useChronometre();
    
    const [turn, setTurn] = useState(0);
    const [round, setRound] = useState(0);

    useEffect(() => {
        start();
    }, []);

    useEffect(() => {
        if(current_time == max_time) {
            setTurn(current_turn => {
                return (current_turn == players.length) ? 0 : ++current_turn;
            });
            restart();
        }
    }, [current_time]);

    useEffect(() => {
        setCurrentPlayer(players[turn]);
    }, [turn]);

    useEffect(() => {
        if(turn == 0) {
            setRound(r => ++r);
        }
    }, [turn]);

    return {
        current_time,
        current_player,
        turn,
        round
    }
}

