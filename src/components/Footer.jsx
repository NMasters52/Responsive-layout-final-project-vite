import React from 'react'

export default function Footer() {
    return (
        <footer class="footer">
            <div class="container">

                <h2 class="footer__header--primary">Just scratching the surface</h2>

                <div class="footer__lists">

                    <div class="footer__list">
                        <h3 class="footer__subheader">About our company</h3>
                        <p class="footer__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>

                    <div class="footer__list">
                        <h3 class="footer__subheader">Getting Around</h3>
                        <ul class="footer__directory-list">
                        <li class="footer__directory-item">Home</li>
                        <li class="footer__directory-item">About</li>
                        <li class="footer__directory-item">Contact</li>
                        </ul>
                    </div>

                    <div class="footer__list">
                        <h3 class="footer__subheader">Other Things</h3>
                        <ul class="footer__directory-list">
                        <li class="footer__directory-item">Lorem ipsum</li>
                        <li class="footer__directory-item">dolor</li>
                        <li class="footer__directory-item">sit amet</li>
                        <li class="footer__directory-item">consectetur</li>
                        </ul>
                    </div>

                    <div class="footer__list">
                        <h3 class="footer__subheader">And More</h3>
                        <ul class="footer__directory-list">
                        <li class="footer__directory-item">Lorem ipsum</li>
                        <li class="footer__directory-item">dolor</li>
                        <li class="footer__directory-item">sit amet</li>
                        <li class="footer__directory-item">consectetur</li>
                        </ul>
                    </div>

                </div>

            </div>
        </footer>

    )
}