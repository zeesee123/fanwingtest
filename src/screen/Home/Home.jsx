import React from 'react'
import {  Banner, Slider } from '../../components/Home/BannerAboutSlider.jsx'
import { Feature, Product } from '../../components/Home/FeatureProduct.jsx'
import { Contact, Form } from '../../components/Home/ContactForm.jsx'

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