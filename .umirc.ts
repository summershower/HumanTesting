import { defineConfig } from 'umi';

export default defineConfig({
  title: '人类极限测试',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/reactiontime', component: '@/pages/ReactionTime' },

    
  ],
  fastRefresh: {},
});
