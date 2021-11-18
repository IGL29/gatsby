// Vendors
import * as React from "react"
// Internals
import {ILayoutProps} from "./interfaces"
import { Header } from "../sections/Header"
import { Footer } from "../sections/Footer"
// import "./layout.scss";

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main className={"main"}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
