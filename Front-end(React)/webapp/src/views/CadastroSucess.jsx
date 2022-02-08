import BotaoHome from "../components/BotaoHome";

export default function CadastroSucess() {
    return (
        <main>
            <div className="container" style={{ textAlign: 'center' }}>
                <h1 className="tituloGrande2">Cadastro realizado com sucesso!</h1>
                <h3 className="tituloMedio">Aguarde a confirmação por e-mail...</h3>
            </div>

            <BotaoHome />

        </main>
    );
}