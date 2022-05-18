import styled from "styled-components";


const PerfilContainer = styled.div`
            background: #F2F2F2;
            border: 2px solid #0B7373;
            border-radius: 16px;

            position: relative;
            left: 254px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 1412px;
            height: 800px;
`;      

const Title1 = styled.h1`

            width: 300px;
            height: 56px;
            left: 588px;
            top: 32px;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 56px;
            display: flex;
            align-items: center;
            text-align: center;

            color: #222222;
`;

export { PerfilContainer, Title1};