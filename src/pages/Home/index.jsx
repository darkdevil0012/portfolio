import "./home.css";
import About from "../About";
import Protfolio from "../Protfolio";
import Service from "../Service";
import Resume from "../Resume";
import Contact from "../Contact";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar1 from "../Navbar";

export const Home = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div id="home">
			<div className="header">
				<Navbar1 />
			</div>

			<div data-aos="fade-up">
				<div className="display_heading">
					<div className="heading">
						<Typewriter
							options={{
								strings: [
									"I'm Hamza Anis",
									"A Web Developer",
									"A Front-End Developer",
									"Mern Stack Developer",
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
				</div>
			</div>

			<div id="about">
				<div data-aos="fade-up">
					<About />
				</div>
			</div>

			<div id="portfolio">
				<div data-aos="fade-up">
					<Protfolio />
				</div>
			</div>

			<div id="service">
				<div data-aos="fade-up">
					<Service />
				</div>
			</div>

			<div id="resume">
				<div data-aos="fade-up">
					<Resume />
				</div>
			</div>

			<div id="contact">
				<div data-aos="fade-up">
					<Contact />
				</div>
			</div>
		</div>
	);
};
export default Home;
