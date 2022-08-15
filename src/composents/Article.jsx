import React, { useState, useEffect } from "react";
import "../lib";
import { Link, useParams } from "react-router-dom"
const Article = (props) => {

    const { id } = useParams();
   
    const [article, setArticle] = useState({})
    const getArticle = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/" +id );
        const post = await response.json();
        console.log(post);
        setArticle(post);

    }

    useEffect(() => {
        getArticle();
    }, []);

    return (
        <article>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
        </article>
    );
};
export default Article;