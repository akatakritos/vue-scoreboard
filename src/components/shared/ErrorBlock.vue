<template>
    <div class="error-block">
        <span v-show="hasError" class="error-message">
            {{ message }}
        </span>
    </div>
</template>

<script>
    import VueTypes from 'vue-types';

    export default {
        data() {
            return {};
        },

        props: {
            hasError: VueTypes.bool.def(false),
            message: VueTypes.string,
        },
    };
</script>

<style scoped>
    .error-block {
    }

    .error-message {
        color: #a94442;
    }
</style>