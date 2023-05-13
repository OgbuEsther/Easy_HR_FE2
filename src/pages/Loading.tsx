import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
	return (
		<Container>
			<ClipLoader size={30} color='#fff' />
		</Container>
	);
};

export default Loading;

const Container = styled.div`
	position: absolute;
	top: 0;
	background-color: rgba(0, 0, 0, 0.6);
	height: 100%;
	width: 100%;
	color: white;
	display: flex;
	/* position: fixed; */
	position: absolute;
	left: 0;
	right: 0;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(5px);
`;