import React from 'react'

import logo from '../../assets/logo.svg'

import './Header.scss'

// implement header using Header.scss
// adding logo image as final design
function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" />
      <h1 className="header__title">React Tic Tac Toe challenge</h1>
      <div></div>
    </header>
  )
}

export default Header
