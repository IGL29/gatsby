// Vendors
import * as React from "react"
import cn from "classnames"
import { Link } from "gatsby";
// Internals
import { ILogolinkProps, DefaultValues } from "./interfaces"

const LogoLink = (
  {
    toPage = DefaultValues.toPage,
    src = DefaultValues.src,
    alt = DefaultValues.alt,
    className
  }: ILogolinkProps): JSX.Element => {

  return (
    <Link to={toPage} className={cn(className, "logo-link")}>
      <img className="logo-link__img" src={src} alt={alt} />
    </Link>
  )
}

export default LogoLink
