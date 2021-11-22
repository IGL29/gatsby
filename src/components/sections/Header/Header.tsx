// Vendors
import * as React from "react"
import cn from 'classnames';
// Internals
import { LogoLink } from "../../LogoLink"
import { Button } from "../../Button"
import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="container header__container">
      <LogoLink className={"header__logo-link"}/>

        <div className="header__wrap-buttons wrap-buttons">
          <Button As={'a'} href={'#'} text={'Go to menus'} className={'wrap-buttons__button'}/>
          <Button As={'a'} href={'#'} text={'Become a HomeCook'} className={'wrap-buttons__button'}/>
        </div>
      </div>
    </header>
  )
}

export default Header;
