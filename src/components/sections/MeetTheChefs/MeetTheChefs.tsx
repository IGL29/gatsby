// Vendors
import * as React from "react"
import cn from "classnames"
// Internals
import { IMeetTheChefsProps, IItem, IFoodItem } from "./interfaces"
import { generateRandomString } from "../../../utils/generateRandomString"
import "./meetTheChefs.scss"

const setClassFoodCard = (position: string): string => {
  const classOrderOne = "food-list__item--order-1"
  const classOrderTwo = "food-list__item--order-2"

  if (position === "right") {
    return classOrderTwo
  }
  if (position === "left") {
    return classOrderOne
  }
}

const setClassChef = (typeElement: string, position: string): string => {
  const classTitleRight = "chef__subtitle--right"
  const classDescrRight = "chef__descr--right"
  const classImgLeft = "chef__img--left"

  if (position === "left") {
    return ""
  }

  if (position === "right") {
    switch (typeElement) {
      case "title":
        return classTitleRight
      case "description":
        return classDescrRight
      case "img":
        return classImgLeft
      default:
        return ""
    }
  }
}

const MeetTheChefs = ({ data }: IMeetTheChefsProps): JSX.Element => {

  return (
    <section className="meet-the-chefs">
      <div className="meet-the-chefs__container container">
        <h2 className="meet-the-chefs__title title">{data.title}</h2>

        <ul className="meet-the-chefs__chefs-list chefs-list">
          {data.list.map(({ chef, options }: IItem) => {

            return (
              <li className="chefs-list__chef chef" key={generateRandomString()}>
                <h3 className={cn("chef__subtitle", setClassChef("title", options.position), "subtitle")}>
                  {chef.name}
                </h3>

                <p className={cn("chef__descr", setClassChef("description", options.position))}>
                  {chef.description}
                </p>

                <img
                  className={cn("chef__img", setClassChef("img", options.position))}
                  src={chef.img}
                  alt={chef.name}
                />

                <ul className="chef__food-list food-list">
                  {chef.foodList.map(({ name, description, img, options }: IFoodItem) => (

                    <li className={cn("food-list__item", setClassFoodCard(options.position))}
                        key={generateRandomString()}>
                      <img className="food-list__img" src={img} alt={name} />
                      <h4 className="food-list__subtitle">{name}</h4>
                      <p className="food-list__text">{description})</p>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })
          }
        </ul>
      </div>
    </section>
  )
}

export default MeetTheChefs
