import React from 'react';

import './Footer.scss';

export function Footer(): React.ReactElement {
  return (
    <footer className="container">
      <p className="float-right"><a href="#">Back to top</a></p>
      <p>© 2017-2020 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
    </footer>
  );
}
