import React from 'react'
import './Content.css'

export default function Content(props) {
    return (
        <section className={`content ${props.reverse ? 'reverse':''}`}>
            <div className='content-text'>
                <h2>Demonstrate branding consequently think outside</h2>
                <p>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.</p>
                <ul>
                    <li className='content-text-li'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                    </svg>Enterprise grade security</li>
                    <li className='content-text-li'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                    </svg>99.9% guaranteed uptime SLA</li>
                    <li className='content-text-li'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                    </svg>Designated customer success team</li>

                </ul>
                <button className='btn-primary'>Start now &#8594;</button>
            </div>
            <div className='image-wrapper-content'>
                <img src="/images/Photo.png" alt="hero" />
            </div>
        </section>
    )
}
