import React from 'react'
import { useState } from 'react'

const Feed = () => {
 
    const[posts,setposts] =useState([]);

  return (
   <section className='feed-section'>
    {
        posts.length > 0 ? (
            posts.map((posts) => (
                 <div key={posts._id} className='post-card'>
                    <img src={posts.img} alt={posts.caption} />
                    <p>{posts.caption}</p>
                 </div>
            ))
        ) : (
            <h1>No Posts Available</h1>
        )
        }
 
   </section>
  )
}

export default Feed
