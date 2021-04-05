import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import signImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width:100vw;
    display: flex;
    justify-content: space-between;
    aling-items: center;
    padding: 15px 30px;
    background-color: #299B01;
    color: white;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
`;
const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const User = styled.div`
    display: flex;
    flex-direction: column;
`;
const Button = styled.button`
    font-family: Roboto;
    font-size: 14px;
    line-height: 19px;
    text-transform: uppercase;
    padding: 0;
	background: none;
	border: none;
    color: #fff;
}
`;

const ButtonImg = styled.img`
    width: 32px;
    height: 32px;
    margin: 0 auto;
    margin-bottom: 3px;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald’s</H1>
        </Logo>
        <User>
            <ButtonImg src={signImg} alt="sign"/>
            <Button>Войти</Button>
        </User>
    </NavBarStyled>
);