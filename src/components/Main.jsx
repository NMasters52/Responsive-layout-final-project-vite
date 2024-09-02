import React from 'react'

export default function Main() {
    return(
        <main>
            <div>

                <div className="main__content">
                    <h3 className="main__header"></h3>
                    <p className="main__text"></p>
                    <img 
                        src="../public/images/img1.jpg" 
                        alt="picture of webpage diagrams drawn out" 
                        className="main__image"
                    />
                    <p className="main__text"></p>
                </div>

                <div className="main__cards">

                    <div className="card">
                        <h3 className="card__header"></h3>
                        <p className="card__text"></p>
                    </div>

                    <div className="card">
                        <h3 className="card__header"></h3>
                        <p className="card__text"></p>
                    </div>

                    <div className="card">
                        <h3 className="card__header"></h3>
                        <p className="card__text"></p>
                    </div>

                </div>

            </div>
        </main>
    )
}