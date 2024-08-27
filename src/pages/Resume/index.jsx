import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./resume.css";
export const Resume = () => {
	return (
		<Container>
			<div>
				<div className="resume_heading">
					<h1>Resume</h1>
				</div>

				<div className="resume_maindiv">
					<Row>
						<Col sm={12} lg={4}>
							<div className="resume_imgdiv">
								<img
									src="hamzapic2.jpg"
									alt="error_loading"
									className="resume_pic"
								/>
							</div>
						</Col>
						<Col sm={12} lg={7}>
							<div className="resume_txtdiv">
								<div className="resume_education">
									<h3>Education</h3>
									<div className="bcs">
										<h4>Intermediate</h4>
										<span>
											<CalendarMonthTwoToneIcon />
											2021 - 2023
										</span>
									</div>
									<span>Al-Hamd College</span>
									<div className="bcs">
										<h4>Bachelor's in Computer Science</h4>
										<span>
											<CalendarMonthTwoToneIcon />
											October 2024 - Present
										</span>
									</div>
									<span>
										<LightbulbOutlinedIcon />
										Sir Syed University
									</span>
								</div>

								<div className="resume_skills">
									<h3>Skill's</h3>
									<div className="bcs">
										<h4>English Language</h4>
									</div>
									<div className="bcs">
										<h4>Proficient in HTML, CSS & JAVA SCRIPT coding.</h4>
										<span>
											<CheckBoxOutlinedIcon />
											Cetrified
										</span>
									</div>
									<div className="bcs">
										<h4>Proficient in MERN Full Stack Development</h4>
										<span>
											<CheckBoxOutlinedIcon />
											Cetrified
										</span>
									</div>
									<div className="bcs">
										<h4>Proficient in React Web Designing.</h4>
										<span>
											<CheckBoxOutlinedIcon />
											Cetrified
										</span>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</Container>
	);
};

export default Resume;
