'use client'

import AddModal from "@/components/AddModal";
import PlayersTable from "@/components/PlayersTable";
import {useEffect, useState} from "react";
import {divideTeams} from "@/uitils/utils";
import {Button} from "flowbite-react";
import Teams from "@/components/Teams";

export default function SquadContainer() {
    const [players, setPlayers] = useState(() => {
        // Sayfa yüklendiğinde localStorage'dan verileri al
        const savedPlayers = localStorage.getItem('players');
        return savedPlayers ? JSON.parse(savedPlayers) : [];
    });

    const [teams, setTeams] = useState(() => {
        // Sayfa yüklendiğinde localStorage'dan takımları al
        const savedTeams = localStorage.getItem('teams');
        return savedTeams ? JSON.parse(savedTeams) : [[], []];
    });


    const handleDivideTeams = () => {
        const [team1, team2] = divideTeams(players);
        setTeams([team1, team2]);
    };

    useEffect(() => {
        // players dizisi her güncellendiğinde localStorage'a kaydet
        localStorage.setItem('players', JSON.stringify(players));
    }, [players]);

    useEffect(() => {
        // teams dizisi her güncellendiğinde localStorage'a kaydet
        localStorage.setItem('teams', JSON.stringify(teams));
    }, [teams]);

    console.log(teams)
    return (
        <div>
            <div className='flex justify-center'>
                <AddModal players={players} setPlayers={setPlayers} />
                <Button color='blue' className='ml-8' onClick={handleDivideTeams}>
                    Böl
                </Button>
            </div>
            <PlayersTable players={players} setPlayers={setPlayers} />
            {
                players && players.length > 0 &&  <Teams teams={teams}/>
            }

        </div>
    );
}
