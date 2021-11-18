// Vendors
import * as React from "react"
import cn from "classnames"
// Internals
import { IAboutProps } from "./interfaces"
// import styles from "./about.scss"

const About = ({ data }: IAboutProps): JSX.Element => {
  return (
    <section className={'about'}>
      <div className={cn("about__container", "container")}>
        <div className={"about__background"} />
        <div className={cn("about__wrap-content", "wrap-content")}>
          <h2 className={cn("wrap-content__title", "title")}>{data.title}</h2>
          <p className={"wrap-content__text"}>{data.text}</p>
        </div>
      </div>
    </section>
  )
}

export default About
