import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Snack from '../pages/Snack';
import Drink from '../pages/Drink';

import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/snack" component={Snack} />
        <Route exact path="/drink" component={Drink} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
