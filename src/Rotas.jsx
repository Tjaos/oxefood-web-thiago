import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/home/Home";
import FormProduto from "./views/produto/FormProduto";
import FormCliente from "./views/cliente/FormCliente";
import ListCliente from "./views/cliente/ListCliente";
import ListEntregador from "./views/entregador/ListEntregador";
import FormEntregador from "./views/entregador/FormEntregador";
import ListProduto from "./views/produto/ListProduto";
import FormComprador from "./views/comprador/FormComprador";
import ListComprador from "./views/comprador/ListComprador";
import FormLogin from "./views/login/FormLogin";
import { ProtectedRoute } from "./views/util/ProtectedRoute";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<FormLogin />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="list-cliente"
        element={
          <ProtectedRoute>
            <ListCliente />
          </ProtectedRoute>
        }
      />
      <Route
        path="/form-cliente"
        element={
          <ProtectedRoute>
            <FormCliente />
          </ProtectedRoute>
        }
      />
      <Route
        path="/list-entregador"
        element={
          <ProtectedRoute>
            <ListEntregador />
          </ProtectedRoute>
        }
      />
      <Route
        path="/form-entregador"
        element={
          <ProtectedRoute>
            <FormEntregador />
          </ProtectedRoute>
        }
      />
      <Route
        path="/list-produto"
        element={
          <ProtectedRoute>
            <ListProduto />
          </ProtectedRoute>
        }
      />
      <Route
        path="/form-produto"
        element={
          <ProtectedRoute>
            <FormProduto />
          </ProtectedRoute>
        }
      />
      <Route
        path="list-comprador"
        element={
          <ProtectedRoute>
            <ListComprador />
          </ProtectedRoute>
        }
      />
      <Route
        path="form-comprador"
        element={
          <ProtectedRoute>
            <FormComprador />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default Rotas;
