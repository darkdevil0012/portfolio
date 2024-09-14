import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./portfolio.css";
import { useState } from "react";
export const Protfolio = () => {
	const [hover, setHover] = useState("nodisplay");
	const [hover2, setHover2] = useState("nodisplay");
	const HoverData = "My First Web";

	const onHover = (e) => {
		e.preventDefault();
		setHover("displayed");
		console.log("hovered");
	};

	const onHoverOver = (e) => {
		e.preventDefault();
		setHover("nodisplay");
	};
	const onHover2 = (e) => {
		e.preventDefault();
		setHover2("displayed2");
		console.log("hovered");
	};
	const onHoverOver2 = (e) => {
		e.preventDefault();
		setHover2("nodisplay");
	};

	return (
		<Container>
			<div className="main_heading">
				<h1>My Portfolio</h1>
				{/* <div className="sub_headings" id="pic1">
					<a href="#pic1">All</a>
				</div> */}

				<div className="portfolioimages">
					<Row>
						<Col sx={12} sm={6} md={4}>
							<div className="firstimg">
								<a
									href="https://e-com-frontend-roan.vercel.app/"
									target="blank">
									<img
										src="https://res.cloudinary.com/dnqplq5hb/image/upload/v1726320593/euvqteypqzvmm8tryolo.png"
										alt=""
										className="image1 zoom"
										onMouseEnter={(e) => onHover(e)}
										onMouseLeave={(e) => onHoverOver(e)}
									/>
								</a>
								<div>
									<h3 className={hover}>{HoverData}</h3>
								</div>
							</div>
						</Col>
						<Col sx={12} sm={6} md={4}>
							<div className="firstimg portfolio_imgleft">
								<a
									href="https://portfolio-six-nu-85.vercel.app/"
									target="blank">
									<img
										src="http://res.cloudinary.com/dnqplq5hb/image/upload/v1726320733/bub2zzuomzjbmc78ge0x.jpg"
										alt=""
										className="image1 zoom"
										onMouseEnter={(e) => onHover2(e)}
										onMouseLeave={(e) => onHoverOver2(e)}
									/>
								</a>
								<div className="imgtext">
									<h3 className={hover2}>{HoverData}</h3>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</Container>
	);
};
export default Protfolio;
