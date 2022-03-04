import { defineConfig } from 'umi';

export default defineConfig({
  title: '人类极限测试',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/', component: '@/pages/index',
      routes: [
        { path: '/', component: '@/pages/Homepage' },
        { path: '/reactiontime', component: '@/pages/ReactionTime' },
        { path: '/sequencememory', component: '@/pages/SequenceMemory' },
        { path: '/aimtrainer', component: '@/pages/AimTrainer' },
        { path: '/chimp', component: '@/pages/Chimp' },
        { path: '/visualmemory', component: '@/pages/VisualMemory' },
      ]
    },
  ],
  fastRefresh: {},
});
