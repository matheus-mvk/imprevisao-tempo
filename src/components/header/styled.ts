import styled from "styled-components";

const HeaderContainer = styled.header`
    background: #F2F2F2;
    border: 2px solid #0B7373;
    border-radius: 16px;

    height: 100px;
    display: grid;
    grid-template-columns: 1fr 0.15fr 0.15fr 0.30fr;
    background-color: #0B7373;
`;
const ImgSource = styled.img`
    background: pink;
    border: 2px solid #0B7373;
    border-radius: 16px;

    width: 30px;
    height: 30px;
`;
const ProjetoLink = styled.a`
    background: pink;
    border: 2px solid #0B7373;
    border-radius: 16px;
    color: white;
    position: absolute;
`;
const ImprevisaoLink = styled.a`
    background: pink;
    border: 2px solid #0B7373;
    border-radius: 16px;
    
    color: white;
    position: absolute;
`;
const SobremimLink = styled.a`
    color: white;
    position: absolute;
`;
const TextP = styled.p`
    color: white;
    position: absolute;
`;

export {HeaderContainer, ImgSource, ProjetoLink, ImprevisaoLink, SobremimLink, TextP};