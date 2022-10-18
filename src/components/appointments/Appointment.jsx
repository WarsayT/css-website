/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import "./appointment.css"
import {TbMathFunction} from "react-icons/tb"

const data = [
    {
        link: "https://arm.zu.ac.ae",
        name: "ARM",
        description: "lorem ipsum is lorem ipsum as such is lorem"
    },
    {
        link: "https://arm.zu.ac.ae",
        name: "SAHIM",
        description: "lorem ipsum is lorem ipsum as such is lorem"
    },
    {
        link: "https://arm.zu.ac.ae",
        name: "Banner",
        description: "lorem ipsum is lorem ipsum as such is lorem"
    },
    {
        link: "https://arm.zu.ac.ae",
        name: "SAP",
        description: "lorem ipsum is lorem ipsum as such is lorem"
    }
]
const Appointment = () => {
  return (
    <section id='appointment'>
        <div className="container appointment__container">
            <div className='appointment__header'>
                <h2>SERVICES</h2>
            </div>
            <div className="appointments">
                {
                    data.map(({link, name, description}, index) => {
                        return (
                            <a href={link} target="_blank">
                                <article className='appointment'>
                                    <TbMathFunction />
                                    <h2>{name}</h2>
                                    <small>{description}</small>
                                </article>
                            </a>
                        )
                    })
                }
            </div>
        </div>

    </section>
  )
}

export default Appointment