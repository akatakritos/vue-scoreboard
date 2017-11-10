<template>
    <table class="table table-striped table-bordered">
        <tbody>
            <tr v-for="(score, index) in scores" :key="score.highScoreId">
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
        </tbody>
    </table>
</template>

<script>
    import VueTypes from 'vue-types';

    const Score = VueTypes.shape({
        highScoreId: VueTypes.integer.required,
        position: VueTypes.integer.required,
        player: VueTypes.string.required,
        score: VueTypes.integer.required,
        profilePic: VueTypes.string.required
    }).loose;

    export default {
        data() {
            return {
            };
        },

        props: {
            scores: VueTypes.arrayOf(Score).required,
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

</style>