import React from 'react'
import './Drawer.scss'

export const Drawer = () => (
  <div className="mdl-layout__drawer">
    <span className="mdl-layout__title">Gitletask</span>
    <nav className="mdl-navigation">
      <a className="mdl-navigation__link" href="#">Hello</a>
      <a className="mdl-navigation__link" href="#">World.</a>
      <a className="mdl-navigation__link" href="#">How</a>
      <a className="mdl-navigation__link" href="#">Are</a>
      <a className="mdl-navigation__link" href="#">You?</a>
    </nav>
  </div>
)

export default Drawer
