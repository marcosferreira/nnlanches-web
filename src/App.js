import React from 'react';

import AppRoutes from './routes';

import { GlobalStyle } from './styles/GlobaStyles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
