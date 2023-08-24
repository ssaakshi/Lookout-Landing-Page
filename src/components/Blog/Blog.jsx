import React from 'react'
import './Blog.css'
import BlogItem from '../BlogItem/BlogItem'

export default function Blog() {

  let blogs = [
    {
      id: 0,
      title: "Reach your users with new tools. Reach your users with new tools. Reach your users with new tools",
      description: "Efficiently unleash cross-media information without cross-media value. Quickly maximize.Efficiently unleash cross-media information without cross-media value. Quickly maximize.Efficiently unleash cross-media",
      date: "29 Apr 2022"
    },
    {
      id: 1,
      title: "Reach your users with new tools Reach your users",
      description: "Lorem ipsum dolor sit consectetur adipisicing elit. Eligendi odio nulla de,Lorem ipsum dolor",
      date: "20 Apr 2022"
    },
    {
      id: 2,
      title: "Reach your users with new tools Reach your users",
      description: "Lorem ipsum dolor sit consectetur adipisicing elit. Eligendi odio nulla de,Lorem ipsum dolor.",
      date: "25 Apr 2022"
    },
    {
      id: 3,
      title: "Reach your users with new tools Reach your users",
      description: "Lorem ipsum dolor sit consectetur adipisicing elit. Eligendi odio nulla de,Lorem ipsum dolor",
      date: "21 Apr 2022"
    }
  ]

  // function test(item){
  //   console.log(item)
  // }

  return (
    <div>
      <div className='section-heading'>
        <h2>Latest Blog Posts</h2>
        <p className='section-description'>Completely synergize resource taxing relationships via premier niche markets. Professionally  cultivate one-to-one customer service with robust ideas.</p>
      </div>

      <div className='blog-items'>
        {
          blogs.map(item => (
             (item.id === 0) ?
              (<BlogItem wrapperClass="blog-items-wrapper" blogImageWrapper="blog-image-wrapper" blogImage="blog-image" blogDescription="blog-description" title={item.title} description={item.description} date={item.date} />)
              :
              (<BlogItem wrapperClass="blog-items-wrapper2" blogImageWrapper="blog-image-wrapper2" blogImage="blog-image2" blogDescription="blog-description" title={item.title} description={item.description} date={item.date} />)
          ))

        }
      </div>
    </div>
  )
}
