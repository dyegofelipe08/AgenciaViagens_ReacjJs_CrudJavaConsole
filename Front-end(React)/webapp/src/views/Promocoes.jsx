import React from "react";
import { Link } from "react-router-dom";
import BotaoHome from "../components/BotaoHome";

export default function Promocoes() {
    return (
        <main>


        <div className="container">
            <h1 className="tituloGrande2">Promoções</h1>
            <h3 className="tituloMedio">Selecione seu destino...</h3>
        </div>

        <div className="container direcao">

            <div className="cardPrincipal ">
                <img className="imgCard" src="./img/DestinosPromo/Praias-de-Florianópolis.jpg" alt="florianopoles" style={{height:'175px', width:'298px'}}/>
                <div>
                    <h2 style={{color: 'white', marginTop:'10px'}}>Florianópoles - SC</h2>
                    <p style={{marginBottom: '5px', marginTop: '2px'}} className="paragrafoCard"> <small>De:<del> R$ 895,90</del> </small> </p>
                    <p style={{marginTop: '5px', marginBottom: '5px'}} className="paragrafoCard"> Por apenas: R$ 649,50</p>
                </div>
                <Link style={{textDecoration: 'none'}} className="botao " to="/PedidoPromo">Fazer pedido</Link>
            </div>
            <div className="cardPrincipal ">
                <img className="imgCard" src="./img/DestinosPromo/vitoria.jpg" alt="vitoria" style={{height:'175px', width:'298px'}}/>
                <div>
                    <h2 style={{color: 'white', marginTop:'10px'}}>Vitória - ES</h2>
                    <p style={{marginBottom: '5px', marginTop: '2px'}} className="paragrafoCard"> <small>De:<del> R$ 789,90</del> </small> </p>
                    <p style={{marginTop: '5px', marginBottom: '5px'}} className="paragrafoCard"> Por apenas: R$ 589.90</p>
                </div>
                <Link style={{textDecoration: 'none'}} className="botao " to="/PedidoPromo">Fazer pedido</Link>
            </div>
            <div className="cardPrincipal ">
                <img className="imgCard" src="./img/DestinosPromo/goiania.jpg" alt="goiania" style={{height:'175px', width:'298px'}}/>
                <div>
                    <h2 style={{color: 'white', marginTop:'10px'}}>Goiânia - GO</h2>
                    <p style={{marginBottom: '5px', marginTop: '2px'}} className="paragrafoCard"> <small>De:<del> R$ 829,90</del> </small> </p>
                    <p style={{marginTop: '5px', marginBottom: '5px'}} className="paragrafoCard"> Por apenas: R$ 549,90</p>
                </div>
                <Link style={{textDecoration: 'none'}} className="botao " to="/PedidoPromo">Fazer pedido</Link>
            </div>
            <div className="cardPrincipal ">
                <img className="imgCard" src="./img/DestinosPromo/manaus.jpg" alt="bh" style={{height:'175px', width:'298px'}}/>
                <div>
                    <h2 style={{color: 'white', marginTop:'10px'}}>Manaus - AM</h2>
                    <p style={{marginBottom: '5px', marginTop: '2px'}} className="paragrafoCard"> <small>De:<del> R$ 999,90</del> </small> </p>
                    <p style={{marginTop: '5px', marginBottom: '5px'}} className="paragrafoCard"> Por apenas: R$ 699.99</p>
                </div>
                <Link style={{textDecoration: 'none'}} className="botao " to="/PedidoPromo">Fazer pedido</Link>
            </div>
            <div className="cardPrincipal ">
                <img className="imgCard" src="./img/DestinosPromo/porto-alegre-sede-copa3.jpg" alt="porto_alegre" style={{height:'175px', width:'298px'}}/>
                <div>
                    <h2 style={{color: 'white', marginTop:'10px'}}>Porto Alegre - RS</h2>
                    <p style={{marginBottom: '5px', marginTop: '2px'}} className="paragrafoCard"> <small>De:<del> R$ 819,90</del> </small> </p>
                    <p style={{marginTop: '5px', marginBottom: '5px'}} className="paragrafoCard"> Por apenas: R$ 619,90</p>
                </div>
                <Link style={{textDecoration: 'none'}} className="botao " to="/PedidoPromo">Fazer pedido</Link>
            </div>
            <div className="cardPrincipal ">
                <img className="imgCard" src="./img/DestinosPromo/aracaju.png" alt="aracaju" style={{height:'175px', width:'298px'}}/>
                <div>
                    <h2 style={{color: 'white', marginTop:'10px'}}>Aracaju - SE</h2>
                    <p style={{marginBottom: '5px', marginTop: '2px'}} className="paragrafoCard"> <small>De:<del> R$ 769,90</del> </small> </p>
                    <p style={{marginTop: '5px', marginBottom: '5px'}} className="paragrafoCard"> Por apenas: R$ 499.90</p>
                </div>
                <Link style={{textDecoration: 'none'}} className="botao " to="/PedidoPromo">Fazer pedido</Link>
            </div>
            <div className="cardPrincipal ">
                <img className="imgCard" src="./img/DestinosPromo/palmas.jpg" alt="palmas" style={{height:'175px', width:'298px'}}/>
                <div>
                    <h2 style={{color: 'white', marginTop:'10px'}}>Palmas - TO</h2>
                    <p style={{marginBottom: '5px', marginTop: '2px'}} className="paragrafoCard"> <small>De:<del> R$ 889,90</del> </small> </p>
                    <p style={{marginTop: '5px', marginBottom: '5px'}} className="paragrafoCard"> Por apenas: R$ 679.90</p>
                </div>
                <Link style={{textDecoration: 'none'}} className="botao " to="/PedidoPromo">Fazer pedido</Link>
            </div>
            <div className="cardPrincipal ">
                <img className="imgCard" src="./img/DestinosPromo/joao_pessoa.jpeg" alt="joao_pessoa" style={{height:'175px', width:'298px'}}/>
                <div>
                    <h2 style={{color: 'white', marginTop:'10px'}}>João Pessoa - PB</h2>
                    <p style={{marginBottom: '5px', marginTop: '2px'}} className="paragrafoCard"> <small>De:<del> R$ 829,90</del> </small> </p>
                    <p style={{marginTop: '5px', marginBottom: '5px'}} className="paragrafoCard"> Por apenas: R$ 629.90</p>
                </div>
                <Link style={{textDecoration: 'none'}} className="botao " to="/PedidoPromo">Fazer pedido</Link>
            </div>
        
        </div>
     
        <BotaoHome/>
    </main>
    );
}