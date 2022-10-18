/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const EventsBlock = () => {
  return (
    <div className="events">
        <div className='events__header'>
            <h2>EVENTS</h2>
        </div>
        <div className="events__block">
            <div className="events__content">
                <article>
                    <div className='event__date'>
                        <h6>8</h6>
                        <h6>OCT</h6>
                    </div>
                    <div>
                        <h6>MEETING WITH DEAN</h6>
                        <a href="">Read more</a>
                    </div>
                </article>
            </div>
            <div className="events__content">
                <article>
                    <div className='event__date'>
                        <h6>8</h6>
                        <h6>OCT</h6>
                    </div>
                    <div>
                        <h6>MEETING WITH DEAN</h6>
                        <a href="">Read more</a>
                    </div>
                </article>
            </div>
            <div className="events__content">
                <a href="" className='btn'><h6>VIEW ALL EVENTS</h6></a>
            </div>
        </div>
    </div>
  )
}

export default EventsBlock