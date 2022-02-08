import React from "react";
import { Link } from "react-router-dom";

export default function Destinos() {
    return (
        <main>

            <div className="container">
                <h1 className="tituloGrande2">Destinos</h1>
                <h3 className="tituloMedio">Selecione seu destino...</h3>
            </div>

            <div className="container direcao">

                <div className="cardPrincipal ">
                    <img className="imgCard" src="./img/Destinos/bh.jpg" alt="bh"  style={{height:'175px', width:'298px'}}/>
                        <div>
                            <h2 style={{color: 'white', marginTop:'10px'}}>Belo Horizonte - MG</h2>
                            <p className="paragrafoCard">Apenas: R$ 879,90</p>
                        </div>
                        <Link style={{textDecoration: 'none'}} className="botao " to="/Pedido">Fazer pedido</Link>
                </div>
                <div className="cardPrincipal ">
                    <img className="imgCard" src="./img/Destinos/REcife.jpg" alt="recife"  style={{height:'175px', width:'298px'}} />
                        <div>
                            <h2 style={{color: 'white', marginTop:'10px'}}>Recife - PE</h2>
                            <p className="paragrafoCard">Apenas: R$ 999,90 </p>
                        </div>
                        <Link style={{textDecoration: 'none'}} className="botao " to="/Pedido">Fazer pedido</Link>
                </div>
                <div className="cardPrincipal ">
                    <img className="imgCard" src="./img/Destinos/curitiba.jpg" alt="curitiba"  style={{height:'175px', width:'298px'}} />
                        <div>
                            <h2 style={{color: 'white', marginTop:'10px'}}>Curiitiba - PR</h2>
                            <p className="paragrafoCard">Apenas: R$ 799,90</p>
                        </div>
                        <Link style={{textDecoration: 'none'}} className="botao " to="/Pedido">Fazer pedido</Link>
                </div>
                <div className="cardPrincipal ">
                    <img className="imgCard" src="./img/Destinos/Fortaleza.jpg" alt="fotaleza"  style={{height:'175px', width:'298px'}} />
                        <div>
                            <h2 style={{color: 'white', marginTop:'10px'}}>Fortaleza - CE</h2>
                            <p className="paragrafoCard">Apenas: R$ 859,90</p>
                        </div>
                        <Link style={{textDecoration: 'none'}} className="botao " to="/Pedido">Fazer pedido</Link>
                </div>
                <div className="cardPrincipal ">
                    <img className="imgCard" src="./img/Destinos/rio.jpg" alt="rio"  style={{height:'175px', width:'298px'}} />
                        <div>
                            <h2 style={{color: 'white', marginTop:'10px'}}>Rio de Janeiro - RJ</h2>
                            <p className="paragrafoCard">Apenas: R$ 729,90</p>
                        </div>
                        <Link style={{textDecoration: 'none'}} className="botao " to="/Pedido">Fazer pedido</Link>
                </div>
                <div className="cardPrincipal ">
                    <img className="imgCard" src="./img/Destinos/sao_paulo.webp" alt="sao_paulo"  style={{height:'175px', width:'298px'}} />
                        <div>
                            <h2 style={{color: 'white', marginTop:'10px'}}>São Paulo - SP</h2>
                            <p className="paragrafoCard">Apenas: R$ 899,90</p>
                        </div>
                        <Link style={{textDecoration: 'none'}} className="botao " to="/Pedido">Fazer pedido</Link>
                </div>
                <div className="cardPrincipal ">
                    <img className="imgCard" src="./img/Destinos/Natal.jpg" alt="natal"  style={{height:'175px', width:'298px'}} />
                        <div>
                            <h2 style={{color: 'white', marginTop:'10px'}}>Natal - RN</h2>
                            <p className="paragrafoCard">Apenas: R$ 849,99</p>
                        </div>
                        <Link style={{textDecoration: 'none'}} className="botao " to="/Pedido">Fazer pedido</Link>
                </div>
                <div className="cardPrincipal ">
                    <img className="imgCard" src="./img/Destinos/sao_luis.jpg" alt="sao_luis"  style={{height:'175px', width:'298px'}} />
                        <div>
                            <h2 style={{color: 'white', marginTop:'10px'}}>São Luís - MA</h2>
                            <p className="paragrafoCard">Apenas: R$ 779,99</p>
                        </div>
                        <Link style={{textDecoration: 'none'}} className="botao " to="/Pedido">Fazer pedido</Link>
                </div>



            </div>
            <div className="botaoCenter">
                <Link style={{textDecoration: 'none'}} className="botaoHome" to="index.html">Home</Link>
            </div>

        </main>
    );
}