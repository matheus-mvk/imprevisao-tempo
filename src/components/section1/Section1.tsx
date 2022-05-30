import {Section1Container,Desc} from "./styled";

const Section1: React.FunctionComponent = () => {
	return(
		<>
			<Section1Container>
            <Desc>
                Esta página é um projeto protótipo para a aprendizagem de tecnologias Web Front End do mini-curso ASCII Notes.
            </Desc>

            <Desc>
                Inicialmente utilizaremos HTML, CSS e JS puros e posteriormente será refatorado com o framework ReactJS e StyledComponents.
            </Desc>
            
            <Desc>
                Este site informa a previsão, previamente determinada, do tempo de algumas cidades, na seção Imprevisão exibindo o Nome da cidade, a temperatura atual.
            </Desc>
        </Section1Container>
	  </>
	)
}

export {Section1};