import React from "react";
import { Link } from "react-router-dom";
import "./TopHeader.css";

export default function TopHeader() {
  return (
    <div>
      <div className="ads-header">
        <h5>Buy 2 Get 2 FREE</h5>
      </div>

      <div className="top-header">
        <div className="top-header-left">
          <div className="top-headr-left-left">
            <img
              src="https://innovist.com/cdn/shop/files/Final_Innovist_Logo-04_170x.png?v=1706178919"
              width="170"
              height="20"
              alt="brand-logo"
            />
          </div>

          <div className="top-headr-left-right">
            <img
              src="https://innovist.com/cdn/shop/files/bare-logo_b27e2e10-7e5e-40d2-a5be-1fbbb44dd79a.png?v=1677248586"
              width="80"
              height="50"
              alt="sub-brand-logo1"
            />
            <img
              src="https://innovist.com/cdn/shop/files/Artboard_1_1.png?v=1654863164"
              width="80"
              height="50"
              alt="sub-brand-logo2"
            />
            <img
              src="https://innovist.com/cdn/shop/files/Artboard_1_2051f510-a6ca-4798-8036-c9e632a81cab.png?v=1654863229"
              width="80"
              height="50"
              alt="sub-brand-logo3"
            />
          </div>
        </div>

        <div className="top-header-right">
          <div className="search-container">
            <input
              type="text"
              className="top-header-seachbox"
              placeholder="Search - Dandruff"
            />
            <img
              className="search-icon"
              src="https://img.icons8.com/ios/50/FFFFFF/search--v1.png"
              alt="search--v1"
            />
          </div>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/FFFFFF/user--v1.png"
            alt="user--v1"
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/FFFFFF/add-shopping-cart--v1.png"
            alt="add-shopping-cart--v1"
          />
        </div>
      </div>

      <div className="second-header">
        <div>
          <label className="feature-label" >BESTSELLERS</label>
        </div>

        <div className="dropdown">
          <label className="dropbtn">BRANDS</label>
          <div className="dropdown-content">
            <Link to="/" className='link'>Bare Anatomy</Link>
            <Link to="/" className='link'>Chemist At Play</Link>
            <Link to="/" className='link'>Sunscoop</Link>
            <Link to="/" className='link'>Nudge</Link>

          </div>
        </div>

        <div className="dropdown">
          <label className="dropbtn">CONCERNS</label>
         <div className="concerns-dropdown">
         <div className="dropdown-content">
            <Link to="/" className='link'>Link 1</Link>
            <Link to="/" className='link'>Link 2</Link>
            <Link to="/" className='link'>Link 3</Link>
          </div>
          <div className="dropdown-content">
            <Link to="/" className='link'>Link 1</Link>
            <Link to="/" className='link'>Link 2</Link>
            <Link to="/" className='link'>Link 3</Link>
          </div>
         </div>
        </div>

        <div>
          <label className="feature-label" >HIRE CARE</label>
        </div>

        <div>
          <label className="feature-label" >SKIN CARE</label>
        </div>

        <div>
          <label className="feature-label" >SUN CARE</label>
        </div>

        <div>
          <label className="feature-label" >BLOGS</label>
        </div>

        <div>
          <label className="feature-label" >KNOW US BETTER</label>
        </div>

        <div>
          <label className="feature-label" >INNOVIST INSIDER</label>
        </div>
      </div>
    </div>
  );
}
