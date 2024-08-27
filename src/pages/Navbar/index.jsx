import "./navbar.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
export const Navbar1 = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<Container>
			<nav>
				<h3 className="title">HA</h3>
				<div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className={menuOpen ? "open" : ""}>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#portfolio">Protfolio</a>
					</li>
					<li>
						<a href="#service">Services</a>
					</li>
					<li>
						<a href="#resume">Resume</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</Container>
	);
};
export default Navbar1;
