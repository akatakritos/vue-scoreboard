import Vue from 'vue';
import Router from 'vue-router';

import TheScorePage from '@/components/Scores/TheScorePage';
import TheGamesAdminPage from '@/components/GamesAdmin/TheGamesAdminPage';
import TheScoresAdminPage from '@/components/ScoresAdmin/TheScoresAdminPage';

Vue.use(Router);

export default new Router({
    mode: 'history',
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
            path: '/admin/scores',
            name: 'scores-admin',
            component: TheScoresAdminPage,
        },
        {
            path: '*',
            redirect: '/scoreboard'
        }
    ]
});
