'use strict';
exports.__esModule = true;
exports.onRouteChange = void 0;
function onRouteChange() {
  window &&
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
}
exports.onRouteChange = onRouteChange;
