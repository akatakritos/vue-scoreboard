<template>
    <form class="form-inline">
        <div class="form-group">
            <label for="player">Mainframe Username</label>
            <input class="form-control ng-pristine ng-invalid ng-touched" id="player" v-model="username">
        </div>
        <div class="form-group">
            <label for="score">Score</label>
            <input class="form-control" id="score" v-model="score">
        </div>
        <button class="btn btn-primary" :disabled="!valid" @click="submitScore">Record Score</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                score: '',
            };
        },

        methods: {
            submitScore() {
                this.$emit('score-submitted', {
                    player: this.username,
                    score: this.score
                });
            }

        },

        computed: {
            usernameValid() {
                return Boolean(this.username);
            },

            scoreValid() {
                return /^\d+$/.test(this.score);
            },

            valid() {
                return this.usernameValid && this.scoreValid;
            }

        },
    };
</script>

<style scoped>
</style>