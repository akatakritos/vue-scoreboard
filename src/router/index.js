import Vue from 'vue';
import Router from 'vue-router';

import ScorePage from '@/components/ScorePage';
import TheGamesAdminPage from '@/components/GamesAdmin/TheGamesAdminPage';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/scoreboard',
            name: 'scoreboard',
            component: ScorePage
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
