<template>
    <div class="alert-container">
        <transition v-for="alert in alerts" :key="alert.message" name="fade">
            <div class="container">
                <alert-message v-bind="alert" @closed="close(alert)" />
            </div>
        </transition>
    </div>
</template>

<script>
    import bus from '@/lib/bus';
    import AlertMessage from './AlertMessage';

    export default {
        data() {
            return {
                alerts: [],
            };
        },

        components: {
            AlertMessage,
        },

        mounted() {
            bus.$on('alert', alert => {
                this.alerts.push(alert);

                setTimeout(() => {
                    this.close(alert);
                }, 5000);
            });
        },

        methods: {
            close(alert) {
                const index = this.alerts.indexOf(alert);
                if (index > -1) {
                    this.alerts.splice(index, 1);
                }
            },
        },

        computed: {

        }
    };
</script>

<style scoped>
    .alert-container {
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 12px;
    }

    .container .alert {
        width: auto;
        float: right;
        margin-right: 12px;
    }

    .alert-holder {
        width: auto;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 750ms;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>