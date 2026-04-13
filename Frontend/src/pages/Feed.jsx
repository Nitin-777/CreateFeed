import { useState, useEffect } from 'react'
import axios from "axios"



const Feed = () => {
 
    const[posts,setPosts] =useState([]);

    useEffect(() => {
       axios.get("http://localhost:3000/posts")
       .then((res) => {
        setPosts(res.data.posts)
       })

    },[])

  return (
   <section className='feed-section'>
    {
        posts.length > 0 ? (
            posts.map((posts) => (
                 <div key={posts._id} className='post-card'>
                    <img src={posts.image} alt={posts.caption} />
                    <h3>{posts.caption}</h3>
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
