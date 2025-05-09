import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Icon,
  Modal,
  Table,
} from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function ListEntregador() {
  const [lista, setLista] = useState([]);
  const [entregadorSelecionado, setEntregadorSelecionado] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    carregarLista();
  }, []);

  function carregarLista() {
    axios.get("http://localhost:8080/api/entregador").then((response) => {
      setLista(response.data);
    });
  }

  function formatarData(dataParam) {
    if (dataParam === null || dataParam === "" || dataParam === undefined) {
      return "";
    }

    let arrayData = dataParam.split("-");
    return arrayData[2] + "/" + arrayData[1] + "/" + arrayData[0];
  }
  function abrirModal(entregador) {
    setEntregadorSelecionado(entregador);
    setModalAberto(true);
  }

  function fecharModal() {
    setEntregadorSelecionado(null);
    setModalAberto(false);
  }
  return (
    <div>
      <MenuSistema tela={"entregador"} />
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2> Entregador </h2>
          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Button
              label="Novo"
              circular
              color="orange"
              icon="clipboard outline"
              floated="right"
              as={Link}
              to="/form-entregador"
            />
            <br />
            <br />
            <br />

            <Table color="orange" sortable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Nome</Table.HeaderCell>
                  <Table.HeaderCell>RG</Table.HeaderCell>
                  <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                  <Table.HeaderCell>QTD Entregas Realizadas</Table.HeaderCell>
                  <Table.HeaderCell>Valor Por Frete</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Ações</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {lista.map((entregador) => (
                  <Table.Row key={entregador.nome}>
                    <Table.Cell>{entregador.nome}</Table.Cell>
                    <Table.Cell>{entregador.rg}</Table.Cell>
                    <Table.Cell>{entregador.foneCelular}</Table.Cell>
                    <Table.Cell>{entregador.qtdEntregasRealizadas}</Table.Cell>
                    <Table.Cell>{entregador.valorPorFrete}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        inverted
                        circular
                        color="green"
                        title="Clique aqui para editar os dados deste entregador"
                        icon
                      >
                        <Icon name="edit" />
                      </Button>{" "}
                      &nbsp;
                      <Button
                        inverted
                        circular
                        color="red"
                        title="Clique aqui para remover este entregador"
                        icon
                      >
                        <Icon name="trash" />
                      </Button>
                      &nbsp;
                      <Button
                        inverted
                        circular
                        color="blue"
                        title="Clique para visualizar os dados deste entregador"
                        icon
                        onClick={() => abrirModal(entregador)}
                      >
                        <Icon name="eye" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Container>
      </div>
      {/* Modal de Detalhes */}
      <Modal open={modalAberto} onClose={fecharModal} size="small">
        <Modal.Header>Detalhes do Entregador</Modal.Header>
        <Modal.Content>
          {entregadorSelecionado && (
            <Table celled striped>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <strong>Nome</strong>
                  </Table.Cell>
                  <Table.Cell>{entregadorSelecionado.nome}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>CPF</strong>
                  </Table.Cell>
                  <Table.Cell>{entregadorSelecionado.cpf}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>RG</strong>
                  </Table.Cell>
                  <Table.Cell>{entregadorSelecionado.rg}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Data Nascimento</strong>
                  </Table.Cell>
                  <Table.Cell>
                    {entregadorSelecionado.dataNascimento
                      ? new Date(
                          entregadorSelecionado.dataNascimento
                        ).toLocaleDateString("pt-BR")
                      : ""}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Fone Celular</strong>
                  </Table.Cell>
                  <Table.Cell>{entregadorSelecionado.foneCelular}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Fone Fixo</strong>
                  </Table.Cell>
                  <Table.Cell>{entregadorSelecionado.foneFixo}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>QTD Entregas Realizadas</strong>
                  </Table.Cell>
                  <Table.Cell>
                    {entregadorSelecionado.qtdEntregasRealizadas}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Valor Por Frete</strong>
                  </Table.Cell>
                  <Table.Cell>{entregadorSelecionado.valor_frete}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Rua</strong>
                  </Table.Cell>
                  <Table.Cell>{entregadorSelecionado.endereco?.rua}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Número</strong>
                  </Table.Cell>
                  <Table.Cell>
                    {entregadorSelecionado.endereco?.numero}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Bairro</strong>
                  </Table.Cell>
                  <Table.Cell>
                    {entregadorSelecionado.endereco?.bairro}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Cidade</strong>
                  </Table.Cell>
                  <Table.Cell>
                    {entregadorSelecionado.endereco?.cidade}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>CEP</strong>
                  </Table.Cell>
                  <Table.Cell>{entregadorSelecionado.endereco?.cep}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>UF</strong>
                  </Table.Cell>
                  <Table.Cell>{entregadorSelecionado.endereco?.uf}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Complemento</strong>
                  </Table.Cell>
                  <Table.Cell>
                    {entregadorSelecionado.endereco?.complemento}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <strong>Ativo</strong>
                  </Table.Cell>
                  <Table.Cell>
                    {entregadorSelecionado.ativo ? "Sim" : "Não"}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={fecharModal} color="red">
            <Icon name="close" /> Fechar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
