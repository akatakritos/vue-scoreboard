<template>
    <table class="table table-striped table-bordered">
        <tbody>
            <tr v-for="score in scores" :key="score.highScoreId">
                <td>{{ score.position }}</td>
                <td>
                    <img :src="score.profilePic" class="profile-pic img-circle"/>
                    <br />
                    {{ score.player }}
                </td>
                <td class="score">
                    {{ score.score | commas }}
                </td>
            </tr>
            <p v-if="scores.length === 0" class="well">
                No Scores for this Game
            </p>
        </tbody>
    </table>
</template>

<script>
    import VueTypes from 'vue-types';

    const Score = VueTypes.shape({
        highScoreId: VueTypes.integer.isRequired,
        position: VueTypes.integer.isRequired,
        player: VueTypes.string.isRequired,
        score: VueTypes.integer.isRequired,
        profilePic: VueTypes.string.isRequired
    }).loose;

    export default {
        data() {
            return {
            };
        },

        props: {
            scores: VueTypes.arrayOf(Score).isRequired,
        },

        methods: {

        },

        computed: {

        }
    };
</script>

<style scoped>
    table {
        text-align: center;
    }

    .score {
        font-size: 50px;
    }

    .profile-pic {
        width: 100px;
    }

    .well {
        margin: 16px;
    }

</style>