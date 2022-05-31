import { HeaderContainer, ImgSource, ProjetoLink, ImprevisaoLink, SobremimLink, TextP } from "./styled";

export function Header() {
    return(
        <HeaderContainer>
            <ImgSource src="{Logo}"alt="logo" ></ImgSource>
                <ProjetoLink href="{#Projeto}" >
                    <TextP>
                    Projeto
                    </TextP>
                </ProjetoLink>
                    <ImprevisaoLink href="{#Imprevisao}" >
                        <TextP>
                        Imprevisão
                        </TextP>
                    </ImprevisaoLink>
                        <SobremimLink href="{#SobreMim}" >
                            <TextP>
                            Sobre Mim
                            </TextP>
                        </SobremimLink>
        </HeaderContainer>
    );
}