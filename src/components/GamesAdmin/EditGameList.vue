<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Game</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <!--template bindings={}-->
            <tr v-for="game in games">
                <td>{{ game.name }}</td>
                <td>
                    <confirmation-button @confirmed="deleteGame(game)"/>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import VueTypes from 'vue-types';
    import ConfirmationButton from '@/components/shared/ConfirmationButton';

    const Game = VueTypes.shape({
        name: VueTypes.string.isRequired,
    }).loose;

    export default {
        data() {
            return {
            };
        },

        props: {
            games: VueTypes.arrayOf(Game).def([]),
        },

        components: {
            ConfirmationButton,
        },

        methods: {
            deleteGame(game) {
                this.$emit('deleted', game);
            }
        },

        computed: {

        },
    };
</script>

<style>
</style>