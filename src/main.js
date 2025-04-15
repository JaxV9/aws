import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

createApp(App).use(router).mount('#app');