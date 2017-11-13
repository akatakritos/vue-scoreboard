<template>
    <div>
        <h2 class="vr_2">Games</h2>
        <game-entry-form @add-game="addGame" />
        <edit-game-list :games="games" @deleted="deleteGame($event)"/>
    </div>
</template>

<script>
    import EditGameList from './EditGameList';
    import GameEntryForm from './GameEntryForm';
    import Api from '@/lib/api';

    export default {
        data() {
            return {
                rawGames: [],
            };
        },

        components: {
            EditGameList,
            GameEntryForm,
        },

        async mounted() {
            this.rawGames = await Api.getGames();
        },

        methods: {
            async addGame(game) {
                await Api.addGame(game);
                this.rawGames.push(game);
            },

            async deleteGame(game) {
                await Api.deleteGame(game.gameId);
                const id = this.rawGames.findIndex(g => g.gameId === game.gameId);
                this.rawGames.splice(id, 1);
            }
        },

        computed: {
            games() {
                return this.rawGames.sort((a, b) => a.name > b.name);
            }
        }
    };
</script>

<style>

</style>