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
        return fetch(`api/games`)
            .then(validate)
            .then(r => r.json());
    }

};
