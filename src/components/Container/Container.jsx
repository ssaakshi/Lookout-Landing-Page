import React from 'react'
import './Container.css'

export default function Container() {
    return (

        <div className='main-container-div'>
            <div className='container'>
                <div className='inner-container'>
                    <div className='main-heading'>
                        <h1>Your Supercharged</h1>
                        <h1>Design Workflow</h1>
                    </div>

                    <div >
                        <p className='paragraph'>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" width="20" height="20" rx="10" fill="#437EF7" />
                                <path d="M14.5 8L9.35355 13.1464C9.15829 13.3417 8.84171 13.3417 8.64645 13.1464L6.5 11" stroke="white" stroke-width="1.67" stroke-linecap="round" />
                            </svg>Enterprise-grade security
                        </p>
                        <p className='paragraph'>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" width="20" height="20" rx="10" fill="#437EF7" />
                                <path d="M14.5 8L9.35355 13.1464C9.15829 13.3417 8.84171 13.3417 8.64645 13.1464L6.5 11" stroke="white" stroke-width="1.67" stroke-linecap="round" />
                            </svg>99.9% guaranteed uptime SLA
                        </p>
                        <p className='paragraph'>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" width="20" height="20" rx="10" fill="#437EF7" />
                                <path d="M14.5 8L9.35355 13.1464C9.15829 13.3417 8.84171 13.3417 8.64645 13.1464L6.5 11" stroke="white" stroke-width="1.67" stroke-linecap="round" />
                            </svg>Designated customer success team
                        </p>
                    </div>

                    <div className='email-field'>
                        <input type='text' placeholder='Enter your Email' className='input-field'></input>
                        <button className='btn-primary btn-paragraph'>Submit</button>
                    </div>
                </div>

                <div className='image-wrapper'>
                    <img src="/images/hero.png" alt="hero" />
                </div>
            </div>
        </div>
    )
}
