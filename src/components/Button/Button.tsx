// Vendors
import * as React from "react"
import cn from "classnames"
// Internals
import { IButtonProps } from "./interfaces"
// import './button.scss';

const Button = ({ text, As = "button", className, href, children }: IButtonProps) => {
  return (
    <As href={href} className={cn("button", className)}>
      {children || text}
    </As>
  )
}

export default Button
