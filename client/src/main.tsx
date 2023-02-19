/* react */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* redux */
import { Provider } from 'react-redux';
import { store } from './config/redux/store';

/* pages */
import { Home } from './pages/Home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>
);
