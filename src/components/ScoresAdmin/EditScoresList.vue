<template>
    <table class="table table-bordered table-striped vr_1">
        <tbody>
            <tr>
                <th>Player</th>
                <th class="number-column">Score</th>
                <th></th>
            </tr>
            <tr v-for="score in scores" :key="score.highScoreId">
                <td>{{ score.player }}</td>
                <td class="number-column">{{ score.score | commas }}</td>
                <td>
                    <confirmation-button @confirmed="deleteScore(score)" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import VueTypes from 'vue-types';
    import ConfirmationButton from '@/components/shared/ConfirmationButton';

    const Score = VueTypes.shape({
        highScoreId: VueTypes.number.isRequired,
        score: VueTypes.number.isRequired,
        player: VueTypes.string.isRequired,
    }).loose;

    export default {
        data() {
            return {

            };
        },

        props: {
            scores: VueTypes.arrayOf(Score),
        },

        components: {
            ConfirmationButton,
        },

        methods: {
            deleteScore(score) {
                this.$emit('score-deleted', score);
            }
        },

        computed: {

        },
    };
</script>

<style scoped>
    .number-column {
        text-align: right;

    }
</style>