import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
const BlogDetails = () => {

  const {id} = useParams();
  
  console.log(id)

  return (
    <div>
      <h1>Blog Details</h1>
    </div>
  );
};
export default BlogDetails;