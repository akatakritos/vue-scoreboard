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
                    <a class="navbar-brand" routerlink="/scoreboard" href="/scoreboard">Scoreboard</a>
                </div>
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="nav navbar-nav">
                        <li>
                            <a href="/admin/games" routerlink="/admin/games">Games Admin</a>
                        </li>
                        <li>
                            <a href="/admin/scores" routerlink="/admin/scores">Scores Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <router-view />
        </div>

    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
        },
    };
</script>

<style scoped>

</style>