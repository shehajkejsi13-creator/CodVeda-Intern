import React from 'react'
import post1 from '../images/post1.png'
import post2 from '../images/post2.webp'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const Menu = ({cat}) => {

  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);



  //  const posts =[ {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
  //     desc: "Lorem ipsum dolorjktndjskcjkfdznjjj kejkfkjkrjerekjdxj mssjdjcjjcmc sit amet consectetur adipisicing elit. Voluptas, eaque.",
  //     img: post1
  //   },
  //    {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
  //     desc: "Lorem ipsum dolorjktndjskcjkfdznjjj kejkfkjkrjerekjdxj mssjdjcjjcmc sit amet consectetur adipisicing elit. Voluptas, eaque.",
  //     img: post2
  //   },
  // ]
 return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div> 
 )
}
export default Menu