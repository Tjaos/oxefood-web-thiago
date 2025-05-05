import axios from "axios";
import InputMask from "comigo-tech-react-input-mask";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Form,
  Icon,
} from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

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

  function salvar() {
    let entregadorRequest = {
      nome: nome,
      cpf: cpf,
      rg: rg,
      dataNascimento: dataNascimento,
      foneCelular: foneCelular,
      foneFixo: foneFixo,
      qtdEntregasRealizadas: qtdEntregasRealizadas,
      valorPorFrete: valorPorFrete,
      rua: rua,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      cep: cep,
      uf: uf,
      complemento: complemento,
      ativo: ativo,
    };

    axios
      .post("http://localhost:8080/api/entregador", entregadorRequest)
      .then((Response) => {
        console.log("Entregador cadastrado com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao cadastrar o entregador.");
      });
  }
  return (
    <div>
      <MenuSistema tela="entregador" />
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2>
            {" "}
            <span style={{ color: "darkgray" }}>
              {" "}
              Entregador &nbsp;
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
                  maxLength="100"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

                <Form.Input
                  required
                  fluid
                  label="CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                >
                  <InputMask required mask="999.999.999-99" />
                </Form.Input>

                <Form.Input
                  fluid
                  label="RG"
                  maxLength="20"
                  value={rg}
                  onChange={(e) => setRg(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Data Nascimento"
                  width={6}
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                >
                  <InputMask
                    mask="99/99/9999"
                    maskChar={null}
                    placeholder="Ex: 20/03/1985"
                  />
                </Form.Input>
                <Form.Input
                  fluid
                  label="Fone Celular"
                  width={6}
                  value={foneCelular}
                  onChange={(e) => setFoneCelular(e.target.value)}
                >
                  <InputMask mask="(99) 9999.9999" />
                </Form.Input>
                <Form.Input
                  fluid
                  label="Fone Fixo"
                  width={6}
                  value={foneFixo}
                  onChange={(e) => setFoneFixo(e.target.value)}
                >
                  <InputMask mask="(99) 9999.9999" />
                </Form.Input>

                <Form.Input
                  fluid
                  label="QTD Entregas Realizadas"
                  value={qtdEntregasRealizadas}
                  onChange={(e) => setQtdEntregasRealizadas(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Valor Por Frete"
                  value={valorPorFrete}
                  onChange={(e) => setValorPorFrete(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths={"equal"}>
                <Form.Input
                  fluid
                  label="Rua"
                  maxLength="200"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Número"
                  maxLength="10"
                  width={6}
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Bairro"
                  maxLength="100"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Cidade"
                  maxLength="100"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="CEP"
                  maxLength="10"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="UF"
                  maxLength="2"
                  width={2}
                  value={uf}
                  onChange={(e) => setUf(e.target.value)}
                />
                <Form.Input
                  fluid
                  label="Complemento"
                  maxLength="100"
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Field
                  control={Checkbox}
                  label="Ativo"
                  style={{ marginTop: "2%" }}
                  toggle
                  checked={ativo}
                  onChange={(e) => setAtivo(e.target.checked)}
                />
              </Form.Group>
            </Form>

            <div style={{ marginTop: "4%" }}>
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
