import "./about.css";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const About = () => {
	return (
		<Container>
			<div className="main_div">
				<Row>
					<Col sm={12} lg={5}>
						<div className="imgdiv">
							<img
								className="about_img"
								src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/434495709_3555246608060160_135392910919200108_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHFt4jq5I_z5vKwvS2VphWiHhLDJkO06FseEsMmQ7ToWznsMH3RJWBnB2fTARlrBkoPZZOiCldrAi5nbipbZzAc&_nc_ohc=GIUrySo0rRcQ7kNvgHlKf3B&_nc_ht=scontent.fkhi2-2.fna&oh=00_AYDQO8QxHwhPKSBS_NosQF2PESjVqfjrtPqwM9zDDJtv1A&oe=66D3DAD9"
								alt=""
							/>
						</div>
					</Col>
					<Col sm={12} lg={7}>
						<div className="biodiv">
							<p className="bio_heading">My Bio</p>
							<p className="bio_paragraph">
								I am a dedicated learner currently pursuing studies with a keen
								interest in computer science. Although not yet embarked on a
								specific occupation, I am actively honing my skills and
								knowledge in various fields.
							</p>

							<div className="skill_meter">
								<h3>HTML5</h3>
								<ProgressBar
									striped
									variant="success"
									now={95}
									label={`${95}%`}
								/>
								<h3>CSS</h3>
								<ProgressBar
									striped
									variant="success"
									now={92}
									label={`${92}%`}
								/>
								<h3>Javascript</h3>
								<ProgressBar
									striped
									variant="success"
									now={87}
									label={`${87}%`}
								/>
								<h3>Bootstrap</h3>
								<ProgressBar
									striped
									variant="success"
									now={89}
									label={`${89}%`}
								/>
								<h3>Material UI</h3>
								<ProgressBar
									striped
									variant="success"
									now={90}
									label={`${90}%`}
								/>
								<h3>React JS</h3>
								<ProgressBar
									striped
									variant="success"
									now={95}
									label={`${95}%`}
								/>
							</div>
							<div className="bio_button">
								<Stack spacing={2} direction="row">
									<Button variant="contained" className="btn1" href="#contact">
										Hire Me
									</Button>
									<a href="https://indigo-elfie-75.tiiny.site/">
										<Button variant="contained" className="btn2">
											CV
										</Button>
									</a>
								</Stack>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</Container>
	);
};
export default About;
