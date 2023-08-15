import * as S from "./styles"
import Logo from "../../assets/logo.png"

export function Header() {
    return (
        <S.Header>
            <img src={Logo} alt="Minecat logo" />
        </S.Header>
    )
}