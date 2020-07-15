import React from 'react';
import { Link } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <nav id="sidebar">
       
       <ul className="list-unstyled components">
       <li className="nav-item" style={{height: '50px'}}> 
          </li>
          <li>
            <Link to="/">
             
              <span> Home</span> </Link>
          </li>
          <li>
            <Link to="/Academy">
             
              <span> Academy</span></Link>
          </li>
          <li>
            <Link to="/Business">
             
              <span> Business</span></Link>
          </li>
         
       </ul>
     
     </nav> 
      
    );
}
 
export default Navigation;