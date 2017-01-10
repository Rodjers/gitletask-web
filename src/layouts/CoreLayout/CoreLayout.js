import React from 'react';
import Header from '../../components/Header';
import Drawer from '../../components/Drawer';
import './CoreLayout.scss';
import '../../styles/core.scss';

export const CoreLayout = ({ children }) => (
  <div className='mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header'>
    <Header />
    <Drawer />
    <main className='mdl-layout__content'>
      {children}
    </main>
  </div>
);

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
};

export default CoreLayout;
