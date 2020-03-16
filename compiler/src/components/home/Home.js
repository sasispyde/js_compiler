import React from 'react';
import './home.css'
import banner_image from './image.png';
import mobile from './mobile_icon.png';
import tower from './tower.png';
import { Link } from "react-router-dom";

class Home extends React.Component {
	render(){
		return(
			<>
			<div className="Nav_class">
				<ul>
				  <li><Link className="navbar-brand" to='/home'>todo</Link></li>
				  <li><Link to='/home'>bs3 project</Link></li>
				  <li style={{float:"right"}}><Link to='/home'>Contact Us</Link></li>
				  <li style={{float:"right"}}><Link to='/home'>Price</Link></li>
				  <li style={{float:"right"}}><Link to='/home'>Features</Link></li>
				  <li style={{float:"right"}}><Link to='/home'>About</Link></li>
				</ul>
			</div>
			<div className="center">
				<h4>Modern, Clean & Flat</h4>
				<h1>Web <strong className="strong">Appilcation </strong>User Interface</h1>
			</div>
			<div className="banner">
				<img className="image" src={banner_image} alt = "banner_image"/>
			</div>
			<div className="center2">
				<h6>For your faster and easier web development.
				<span>
					<button id ="button1" className="btn btn-lg btn-danger m-r-sm m-l-sm m-b-sm m-t-sm"><i className="fa fa-cloud-download-alt"></i> Download it</button>
					<button id ="button2" className="btn btn-lg btn-success m-r-sm m-l-sm m-b-sm m-t-sm">Live Preview <i className="fa fa-arrow-right"></i></button>
				</span>
				</h6>
			</div>
			<div className="about">
				<div className="inner_content">
					<h2>About this project</h2>
					<p>Responsive web application and admin panel template</p>
				</div>
				<div className="inner_content2">
					<div className="part1"> 
						<div className="icons">
							<img src={mobile} alt="mobile_icon"/>
						</div>
						<div className="text"> 
							<h3 className="m-t-none">Web application</h3> 
							<p>Many mobile app widgets and components, it's fully responsive, it can run on all the size of the screen.</p> 
						</div> 
					</div>
					<div className="part2">
						<div className="icons">
							<img src={tower} alt="mobile_icon"/>
						</div>
						<div className="text"> 
							<h3 className="m-t-none">Admin panel</h3> 
							<p>It also can be used as admin dashboard, it has tables, charts and other useful components for admin management.</p> 
						</div> 
					</div>
				</div>
			</div>
			<div className="center2">
				<h6>For your faster and easier web development.
				<span>
					<button id ="button1" className="btn btn-lg btn-danger m-r-sm m-l-sm m-b-sm m-t-sm"><i className="fa fa-cloud-download-alt"></i> Download it</button>
					<button id ="button2" className="btn btn-lg btn-success m-r-sm m-l-sm m-b-sm m-t-sm">Live Preview <i className="fa fa-arrow-right"></i></button>
				</span>
				</h6>
			</div>
			</>
		)
	}
}

export default Home;