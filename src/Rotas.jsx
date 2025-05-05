import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/home/Home";
import FormProduto from "./views/produto/FormProduto";
import FormCliente from "./views/cliente/FormCliente";
import FormEntregador from "./views/entregador/FormEntregador";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form-produto" element={<FormProduto />} />
      <Route path="/form-cliente" element={<FormCliente />} />
      <Route path="/form-entregador" element={<FormEntregador />} />
    </Routes>
  );
}

export default Rotas;
