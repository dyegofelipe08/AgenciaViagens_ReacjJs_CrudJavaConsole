import { Link } from "react-router-dom";
import BotaoHome from "../components/BotaoHome";

export default function pedido() {
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
            <label for="destino">Selecione o destino escolhido:</label><br/>
            <select name="destino" id="destino">
                <option value="null"></option>
                <option value="Belo_Horizonte">Belo Horizonte - MG</option>
                <option value="Recife">Recife - PE</option>
                <option value="Curitiba">Curitiba - PR</option>
                <option value="Fortaleza">Fortaleza - CE</option>
                <option value="Rio_de_janeiro">Rio de Janeiro - RJ</option>
                <option value="Sao_Paulo">São Paulo - SP</option>
                <option value="Natal">Natal - RN</option>
                <option value="dSao_Luis">São Luís - MA</option>

               
            </select><br/><br/>
            <button type="submit" className="botaoMedio">Gerar pedido</button><br/>

            <p>Ainda não está cadastrado? <Link to="/Cadastro">Clique aqui!</Link></p>

            <BotaoHome/>


        </form>

    </div>



</main>

  );
};
