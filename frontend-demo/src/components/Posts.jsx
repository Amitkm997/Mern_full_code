import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';
import '../css/Post.css';

export default function Posts() {
    const[posts,setPosts]=useState([])
    console.log(posts)
  // const handleChange = (e) => {
  //   setNewPost({ ...newPost, [e.target.name]: e.target.value });
  // };


  useEffect(()=>{
    fetchData()
  },[])

async function fetchData(){
  const res=await API.get('/post/allPost');
  setPosts(res.data.posts || res.data)
  // console.log(res)
}
  const handleSubmit =async (e) => {
    e.preventDefault(); 
  };


  return (
    <div className="posts-page">
      <h1>📝 Posts</h1>

      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          // value={newPost.title}
          // onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          // value={newPost.content}
          // onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Add Dummy Post</button>
      </form>

      <div className="posts-list">
        <h1>Post list</h1>
       {posts.map((curr)=><h2>{curr.title}</h2>)}
      </div>
    </div>
  );
}
