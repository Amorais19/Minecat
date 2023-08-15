import * as S from "./styles"
import Fundo from "../../assets/fundo.png"
import Gato from "../../assets/catito.png"

export function Home() {
    return (
        <S.Section>
            <div style={{ backgroundImage: `url(${Fundo})` }}>
                <section>
                    <img src={Gato} alt="Pixel art de gato" />
                </section>
                <nav>
                    <h2>Sejam bem vindos ao minecat!</h2>
                    <p>Sintam-se a vontade para explora-lo e conhecerem melhor nossos gatinhos...</p>
                </nav>
                <h2><a href="/cats">Explorar</a></h2>
            </div>
        </S.Section>
    )
}