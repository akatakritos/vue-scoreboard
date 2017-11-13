<template>
    <span class="confirmation-button">
        <button class="btn btn-danger" v-if="!confirming" @click="requestConfirmation">{{ caption }}</button>
        <button class="btn btn-danger" v-if="confirming" @click="confirm">Yes, I'm sure</button>
        <button class="btn btn-default" v-if="confirming" @click="cancel">No, nevermind</button>
    </span>
</template>

<script>
    import VueTypes from 'vue-types';

    export default {
        data() {
            return {
                confirming: false,
            };
        },

        props: {
            caption: VueTypes.string.def('Delete'),
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