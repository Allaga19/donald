import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}
	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}
	body {
		margin: 0;
		background-color: #f0f0f0;
		font-family: Roboto, sans-serif;
		font-size: 20px;
		color: black;
	}
	img {
		max-width: 100%;
		height: auto;
	}
	:focus,:active {outline: none;}
	a:focus,a:active {outline: none;}
	a {
		text-decoration: none;
		color: inherit;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	h1, h2, h3 {
		font-family: Pacifico;
		padding: 0;
		margin: 0;
	}
	p {
		padding: 0;
		margin: 0;
	}
	button {
		cursor: pointer;
		border: none;
		transition: all 0.8s ease 0s;
	}
	input, button {
		font-family: inherit;
	}
`;
