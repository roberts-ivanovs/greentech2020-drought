import React, { ReactElement } from 'react';

// import { useUser } from 'global/UserContext';
import { Header } from 'core/root/Header';
import { Main } from 'core/root/Main';
import { Footer } from 'core/root/Footer';

function App(): ReactElement {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export { App };
