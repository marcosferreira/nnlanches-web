import { Fragment } from 'react';

import Header from '../../components/Header';
import { Container } from '../../styles/GlobaStyles';

export default function Login() {
  return (
    <Fragment>
      <Header />
      <Container>
        <h1>Login</h1>
      </Container>
    </Fragment>
  );
}
