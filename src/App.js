import './App.css';
import Home from './composents/Home';
import Nav from './composents/Nav';
import Blog from './composents/Blog';
import Apropos from './composents/Apropos';
import BlogDetails from './composents/BlogDetails';
import Article from './composents/Article';
import moy from './composents/moy';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
function App() {
  return (
    <div className="container">
      <Router>
      <Nav />
      <Routes>
      < Route path="/" exact element={<Home />} />
      < Route path="/Apropos" element={<Apropos />} />
      < Route path="/Blog" exact element={<Blog />} />
      
      < Route path="/Blog/:id" element={<Article />} />
      < Route path="/Blog/:title" element={<Article />} />
      < Route path="/Blog/:body" element={<Article />} />

      </Routes>
      </Router>
    </div>
  );
}

export default App;
