import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Modal,
  Table,
} from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function ListEntregador() {
  const [lista, setLista] = useState([]);
  const [entregadorSelecionado, setEntregadorSelecionado] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [idRemover, setIdRemover] = useState();

  useEffect(() => {
    carregarLista();
  }, []);

  function carregarLista() {
    axios.get("http://localhost:8080/api/entregador").then((response) => {
      setLista(response.data);
    });
  }

  function abrirModal(entregador) {
    setEntregadorSelecionado(entregador);
    setModalAberto(true);
  }

  function fecharModal() {
    setEntregadorSelecionado(null);
    setModalAberto(false);
  }
  function confirmaRemover(id) {
    console.log("Confirma remover id:", id);
    setOpenModal(true);
    setIdRemover(id);
  }
  async function remover() {
    await axios
      .delete("http://localhost:8080/api/entregador/" + idRemover)
      .then((response) => {
        console.log("Entregador removido com sucesso.");

        axios.get("http://localhost:8080/api/entregador").then((response) => {
          setLista(response.data);
        });
      })
      .catch((error) => {
        console.log("Erro ao remover um entregador.");
      });
    setOpenModal(false);
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
                  <Table.Row key={entregador.id}>
                    <Table.Cell>{entregador.nome}</Table.Cell>
                    <Table.Cell>{entregador.rg}</Table.Cell>
                    <Table.Cell>{entregador.foneCelular}</Table.Cell>
                    <Table.Cell>{entregador.qtdEntregasRealizadas}</Table.Cell>
                    <Table.Cell>{entregador.valorFrete}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        inverted
                        circular
                        color="green"
                        title="Clique aqui para editar os dados deste entregador"
                        icon
                      >
                        <Link
                          to="/form-entregador"
                          state={{ id: entregador.id }}
                          style={{ color: "green" }}
                        >
                          {" "}
                          <Icon name="edit" />{" "}
                        </Link>
                      </Button>{" "}
                      &nbsp;
                      <Button
                        inverted
                        circular
                        color="red"
                        title="Clique aqui para remover este entregador"
                        icon
                        onClick={(e) => confirmaRemover(entregador.id)}
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
      <Modal basic open={openModal} onClose={() => setOpenModal(false)}>
        <Header icon>
          <Icon name="trash" />
          <div style={{ marginTop: "5%" }}>
            Tem certeza que deseja remover esse registro?
          </div>
        </Header>
        <Modal.Actions>
          <Button
            basic
            color="red"
            inverted
            onClick={() => setOpenModal(false)}
          >
            <Icon name="remove" /> Não
          </Button>
          <Button color="green" inverted onClick={() => remover()}>
            <Icon name="checkmark" /> Sim
          </Button>
        </Modal.Actions>
      </Modal>
      <Modal open={modalAberto} onClose={fecharModal} closeIcon size="small">
        <Header icon="eye" content="Detalhes do Entregador" />
        <Modal.Content>
          {entregadorSelecionado ? (
            <div>
              <p>
                <strong>Nome:</strong> {entregadorSelecionado.nome}
              </p>
              <p>
                <strong>RG:</strong> {entregadorSelecionado.rg}
              </p>
              <p>
                <strong>Fone Celular:</strong>{" "}
                {entregadorSelecionado.foneCelular}
              </p>
              <p>
                <strong>Qtd Entregas Realizadas:</strong>{" "}
                {entregadorSelecionado.qtdEntregasRealizadas}
              </p>
              <p>
                <strong>Valor Por Frete:</strong>{" "}
                {entregadorSelecionado.valorFrete}
              </p>
            </div>
          ) : (
            <p>Carregando...</p>
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={fecharModal} color="blue" inverted>
            <Icon name="checkmark" /> Fechar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
