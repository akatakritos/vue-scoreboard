<template>
    <div :class="['alert', alertClass, 'alert-dismissible']" role="alert">
        <button type="button" class="close" aria-label="Close" @click="$emit('closed')">
            <span aria-hidden="true">&times;</span>
        </button>

        {{ message }}
    </div>
</template>

<script>
    import VueTypes from 'vue-types';

    export default {
        data() {
            return {};
        },

        props: {
            type: VueTypes.oneOf(['success', 'info', 'warning', 'danger']).def('info'),
            message: VueTypes.string.isRequired,
        },

        methods: {

        },

        computed: {
            alertClass() {
                return 'alert-' + this.type;
            },
        },
    };
</script>