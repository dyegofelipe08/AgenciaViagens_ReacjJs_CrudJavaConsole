import { Link } from "react-router-dom";
import BotaoHome from "../components/BotaoHome";

export default function PedidoPromo(){
    return(


<main>
    <div className="container" style={{marginTop: '30px'}} >
        <h1 className="tituloMedio">Falta pouco...</h1>
        <hr/>
        <form action="/PedidoSucess">
            <label for="cpf">Selecione seu CPF:</label><br/>
            <select name="cpf" id="cpf">
                <option value="null"></option>
                <option value="cpf1">Números dos CPFs cadastrados</option>
            </select><br/><br/>
            <label for="destino">Selecione o destino promocional escolhido:</label><br/>
            <select name="destino" id="destino">
                <option value="null"></option>
                <option value="Florianopoles">Florianópoles - SC</option>
                <option value="Vitoria">Vitória - ES</option>
                <option value="Goiania">Goiânia - GO</option>
                <option value="Manaus">Manaus - AM</option>
                <option value="Porto_Alegre">Porto Alegre - RS</option>
                <option value="Aracaju">Aracaju - SE</option>
                <option value="Palmas">Palmas - TO</option>
                <option value="Joao_Pessoa">João Pessoa - PB</option>

            </select><br/><br/>

            <button type="submit" className="botaoMedio">Gerar pedido</button><br/>

            <p>Ainda não está cadastrado? <Link to="/Cadastro">Clique aqui!</Link></p>

            <BotaoHome/>


        </form>

    </div>



</main>

    );
}