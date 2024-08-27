import "./contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Marquee from "react-fast-marquee";
import { useState } from "react";

export const Contact = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const handleChange = (ev) => {
		const { value, name } = ev.target;
		if (name == "firstname") {
			setFirstName(value);
		}
		if (name == "lastname") {
			setLastName(value);
		}
		if (name == "email") {
			setEmail(value);
		}
		if (name == "message") {
			setMessage(value);
		}
	};
	const handleSubmit = () => {
		setFirstName("");
		setLastName("");
		setEmail("");
		setMessage("");
	};
	return (
		<Container>
			<div className="contactmain_div">
				<div>
					<Marquee pauseOnHover="true">
						Note: While this form is currently non-functional, rest assured that
						on your live website, it will be fully operational. To contact me do
						send me a email.
					</Marquee>
					<h3 className="contact_heading">Contact Me</h3>
				</div>

				<div className="input_div">
					<Row>
						<Col sm={12} lg={7}>
							<div className="form_input">
								<Row>
									<Col sm={6}>
										<Form>
											<Form.Group className="mb-3" controlId="formBasicEmail">
												<Form.Label>F.Name</Form.Label>
												<Form.Control
													type="text"
													value={firstName}
													onChange={handleChange}
													name="firstname"
													placeholder="Enter your First Name"
												/>
											</Form.Group>
										</Form>
									</Col>
									<Col sm={6}>
										<Form>
											<Form.Group className="mb-3" controlId="formBasicEmail">
												<Form.Label>L.Name</Form.Label>
												<Form.Control
													type="text"
													value={lastName}
													onChange={handleChange}
													name="lastname"
													placeholder="Enter your Last Name"
												/>
											</Form.Group>
										</Form>
									</Col>
									<Col sm={12}>
										<Form>
											<Form.Group className="mb-3" controlId="formBasicEmail">
												<Form.Label>Email address</Form.Label>
												<Form.Control
													value={email}
													onChange={handleChange}
													name="email"
													type="email"
													placeholder="Enter your Email address"
												/>
											</Form.Group>
										</Form>
									</Col>
									<Col sm={12}>
										<FloatingLabel
											controlId="floatingTextarea2"
											label="Message">
											<Form.Control
												value={message}
												onChange={handleChange}
												name="message"
												as="textarea"
												placeholder="Leave a message here"
												style={{ height: "100px", marginBottom: "20px" }}
											/>
										</FloatingLabel>
									</Col>
									<Col sm={12}>
										<Button
											variant="light"
											className="submit_button"
											onClick={handleSubmit}>
											Send Message
										</Button>
									</Col>
								</Row>
							</div>
						</Col>

						<Col sm={12} lg={4}>
							<div className="contact_info">
								<h3>Contact Info</h3>
								<h4 style={{ color: "#000000" }}>
									<LocationOnIcon />
									Karachi,Pakistan,07442
								</h4>
								<h4>
									<PhoneIcon />
									+92 3363311104
								</h4>
								<h4>
									<PhoneIcon />
									+92 3111274657
								</h4>
								<h4>
									<EmailIcon />
									hamzaanis0067@gmail.com
								</h4>
								<h4>
									<a
										href="https://www.linkedin.com/in/hamza-anis-2a752a276/"
										className="socialmedia_links">
										<LinkedInIcon />
										Hamza Anis
									</a>
								</h4>
								<h4>
									<a
										href="https://github.com/darkdevil0012"
										className="socialmedia_links">
										<GitHubIcon />
										Hamza Anis
									</a>
								</h4>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</Container>
	);
};
export default Contact;
