import React, { Fragment } from 'react'
import Landing from './components/Landing'
import SignIn from '../signin/SignIn'
import { Features } from './components/Features'
import StayProductive from './components/StayProductive'
import { Testimonials } from './components/Testimonials'
import GetStarted from './components/GetStarted'

export const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Features />
      <StayProductive />
      <Testimonials />
      <GetStarted />    
    </Fragment>
  )
}
