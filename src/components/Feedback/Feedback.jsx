import React from 'react'
import './Feedback.css'
import Card, { InstaIcon } from '../Card/Card'

export default function Feedback() {
    return (
        <section className='feedback-section'>
            <div className='feedback-haeding'>
                <h2>What our Customer says</h2>
                <p className="description">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win strategies to ensure domination.</p>
            </div>

            <div className='feedback-card'>
                <Card name="Dave Jones" title="CEO" image="images/Avatar.png" icon={<InstaIcon />}description="LookScout has got everything I need. Man, this thing is getting better as I learn more about it. It's what I've been looking for."/>
                <Card name="Andrew Drue" title="UI/UX Designer" image="images/Avatar 1.png" description="Best. Product. Ever! LookScout was the best investment I ever made. I love your system. It's what I've been looking for."/>
                <Card name="Olivia Manson" title="3D Artist" image="images/Avatar 2.png" description="We've used LookScout for the last five years. The very best. LookScout did what you said it does. It's all good."/>
                <Card name="Morgan John" title="Lead Designer" image="images/Avatar 3.png" description="It's really wonderful. LookScout was the best investment I ever made. I can't say enough about it. I love LookScout!"/>
                <Card name="Jeffery Walker" title="UI/UX Designer" image="images/Avatar 4.png" description="It fits our needs perfectly. This project. Definitely worth the investment  and is behind its product 100%."/>
                <Card name="Brian Foard" title="HR" image="images/Avatar 1.png" description="Thank you for making it painless, pleasant and most of all hassle free! Needless to say we are extremely satisfied.."/>
                <Card name="Richard Lopez" title="Manager" image="images/Avatar 2.png" description="Best. Product. Ever! LookScout was the best investment I ever made. I love your system. It's what I've been looking for."/>
                <Card name="Dunhan Smith" title="CEO" image="images/Avatar 3.png" description="Thank you for making it painless, pleasant and most of all hassle free! Needless to say we are extremely satisfied."/>
            </div>

            <button className='btn-primary feedback-button'>
                View More
            </button>

        </section>
    )
}
