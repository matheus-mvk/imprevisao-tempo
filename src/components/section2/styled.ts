import styled from "styled-components";

const Section2Container= styled.div`
    

    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 1300px;
    height: 400px;
`;

const SubDiv = styled.div`
    border-radius: 9px;
    background-color: #394959;

    width: 600px;
    height: 230px;

    margin: 32px 0;
    padding: 16px 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
            
            
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #F2F2F2;
    font-size: 16px;
    border: none;
    border: transparent;
    padding: 1rem;
`;

const Select = styled.select`
    position: relative;

    left: -50px;
    top: 50px;
    border-radius: 9px;
    background-color: #C4C4C4;
    width: 300px;
    height: 40px;
    cursor: pointer;
    outline: none;
    padding: 5px;
    background-image: url(assets/drop-down-pointer.svg) no-repeat;
    background-position: right 5px top 50%;
    appearance: none; 
    text-decoration: none;
    color: #000000;
    font-size: 16px;
    font-family: 'Roboto' sans-serif;
`;


export {Section2Container,SubDiv,Form,Select};
