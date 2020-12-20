import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';

import Home from '../pages/Home';
import Snack from '../pages/Snack';
import Drink from '../pages/Drink';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/snack" component={Snack} />
        <Route exact path="/drink" component={Drink} />
      </Switch>
    </BrowserRouter>
  );
}
