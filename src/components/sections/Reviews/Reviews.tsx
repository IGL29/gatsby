// Vendors
import * as React from "react"
import cn from "classnames"
// Internals
import { IReviewsProps, IItem } from "./interfaces"
import { Review } from "../../Review"
import { generateRandomString } from '../../../utils/generateRandomString';
// import "./reviews.scss"

const Reviews = ({ data }: IReviewsProps): JSX.Element => {
  return (
    <section className="reviews">
      <div className="reviews__container container">
        <h2 className="reviews__title title">{data.title}</h2>

        <ul className="reviews__list-reviews list-reviews">
          {data.list.map(({ name, img, feedback }: IItem) => (
            <Review name={name} img={img} feedback={feedback} className={'list-reviews__item-review'} key={generateRandomString()}/>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Reviews
