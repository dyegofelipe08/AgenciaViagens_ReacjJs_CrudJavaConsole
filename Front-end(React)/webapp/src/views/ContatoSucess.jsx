import BotaoHome from "../components/BotaoHome";

export default function CadastroSucess() {
    return (
        <main>
            <div className="container" style={{ textAlign: 'center' }}>
                <h1 class="tituloGrande2">Mensagem enviada com sucesso!</h1>
                <h3 class="tituloMedio">Retornaremos o contato em breve. Obrigado!</h3>
            </div>

            <BotaoHome />

        </main>
    );
}