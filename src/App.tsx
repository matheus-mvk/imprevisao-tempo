
import { Section1 } from "./components/section1/Section1";
import { Section2 } from "./components/section2/Section2";
import { Section3 } from "./components/section3/Section3";
import { PerfilContainer, Title1 } from "./styled";

function App(){
    return (
       
        <PerfilContainer>
            <Title1>Sobre a Equipe</Title1>
            <Section3 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, 
                fugit eius suscipit dicta laborum esse. Praesentium autem, explicabo placeat 
                expedita asperiores, corrupti deserunt nisi eaque magni animi consequatur quis 
                laboriosam!"
                imgSource=""
                linkGithub=""
                linkLinkedin=""
                linkMail="mailto:matheusmhvs1@gmail.com"
                name="Matheus"
            />
            <Section3 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, 
                fugit eius suscipit dicta laborum esse. Praesentium autem, explicabo placeat 
                expedita asperiores, corrupti deserunt nisi eaque magni animi consequatur quis 
                laboriosam!"
                imgSource=""
                linkGithub=""
                linkLinkedin=""
                linkMail="mailto:matheusmhvs1@gmail.com"
                name="Luiz"
            />
            <Section3 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, 
                fugit eius suscipit dicta laborum esse. Praesentium autem, explicabo placeat 
                expedita asperiores, corrupti deserunt nisi eaque magni animi consequatur quis 
                laboriosam!"
                imgSource=""
                linkGithub=""
                linkLinkedin=""
                linkMail="mailto:matheusmhvs1@gmail.com"
                name="Pedro pantera"
            />
        </PerfilContainer>
    )
}

export default App