<template>
    <div>
        <div class="vr_2">
            <div class="form-inline">
                <div class="form-group">
                    <label for="gameid">Choose a game</label>
                    <select id="gameid" class="form-control" @change="selectGame($event.target.value)">
                        <option v-for="game in games" :value="game.gameId" :selected="game.gameId === currentGameId">{{ game.name }}</option>
                    </select>
                </div>
            </div>
        </div>
        <h1 v-if="currentGame">Showing high scores for {{ currentGame.name }}</h1>
        <scores-list :scores="scores" />
        <div class="vr_1">
            <router-link :to="{ name: 'scoreboard', query: { page: this.currentPage - 1, gameId: this.currentGameId }}" class="btn btn-default" v-show="currentPage > 1">Previous</router-link>
            <router-link :to="{ name: 'scoreboard', query: { page: this.currentPage + 1, gameId: this.currentGameId }}" class="btn btn-default" v-show="mightBeMoreScores">Next</router-link>
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
            };
        },

        components: {
            ScoresList,
        },

        async mounted() {
            this.games = await Api.getGames();
            this.load();
        },

        methods: {

            async load() {
                if (!this.currentGameId) {
                    return;
                }

                this.scores = [];
                this.scores = await Api.getScores(this.currentGameId, this.currentPage);
            },

            selectGame(gameId) {
                this.$router.replace({ query: { gameId, page: this.currentPage } });
            },
        },

        watch: {
            '$route': function() {
                this.load();
            }
        },

        computed: {
            currentPage() {
                return Number(this.$route.query.page) || 1;
            },

            currentGameId() {
                const fallback = this.games.length ? this.games[0].gameId : null;
                return Number(this.$route.query.gameId) || fallback;
            },

            currentGame() {
                return this.games.find(g => g.gameId === this.currentGameId);
            },

            mightBeMoreScores() {
                return this.scores.length === 10;
            }

        },
    };
</script>