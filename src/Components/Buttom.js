import styled from 'styled-components';

export const ModalBtn = styled.button`
    font-family: Roboto;
    font-size: 24px;
    font-weight: normal;
    line-height: 25px;
    margin: 0 auto;
    background-color: #299B01;
    color: #fff;
    border: 1px solid #299B01;
    padding: 20px 73px;
    margin-bottom: 43px;
    &:hover {
        background-color: #fff;
        color: #299B01;
        box-shadow: inset 0 0 7px 5px #299B01;
        &:after {
            opacity: 0;
        }
    }
`;
