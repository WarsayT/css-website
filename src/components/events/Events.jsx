/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./events.css"
import EventsBlock from './EventsBlock'
import Conference from './Conference'

const Events = () => {
  return (
    <section id="events">
      <div className="container container__events">
        <EventsBlock />
        <Conference />
      </div>
    </section>
  )
}

export default Events