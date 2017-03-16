/* eslint-disable */

import 'es6-promise/auto';
import { app, store } from './app';

/* eslint-disable */
Promise.prototype.finally = function(callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => {
      throw reason;
    })
  );
};
/* eslint-enable */

// prime the store with server-initialized state. the state is determined during SSR and inlined in the page markup.
store.replaceState(window.__INITIAL_STATE__);

// actually mount to DOM
app.$mount('#app');
