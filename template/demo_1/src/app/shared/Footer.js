import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block"><Trans>Copyright</Trans> © <a href="https://www.bootstrapdash.com/" target="_blank" rel="noopener noreferrer"><Trans>bootstrapdash.com</Trans> </a>2020</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"><Trans>Free</Trans> <a href="https://www.bootstrapdash.com/react-admin-templates/" target="_blank" rel="noopener noreferrer"> <Trans>react admin</Trans> </a> <Trans>templates from BootstrapDash.com.</Trans>  </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;