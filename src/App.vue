<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button aria-controls="navbar" aria-expanded="false" class="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse"
                        type="button">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link :to="{name:'scoreboard'}" class="navbar-brand">Scoreboard</router-link>
                </div>
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="nav navbar-nav">
                        <router-link :to="{name:'games'}" tag="li" active-class="active">
                            <a>Games Admin</a>
                        </router-link>
                        <router-link :to="{ name: 'scores-admin' }" tag="li" active-class="active">
                            <a>Scores Admin</a>
                        </router-link>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container alert-spacer">
            <router-view />
        </div>

        <alert-container />

    </div>
</template>

<script>
    import AlertContainer from '@/components/Alerting/AlertContainer';

    export default {
        name: 'app',
        components: {
            AlertContainer,
        },
    };
</script>

<style scoped>

</style>