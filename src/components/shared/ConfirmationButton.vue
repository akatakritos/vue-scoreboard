<template>
    <span class="confirmation-button">
        <button class="btn btn-danger" v-if="!confirming" @click="requestConfirmation">Delete</button>
        <button class="btn btn-danger" v-if="confirming" @click="confirm">Yes, I'm sure</button>
        <button class="btn btn-default" v-if="confirming" @click="cancel">No, nevermind</button>
    </span>
</template>

<script>
    export default {
        data() {
            return {
                confirming: false,
            };
        },

        methods: {
            requestConfirmation() {
                this.confirming = true;
                this.$emit('confirmationRequested');
            },

            confirm() {
                this.confirming = false;
                this.$emit('confirmed');
            },

            cancel() {
                this.confirming = false;
                this.$emit('cancelled');
            }

        },

        computed: {

        }
    };
</script>

<style scoped>
    .confirmation-button {
        display: block;
        min-width: 240px;
        float: right;
    }
</style>