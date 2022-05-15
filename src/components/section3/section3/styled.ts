import styled from "styled-components";

const SectionContainer = styled.section`
            background: #F2F2F2;
            border: 2px solid #0B7373;
            border-radius: 16px;
            position: absolute;
            width: 1412px;
            height: 500px;
            left: 254px;
            top: 1176px;
`;

const Title3 = styled.h3`
            position: absolute;
            width: 78px;
            height: 28px;
            left: 258px;
            top: 161px;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size:24px;
            line-height: 28px;
            display: flex;
            align-items: center;
            text-align: center;
`;

const TextP = styled.p`
            position: absolute;
            width: 916px;
            height: 129px;
            left: 258px;
            top: 200px;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size:18px;
            line-height: 21px;
            display: flex;
            align-items: center;

            color:#000000;
`;

const EmailLink = styled.a`
            position: absolute;
            width: 166.5px;
            height: 48px;
            left: 258px;
            top: 396px;

            background: #CD3C30;
            border: 1.5px solid #AD1F1C;
            border-radius: 12px;   
            text-decoration: none;
`;

const LinkedinLink = styled.a`
            position: absolute;
            width: 166.5px;
            height: 48px;
            left: 456.5px;
            top: 396px;

            background: #0A66C2;
            border: 1.5px solid #AD1F1C;
            border-radius: 12px;
            text-decoration: none;
`
const GithubLink = styled.a`
            position: absolute;
            width: 166.5px;
            height: 48px;
            left: 655px;
            top: 396px;

            background: #353C46;
            border: 1.5px solid #AD1F1C;
            border-radius: 12px;
            text-decoration: none;
`;

export {SectionContainer, Title3, TextP, EmailLink, LinkedinLink, GithubLink};