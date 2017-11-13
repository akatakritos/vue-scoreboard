import 'whatwg-fetch';

function validate(response) {
    if (!response.ok) {
        throw new Error('unexpected response: ' + response.status);
    }

    return response;
}

export default {

    getScores(gameId, page = 1) {
        return fetch(`/api/game/${gameId}/scores?page=${page}`)
            .then(validate)
            .then(r => r.json());
    },

    getGames() {
        return fetch(`/api/games`)
            .then(validate)
            .then(r => r.json());
    },

    submitScore(gameId, player, score) {
        return fetch(`/api/game/${gameId}/scores`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ player, score }),
        })
        .then(validate);
    },

    addGame(game) {
        return fetch('/api/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(game)
        });
    },

    deleteGame(gameId) {
        return fetch('/api/games/' + gameId, {
            method: 'DELETE',
        })
        .then(validate);
    },

    deleteAllScores(gameId) {
        return fetch(`/api/game/${gameId}/scores`, {
            method: 'DELETE',
        })
        .then(validate);
    },

    deleteScore(scoreId) {
        return fetch(`/api/score/${scoreId}`, {
            method: 'DELETE',
        })
        .then(validate);
    },

};
