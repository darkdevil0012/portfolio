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
									src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/280042038_3054550724796420_568826843101601057_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEHlRmrXmR8Dpn4XftvzzTEbolWXQfnKMxuiVZdB-cozPtggM7R2ksZi_15u5_eSxCYtOuAWyNt87eW3DaaWW0L&_nc_ohc=Pvkpw6uWBNAQ7kNvgH0pSwi&_nc_ht=scontent.fkhi2-3.fna&oh=00_AYDJznJz08PT4pUBAwzkcdxlei9gB8Mc1zGXT4xpUvk1HQ&oe=66D3DE47"
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
