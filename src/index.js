import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App';

const renderApp = (Component) => {
  const root = createRoot(document.querySelector('#itunes-search'));

  root.render(<Component />)

};

// Initial render
renderApp(App);

// Enable HMR if module.hot is available
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    renderApp(NextApp);
  });
}
