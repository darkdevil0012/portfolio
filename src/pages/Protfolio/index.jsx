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
										src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/457266912_1899869543818693_3826503291914501149_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WRAru3YZUWcQ7kNvgEGlcui&_nc_ht=scontent.fkhi2-2.fna&oh=00_AYAEX-M8NkuDFX6DPFiqCxz7X1C1HIwRRQ5N15kuKgoZKw&oe=66D3D2FC"
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
									href="https://e-com-frontend-roan.vercel.app/"
									target="blank">
									<img
										src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/457461549_1899869540485360_5684713918571897342_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W-VN1qKWNmwQ7kNvgHEGmBK&_nc_ht=scontent.fkhi2-3.fna&oh=00_AYD2n0l0LP4A52bK0sc-r1cz3S_bCI1WIGc3ZAOXRRNyZw&oe=66D3CAE4"
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
