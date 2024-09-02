import React from 'react'

export default function Main() {
    return(
        <main>
            <div className="container">

                <div className="main__content">
                    <h3 className="main__header">
                        It doesn’t have to be so hard
                    </h3>
                    <p className="main__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <div>
                    <img 
                        src="../public/images/img1.jpg" 
                        alt="picture of webpage diagrams drawn out" 
                        className="main__image"
                    />
                    </div>
                    
                    <p className="main__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>

                <div className="main__cards">

                    <div className="card">
                        <h3 className="card__header">
                        Break It Down
                        </h3>
                        <p className="card__text">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="card__header">
                        Work Your Way Up
                        </h3>
                        <p className="card__text">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="card__header">
                        Go After It
                        </h3>
                        <p className="card__text">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua
                        </p>
                    </div>

                </div>

            </div>
        </main>
    )
}