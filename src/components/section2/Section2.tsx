import { Section2Container, ImprevisaoTitle, SubDiv, Form, Select } from "./styled";

const Section2: React.FunctionComponent = () => {
	return(
		<>
		<Section2Container>
			<ImprevisaoTitle>Imprevisão</ImprevisaoTitle>
			<SubDiv>
				<Form>
					<Select>
						<option>Selecione sua cidade</option>
                        <option value="1">Araguari</option>
                        <option value="2">Uberlândia</option>
                        <option value="3">Uberaba</option>
                        <option value="4">Patos de Minas</option>
					</Select>
				</Form>
			</SubDiv>
		</Section2Container>
	  </>
	)
}

export {Section2};