import React from 'react'
import {  Banner, Slider } from '../../components/Home/BannerAboutSlider'
import { Feature, Product } from '../../components/Home/FeatureProduct'
import { Contact, Form } from '../../components/Home/contactForm'

function Home() {
  return (
    <>
      <Banner />
      <Slider />
      <Feature/>
      <Product/>
      <Contact/>
      <Form/>
    </>
  )
}

export default Home