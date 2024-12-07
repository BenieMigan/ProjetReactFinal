import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Footer from '../Pages/Footer';
import Droit from '../Pages/Droit';
import Gauche from '../Pages/Gauche';

function Outdoors() {
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
          <h1>Outdoors</h1>
          <p>Home Outdoors</p>

        </div>
      </div>
    
      <div>

<div className="flex flex-col md:flex-row w-full h-auto">
  {/* div generale */}

{/* div gauche */}
<div className="w-full md:w-3/4 p-4">
<Gauche
    mytitle="Consectuer vehicula ab Consectuer vehicula ab"
    mytitle1="Consectuer vehicula ab Consectuer vehicula ab"
    title1="November 21, 2017 / Kitchen, Lifestyle"
    title="November 21, 2017 / Kitchen, Lifestyle"
    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that;"
    description1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that;"
    mytitle2="Sunt doloremque blandit inven"
    title2="November 20, 2017 / Living Room"
    image1="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg"
    image2="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg"
    image3="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img-150x150.jpg"
    image4="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img-150x150.jpg"
    description2="Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros" image={''}           
  />
</div>
{/* fin div gauche */}

    <div className="w-full md:w-1/2 p-4">
    <Droit
    mytitle="Consectuer vehicula ab Consectuer vehicula ab"
    mytitle1="Consectuer vehicula ab Consectuer vehicula ab"
    title1="November 21, 2017 / Kitchen, Lifestyle"
    title="November 21, 2017 / Kitchen, Lifestyle"
    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that;"
    description1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that;"
    mytitle2="Sunt doloremque blandit inven"
    title2="November 20, 2017 / Living Room"
    image1="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg"
    image2="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg"
    image3="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img-150x150.jpg"
    image4="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img-150x150.jpg"
    description2="Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros" image={''}           
  />
   </div>
  {/* fin generale */}
</div>


</div>


          
     <div>
      
      <Footer/>
     
     </div>

    </div>
);
}

export default Outdoors;