import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";

import { Link, useLocation } from "react-router-dom";
import MenuSistema from "../../MenuSistema";
import { notifyError, notifySuccess } from "../util/util";

export default function FormComprador() {
  const [nome, setNome] = useState();
  const [enderecoComercial, setEnderecoComercial] = useState();
  const [enderecoResidencial, setEnderecoResidencial] = useState();
  const [comissao, setComissao] = useState();
  const [qtdComprasMediasMes, setQtdComprasMediasMes] = useState();
  const [contratadoEm, setcontratadoEm] = useState();
  const { state } = useLocation();
  const [idComprador, setIdComprador] = useState();
  const [listaSegmento, setListaSegmento] = useState([]);
  const [idSegmento, setIdSegmento] = useState();

  useEffect(() => {
    if (state != null && state.id != null) {
      axios
        .get("http://localhost:8080/api/comprador/" + state.id)
        .then((response) => {
          setIdComprador(response.data.id);
          setNome(response.data.nome);
          setEnderecoComercial(response.data.enderecoComercial);
          setEnderecoResidencial(response.data.enderecoResidencial);
          setQtdComprasMediasMes(response.data.comissao);
          setcontratadoEm(response.data.contratadoEm);
          setIdSegmento(response.data.segmento.id);
        });
    }

    axios
      .get("http://localhost:8080/api/segmentocomprador")
      .then((response) => {
        const dropDownSegmentos = response.data.map((s) => ({
          text: s.descricao,
          value: s.id,
        }));
        setListaSegmento(dropDownSegmentos);
      });
  }, [state]);

  function salvar() {
    let compradorRequest = {
      idSegmento: idSegmento,
      nome: nome,
      enderecoComercial: enderecoComercial,
      enderecoResidencial: enderecoResidencial,
      comissao: comissao,
      qtdComprasMediasMes: qtdComprasMediasMes,
      contratadoEm: contratadoEm,
    };

    if (idComprador != null) {
      //Alteração:
      axios
        .put(
          "http://localhost:8080/api/comprador/" + idComprador,
          compradorRequest
        )
        .then((response) => {
          console.log("Comprador alterado com sucesso.");
          notifySuccess("Comprador alterado com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao alterar um Comprador.");
          if (error.response.data.errors !== undefined) {
            for (let i = 0; i < error.response.data.errors.length; i++) {
              notifyError(error.response.data.errors[i].defaultMessage);
            }
          } else {
            notifyError(error.response.data.message);
          }
        });
    } else {
      //Cadastro:
      axios
        .post("http://localhost:8080/api/comprador", compradorRequest)
        .then((response) => {
          console.log("Comprador cadastrado com sucesso.");
          notifySuccess("Comprador cadastrado com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao incluir o comprador.");
          if (error.response.data.errors !== undefined) {
            for (let i = 0; i < error.response.data.errors.length; i++) {
              notifyError(error.response.data.errors[i].defaultMessage);
            }
          } else {
            notifyError(error.response.data.message);
          }
        });
    }
  }

  return (
    <div>
      <MenuSistema tela="comprador" />
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2>
            {" "}
            <span style={{ color: "darkgray" }}>
              {" "}
              Comprador &nbsp;
              <Icon name="angle double right" size="small" />{" "}
            </span>{" "}
            Cadastro{" "}
          </h2>

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  fluid
                  label="Nome"
                  maxLength="200"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

                <Form.Input
                  required
                  fluid
                  label="Endereço comercial"
                  maxLength="400"
                  value={enderecoComercial}
                  onChange={(e) => setEnderecoComercial(e.target.value)}
                />
              </Form.Group>
              <Form.Select
                required
                fluid
                tabIndex="3"
                placeholder="Selecione"
                label="Segmento"
                options={listaSegmento}
                value={idSegmento}
                onChange={(e, { value }) => {
                  setIdSegmento(value);
                }}
              />

              <Form.Group widths="equal">
                <Form.Input
                  required
                  fluid
                  type="number"
                  label="Quantidade de compras médias no mês"
                  value={qtdComprasMediasMes}
                  onChange={(e) => setQtdComprasMediasMes(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input
                  required
                  fluid
                  label="Comissão"
                  type="number"
                  step="0.01"
                  value={comissao}
                  onChange={(e) => setComissao(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Endereço Residencial"
                  value={enderecoResidencial}
                  onChange={(e) => setEnderecoResidencial(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Contratado em: "
                  mask="99/99/9999"
                  maskChar={null}
                  placeholder="Ex: 20/05/2024"
                  value={contratadoEm}
                  onChange={(e) => setcontratadoEm(e.target.value)}
                />
              </Form.Group>
            </Form>

            <div style={{ marginTop: "4%" }}>
              <Link to="/list-comprador">
                <Button
                  type="button"
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="orange"
                >
                  <Icon name="reply" />
                  Voltar
                </Button>
              </Link>

              <Button
                inverted
                circular
                icon
                labelPosition="left"
                color="blue"
                floated="right"
                onClick={() => salvar()}
              >
                <Icon name="save" />
                Salvar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
