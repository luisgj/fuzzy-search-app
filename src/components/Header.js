import React from 'react';
import '../css/Header.css';

const Header = () => {
    return (
    	<div>
			<header className="site-header">
			  <nav className="navbar navbar-default navbar-fixed-top opacity" role="navigation">
			    <div className="container">
			      <div className="navbar-header">
			        <div className="logo">
			          <a href="#"><h2>CLIP</h2></a>
			        </div>
			        <div className="logo-text"></div>
			      </div>
			      <ul className="nav navbar-nav navbar-right">
			        <li className="app-title">FUZZY SEARCH APP</li>
			      </ul>
			    </div>
			  </nav>
			</header>
			<section className="hero-section hero-section2">
			   <div className="container">
			      <div className="text">
			         <p className="hero-title">Greetings, Human!</p>
 			         <p className="hero-tagline">This is a simple React Application that implements a fuzzy search algorithm on user input.<br /><strong>Try it out!</strong></p>
			      </div>
			      <div className="reader"></div>
			   </div>
			</section>
    	</div>
    );
};

export default Header;
