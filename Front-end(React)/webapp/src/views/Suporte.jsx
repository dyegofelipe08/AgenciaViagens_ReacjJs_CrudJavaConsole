import React from "react";
import BotaoHome from "../components/BotaoHome";
import { Link } from "react-router-dom";

export default function Suporte() {
    return (

        <main>
            <div className="container">

                <h1 className="tituloGrande2">Fale conosco</h1>
                <h3 className="tituloMedio">Estamos dispostos a ajudar você...</h3>
                <hr />
                <form action="/ContatoSucess">
                    <label htmlFor="msg">Descreva o que deseja:</label><br />
                    <textarea style={{borderRadius: '10px'}} name="msg" id="msg" cols="80" rows="5" /><br /><br />
                    <label htmlFor="cpf">Selecione seu CPF:</label><br />
                    <select name="cpf" id="cpf">
                        <option value="null"></option>
                        <option value="cpf1">Números dos CPFs cadastrados</option>
                    </select><br />
                    <button type="submit" className="botaoHome">Enviar</button><br />


                    <p>Ainda não está cadastrado? <Link to="/Cadastro">Clique aqui!</Link></p>


                </form>
                <BotaoHome />
            </div>

        </main>
    );
}