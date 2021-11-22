// Vendors
import * as React from "react";
import cn from 'classnames';
// Internals
import { IReviewProps } from "./interfaces";
import "./review.scss";

const Review = ({ name, feedback, img, className }: IReviewProps): JSX.Element => {
  return (
    <li className={cn(className, 'item-review')}>
      <div className="item-review__reviewer reviewer">
        <img className="reviewer__img" src={img} alt={name} />
        <p className="reviewer__text">{name}</p>
      </div>

      <p className="item-review__descr">{feedback}</p>
    </li>
  )
}

export default Review
