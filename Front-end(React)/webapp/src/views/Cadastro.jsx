
import BotaoHome from "../components/BotaoHome";

export default function cadastro  (){
return(

<main>
        <div className="container" style={{marginTop: '30px'}}>
            <h1 className="tituloMedio">Cadastro</h1>
            <hr/>
            <form action="/CadastroSucess">
                <label for="nome">Seu nome completo:</label><br/>
                <input type="text" id="nome" name="nome"/><br/><br/>
                <label for="cpf">Digite seu CPF:</label><br/>
                <input type="text" id="cpf" name="cpf"/><br/><br/>
                <label for="email">Seu e-mail:</label><br/>
                <input type="email" id="email" name="email"/><br/><br/>
                <label for="telefone">Seu número de telefone:</label><br/>
                <input type="tel" id="email" name="email"/><br/><br/>
                <button type="submit" className="botaoMedio">Gerar cadastro</button><br/>
                <BotaoHome/>


            </form>

        </div>

    </main>






);

}