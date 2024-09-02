import React from 'react'

export default function Hero() {

    return (
        <section className="hero">
            <div className='container'>
                <div className="hero__container row"> 
                    <div className="hero__header">
                        <h1>
                        Responsive layouts <span className="header--color">don't have to be a struggle</span>
                        </h1>
                    </div>

                    <div className="hero__content">
                        <p className="hero__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="btn" aria-label="Button for external link">
                        I want to learn
                        </button>
                    </div>
                </div>
            </div>
        </section>

       
    )
}