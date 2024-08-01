export const splitPositionColor = (position) => {
    switch (position) {
        case 'fw':
            return '#0099e5'
        case 'md':
            return '#34bf49'
        case 'df':
            return '#ffdd00'
        case 'gk':
            return '#ff9933'
    }
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function divideTeams(players) {
    const positions = {
        gk: [],
        df: [],
        md: [],
        fw: []
    };

    players.forEach(player => {
        positions[player.position.prefix].push(player);
    });

    const team1 = [];
    const team2 = [];

    ['gk', 'df', 'md', 'fw'].forEach(position => {
        const playersInPosition = positions[position];
        shuffle(playersInPosition);
        playersInPosition.forEach((player, index) => {
            if (index % 2 === 0) {
                team1.push(player);
            } else {
                team2.push(player);
            }
        });
    });

    // Reytingleri dengeleme
    const balanceTeams = (team1, team2) => {
        let team1Rate = team1.reduce((total, player) => total + player.rate, 0);
        let team2Rate = team2.reduce((total, player) => total + player.rate, 0);

        let attempts = 0;
        const maxAttempts = 100;

        while (Math.abs(team1Rate - team2Rate) > 10 && attempts < maxAttempts) {
            let diff = team1Rate - team2Rate;
            let playerToMove;
            if (diff > 10) {
                // Takım 1'den Takım 2'ye oyuncu taşı
                playerToMove = team1.pop();
                team2.push(playerToMove);
            } else if (diff < -10) {
                // Takım 2'den Takım 1'e oyuncu taşı
                playerToMove = team2.pop();
                team1.push(playerToMove);
            }
            // Güncel reytingleri tekrar hesapla
            team1Rate = team1.reduce((total, player) => total + player.rate, 0);
            team2Rate = team2.reduce((total, player) => total + player.rate, 0);

            attempts++;
        }

        if (attempts >= maxAttempts) {
            console.warn("Takım dengeleme işlemi sınır denemeye ulaştı.");
        }

        return [team1, team2];
    }

    return balanceTeams(team1, team2);
}

