import styled from 'styled-components';

export const ModalBtn = styled.button`
    display: block;
    margin: 0 auto;
    font-family: Roboto;
    font-size: 24px;
    font-weight: normal;
    line-height: 25px;
    background-color: #299B01;
    color: #fff;
    border: 1px solid #299B01;
    padding: 20px 73px;
    &:hover {
        background-color: #fff;
        color: #299B01;
        box-shadow: inset 0 0 7px 5px #299B01;
        &:after {
            opacity: 0;
        }
    }
    &:disabled {
        color: #ddd;
        background-color: #ccc;
        border-color: #aaa;
    }
`;
