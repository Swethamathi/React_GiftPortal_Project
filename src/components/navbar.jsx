// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');

  const navToggle = () => {
    setActive((prev) => (prev === 'nav_menu' ? 'navmenu navactive' : 'nav_menu'));

    // Icon Toggler
    setIcon((prev) => (prev === 'nav_toggler' ? 'navtoggler toggle' : 'nav_toggler'));
  };

  return (
    <div>
  
    <nav className="nav">
      <Link to="/" className="nav__brand">
       {/* QUALAXE */}
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            HOME
          </Link>
        </li>
        
        <li className="nav__item">
          <Link to="/login" className="nav__link">
            LOGIN
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/signup" className="nav__link">
            SIGNUP
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    <div class="area"></div><nav class="main-menu">
    <ul>
        <li>
            <a href="https://jbfarrow.com">
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">
                   HOME
                </span>
            </a>
          
        </li>
        <li class="has-subnav">
            <a href="#">
                <i class="fa fa-globe fa-2x"></i>
                <span class="nav-text">
                    ABOUT
                </span>
            </a>
            
        </li>
        
        <li class="has-subnav">
            <a href="#">
               <i class="fa fa-camera-retro fa-2x"></i>
                <span class="nav-text">
                    IMAGES
                </span>
            </a>
           
        </li>
        
        
        <li>
           <a href="#">
               <i class="fa fa-cogs fa-2x"></i>
                <span class="nav-text">
                    Tools & Resources
                </span>
            </a>
        </li>
        
    </ul>

    <ul class="logout">
        <li>
           <a href="#">
                 <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">
                    Logout
                </span>
            </a>
        </li>  
    </ul>
</nav>
</div>

    /* <h1>Customized Gifts</h1>
    <div class="grid-container">
      <div>
        <img class='grid-item grid-item-1' src='https://www.oyehappy.com/cdn/shop/products/IMG_1176_1800x1800.jpg?v=1672920480' alt=''/>
        <p>"Growing Old Caricature!"</p>
      </div>
      <div>
        <img class='grid-item grid-item-2' src='https://www.oyehappy.com/cdn/shop/products/IMG_4680_1800x1800.jpg?v=1636208968' alt=''/>
        <p>"Awesome Beginnings"</p>
      </div>
      <div>
        <img class='grid-item grid-item-3' src='https://www.oyehappy.com/cdn/shop/files/thumbnail-2_b79fafef-32db-4741-816c-9aad02981660_1800x1800.jpg?v=1683358336' alt=''/>
        <p>"Mother's day Chronicle"</p>
      </div>
      <div>
        <img class='grid-item grid-item-4' src='https://www.oyehappy.com/cdn/shop/products/TB-min-2_1800x1800.jpg?v=1636208653' alt=''/>
        <p>"Frame Our Names"</p>
      </div>
      <div>
        <img class='grid-item grid-item-5' src='https://www.oyehappy.com/cdn/shop/products/IMG_4990_1800x1800.jpg?v=1636226731' alt=''/>
        <p>"Clip-a-Memory"</p>
      </div>
      <div>
        <img class='grid-item grid-item-6' src='https://www.oyehappy.com/cdn/shop/products/tb-10_fb4a3c19-8f91-4543-a60f-f8bd78fca498_1800x1800.jpg?v=1636228022' alt=''/>
        <p>"Our Personalised Mugs"</p>
      </div>
      <div>
        <img class='grid-item grid-item-7' src='https://www.oyehappy.com/cdn/shop/products/IMG_3654_1800x1800.jpg?v=1642506173' alt=''/>
        <p>"Pencil Portrait"</p>
      </div>
      <div>
        <img class='grid-item grid-item-8' src='https://www.oyehappy.com/cdn/shop/products/IMG_2533-1_1800x1800.jpg?v=1642508469' alt=''/>
        <p>"Happy Valentine's Day"</p>
      </div>
      <div>
        <img class='grid-item grid-item-9' src='https://www.oyehappy.com/cdn/shop/products/UP_02_1800x1800.jpg?v=1636231149' alt=''/>
        <p>"Up With You"</p>
      </div>
      <div>
        <img class='grid-item grid-item-10' src='https://www.oyehappy.com/cdn/shop/products/Thumbnail-121_1800x1800.jpg?v=1672925240' alt=''/>
        <p>"Secret Message Box"</p>
      </div>
    </div>
  </>
  )
  
*/
  )
}
export default Navbar;