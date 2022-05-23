import {DivMain,Titles,FormImprevisao,Label,Select} from "./styled"

const Section2: React.FunctionComponent = () => {
    return (
        <>
        <DivMain>
            <Titles> Imprevisão </Titles>
            <FormImprevisao>
            <Label>Escolha uma cidade:</Label>
                    <Select>
                        <option value="0" selected disabled>Selecione sua cidade</option>
                        <option value="1">Araguari</option>
                        <option value="2">Uberlândia</option>
                        <option value="3">Uberaba</option>
                        <option value="4">Patos de Minas</option>
                    </Select>
            </FormImprevisao>
        </DivMain>
        </>
    );
}

export default Section2;