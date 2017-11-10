<template>
    <div>
        <div class="vr_2">
            <div class="form-inline">
                <div class="form-group">
                    <label for="gameid">Choose a game</label>
                    <select id="gameid" class="form-control" @change="selectGame($event.target.value)">
                        <option v-for="game in games" :value="game.gameId">{{ game.name }}</option>
                    </select>
                </div>
            </div>
        </div>
        <h1 v-if="currentGame">Showing high scores for {{ currentGame.name }}</h1>
        <scores-list :scores="scores" />
        <div class="vr_1">
            <button class="btn btn-default" @click="previous">Previous</button>
            <button class="btn btn-default" @click="next">Next</button>
        </div>
    </div>
</template>

<script>
    import ScoresList from '@/components/ScoresList';
    import Api from '@/lib/api';

    export default {
        data() {
            return {
                scores: [],
                games: [],
                currentGame: null,
                currentPage: this.$route.query.page || 1,
            };
        },

        components: {
            ScoresList,
        },

        async mounted() {
            this.games = await Api.getGames();

            if (this.$route.query.gameId) {
                const id = Number(this.$route.query.gameId);
                this.currentGame = this.games.find(g => g.gameId === id);
                this.load();
            } else {
                this.selectGame(this.games[0].gameId);
            }
        },

        methods: {
            next() {
                this.$router.replace({
                    query: {
                        gameId: this.currentGame.gameId,
                        page: this.currentPage + 1
                    }
                });
            },

            previous() {
                this.$router.replace({
                    query: {
                        gameId: this.currentGame.gameId,
                        page: this.currentPage - 1
                    }
                });
            },

            async load() {
                if (!this.currentGame) {
                    return;
                }

                this.scores = await Api.getScores(this.currentGame.gameId, this.currentPage);
            },

            selectGame(gameId) {
                this.$router.replace({ query: { gameId, page: this.currentPage } });
            },
        },

        watch: {
            '$route.query.page': function() {
                this.currentPage = Number(this.$route.query.page);
                this.load();
            },

            '$route.query.gameId': function() {
                const id = Number(this.$route.query.gameId);
                this.currentGame = this.games.find(g => g.gameId === id);
                this.load();
            }
        },

        computed: {

        },
    };
</script>