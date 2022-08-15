import React from "react";
import {Link} from "react-router-dom"
const Nav = () => {

    return(
        <nav>
            <a href="/"><h2>Home </h2></a>
            <div className="links">
              <Link to="/Apropos">apropos</Link>
              <Link to="/Blog">blog</Link>
            </div>

        </nav>
        
     );
};
export default Nav;