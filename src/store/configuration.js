import { createBrowserHistory, routerMiddleware } from 'redux-first-routing';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const browserHistory = (() => createBrowserHistory())();

export default (() => {
  const middleware = applyMiddleware(routerMiddleware(browserHistory), thunk);
  return [reducers, middleware];
})();
