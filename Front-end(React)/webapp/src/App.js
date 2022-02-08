import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Destinos from "./views/Destinos";
import Promocoes from "./views/Promocoes";
import Suporte from "./views/Suporte";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Cadastro from "./views/Cadastro";
import CadastroSucess from "./views/CadastroSucess";
import Pedido from "./views/Pedido";
import "./assets/css/style.css";
import PedidoSucess from "./views/PedidoSucess";
import PedidoPromo from "./views/PedidoPromo";
import ContatoSucess from "./views/ContatoSucess";


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Destinos" element={<Destinos/>} />
        <Route path="/Promocoes" element={<Promocoes/>} />
        <Route path="/Suporte" element={<Suporte/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
        <Route path="/CadastroSucess" element={<CadastroSucess/>} />
        <Route path="/Pedido" element={<Pedido/>} />
        <Route path="/PedidoSucess" element={<PedidoSucess/>} />
        <Route path="/PedidoPromo" element={<PedidoPromo/>} />
        <Route path="/ContatoSucess" element={<ContatoSucess/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
