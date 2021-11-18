// Vendors
import * as React from "react"
import cn from 'classnames';
// Internals
import { IFoodSafetyProps } from "./interfaces"
// import './foodSafety.scss';

const FoodSafety = ({data}: IFoodSafetyProps): JSX.Element => {
  return(
    <section className="food-safety">
      <div className="food-safety__container container">
        <div className="food-safety__background"/>
        <div className="food-safety__wrap-content wrap-content">
          <h2 className="wrap-content__title title">{data.title}</h2>

          <p className="wrap-content__text">{data.text}</p>
        </div>
      </div>
    </section>
  )
}

export default FoodSafety;
