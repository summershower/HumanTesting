export function onRouteChange() {
  window &&
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
}
