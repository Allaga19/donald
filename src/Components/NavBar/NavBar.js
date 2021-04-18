import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width:100%;
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

const Login = styled.div`
    display: flex;
    flex-direction: column;
`;
const LogOut = styled.button`
    font-family: Roboto;
    font-size: 13px;
    line-height: 19px;
    text-transform: uppercase;
    padding: 2px 4px;
	background: none;
	border: 1px solid #299B01;
    color: #fff;
    margin-right: 30px;
    &:hover {
        border: 1px solid #fff;
    }
}
`;
const ButtonImg = styled.img`
    width: 25px;
    height: 25px;
    margin: 0 auto;
    margin-bottom: 3px;
`;
const User = styled.div`
    display: flex;
    align-items: center;
`;
const Figure = styled.figure`
    text-align: center;
    margin: 0 30px;
    cursor: pointer;
`;
const Figcaption = styled.figcaption`
    font-size: 12px;
`;
export const NavBar = ({ authentication, logIn, logOut }) => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald’s</H1>
        </Logo>
        {authentication ? 
            <User>
                <Figure>
                    <ButtonImg src={signImg} alt={authentication.displayName}/>
                    <Figcaption>{authentication.displayName}</Figcaption>
                </Figure>
                <LogOut title="Выйти" onClick={logOut}>x</LogOut>
            </User> :
            <Login onClick={logIn}>
                <Figure>
                    <ButtonImg src={signImg} alt="Войти"/>
                    <Figcaption>Войти</Figcaption>
                </Figure>
            </Login>
        }
    </NavBarStyled>
);