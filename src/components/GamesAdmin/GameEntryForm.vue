<template>
    <div class="form-inline vertRhythm_small">
        <div class="form-group">
            <label for="name">Name</label>
            <input class="form-control" type="text" name="name"
                v-model="name" v-validate="{ required: true }">
        </div>
        <button class="btn btn-primary" @click="addGame" :disabled="errors.any()">Add Game</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
            };
        },

        methods: {
            addGame() {
                this.$emit('add-game', {
                    name: this.name
                });

                this.name = '';
            }

        },

        computed: {

        }
    };
</script>