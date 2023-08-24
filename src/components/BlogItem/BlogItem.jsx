import React from 'react'
import './BlogItem.css'

export default function BlogItem(props) {
    return (
        // <div className='blog-wrapper'>
        //     <div className='blog-items-wrapper'>
        //         <div className='blog-image'>
        //             <img src="images/Tooltip.png" />
        //         </div>
        //         <h3>Reach your users with new tools. Reach your users with new tools. Reach your users with new tools.</h3>
        //         <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize.Efficiently unleash cross-media information without cross-media value. Quickly maximize.Efficiently unleash cross-media.</p>
        //         <p>25 Apr 2022</p>
        //     </div>

        //     {/* <div className='blog-items-wrapper2'>
        //         <div className='blog-image2'>
        //             <img src="images/Tooltip.png" />
        //         </div>
        //         <div className='aashi'>
        //             <h3>Reach your users with new tools.</h3>
        //             <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize.</p>
        //             <p>25 Apr 2022</p>
        //         </div>
        //     </div> */}
        // </div>
        <div className={props.wrapperClass}>
            <div className={props.blogImageWrapper}>
                <img class={props.blogImage} src="images/Tooltip.png" alt="blog" />
            </div>
            <div className={props.blogDescription}>
                <h3>{props.title}</h3>
                <p >{props.description}</p>
                <p>{props.date}</p>
            </div>
        </div>


    )
}
