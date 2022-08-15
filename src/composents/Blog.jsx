import React,{useState,useEffect} from "react";
import "../lib";
import {Link} from "react-router-dom"
const Blog = () => {
    useEffect(()=>{
        getAllposts();
    },[]);
    const [posts,setPosts]=useState([])
    const getAllposts= async () =>{
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        const allposts=await response.json();
        console.log(allposts);
        setPosts(allposts);
    }
    return(
      <div>
        <h1>Blog</h1>
        {/* {posts.map((post) =>(<h2>{post.title}</h2>))} */}
        {posts.take(3).map((post) =>
        <h4 className="blog-link"> 
        <Link key={post.id} to={`/blog/${post.id}`} >{post.title}</Link>
        </h4>)}
      </div>
    );
};
export default Blog;