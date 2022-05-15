import { EmailLink, GithubLink, LinkedinLink, SectionContainer, TextP, Title3 } from "./section3/styled";

interface Section3Props {
    name: string;
    description: string;
    linkMail: string;
    linkLinkedin: string;
    linkGithub: string;
    imgSource: string;
}

const Section3: React.FC<Section3Props> = ({ name, description, linkMail, linkLinkedin, linkGithub, imgSource}) => {
    return(
        <SectionContainer>
            
            <Title3>
                {name}
            </Title3>

            <TextP>
                {description}
            </TextP>

            <EmailLink 
                href={linkMail}
            >
            EMAIL
            </EmailLink>

            <LinkedinLink
                href={linkLinkedin}
            >
            LINKEDIN
            </LinkedinLink>

            <GithubLink
                href={linkGithub}
            >
            GITHUB
            </GithubLink>
        </SectionContainer>
    );
}

export {Section3};