import styled from "styled-components";

export const StyleModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	

.container {
	background-image: url('../wall.png');
	border: solid 5px ${(p) => p.theme.blueDark};
	max-width: 550px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.8rem;
	border-radius: 8px;
	position: relative;
}

.formTitle {
	color: ${(p) => p.theme.white};
	font-size: 2rem;
	margin-bottom: 2rem;
	text-transform: capitalize;
	background-color: ${(p) => p.theme.grey};
	width: fit-content;
	border-radius: 6px;
	padding: 0.2rem 0.4rem;
	border: solid 2px ${(p) => p.theme.white};
}

.form {
	label{
		font-size: 1.6rem;
		color: ${(p) => p.theme.white};
		.title-input {
			background-color: ${(p) => p.theme.white} ;
			border: solid 2px ${(p) => p.theme.black};
			border-radius: 6px;
			font-size: 1.2rem;
			text-decoration: none;
			cursor: pointer;
			overflow: hidden;
			margin-bottom: 2rem;
			margin-top: 0.5rem;			
		}
		.select {
			margin-top: 0.5rem;
			width: 100%;
			padding: 1rem;
			border: solid 2px ${(p) => p.theme.black};
			background-color: ${(p) => p.theme.white};
			font-size: 1.2rem;
		}
	}
}

.buttonContainer {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-top: 2rem;
	gap: 1rem;
	button{
		cursor: pointer;
		font-size: 1.1rem;
		border-radius: 6px;
	}
}

.btn-add{
	background-color: ${(p) => p.theme.grey};
	border: solid 2px ${(p) => p.theme.white};
	color: ${(p) => p.theme.white};
}

.btn-cancel{
	border: solid 2px ${(p) => p.theme.black}
}
`