import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Pages/Footer';
import CustomMap from './CustomMap';


function Contact() {
  return (
    <div>
       <div className="navba-container">
        <nav className="navba">
          <div>
          <Link to ="/">
            <img
              src={"https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4-free-img.png"}
              alt=""
            />
          </Link>       
             </div>
          <div>
            <ul className="navba-links">
              <li><Link to ="/aboutus">About Us</Link></li>
              <li><Link to ="/livingroom">Living Room</Link></li>
              <li><Link to ="/kitchen">Kitchen</Link></li>
              <li><Link to ="/outdoors">Outdoors</Link></li>
              <li><Link to ="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <div className='navba-2'>
          <h1>GET IN TOUCH</h1>
        </div>
      </div>

      <div> <CustomMap /></div>


      <div>
      
      <Footer/>
     
     </div>

    </div>
  );
}

export default Contact;
