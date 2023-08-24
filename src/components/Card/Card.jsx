import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <article className='card-section'>
            <div className='card-profile-info'>
                <img src={props.image} alt="profile" />
                <div className='card-profile-info-heading'>
                    <p className='name'>{props.name}</p>
                    <p>{props.title}</p>
                </div>
                {props.icon}
            </div>
            <p className='section-paragraph'>
                {props.description}
            </p>
        </article>
    )
}


export function InstaIcon() {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_100_1463)">
                <path d="M17.3503 0H7.64973C3.70735 0 0.5 3.20735 0.5 7.14973V16.8503C0.5 20.7926 3.70735 24 7.64973 24H17.3503C21.2926 24 24.5 20.7926 24.5 16.8503V7.14973C24.5 3.20735 21.2926 0 17.3503 0ZM22.0856 16.8503C22.0856 19.4655 19.9655 21.5856 17.3503 21.5856H7.64973C5.0345 21.5856 2.9144 19.4655 2.9144 16.8503V7.14973C2.9144 4.53446 5.0345 2.4144 7.64973 2.4144H17.3503C19.9655 2.4144 22.0856 4.53446 22.0856 7.14973V16.8503Z" fill="white" />
                <path d="M12.5 5.79272C9.07729 5.79272 6.29272 8.57729 6.29272 11.9999C6.29272 15.4226 9.07729 18.2072 12.5 18.2072C15.9227 18.2072 18.7072 15.4226 18.7072 11.9999C18.7072 8.57725 15.9227 5.79272 12.5 5.79272ZM12.5 15.7928C10.4052 15.7928 8.70712 14.0947 8.70712 12C8.70712 9.90523 10.4053 8.20712 12.5 8.20712C14.5947 8.20712 16.2928 9.90523 16.2928 12C16.2928 14.0947 14.5947 15.7928 12.5 15.7928Z" fill="white" />
                <path d="M18.719 7.32673C19.5405 7.32673 20.2064 6.66083 20.2064 5.83939C20.2064 5.01796 19.5405 4.35205 18.719 4.35205C17.8976 4.35205 17.2317 5.01796 17.2317 5.83939C17.2317 6.66083 17.8976 7.32673 18.719 7.32673Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_100_1463">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>

    )
}

