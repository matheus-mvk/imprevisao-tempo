import styled from "styled-components";

const HeaderContainer = styled.header`
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 0.15fr 0.15fr 0.39fr;
    background-color: #0B7373;
`;
const ImgSource = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 255px;
    margin-top: 38px;
`;
const ProjetoLink = styled.a`
font-size: 20px;
    margin-top: 38px;
    color: white;
    text-decoration:none;
`;
const ImprevisaoLink = styled.a`
    font-size: 20px;
    margin-top: 38px;    
    color: white;
    text-decoration:none;
`;
const SobremimLink = styled.a`
    font-size: 20px;
    margin-top: 38px;
    color: white;
    text-decoration:none;
`;

export {HeaderContainer, ImgSource, ProjetoLink, ImprevisaoLink, SobremimLink};