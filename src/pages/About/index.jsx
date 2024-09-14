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
								src="https://res.cloudinary.com/dnqplq5hb/image/upload/v1726320897/kft3ttwxxru1enpxo3rq.jpg"
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
									<a href="https://amaranth-alvira-17.tiiny.site/">
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
