import React from 'react';

import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { router } from './routes';
import { store } from 'store';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
