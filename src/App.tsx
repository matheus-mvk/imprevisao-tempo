import { Section3 } from "./components/section3/Section3";
import { PerfilContainer} from "./styled";

function App(){
    return (
        <PerfilContainer>
            
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