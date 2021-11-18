// Vendors
import * as React from "react"
import cn from 'classnames';
// Internals
import { IRatingProps, IItem } from "./interfaces"
import { generateRandomString } from '../../../utils/generateRandomString';
// import './Rating.scss';

const Rating = ({data}: IRatingProps): JSX.Element => {
  return(
    <section className="rating">
      <h2 className="visually-hidden">{data.title}</h2>
      <div className="rating__container container">
        <ul className="rating__list-rating list-rating">
          {data.list.map(({indicator, text}: IItem): JSX.Element => (
            <li className="list-rating__item-rating item-rating" key={generateRandomString()}>
              <p className="item-rating__head">{indicator}</p>
              <p className="item-rating__descr">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Rating;
