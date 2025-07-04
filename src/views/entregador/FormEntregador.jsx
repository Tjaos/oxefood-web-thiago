import axios from "axios";
import InputMask from "comigo-tech-react-input-mask";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
import { notifyError, notifySuccess } from "../util/util";

const ufList = [
  {
    key: "o",
    text: "Alagoas",
    value: "AL",
  },
  {
    key: "f",
    text: "Paraíba",
    value: "PB",
  },
  {
    key: "m",
    text: "Pernambuco",
    value: "PE",
  },
];

export default function FormEntregador() {
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [foneCelular, setFoneCelular] = useState();
  const [foneFixo, setFoneFixo] = useState();
  const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
  const [valorPorFrete, setValorPorFrete] = useState();
  const [rua, setRua] = useState();
  const [numero, setNumero] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [cep, setCep] = useState();
  const [uf, setUf] = useState();
  const [complemento, setComplemento] = useState();
  const [ativo, setAtivo] = useState(false);
  const { state } = useLocation();
  const [idEntregador, setIdEntregador] = useState();

  useEffect(() => {
    if (state != null && state.id != null) {
      axios
        .get("http://localhost:8080/api/entregador/" + state.id)
        .then((response) => {
          setIdEntregador(response.data.id);
          setNome(response.data.nome);
          setCpf(response.data.cpf);
          setRg(response.data.rg);
          setDataNascimento(response.data.dataNascimento);
          setFoneCelular(response.data.foneCelular);
          setFoneFixo(response.data.foneFixo);
          setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas);
          setValorPorFrete(response.data.valorFrete);
          setRua(response.data.enderecoRua);
          setNumero(response.data.enderecoNumero);
          setBairro(response.data.enderecoBairro);
          setCidade(response.data.enderecoCidade);
          setCep(response.data.enderecoCep);
          setUf(response.data.enderecoUf);
          setComplemento(response.data.enderecoComplemento);
          setAtivo(true);
        });
    }
  }, [state]);

  function salvar() {
    let entregadorRequest = {
      nome: nome,
      cpf: cpf,
      rg: rg,
      dataNascimento: dataNascimento,
      foneCelular: foneCelular,
      foneFixo: foneFixo,
      qtdEntregasRealizadas: qtdEntregasRealizadas,
      valorFrete: valorPorFrete,
      enderecoRua: rua,
      enderecoNumero: numero,
      enderecoBairro: bairro,
      enderecoCidade: cidade,
      enderecoCep: cep,
      enderecoUf: uf,
      enderecoComplemento: complemento,
      ativo: ativo,
    };

    axios
      .post("http://localhost:8087/api/entregador", entregadorRequest)
      .then((response) => {
        notifySuccess("Entregador cadastrado com sucesso.");
        console.log("Entregador cadastrado com sucesso.");
      })
      .catch((error) => {
        if (error.response.data.errors !== undefined) {
          for (let i = 0; i < error.response.data.errors.length; i++) {
            notifyError(error.response.data.errors[i].defaultMessage);
          }
        } else {
          notifyError(error.response.data.message);
        }
        console.log("Erro ao incluir o Entregador.");
      });
  }

  return (
    <div>
      <MenuSistema />

      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2>
            {" "}
            <span style={{ color: "darkgray" }}>
              {" "}
              Entregador &nbsp;
              <Icon name="angle double right" size="small" />{" "}
            </span>{" "}
            Cadastro
          </h2>

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group>
                <Form.Input
                  fluid
                  label="Nome"
                  width={8}
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

                <Form.Input fluid label="CPF" required width={4}>
                  <InputMask
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label="RG"
                  width={4}
                  value={rg}
                  onChange={(e) => setRg(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Input fluid label="DT Nascimento" width={3}>
                  <InputMask
                    mask="99/99/9999"
                    placeholder="Ex: 20/03/1985"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                </Form.Input>

                <Form.Input fluid label="Fone Celular" required width={4}>
                  <InputMask
                    mask="(99) 99999.9999"
                    value={foneCelular}
                    onChange={(e) => setFoneCelular(e.target.value)}
                  />
                </Form.Input>

                <Form.Input fluid label="Fone Fixo" width={4}>
                  <InputMask
                    mask="(99) 9999.9999"
                    value={foneFixo}
                    onChange={(e) => setFoneFixo(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label="QTD Entregas Realizadas"
                  width={3}
                  value={qtdEntregasRealizadas}
                  onChange={(e) => setQtdEntregasRealizadas(e.target.value)}
                />
                <Form.Input fluid label="Valor Por Frete">
                  <InputMask
                    value={valorPorFrete}
                    onChange={(e) => setValorPorFrete(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <Form.Group>
                <Form.Input
                  fluid
                  label="Rua"
                  width={13}
                  value={enderecoRua}
                  onChange={(e) => setEnderecoRua(e.target.value)}
                />

                <Form.Input
                  fluid
                  label="Número"
                  width={3}
                  value={enderecoNumero}
                  onChange={(e) => setEnderecoNumero(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Input
                  fluid
                  label="Bairro"
                  width={7}
                  value={enderecoBairro}
                  onChange={(e) => setEnderecoBairro(e.target.value)}
                />

                <Form.Input
                  fluid
                  label="Cidade"
                  width={7}
                  value={enderecoCidade}
                  onChange={(e) => setEnderecoCidade(e.target.value)}
                />

                <Form.Input fluid label="CEP" width={2}>
                  <InputMask
                    mask="99.999-999"
                    value={enderecoCep}
                    onChange={(e) => setEnderecoCep(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <Form.Select
                fluid
                label="UF"
                options={ufList}
                placeholder="Selecione"
                value={enderecoEstado}
                onChange={(e, { value }) => {
                  setEnderecoEstado(value);
                }}
              />

              <Form.Input
                fluid
                label="Complemento"
                value={enderecoComplemento}
                onChange={(e) => setEnderecoComplemento(e.target.value)}
              />

              <Form.Group inline>
                <label>Ativo: </label>

                <Form.Radio
                  label="Sim"
                  checked={ativo}
                  onChange={(e) => setAtivo(true)}
                />

                <Form.Radio
                  label="Não"
                  checked={!ativo}
                  onChange={(e) => setAtivo(false)}
                />
              </Form.Group>

              <Form.Group
                widths="equal"
                style={{ marginTop: "4%" }}
                className="form--empresa-salvar"
              >
                <Button
                  type="button"
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="orange"
                >
                  <Icon name="reply" />
                  <Link to={"/list-entregador"}>Voltar</Link>
                </Button>

                <Container textAlign="right">
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
                </Container>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
}
