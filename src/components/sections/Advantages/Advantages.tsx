// Vendors
import * as React from "react"
import cn from 'classnames';
// Internals
import {IAdvantagesProps, IItem} from "./interfaces"
import { generateRandomString } from "../../../utils/generateRandomString"
// import './advantages.scss';

const Advantages = ({data}: IAdvantagesProps): JSX.Element => {
  return(
    <section className={cn("advantages overflow-hidden")}>
      <div
        className={cn("advantages__container container container--position-relative container--background-right-108 container--background-filter-blur-opacity container--background-right-0 container--background-size-437 container--background-image-2 container--background-image container--background-size-contain")}>
        <h2 className={cn("advantages__title title")}>{data.title}</h2>

        <ol className={cn("advantages__list-ol list-ol list-ol--font-roboto-700 list-ol--padding-left-min")}>
          {data.list.map(({title, text}: IItem) => (
            <li className={cn("list-ol__item-ol list-ol__item-ol--left-min")} key={generateRandomString()}>
              <h3 className={cn("list-ol__subtitle subtitle list-ol__subtitle--margin-bottom-big")}>{title}</h3>
              <p className={cn("list-ol__text list-ol__text--font-roboto-400")}>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Advantages;
