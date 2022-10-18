import React from 'react'
import Header from './components/header/Header'
import Activity from './components/activities/Activity'
import Appointment from './components/appointments/Appointment'
import News from './components/news/News'
import Events from './components/events/Events'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Header />
      <Activity />
      <Appointment />
      <News />
      <Events />
      <Testimonials />
    </>
  )
}

export default App