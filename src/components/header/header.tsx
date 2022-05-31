import { HeaderContainer, ImgSource, ProjetoLink, ImprevisaoLink, SobremimLink} from "./styled";

export function Header() {
    return(
        <HeaderContainer>
            <ImgSource src="{Logo}"alt="logo" ></ImgSource>
                <ProjetoLink href="{#Projeto}">
                    Projeto
                </ProjetoLink>
                    <ImprevisaoLink href="{#Imprevisao}" >
                        Imprevisão
                    </ImprevisaoLink>
                        <SobremimLink href="{#SobreMim}" >
                            Sobre Mim
                        </SobremimLink>
        </HeaderContainer>
    );
}