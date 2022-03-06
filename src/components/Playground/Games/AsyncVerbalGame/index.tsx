import { dynamic } from 'umi';

export default dynamic({
  loader: async function () {
    const { default: VerbalGame } = await import(
      /* webpackChunkName: "verbal_game" */ '../VerbalGame'
    );
    return VerbalGame;
  },
});
