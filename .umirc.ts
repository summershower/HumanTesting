import { defineConfig } from 'umi';
export default defineConfig({
  title: '人类极限测试',
  // favicon: favicon,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/', component: '@/pages/Homepage' },
        { path: '/reactiontime', component: '@/pages/ReactionTime' },
        { path: '/sequencememory', component: '@/pages/SequenceMemory' },
        { path: '/aimtrainer', component: '@/pages/AimTrainer' },
        { path: '/number', component: '@/pages/Number' },
        { path: '/verbal', component: '@/pages/Verbal' },
        { path: '/chimp', component: '@/pages/Chimp' },
        { path: '/visualmemory', component: '@/pages/VisualMemory' },
        { path: '/typing', component: '@/pages/Typing' },
      ],
    },
  ],
  fastRefresh: {},
});
