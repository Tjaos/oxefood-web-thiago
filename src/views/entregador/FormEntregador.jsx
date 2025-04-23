import InputMask from "comigo-tech-react-input-mask";
import React from "react";
import { Button, Checkbox, Container, Divider, Form, Icon } from "semantic-ui-react";

export default function FormEntregador() {
  return (
    <div>
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
                <Form.Input required fluid label="Nome" maxLength="100" />

                <Form.Input required fluid label="CPF">
                  <InputMask required mask="999.999.999-99" />
                </Form.Input>

                <Form.Input fluid label="RG" maxLength="20" />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input fluid label="Data Nascimento" width={6}>
                  <InputMask
                    mask="99/99/9999"
                    maskChar={null}
                    placeholder="Ex: 20/03/1985"
                  />
                </Form.Input>
                <Form.Input fluid label="Fone Celular" width={6}>
                  <InputMask mask="(99) 9999.9999" />
                </Form.Input>
                <Form.Input fluid label="Fone Fixo" width={6}>
                  <InputMask mask="(99) 9999.9999" />
                </Form.Input>

                <Form.Input fluid label="QTD Entregas Realizadas" />
                <Form.Input fluid label="Valor Por Frete" />
              </Form.Group>

              <Form.Group widths={"equal"}>
                <Form.Input fluid label="Rua" maxLength="200" />
                <Form.Input fluid label="Número" maxLength="10" width={6}/>
              </Form.Group>

                <Form.Group widths="equal">
                    <Form.Input fluid label="Bairro" maxLength="100" />
                    <Form.Input fluid label="Cidade" maxLength="100" />
                    <Form.Input fluid label="CEP" maxLength="10" />
                </Form.Group>

                <Form.Group widths="equal">
                    <Form.Input fluid label="UF" maxLength="2" width={2}/>
                    <Form.Input fluid label="Complemento" maxLength="100" />
                </Form.Group>

                <Form.Group widths="equal">
                    <Form.Field
                      control={Checkbox}
                      label="Ativo"
                      style={{ marginTop: "2%" }}
                      toggle
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
