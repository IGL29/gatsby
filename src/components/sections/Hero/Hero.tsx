// Vendors
import * as React from "react"
import cn from 'classnames';
// Internals
import {IHeroProps} from "./interfaces"
import { Button } from "../../Button"
// import './hero.scss';

const Hero = ({data}: IHeroProps): JSX.Element => {
  return(
    <div className="hero">
      <div className="hero__container container">
        <p className="hero__text">{data.text}</p>
        <Button text={'Go to menus'} className={'hero__button'}/>
      </div>
    </div>
  )
}

export default Hero;
