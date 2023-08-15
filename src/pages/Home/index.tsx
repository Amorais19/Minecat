import * as S from "./styles"
import Gato from "../../assets/catito.png"

export function Home() {
    return (
        <S.Section>
            {/* <img src={Gato} alt="Pixel art de gato" />
            <h2>Sejam bem vindos ao minecat!</h2>
            <p>Sintam-se a vontade para explora-lo e conhecerem melhor nossos gatinhos...</p>
            <a href="/cats">Explorar</a> */}
            <div>
                <div id="img">
                    <img src={Gato} alt="Pixel art de gato" />
                </div>
                <nav>
                    <h2>Sejam bem vindos ao minecat!</h2>
                    <p>Sintam-se a vontade para explora-lo e conhecerem melhor nossos gatinhos...</p>
                </nav>
                <a href="/cats">Explorar</a>
            </div>
        </S.Section>
    )
}