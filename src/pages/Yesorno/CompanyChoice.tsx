import React, { useState} from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillLinkedin,
	AiFillGoogleCircle,
} from "react-icons/ai";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import LoadingState from "../../../LoadingScreen";

export const url = "https://easyhr.onrender.com/api"

const CompanyChoice = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [myChecked, setMyChacked] = useState(true);
	const [loading, setLoading] = useState(false);

	const noStaff = async () => {
		const newURL = `${url}/staff/${id}/verifystaff`;
		setLoading(true);
		await axios
			.post(newURL, { response: "No" })
			.then((res) => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Staff's account has been deleted, successful",
					showConfirmButton: false,
					timer: 2500,
				}).then(() => {
					navigate("/");
				});
				setLoading(false);
			})
			.catch((error) => {
				Swal.fire({
					position: "center",
					icon: "error",
					title: `Error: ${error}`,
					showConfirmButton: false,
					timer: 2500,
				}).then(() => {
					navigate("/");
				});
				setLoading(false);
			});
	};

	const yesStaff = async () => {
		const newURL = `${url}/${id}/verifystaff`;
		setLoading(true);
		await axios
			.post(newURL, { response: "Yes" })
			.then((res) => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Staff's account has been verified, successful",
					showConfirmButton: false,
					timer: 2500,
				}).then(() => {
					navigate("/check-mail");
				});
				setLoading(false);
			})
			.catch((error) => {
				Swal.fire({
					position: "center",
					icon: "error",
					title: `An Error occur: ${error}`,
					showConfirmButton: false,
					timer: 2500,
				}).then(() => {
					navigate("/");
				});
				setLoading(false);
			});
	};

	return (
		<Container>
			{/* {loading ? <LoadingState /> : null} */}
			<Wrapper>
				<Card>
					
					<Title>
						<TitleHead>Verify this Account </TitleHead>
						<br />
						<TitleSub>
							You are seeing this page because <span>NAME</span>, claims to be a
							bolivian satff of your Company and will be expressing his/her
							voting right exercise under your Company/Organisation/Association.
							<br />
							<br />
							<TitleSub2>
								Would you <span>AGREE</span> that he/she is a responsible and
								bolivian satff of your Company/Organisation/Association?
							</TitleSub2>
							{/* <br /> */}
							<InputRow>
								<BUtton bg={myChecked ? "bg" : ""} onClick={yesStaff}>
									Yes
								</BUtton>

								<BUtton
									bg={myChecked ? "" : ""}
									onClick={() => {
										noStaff();
									}}>
									No
								</BUtton>
							</InputRow>
							If you <span>AGREE</span>, his/her secret voting code will be sent
							to you via eMail, pleas check and send to him/her!
						</TitleSub>
					</Title>
					<br />
					<br />

					<LineHolder>
						<Line />
						<Text>OR</Text>
						<Line />
					</LineHolder>

					<Social>
						<SocialText>Stay connected with us via our Social Media</SocialText>
						<Icons>
							<Icon />
							<Icon1 />
							<Icon2 />
							<Icon3 />
						</Icons>
					</Social>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default CompanyChoice;

const Text = styled.div`
	font-size: 15px;
	padding: 0 5px;
`;

const Line = styled.div`
	border-bottom: 1px solid silver;
	width: 100%;
`;

const LineHolder = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;
`;

const InputRow = styled.div`
	display: flex;
`;

const Icon = styled(AiFillGoogleCircle)`
	font-size: 35px;
	color: red;
	:hover {
		cursor: pointer;
	}
`;

const Icons = styled.div`
	display: flex;
	margin-top: 20px;
`;

const Icon3 = styled(AiFillLinkedin)`
	font-size: 35px;
	color: #0077b7;
	:hover {
		cursor: pointer;
	}
`;

const Icon2 = styled(AiFillTwitterSquare)`
	font-size: 35px;
	color: #50abf1;
	:hover {
		cursor: pointer;
	}
`;

const Icon1 = styled(AiFillFacebook)`
	font-size: 35px;
	color: #475993;
	:hover {
		cursor: pointer;
	}
`;

const SocialText = styled.div`
	font-size: 12px;
	display: flex;
	margin-top: 0px;
`;

const Social = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10px;
`;



const BUtton = styled.button<{ bg: string }>`
	margin: 20px;
	width: 80%;
	height: 50px;
	background-color: ${({ bg }) => (bg ? "green" : "red")};
	color: white;
	border: 0;
	outline: none;
	border-radius: 5px;
	font-size: 20px;
	font-family: Poppins;
	text-transform: uppercase;
	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(0.99);
	}
`;


const TitleSub2 = styled.div`
	color: gray;
	font-weight: 500;
	font-size: 13px;
	span {
		color: #000269;
		font-weight: bold;
	}
`;

const TitleSub = styled.div`
	color: lightgray;
	font-weight: 500;
	font-size: 13px;
	span {
		color: #5833c7;
		font-weight: bold;
	}
`;

const TitleHead = styled.div`
	font-size: 22px;
	font-weight: bolder;
	color: #5833c7;
`;

const Title = styled.div`
	margin-top: 30px;
`;


const Card = styled.div`
	width: 90%;
	height: 100%;
`;

const Wrapper = styled.div`
	width: 450px;
	min-height: 700px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	position: absolute;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (max-width: 500px) {
		width: 90%;
		margin: 0;
		display: flex;
		justify-content: center;
	}
`;





const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	justify-content: center;
`;