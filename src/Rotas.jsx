import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/home/Home";
import FormProduto from "./views/produto/FormProduto";
import FormCliente from "./views/cliente/FormCliente";
import ListCliente from "./views/cliente/ListCliente";
import ListEntregador from "./views/entregador/ListEntregador";
import FormEntregador from "./views/entregador/FormEntregador";
import ListProduto from "./views/produto/ListProduto";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="list-cliente" element={<ListCliente />} />
      <Route path="/form-cliente" element={<FormCliente />} />
      <Route path="/list-entregador" element={<ListEntregador />} />
      <Route path="/form-entregador" element={<FormEntregador />} />
      <Route path="/list-produto" element={<ListProduto />} />
      <Route path="/form-produto" element={<FormProduto />} />
    </Routes>
  );
}

export default Rotas;
