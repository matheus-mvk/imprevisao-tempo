import styled from "styled-components";

const Section2Container= styled.div`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
`;

const ImprevisaoTitle = styled.h1`
            margin: 0 8px;
            text-decoration: none;
            color: #F2F2F2;
            font-size: 32px;
            font-weight: 700;
            font-family: 'Roboto' sans-serif;
`;

const SubDiv = styled.div`
            margin: 32px 0;
            padding: 16px 24px;
            width: 800px;
            min-height: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            border-radius: 16px;
            border: 2px solid #5566FF;
            background-color: #222222;
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
            border-radius: 9px;
            background-color: #394959;
            width: 300px;
            height: 40px;
            cursor: pointer;
            outline: none;
            padding: 5px;
            -webkit-appearance: none;
            -moz-appearance: none;
            background-image: url(assets/drop-down-pointer.svg) no-repeat;
            background-position: right 5px top 50%;
            appearance: none; 
            text-decoration: none;
            color: #F2F2F2;
            font-size: 16px;
            font-family: 'Roboto' sans-serif;
`;


export {Section2Container,ImprevisaoTitle,SubDiv,Form,Select};
