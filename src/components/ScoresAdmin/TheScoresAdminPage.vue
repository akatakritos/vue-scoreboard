<template>
    <div>
        <h2>Scores Admin</h2>

        <div class="form-inline vr_2">
            <div class="form-group">
                <label for="GameId">Choose a Game</label>
                <select class="form-control" id="GameId" @change="selectGame($event.target.value)">
                    <option v-for="game in games" :value="game.gameId" key="game.gameId">{{ game.name }}</option>
                </select>
            </div>
        </div>


        <edit-scores-list :scores="scores" @score-deleted="deleteScore"/>

        <div class="vr_2">
            <router-link
                v-if="currentPage > 1"
                :to="{ name: 'scores-admin', query: { page: this.currentPage - 1, gameId: this.currentGameId } }"
                class="btn btn-default">
                Previous
            </router-link>
            <router-link
                v-if="mightBeAnotherPage"
                :to="{ name: 'scores-admin', query: { page: this.currentPage + 1, gameId: this.currentGameId } }"
                class="btn btn-default">
                Next
            </router-link>
        </div>

        <div>
            <confirmation-button caption="Delete All" @confirmed="deleteAll"/>
        </div>

    </div>
</template>

<script>
    import ConfirmationButton from '@/components/shared/ConfirmationButton';
    import EditScoresList from './EditScoresList';
    import Api from '@/lib/api';

    export default {
        data() {
            return {
                games: [],
                scores: [],
            };
        },

        async mounted() {
            this.games = await Api.getGames();
            this.load();
        },

        components: {
            ConfirmationButton,
            EditScoresList,
        },

        methods: {
            selectGame(gameId) {
                this.$router.push({ name: 'scores-admin', query: { page: this.currentPage, gameId } });
            },

            async load() {
                if (!this.currentGameId) {
                    return;
                }

                this.scores = await Api.getScores(this.currentGameId, this.currentPage);
            },

            async deleteScore(score) {
                await Api.deleteScore(score.highScoreId);
                const index = this.scores.findIndex(s => s.highScoreId === score.highScoreId);
                if (index !== -1) {
                    this.scores.splice(index, 1);
                }
            },

            async deleteAll() {
                await Api.deleteAllScores(this.currentGameId);
                this.scores = [];
            }
        },

        computed: {
            currentGameId() {
                const firstGameId = this.games.length ? this.games[0].gameId : null;
                return this.$route.query.gameId || firstGameId;
            },

            currentPage() {
                return Number(this.$route.query.page) || 1;
            },

            mightBeAnotherPage() {
                return this.scores.length === 10;
            }

        },

        watch: {
            '$route': function() {
                this.load();
            },
        }
    };
</script>