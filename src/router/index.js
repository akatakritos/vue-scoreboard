import Vue from 'vue';
import Router from 'vue-router';

import ScorePage from '@/components/ScorePage';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/scoreboard',
            name: 'scoreboard',
            component: ScorePage
        },
        {
            path: '*',
            redirect: '/scoreboard'
        }
    ]
});
