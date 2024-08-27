import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import BugReportIcon from "@mui/icons-material/BugReport";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./service.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
export const Service = () => {
	return (
		<Container>
			<div className="service_div">
				<div className="service_heading">
					<h1>Services</h1>
				</div>

				<div className="service_card ">
					<Row>
						<Col xs={12} md={6} lg={4}>
							<Card
								style={{ width: "100%", height: "322px" }}
								className="card1">
								<Card.Body>
									<PersonalVideoIcon
										sx={{ fontSize: 70 }}
										className="service_icon1"
									/>
									<Card.Title>Frontend Web-Development</Card.Title>
									<Card.Text style={{ fontSize: "15px" }}>
										Let's craft a cutting-edge React JS website, marrying
										stunning visuals with seamless functionality to captivate
										users and elevate our brand.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col xs={12} md={6} lg={4}>
							<Card
								style={{ width: "100%", height: "322px" }}
								className="card1 card_margin_sm">
								<Card.Body>
									<BugReportIcon
										sx={{ fontSize: 70 }}
										className="service_icon1"
									/>
									<Card.Title>Bug Fix</Card.Title>
									<Card.Text style={{ fontSize: "15px" }}>
										Say goodbye to frustrating website glitches! Let me fix them
										for you. Enjoy seamless online experiences and boost your
										digital presence effortlessly with my expert bug fix
										development services.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>

						<Col xs={12} md={6} lg={4}>
							<Card
								style={{ width: "100%", height: "322px" }}
								className="card1 card_margin_sm card_margin_md">
								<Card.Body>
									<ShoppingCartOutlinedIcon
										sx={{ fontSize: 70 }}
										className="service_icon1"
									/>
									<Card.Title>eCommerce</Card.Title>
									<Card.Text style={{ fontSize: "15px" }}>
										Elevate your online presence with custom design, seamless
										functionality, and expert support. Let's transform your
										vision into a thriving digital storefront. Contact me now to
										get started!
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</div>
				{/* <div className="service_card">
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={4}>
								<Grid xs={12} sm={6} md={4} xl={3}>
									<Card sx={{ maxWidth: 400, height: 322 }} className="card1">
										<CardActionArea>
											<PersonalVideoIcon
												sx={{ fontSize: 70 }}
												className="service_icon1"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="div">
													Frontend Web-Development
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
													fontSize={15}>
													Let's craft a cutting-edge React JS website, marrying
													stunning visuals with seamless functionality to
													captivate users and elevate our brand.
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grid>

								<Grid xs={12} sm={6} md={4} xl={3}>
									<Card sx={{ maxWidth: 400, height: 322 }} className="card1">
										<CardActionArea>
											<BugReportIcon
												sx={{ fontSize: 70 }}
												className="service_icon1"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="div">
													Bug Fix
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
													fontSize={15}>
													Say goodbye to frustrating website glitches! Let me
													fix them for you. Enjoy seamless online experiences
													and boost your digital presence effortlessly with my
													expert bug fix development services.
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grid>

								<Grid xs={12} sm={6} md={4} xl={3}>
									<Card sx={{ maxWidth: 400, height: 322 }} className="card1">
										<CardActionArea>
											<ShoppingCartOutlinedIcon
												sx={{ fontSize: 70 }}
												className="service_icon1"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="div">
													eCommerce
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
													fontSize={15}>
													Elevate your online presence with custom design,
													seamless functionality, and expert support. Let's
													transform your vision into a thriving digital
													storefront. Contact me now to get started!
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grid>
							</Grid>
						</Box>
					</div> */}
			</div>
		</Container>
	);
};
export default Service;
