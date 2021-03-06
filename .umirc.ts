import { defineConfig } from 'umi';
export default defineConfig({
  title: '人类极限测试',
  favicon: 'favicon.ico',
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
  dynamicImport: {
    loading: '@/components/Loading',
  },
  // 以下三个选项为配置git Page静态页面使用
  base: process.env.NODE_ENV === 'production' ? '/HumanTesting/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/HumanTesting/' : '/',
  outputPath: 'docs',
});
