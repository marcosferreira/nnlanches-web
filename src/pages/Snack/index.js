import { Fragment } from 'react';

import Header from '../../components/Header';
import { Container } from '../../styles/GlobaStyles';

export default function Snack() {
  return (
    <Fragment>
      <Header />
      <Container>
        <h1>Snack</h1>
      </Container>
    </Fragment>
  );
}
