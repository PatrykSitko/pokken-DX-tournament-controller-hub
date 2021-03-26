import windowResized from '../../actions/window/resized';

function trackWindowSizeState(store) {
  store.dispatch(
    windowResized(
      store.getState().state,
      { width: window.innerWidth, height: window.innerHeight },
      { width: window.outerWidth, height: window.outerHeight },
    ),
  );
  window.addEventListener('resize', () => {
    store.dispatch(
      windowResized(
        store.getState().state,
        { width: window.innerWidth, height: window.innerHeight },
        { width: window.outerWidth, height: window.outerHeight },
      ),
    );
  });
}

export default (store) => {
  trackWindowSizeState(store);
};
