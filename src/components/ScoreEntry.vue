<template>
    <form class="form-inline">
        <div class="form-group">
            <label for="player">Mainframe Username</label>
            <input type="text" class="form-control" id="player" name="player"
                v-model="username" v-validate="{required:true}">
        </div>
        <div class="form-group">
            <label for="score">Score</label>
            <input type="text" class="form-control" id="score" name="score"
                v-model="score" v-validate="{required: true, numeric: true }" />
        </div>
        <button class="btn btn-primary" :disabled="errors.any()" @click="submitScore">Record Score</button>
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

        },
    };
</script>

<style scoped>
</style>