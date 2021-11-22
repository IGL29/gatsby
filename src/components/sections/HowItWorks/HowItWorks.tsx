// Vendors
import * as React from "react"
import cn from "classnames"
// Internals
import { IHowItWorksProps, IItem } from "./interfaces"
import { generateRandomString } from "../../../utils/generateRandomString"
import "./howItWorks.scss";

const HowItWorks = ({ data }: IHowItWorksProps): JSX.Element => {
  return (
    <section className="how-it-works overflow-hidden">
      <div
        className="how-it-works__container container container--position-relative container--background-right-108 container--background-right-0 container--background-size-437 container--background-image-1 container--background-image">
        <h2 className="how-it-works__title title">{data.title}</h2>

        <ol className="how-it-works__list-ol list-ol">
          {data.list.map(({ title, text }: IItem) => (
            <li className="list-ol__item-ol" key={generateRandomString()}>
              <h3 className="list-ol__subtitle subtitle">{title}</h3>
              <p className="list-ol__text">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

  )
}

export default HowItWorks
