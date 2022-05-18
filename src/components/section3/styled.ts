import styled from "styled-components";

const Source = styled.img`
            position: relative;
            top: 50px;
            border-radius: 100%;
`;

const SectionContainer = styled.section`
            background: #F2F2F2;
            
            width: 1412px;
            height: 230px;
            
`;

const Title3 = styled.h3`

            position: relative;
            width: 230px;
            height: 28px;
            left: 230px;
            top: -30px;

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
            
            position: relative;
            width: 916px;
            height: 100px;
            left: 230px;
            top: -30px;

            
            font-style: normal;
            font-weight: 400;
            font-size:18px;
            line-height: 21px;
            align-items: center;

            color:#000000;
`;

const EmailLink = styled.a`
            position: relative ;
            padding: 4px 4px 4px 40px;
            margin: 5px;
            
            left: 230px;
            top: -30px;

            color: white;
            background: #CD3C30;
            border: 1.5px solid #AD1F1C;
            border-radius: 10px;   
            text-decoration: none;
`;

const LinkedinLink = styled.a`
            position: relative ;
            padding: 4px 4px 4px 30px;
            margin: 5px;
            
            left: 230px;
            top: -30px;

            color: white;
            background: #0A66C2;
            border: 1.5px solid #AD1F1C;
            border-radius: 10px;
            text-decoration: none;
`
const GithubLink = styled.a`
            position: relative ;
            padding: 4px 4px 4px 30px;
            margin: 5px;
            
            left: 230px;
            top: -30px;

            color: white;
            background: #353C46;
            border: 1.5px solid #AD1F1C;
            border-radius: 10px;
            text-decoration: none;
`;

export {SectionContainer, Title3, TextP, EmailLink, LinkedinLink, GithubLink, Source};