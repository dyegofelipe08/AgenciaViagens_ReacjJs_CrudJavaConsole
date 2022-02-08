import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        
            <main>
                <div className="principal">
                    <img src="./img/recife-banner.jpeg" alt="recife.jpeg" width="1135pt" height="500pt" />
                    <h1 className="tituloGrande">Brasil sem fronteiras</h1>
                    <p className="paragrafoPriincipal">Bem-vindo ao nosso site! Aqui você encontra passagens aéreas para as principais capitais do nosso lindo Brasil. Curta o melhor da nossa nação!</p>

                </div>

                <div className="molde " style={{marginBottom:'30pt'}}>
                <Link to="/Cadastro" style={{textDecoration: 'none'}} className="botaoGrande paragrafoPriincipal">Clique aqui para realizar seu cadastro</Link>
            </div>

        </main>
        
    );
}

