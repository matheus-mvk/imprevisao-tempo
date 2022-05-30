
import { Section1 } from "./components/section1/Section1";
import { Section2 } from "./components/section2/Section2";
import { Section3 } from "./components/section3/Section3";
import { Section3Container, Title1, Section1Conteiner, Section2Conteiner} from "./styled";

function App(){
    return (
       <>
       <Section1Conteiner>
            <Title1>Início</Title1>

            <Section1/>
       </Section1Conteiner>
       
       <Section2Conteiner>
        <Title1>Imprevisão</Title1>
            <Section2/>
       </Section2Conteiner>
       
        <Section3Container>
            <Title1>Sobre a Equipe</Title1>
            <Section3 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, 
                fugit eius suscipit dicta laborum esse. Praesentium autem, explicabo placeat 
                expedita asperiores, corrupti deserunt nisi eaque magni animi consequatur quis 
                laboriosam!"
                imgSource="../src/assets/img2.png"
                linkGithub="https://github.com/matheus-mvk"
                linkLinkedin="https://www.linkedin.com/in/matheush1/"
                linkMail="mailto:matheusmhvs1@gmail.com"
                name="Matheus Henrique"
            />
            <Section3 
                description="Olá! Me chamo Luiz, sou estudante de Ciência da Computação na 
                Universidade Federal de Uberlândia e estou trabalhando como Frontend na 
                Empresa Júnior ASCII."
                imgSource="../src/assets/img2.png"
                linkGithub=""
                linkLinkedin=""
                linkMail="mailto:k2so935@gmail.com"
                name="Luiz"
            />
            <Section3 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, 
                fugit eius suscipit dicta laborum esse. Praesentium autem, explicabo placeat 
                expedita asperiores, corrupti deserunt nisi eaque magni animi consequatur quis 
                laboriosam!"
                imgSource="../src/assets/img2.png"
                linkGithub=""
                linkLinkedin=""
                linkMail="mailto:"
                name="Pedro pantera"
            />
        </Section3Container>
        </>
    )
}

export default App