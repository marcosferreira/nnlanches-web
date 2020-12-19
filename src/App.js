import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { GlobalStyle } from './styles/GlobaStyles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Home />
    </React.Fragment>
  );
}

export default App;
