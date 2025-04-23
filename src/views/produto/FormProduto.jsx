import InputMask from "comigo-tech-react-input-mask";
import React from "react";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";

export default function FormProduto() {
  return (
    <div>
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2>
            {" "}
            <span style={{ color: "darkgray" }}>
              {" "}
              Produto &nbsp;
              <Icon name="angle double right" size="small" />{" "}
            </span>{" "}
            Cadastro{" "}
          </h2>

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input required fluid label="Titulo" maxLength="100" />

                <Form.Input required fluid label="Código do Produto">
                  <InputMask required mask="99999-999" />
                </Form.Input>
                </Form.Group>

                <Form.Group widths="equal">
                    <Form.Input fluid label="Descrição" maxLength={255} /> 
                </Form.Group>

                <Form.Group widths="equal">
                <Form.Input required fluid label="Valor Unitário" type="number" step="0.01" /> 
                <Form.Input fluid label="Tempo de Entrega Mínimo em Minutos" type="number" /> 
                <Form.Input fluid label="Tempo de Entrega Máximo em Minutos" type="number" /> 
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
