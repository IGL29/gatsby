// Vendors
import * as React from "react"
import Seo from "../components/seo"
// Internals
import { Hero } from "../components/sections/Hero"
import { About } from "../components/sections/About"
import { Advantages } from "../components/sections/Advantages"
import { FoodSafety } from "../components/sections/FoodSafety"
import { HowItWorks } from "../components/sections/HowItWorks"
import { MeetTheChefs } from "../components/sections/MeetTheChefs"
import { Rating } from "../components/sections/Rating"
import { Reviews } from "../components/sections/Reviews"
import Layout from "../components/Layout/Layout"
import { homeCooksData } from "../data/data"

const IndexPage = () => (
  <Layout>
    <Seo lang={'en'} title={"HomeCooks"} description={"description"} />

    <Hero data={homeCooksData.hero} />
    <About data={homeCooksData.about} />
    <Advantages data={homeCooksData.advantages} />
    <FoodSafety data={homeCooksData.foodSafety} />
    <HowItWorks data={homeCooksData.howItWorks} />
    <MeetTheChefs data={homeCooksData.meetTheChefs} />
    <Rating data={homeCooksData.rating} />
    <Reviews data={homeCooksData.reviews} />
  </Layout>
)

export default IndexPage
