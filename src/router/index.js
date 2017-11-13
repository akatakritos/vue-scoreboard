import Vue from 'vue';
import Router from 'vue-router';

import TheScorePage from '@/components/Scores/TheScorePage';
import TheGamesAdminPage from '@/components/GamesAdmin/TheGamesAdminPage';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/scoreboard',
            name: 'scoreboard',
            component: TheScorePage
        },
        {
            path: '/admin/games',
            name: 'games',
            component: TheGamesAdminPage,
        },
        {
            path: '*',
            redirect: '/scoreboard'
        }
    ]
});
