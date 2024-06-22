import React from "react";
import "./App.css";
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  FormGroup,
  Grid,
  GridColumn,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
const App = () => {
  return (
    <Container>
      <Header as="h1">Budget</Header>

      <Statistic>
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>10,000.00</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>1000</Statistic.Value>
              </Statistic>
            </Grid.Column>

            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: "right" }}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>1000</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">History</Header>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              100
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit"></Icon>
              <Icon name="trash"></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something else
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              100
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit"></Icon>
              <Icon name="trash"></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">Add new transaction</Header>

      <Form>
        
        <FormGroup>
          <Form.Input
            icon="tags"
            width={12}
            placeholder="New transaction"
            label="Description"
          ></Form.Input>
          <Form.Input
          width={5}
            icon="rupee"
            iconPosition="left"
            placeholder="100.00"
            label="value"
          ></Form.Input>
        </FormGroup>        
        
        <ButtonGroup style={{marginTop:20}}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>Ok</Button>
          </ButtonGroup>
      </Form>
    </Container>
  );
};

export default App;
