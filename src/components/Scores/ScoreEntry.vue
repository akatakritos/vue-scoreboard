<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2 class="panel-title">Add a Score</h2>
        </div>

        <div class="panel-body">
            <form action="#" @submit="submitScore">

                <div class="form-group" :class="{ 'has-error': errors.has('player') }">
                    <label class="control-label" for="player">Mainframe Username</label>
                    <input type="text" class="form-control" id="player" name="player" ref="player" v-model="username" v-validate="{required:true}">
                    <error-block :has-error="errors.has('player')" :message="errors.first('player')" />
                </div>

                <div class="form-group" :class="{ 'has-error': errors.has('score') }">
                    <label class="control-label" for="score">Score</label>
                    <input type="text" class="form-control" id="score" name="score"  v-model="score" v-validate="{required: true, numeric: true }"
                    />
                    <error-block :has-error="errors.has('score')" :message="errors.first('score')" />
                </div>
                <button class="btn btn-primary" :disabled="errors.any()" @click.prevent="submitScore">Record Score</button>
            </form>
        </div>
    </div>
</template>

<script>
    import ErrorBlock from '@/components/shared/ErrorBlock';

    export default {
        data() {
            return {
                username: '',
                score: '',
            };
        },

        components: {
            ErrorBlock,
        },

        methods: {
            submitScore() {
                if (this.errors.any()) {
                    return;
                }

                this.$emit('score-submitted', {
                    player: this.username,
                    score: this.score
                });

                this.username = '';
                this.score = '';
                this.$refs.player.focus();
            }
        },

        computed: {

        },
    };
</script>

<style scoped>
    form {
        max-width: 320px;
    }
</style>