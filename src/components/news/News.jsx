import React from 'react'
import "./news.css"
import IMG9 from '../../assets/img9.jpeg';
import IMG8 from '../../assets/img8.jpeg';
const News = () => {
  return (
    <section id="news">
      <div className="container container__news">
        <div className='news__header'>
          <h2>UNIVERSITY NEWS</h2>
        </div>
        <div className='news__block'>
          <div className="news news__first">
            <div>
              <img src={IMG9} alt="" />
            </div>
            <div className='news__content'>
              <p>Lorem ipsum is strangely lorem ipsum this directly</p>
              <p>Read more ... </p>
            </div>
          </div>

          <div className="news news__column">
            <div className='news__short'>
              <div>
                <img src={IMG9} alt="" />
              </div>
              <div className='news__content'>
                <p>Lorem ipsum is strangely lorem ipsum this directly</p>
                <p>Read more ... </p> 
              </div>
            </div>

            <div className='news__short'>
              <div className='news__content'>
                  <p>Lorem ipsum is strangely lorem ipsum this directly</p>
                  <p>Read more ... </p>
              </div> 
              <div>
                <img src={IMG9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News